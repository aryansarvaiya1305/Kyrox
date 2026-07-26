import { motion } from "framer-motion";
import {
  GitBranch,
  Settings2,
  Rocket,
  Activity,
} from "lucide-react";

import {
  staggerContainer,
  staggerItem,
  hoverElevation,
} from "@/utils/landing";

const steps = [
  {
    id: "01",
    title: "Connect GitHub",
    description:
      "Import your repository directly from GitHub with secure authentication.",
    icon: GitBranch,
  },
  {
    id: "02",
    title: "Configure Project",
    description:
      "Choose your runtime, environment variables, and deployment settings.",
    icon: Settings2,
  },
  {
    id: "03",
    title: "Deploy Instantly",
    description:
      "Kurox automatically builds, containerizes, and deploys your application.",
    icon: Rocket,
  },
  {
    id: "04",
    title: "Monitor & Scale",
    description:
      "Track metrics, monitor logs, and scale your workloads with Kubernetes.",
    icon: Activity,
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-slate-950 py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <motion.p
            variants={staggerItem}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400"
          >
            How It Works
          </motion.p>

          <motion.h2
            variants={staggerItem}
            className="text-4xl font-bold text-white md:text-5xl"
          >
            Deploy Your Application
            <span className="block">In Four Simple Steps</span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="mt-6 text-lg leading-8 text-slate-400"
          >
            From connecting your GitHub repository to monitoring your
            production infrastructure, Kurox automates the complete
            deployment workflow.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                variants={staggerItem}
                {...hoverElevation}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition-all duration-300 hover:border-cyan-500/40"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Step Number */}
                <div className="mb-8 text-5xl font-extrabold text-slate-800 transition-colors group-hover:text-cyan-500/20">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="leading-7 text-slate-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};