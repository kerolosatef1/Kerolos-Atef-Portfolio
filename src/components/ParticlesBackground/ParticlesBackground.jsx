import React, { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const PARTICLE_COUNT =
      window.innerWidth < 600 ? 25 : window.innerWidth < 1000 ? 40 : 60;

    const GRID_SIZE = 150; // حجم الخانة الواحدة — مهم للأداء

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    // 🟦 Spatial Grid — أهم جزء بيحسن الأداء
    const buildGrid = () => {
      const grid = {};

      particles.forEach((p) => {
        const gx = Math.floor(p.x / GRID_SIZE);
        const gy = Math.floor(p.y / GRID_SIZE);

        const key = `${gx},${gy}`;
        if (!grid[key]) grid[key] = [];
        grid[key].push(p);
      });

      return grid;
    };

    let frame = 0;

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const grid = buildGrid();

      for (const key in grid) {
        const group = grid[key];

        for (let i = 0; i < group.length; i++) {
          const p = group[i];

          // فحص الجيران في 8 خلايا فقط
          const gx = Math.floor(p.x / GRID_SIZE);
          const gy = Math.floor(p.y / GRID_SIZE);

          for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
              const neighborKey = `${gx + dx},${gy + dy}`;
              const neighborGroup = grid[neighborKey];

              if (!neighborGroup) continue;

              for (let j = 0; j < neighborGroup.length; j++) {
                const n = neighborGroup[j];

                if (p === n) continue;

                const dx = p.x - n.x;
                const dy = p.y - n.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                  ctx.strokeStyle = `rgba(255,255,255,${
                    1 - distance / 100
                  })`;
                  ctx.lineWidth = 0.4;
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(n.x, n.y);
                  ctx.stroke();
                }
              }
            }
          }

          p.update();
          p.draw();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
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
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      }}
    />
  );
};

export default ParticlesBackground;
