import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { slideInBottom, hoverScale } from "@/utils/landing";

/**
 * HeroBadge Component
 * A reusable, modern SaaS-style badge component with smooth animations.
 *
 * Features:
 * - Fade and slide-up entrance animation
 * - Hover scale effect
 * - Transparent cyan/blue background with subtle border
 * - Icon + text layout
 * - Fully responsive and production-ready
 *
 * @example
 * <HeroBadge />
 */
export const HeroBadge = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInBottom}
      whileHover={hoverScale.whileHover}
      className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 border border-cyan-500/20 hover:border-cyan-500/50 transition-colors"
      aria-label="Kurox - Production-Grade Cloud Deployment Platform"
    >
      <Sparkles
        className="h-4 w-4 text-cyan-400 flex-shrink-0"
        aria-hidden="true"
      />
      <span className="text-sm font-medium text-cyan-400 whitespace-nowrap">
        Production-Grade Cloud Deployment Platform
      </span>
    </motion.div>
  );
};