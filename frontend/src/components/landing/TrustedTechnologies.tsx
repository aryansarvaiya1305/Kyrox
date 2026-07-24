import { motion } from "framer-motion";
import {
  Cloud,
  Container,
  Boxes,
  GitBranch,
  Activity,
  Shield,
  Server,
  Cpu,
} from "lucide-react";

import { staggerContainer, staggerItem, hoverElevation } from "@/utils/landing";

const technologies = [
  {
    id: "1",
    name: "AWS",
    icon: <Cloud className="h-8 w-8" />,
  },
  {
    id: "2",
    name: "Docker",
    icon: <Container className="h-8 w-8" />,
  },
  {
    id: "3",
    name: "Kubernetes",
    icon: <Boxes className="h-8 w-8" />,
  },
  {
    id: "4",
    name: "Git",
    icon: <GitBranch className="h-8 w-8" />,
  },
  {
    id: "5",
    name: "Monitoring",
    icon: <Activity className="h-8 w-8" />,
  },
  {
    id: "6",
    name: "Security",
    icon: <Shield className="h-8 w-8" />,
  },
  {
    id: "7",
    name: "Servers",
    icon: <Server className="h-8 w-8" />,
  },
  {
    id: "8",
    name: "Compute",
    icon: <Cpu className="h-8 w-8" />,
  },
];

export const TrustedTechnologies = () => {
  return (
    <section className="border-y border-slate-800 bg-slate-900/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={staggerItem}
            className="mb-12 text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-400"
          >
            Powered By Modern Cloud Technologies
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.id}
                variants={staggerItem}
                {...hoverElevation}
                className="flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-cyan-500/40"
              >
                <div className="mb-4 text-cyan-400">
                  {tech.icon}
                </div>

                <p className="text-sm font-medium text-slate-200">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};