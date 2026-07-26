import { motion } from "framer-motion";
import {
  GitBranch,
  Hammer,
  Box,
  Package,
  ShieldCheck,
  Globe,
} from "lucide-react";

import {
  staggerContainer,
  staggerItem,
} from "@/utils/landing";

const pipeline = [
  {
  id: 1,
  title: "GitHub",
  icon: GitBranch,
},
  {
    id: 2,
    title: "Build",
    icon: Hammer,
  },
  {
    id: 3,
    title: "Docker",
    icon: Box,
  },
  {
    id: 4,
    title: "Kubernetes",
    icon: Package,
  },
  {
    id: 5,
    title: "Load Balancer",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Live App",
    icon: Globe,
  },
];

export const DeploymentPipeline = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center gap-6 lg:flex-row"
    >
      {pipeline.map((step, index) => {
        const Icon = step.icon;

        return (
          <motion.div
            key={step.id}
            variants={staggerItem}
            className="flex items-center"
          >
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              transition={{ duration: 0.25 }}
              className="relative flex h-40 w-40 flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 shadow-lg"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 transition-opacity duration-300 hover:opacity-100" />

              {/* Status */}
              <span className="absolute right-4 top-4 h-3 w-3 rounded-full bg-green-500" />

              <Icon className="mb-4 h-10 w-10 text-cyan-400" />

              <h3 className="text-center text-sm font-semibold text-white">
                {step.title}
              </h3>
            </motion.div>

            {index !== pipeline.length - 1 && (
              <div className="mx-5 hidden h-[2px] w-16 bg-gradient-to-r from-cyan-500 to-blue-500 lg:block" />
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};