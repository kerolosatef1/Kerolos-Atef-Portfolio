import React, { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId = null;
    let isActive = true;

    // Centralized configuration for easy tuning
    const CONFIG = {
      connectionDistance: 120,
      mouseInfluenceRadius: 150,
      mouseInfluenceStrength: 0.04,
      mouseRepelStrength: 2.5,
      lineWidth: 0.5,
      particleOpacity: 0.65,
      gridSize: 150,
      mouseLerpFactor: 0.12,
      velocityDamping: 0.96,
    };

    // Responsive particle count
    const getParticleCount = () => {
      const width = window.innerWidth;
      if (width < 600) return 35;
      if (width < 1000) return 55;
      return 75;
    };

    // Set canvas size with device pixel ratio for crisp rendering
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.scale(dpr, dpr);
    };

    setCanvasSize();

    // Mouse state with smooth interpolation
    const mouse = {
      x: null,
      y: null,
      targetX: null,
      targetY: null,
      radius: CONFIG.mouseInfluenceRadius,
    };

    // Optimized Particle class
    class Particle {
      constructor(width, height) {
        this.reset(width, height);
        this.baseSpeedX = this.speedX;
        this.baseSpeedY = this.speedY;
      }

      reset(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.8 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.baseSpeedX = this.speedX;
        this.baseSpeedY = this.speedY;
      }

      update(width, height, mouseData) {
        // Smooth mouse influence with repulsion effect
        if (mouseData.x !== null && mouseData.y !== null) {
          const distX = mouseData.x - this.x;
          const distY = mouseData.y - this.y;
          const distance = Math.sqrt(distX * distX + distY * distY);

          if (distance < mouseData.radius && distance > 0) {
            // Calculate repulsion force with smooth falloff
            const force =
              ((1 - distance / mouseData.radius) * CONFIG.mouseInfluenceStrength) /
              distance;

            // Apply repulsion (particles move away from mouse)
            this.speedX -= distX * force * CONFIG.mouseRepelStrength;
            this.speedY -= distY * force * CONFIG.mouseRepelStrength;
          }
        }

        // Apply velocity damping to gradually return to base speed
        this.speedX =
          this.speedX * CONFIG.velocityDamping +
          this.baseSpeedX * (1 - CONFIG.velocityDamping);
        this.speedY =
          this.speedY * CONFIG.velocityDamping +
          this.baseSpeedY * (1 - CONFIG.velocityDamping);

        // Update position
        this.x += this.speedX;
        this.y += this.speedY;

        // Boundary collision with smooth clamping
        if (this.x < 0 || this.x > width) {
          this.speedX *= -1;
          this.x = Math.max(0, Math.min(width, this.x));
        }
        if (this.y < 0 || this.y > height) {
          this.speedY *= -1;
          this.y = Math.max(0, Math.min(height, this.y));
        }
      }

      draw(ctx) {
        ctx.fillStyle = `rgba(255, 255, 255, ${CONFIG.particleOpacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    let particles = [];
    const initParticles = () => {
      const count = getParticleCount();
      particles = Array.from(
        { length: count },
        () => new Particle(window.innerWidth, window.innerHeight)
      );
    };

    initParticles();

    // Optimized spatial grid using Map for better performance
    const buildSpatialGrid = () => {
      const grid = new Map();
      const gridSize = CONFIG.gridSize;

      particles.forEach((particle) => {
        const cellX = Math.floor(particle.x / gridSize);
        const cellY = Math.floor(particle.y / gridSize);
        const key = `${cellX},${cellY}`;

        if (!grid.has(key)) {
          grid.set(key, []);
        }
        grid.get(key).push(particle);
      });

      return grid;
    };

    // Draw connections with duplicate prevention
    const drawConnections = (grid) => {
      const gridSize = CONFIG.gridSize;
      const maxDistance = CONFIG.connectionDistance;
      const processed = new Set();

      particles.forEach((particle) => {
        const cellX = Math.floor(particle.x / gridSize);
        const cellY = Math.floor(particle.y / gridSize);

        // Check 3x3 neighboring cells
        for (let offsetX = -1; offsetX <= 1; offsetX++) {
          for (let offsetY = -1; offsetY <= 1; offsetY++) {
            const neighborKey = `${cellX + offsetX},${cellY + offsetY}`;
            const neighbors = grid.get(neighborKey);

            if (!neighbors) continue;

            neighbors.forEach((neighbor) => {
              if (particle === neighbor) return;

              // Create unique pair key to prevent duplicate lines
              const pairKey =
                particle.x < neighbor.x ||
                  (particle.x === neighbor.x && particle.y < neighbor.y)
                  ? `${particle.x},${particle.y}-${neighbor.x},${neighbor.y}`
                  : `${neighbor.x},${neighbor.y}-${particle.x},${particle.y}`;

              if (processed.has(pairKey)) return;
              processed.add(pairKey);

              const distX = particle.x - neighbor.x;
              const distY = particle.y - neighbor.y;
              const distance = Math.sqrt(distX * distX + distY * distY);

              if (distance < maxDistance) {
                const opacity = (1 - distance / maxDistance) * 0.5;
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.lineWidth = CONFIG.lineWidth;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(neighbor.x, neighbor.y);
                ctx.stroke();
              }
            });
          }
        }
      });
    };

    // Main animation loop
    const animate = () => {
      if (!isActive) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation (lerp) for fluid movement
      if (mouse.targetX !== null && mouse.targetY !== null) {
        if (mouse.x === null || mouse.y === null) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * CONFIG.mouseLerpFactor;
          mouse.y += (mouse.targetY - mouse.y) * CONFIG.mouseLerpFactor;
        }
      }

      // Update all particles
      particles.forEach((particle) => particle.update(width, height, mouse));

      // Build spatial grid and draw connections
      const grid = buildSpatialGrid();
      drawConnections(grid);

      // Draw all particles
      particles.forEach((particle) => particle.draw(ctx));

      animationFrameId = requestAnimationFrame(animate);
    };

    // Event handlers
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = null;
      mouse.targetY = null;
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      setCanvasSize();

      // Reinitialize particles if count changes
      const newCount = getParticleCount();
      if (newCount !== particles.length) {
        initParticles();
      } else {
        // Reset out-of-bounds particles
        particles.forEach((particle) => {
          if (
            particle.x > window.innerWidth ||
            particle.y > window.innerHeight
          ) {
            particle.reset(window.innerWidth, window.innerHeight);
          }
        });
      }
    };

    // Attach event listeners
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // Start animation
    animate();

    // Cleanup on unmount
    return () => {
      isActive = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none", // ✅ CRITICAL: Allows scroll and clicks to pass through
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        willChange: "transform", // GPU acceleration hint
        touchAction: "none", // Prevents touch interference
      }}
    />
  );
};

export default ParticlesBackground;
