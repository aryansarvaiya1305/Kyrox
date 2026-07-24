import { motion } from "framer-motion";
import { Container, Boxes, GitBranch, Activity } from "lucide-react";

import {
  staggerContainer,
  staggerItem,
  hoverElevation,
} from "@/utils/landing";

interface StatCard {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const stats: StatCard[] = [
  {
    id: "1",
    title: "Docker",
    icon: <Container className="h-6 w-6" />,
  },
  {
    id: "2",
    title: "Kubernetes",
    icon: <Boxes className="h-6 w-6" />,
  },
  {
    id: "3",
    title: "CI/CD",
    icon: <GitBranch className="h-6 w-6" />,
  },
  {
    id: "4",
    title: "Monitoring",
    icon: <Activity className="h-6 w-6" />,
  },
];

export const HeroStats = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 gap-4 md:grid-cols-4"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          variants={staggerItem}
          {...hoverElevation}
          className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition-colors hover:border-cyan-500/50"
        >
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="text-cyan-400">{stat.icon}</div>

            <h3 className="text-sm font-semibold text-white">
              {stat.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};