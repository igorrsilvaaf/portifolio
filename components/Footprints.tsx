import React, { useEffect, useState, useRef } from 'react';
import { Step } from '../types';

const Footprints: React.FC = () => {
  const [steps, setSteps] = useState<Step[]>([]);
  const frameRef = useRef<number>(0);
  const stepCountRef = useRef<number>(0);

  useEffect(() => {
    // Logic to generate footsteps
    const interval = setInterval(() => {
      setSteps((prevSteps) => {
        const id = Date.now();
        const stepIndex = stepCountRef.current;
        stepCountRef.current += 1;

        // Path logic: Simple Lissajous curve for wandering effect
        const t = stepIndex * 0.2;
        const x = 50 + 40 * Math.sin(t); 
        const y = 50 + 40 * Math.cos(t * 0.7);
        
        // Calculate angle based on derivative (tangent)
        const dx = 40 * Math.cos(t);
        const dy = 40 * -0.7 * Math.sin(t * 0.7);
        const rotation = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

        const isLeft = stepIndex % 2 === 0;
        
        // Offset left/right foot from center line
        const offset = isLeft ? -2 : 2;
        const finalX = x + offset * Math.cos((rotation) * Math.PI / 180);
        const finalY = y + offset * Math.sin((rotation) * Math.PI / 180);

        const newStep: Step = {
          id,
          x: finalX,
          y: finalY,
          rotation,
          isLeft
        };

        // Keep only last 20 steps to avoid DOM overload
        return [...prevSteps.slice(-19), newStep];
      });
    }, 600); // Speed of walking

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      {steps.map((step) => (
        <div
          key={step.id}
          className="footprint"
          style={{
            left: `${step.x}%`,
            top: `${step.y}%`,
            transform: `translate(-50%, -50%) rotate(${step.rotation}deg)`,
          }}
        >
            {/* SVG Shoe Print */}
            <svg width="24" height="40" viewBox="0 0 24 40" fill="currentColor">
               {step.isLeft ? (
                  <path d="M8,0 C15,2 20,10 18,25 C17,32 10,38 5,38 C2,38 0,35 2,30 C4,25 6,20 8,0 Z M4,32 C5,32 6,33 5,34 C4,35 3,34 4,32 Z" />
               ) : (
                  <path d="M16,0 C9,2 4,10 6,25 C7,32 14,38 19,38 C22,38 24,35 22,30 C20,25 18,20 16,0 Z M20,32 C19,32 18,33 19,34 C20,35 21,34 20,32 Z" />
               )}
            </svg>
        </div>
      ))}
    </div>
  );
};

export default Footprints;