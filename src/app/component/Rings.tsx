"use client";

import { useState, useMemo } from "react";
import styles from "./Rings.module.css";

type RingType =
  | "create"
  | "evaluate"
  | "analyze"
  | "apply"
  | "understand"
  | "remember";

const colors: Record<RingType, string> = {
  create: "#AEDAC1",
  evaluate: "#91C9AE",
  analyze: "#B1DDCC",
  apply: "#BBDEC8",
  understand: "#C5E5D5",
  remember: "#E9F1EF",
};

// Base size for mobile (will scale up for larger screens)
const MOBILE_BASE_SIZE = 300;
const ringList: { type: RingType; label: string; sizeRatio: number }[] = [
  { type: "create", label: "Create", sizeRatio: 0.8 }, // 80% of container
  { type: "evaluate", label: "Evaluate", sizeRatio: 0.68 }, // 68% of container
  { type: "analyze", label: "Analyze", sizeRatio: 0.56 }, // 56% of container
  { type: "apply", label: "Apply", sizeRatio: 0.44 }, // 44% of container
  { type: "understand", label: "Understand", sizeRatio: 0.32 }, // 32% of container
  { type: "remember", label: "Remember", sizeRatio: 0.2 }, // 20% of container
];

// Helper: SVG circle path
const circlePathD = (cx: number, cy: number, r: number) =>
  `M ${cx - r}, ${cy}
   a ${r},${r} 0 1,1 ${r * 2},0
   a ${r},${r} 0 1,1 ${-r * 2},0`;

export default function Rings() {
  const [activeRing, setActiveRing] = useState<RingType>("evaluate");
  const [containerSize, setContainerSize] = useState(MOBILE_BASE_SIZE);

  // Calculate sizes based on container
  const rings = useMemo(() => {
    return ringList.map(ring => ({
      ...ring,
      size: containerSize * ring.sizeRatio
    }));
  }, [containerSize]);

  const cx = containerSize / 2;
  const cy = containerSize / 2;

  const paths = useMemo(() => {
    const pad = containerSize * 0.02; // 2% padding
    return rings.reduce<Record<RingType, string>>((acc, ring) => {
      const r = ring.size / 2 - pad;
      acc[ring.type] = circlePathD(cx, cy, Math.max(r, 0));
      return acc;
    }, {} as Record<RingType, string>);
  }, [cx, cy, rings]);

  // Handle resize
  useMemo(() => {
    const handleResize = () => {
      // Use window.innerWidth to determine appropriate size
      const maxWidth = Math.min(window.innerWidth, 500); // Cap at 500px
      const newSize = Math.max(Math.min(maxWidth * 0.9, 500), MOBILE_BASE_SIZE);
      setContainerSize(newSize);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.targetSection} style={{ width: `${containerSize}px`, height: `${containerSize}px` }}>
      {/* Circles */}
      {rings.map((ring) => (
        <div
          key={ring.type}
          className={styles.ring}
          style={{
            width: `${ring.size}px`,
            height: `${ring.size}px`,
            backgroundColor:
              activeRing === ring.type ? colors[ring.type] : "#D7ECE5",
          }}
          onClick={() => setActiveRing(ring.type)}
        />
      ))}

      {/* Curved text */}
      <svg
        className={styles.svgOverlay}
        viewBox={`0 0 ${containerSize} ${containerSize}`}
        width={containerSize}
        height={containerSize}
      >
        <defs>
          {rings.map((ring) => (
            <path
              key={`path-${ring.type}`}
              id={`path-${ring.type}`}
              d={paths[ring.type]}
              transform={`rotate(-90 ${cx} ${cy})`}
            />
          ))}
        </defs>

        {rings.map((ring) => (
          <text
            key={`text-${ring.type}`}
            className={styles.ringText}
            style={{
              fontWeight: activeRing === ring.type ? 700 : 500,
              fontSize: `${containerSize * 0.024}px`, // Responsive font size
            }}
          >
            <textPath
              href={`#path-${ring.type}`}
              startOffset="50%"
              textAnchor="middle"
              letterSpacing="0.5px"
            >
              {ring.label}
            </textPath>
          </text>
        ))}
      </svg>
    </div>
  );
}