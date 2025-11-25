import React from 'react';

/**
 * Modern animated gradient background using pure CSS
 * Benefits over Canvas:
import React from 'react';

/**
 * Modern animated gradient background using pure CSS
 * Benefits over Canvas:
 * - No scroll interference
 * - Better performance (GPU accelerated)
 * - Lighter weight
 * - Modern aesthetic
 */
export default function AnimatedBackground() {
    return (
        <div className="animated-background">
            {/* Enhanced gradient orbs with 5 colors */}
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>
            <div className="gradient-orb orb-4"></div>
            <div className="gradient-orb orb-5"></div>

            {/* Noise texture overlay for depth */}
            <div className="noise-overlay"></div>
        </div>
    );
}
