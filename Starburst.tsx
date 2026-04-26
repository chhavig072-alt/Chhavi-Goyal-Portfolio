import { motion } from "framer-motion";

interface StarburstProps {
  className?: string;
  size?: number;
  color?: string;
  spin?: boolean;
}

export const Starburst = ({ className = "", size = 200, color = "hsl(var(--orange))", spin = true }: StarburstProps) => {
  const points = 16;
  const path = Array.from({ length: points * 2 }, (_, i) => {
    const angle = (i * Math.PI) / points;
    const r = i % 2 === 0 ? 50 : 22;
    const x = 50 + r * Math.cos(angle);
    const y = 50 + r * Math.sin(angle);
    return `${x},${y}`;
  }).join(" ");

  return (
    <motion.svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      animate={spin ? { rotate: 360 } : undefined}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      <polygon points={path} fill={color} />
    </motion.svg>
  );
};
