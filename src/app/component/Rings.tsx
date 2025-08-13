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

// 🔹 Sizes adjusted so no overlap
const ringList: { type: RingType; label: string; size: number }[] = [
  { type: "create", label: "Create", size: 400 },
  { type: "evaluate", label: "Evaluate", size: 340 },
  { type: "analyze", label: "Analyze", size: 280 },
  { type: "apply", label: "Apply", size: 220 },
  { type: "understand", label: "Understand", size: 160 },
  { type: "remember", label: "Remember", size: 100 },
];

// Helper: SVG circle path
const circlePathD = (cx: number, cy: number, r: number) =>
  `M ${cx - r}, ${cy}
   a ${r},${r} 0 1,1 ${r * 2},0
   a ${r},${r} 0 1,1 ${-r * 2},0`;

export default function Rings() {
  const [activeRing, setActiveRing] = useState<RingType>("evaluate");

  const size = 500;
  const cx = size / 2;
  const cy = size / 2;

  const paths = useMemo(() => {
    const pad = 10;
    return ringList.reduce<Record<RingType, string>>((acc, ring) => {
      const r = ring.size / 2 - pad;
      acc[ring.type] = circlePathD(cx, cy, Math.max(r, 0));
      return acc;
    }, {} as Record<RingType, string>);
  }, [cx, cy]);

  return (
    <div className={styles.targetSection}>
      {/* Circles */}
      {ringList.map((ring) => (
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
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
      >
        <defs>
          {ringList.map((ring) => (
            <path
              key={`path-${ring.type}`}
              id={`path-${ring.type}`}
              d={paths[ring.type]}
              transform={`rotate(-90 ${cx} ${cy})`} // 🔹 Rotate to top
            />
          ))}
        </defs>

        {ringList.map((ring) => (
          <text
            key={`text-${ring.type}`}
            className={styles.ringText}
            style={{
              fontWeight: activeRing === ring.type ? 700 : 500,
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
