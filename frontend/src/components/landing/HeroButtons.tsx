import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { buttonHover } from "@/utils/landing";

export const HeroButtons = () => {
  return (
    <motion.div
      className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
      role="group"
      aria-label="Hero call-to-action buttons"
    >
      {/* Primary Button */}
      <motion.button
        {...buttonHover}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:shadow-cyan-500/30"
        aria-label="Get Started"
      >
        <span>Get Started</span>

        <motion.span
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="h-5 w-5" />
        </motion.span>
      </motion.button>

      {/* Secondary Button */}
      <motion.button
        {...buttonHover}
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-transparent px-6 py-3 font-semibold text-white transition duration-300 hover:border-cyan-500 hover:bg-cyan-500/5"
        aria-label="View GitHub"
      >
        <span>View GitHub</span>
      </motion.button>
    </motion.div>
  );
};