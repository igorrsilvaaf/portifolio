import React, { useEffect, useState, useRef } from 'react';

interface Step {
  id: number;
  x: number;
  y: number;
  rotation: number;
  isLeft: boolean;
  opacity: number;
}

interface Actor {
  id: string;
  name: string;
  x: number; // Current X percentage (0-100)
  y: number; // Current Y percentage (0-100)
  targetX: number;
  targetY: number;
  speed: number;
  color: string; // Hex color for the label
  steps: Step[];
  stepDistanceAccumulator: number;
  isLeftNext: boolean;
  idle: boolean;
  type: 'bot' | 'mouse'; // 'bot' wanders randomly, 'mouse' follows cursor
}

const FOOTPRINT_SPACING = 2.5; // Distance between steps in percentage
const MAX_STEPS_PER_ACTOR = 50; // Much longer trails

const Footprints: React.FC = () => {
  const [actors, setActors] = useState<Actor[]>([]);
  const requestRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const mousePosRef = useRef({ x: 50, y: 50 }); // Track mouse percentage

  // Initialize Actors
  useEffect(() => {
    const initialActors: Actor[] = [
      createActor("Visitante", "#740001", 0.03, 'mouse'), // Fast, follows mouse
      createActor("Igor da Silva", "#281815", 0.015),
      createActor("Aluado", "#3e2723", 0.012),
      createActor("Rabicho", "#3e2723", 0.01),
      createActor("Almofadinhas", "#3e2723", 0.013),
      createActor("Pontas", "#3e2723", 0.014),
      createActor("Harry Potter", "#740001", 0.02),
      createActor("Draco Malfoy", "#1a472a", 0.018),
      createActor("Albus Dumbledore", "#4a3631", 0.008),
      createActor("Severus Snape", "#000000", 0.016),
      createActor("Rubeus Hagrid", "#5d4037", 0.006), // Very slow
    ];
    setActors(initialActors);

    const handleMouseMove = (e: MouseEvent) => {
        mousePosRef.current = {
            x: (e.clientX / window.innerWidth) * 100,
            y: (e.clientY / window.innerHeight) * 100
        };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const createActor = (name: string, color: string, speedBase: number, type: 'bot' | 'mouse' = 'bot'): Actor => {
    return {
      id: name + Math.random(),
      name,
      x: Math.random() * 100,
      y: Math.random() * 100,
      targetX: Math.random() * 100,
      targetY: Math.random() * 100,
      speed: speedBase,
      color,
      steps: [],
      stepDistanceAccumulator: 0,
      isLeftNext: true,
      idle: false,
      type
    };
  };

  const updateActors = (time: number) => {
    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;

    setActors(prevActors => {
      return prevActors.map(actor => {
        let targetX = actor.targetX;
        let targetY = actor.targetY;

        // If it's the mouse actor, update target to mouse position
        if (actor.type === 'mouse') {
            targetX = mousePosRef.current.x;
            targetY = mousePosRef.current.y;
        }

        // 1. Move Actor towards target
        const dx = targetX - actor.x;
        const dy = targetY - actor.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // If reached target (or close enough)
        if (dist < 1) {
            if (actor.type === 'bot') {
                // Pick new random target
                return {
                    ...actor,
                    targetX: Math.random() * 100,
                    targetY: Math.random() * 100,
                    idle: Math.random() > 0.7 // 30% chance to pause
                };
            } else {
                // Mouse actor just stays there (idle) until mouse moves
                return { ...actor, idle: true };
            }
        }

        // If bot is idle, randomly wake up
        if (actor.type === 'bot' && actor.idle) {
           if(Math.random() > 0.98) return {...actor, idle: false};
           return actor; 
        }

        // If mouse actor was idle but distance is large, wake up
        if (actor.type === 'mouse' && actor.idle && dist > 2) {
            actor.idle = false;
        }
        
        if (actor.idle) return actor;

        // Normalize direction
        const vx = (dx / dist);
        const vy = (dy / dist);

        // Update position
        const moveSpeed = actor.speed * (deltaTime / 16); 
        const newX = actor.x + vx * moveSpeed;
        const newY = actor.y + vy * moveSpeed;

        // 2. Handle Stepping Logic
        let newSteps = [...actor.steps];
        let nextLeft = actor.isLeftNext;
        let accum = actor.stepDistanceAccumulator + moveSpeed;

        if (accum >= FOOTPRINT_SPACING) {
          accum = 0;
          
          // Calculate rotation angle
          const angleRad = Math.atan2(vy, vx);
          const angleDeg = angleRad * (180 / Math.PI) + 90; 

          // Offset foot slightly to left or right of center line
          const footOffset = nextLeft ? -0.8 : 0.8;
          const offsetX = footOffset * Math.cos(angleRad + Math.PI / 2); 
          const offsetY = footOffset * Math.sin(angleRad + Math.PI / 2);

          const newStep: Step = {
            id: Date.now() + Math.random(),
            x: newX + offsetX,
            y: newY + offsetY,
            rotation: angleDeg,
            isLeft: nextLeft,
            opacity: 1
          };

          newSteps.push(newStep);
          if (newSteps.length > MAX_STEPS_PER_ACTOR) {
            newSteps.shift(); // Remove oldest
          }
          nextLeft = !nextLeft;
        }

        // Fade out existing steps
        newSteps = newSteps.map(s => ({
            ...s,
            // Slower fade: 0.0005 instead of 0.001 keeps them visible longer
            opacity: s.opacity - 0.0005 
        })).filter(s => s.opacity > 0);

        return {
          ...actor,
          x: newX,
          y: newY,
          steps: newSteps,
          stepDistanceAccumulator: accum,
          isLeftNext: nextLeft,
          idle: false // ensure not idle if moving
        };
      });
    });

    requestRef.current = requestAnimationFrame(updateActors);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateActors);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    // Z-30 ensures footprints are ABOVE the content background (about cards etc)
    // text-ink-dark makes them darker/bolder
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden text-ink-dark">
      {actors.map(actor => (
        <React.Fragment key={actor.id}>
          {/* Render Footprints */}
          {actor.steps.map(step => (
            <div
              key={step.id}
              className="absolute mix-blend-multiply"
              style={{
                left: `${step.x}%`,
                top: `${step.y}%`,
                transform: `translate(-50%, -50%) rotate(${step.rotation}deg)`,
                opacity: step.opacity, 
                transition: 'opacity 0.1s linear'
              }}
            >
              <ShoePrint isLeft={step.isLeft} />
            </div>
          ))}

          {/* Render Name Label near the latest position */}
          {actor.steps.length > 0 && !actor.idle && (
             <div 
                className="absolute transform -translate-x-1/2 -translate-y-full pb-6 transition-all duration-300 ease-out z-10"
                style={{
                    left: `${actor.x}%`,
                    top: `${actor.y}%`,
                }}
             >
                <div className="relative group">
                    <div className="absolute inset-0 bg-parchment border border-ink transform rotate-1 rounded-sm shadow-sm"></div>
                    <div className="relative bg-parchment-light px-3 py-1 border border-ink/60 rounded-sm shadow-md">
                        <span 
                            className="font-handwriting text-sm md:text-base font-bold whitespace-nowrap block"
                            style={{ color: actor.color }}
                        >
                            {actor.name}
                        </span>
                    </div>
                </div>
             </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

// More realistic shoe print SVG
const ShoePrint: React.FC<{ isLeft: boolean }> = ({ isLeft }) => {
    // Transform to mirror for right foot
    const transform = isLeft ? "" : "scale(-1, 1)";
    
    return (
        // Increased size to 16x36 for better visibility
        <svg width="16" height="36" viewBox="0 0 20 50" fill="currentColor" style={{ transform }}>
            {/* Main Sole with detailed grip */}
            <path d="M10,0 C4,0 1,6 1,18 C1,22 2,26 4,28 C6,30 14,30 16,28 C18,26 19,22 19,18 C19,6 16,0 10,0 Z M10,4 C14,4 16,8 16,18 C16,21 15,24 14,25 C12,26 8,26 6,25 C5,24 4,21 4,18 C4,8 6,4 10,4 Z" fillOpacity="1.0" />
            <path d="M10,2 C6,2 3,7 3,18 C3,22 4,25 5,26 C7,27 13,27 15,26 C16,25 17,22 17,18 C17,7 14,2 10,2 Z" fillOpacity="1.0"/>
            
            {/* Heel Block */}
            <path d="M5,34 C3,34 2,36 2,40 C2,46 4,49 10,49 C16,49 18,46 18,40 C18,36 17,34 15,34 H5 Z" fillOpacity="1.0" />
        </svg>
    );
};

export default Footprints;