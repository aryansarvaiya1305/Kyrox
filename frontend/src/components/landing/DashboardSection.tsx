import { motion } from "framer-motion";
import {
  Activity,
  FileText,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

import {
  staggerContainer,
  staggerItem,
  slideInLeft,
  slideInRight,
} from "@/utils/landing";

import { DashboardPreview } from "@/components/landing/DashboardPreview";

const features = [
  {
    title: "Live Infrastructure Monitoring",
    description:
      "Track CPU, memory, storage and network health in real time.",
    icon: Activity,
  },
  {
    title: "Real-Time Deployment Logs",
    description:
      "Watch deployment logs instantly with live build updates.",
    icon: FileText,
  },
  {
    title: "Kubernetes Health",
    description:
      "Monitor cluster health, pods and services from one dashboard.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment Analytics",
    description:
      "Visualize deployment history and infrastructure performance.",
    icon: BarChart3,
  },
];

export const DashboardSection = () => {
  return (
    <section
      id="dashboard"
      className="relative overflow-hidden bg-slate-950 py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.p
            variants={staggerItem}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400"
          >
            Dashboard Preview
          </motion.p>

          <motion.h2
            variants={staggerItem}
            className="mx-auto max-w-4xl text-4xl font-bold text-white md:text-5xl"
          >
            Monitor Everything In One Place
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400"
          >
            Get complete visibility into your deployments, infrastructure,
            performance, monitoring and cloud resources from a single
            unified dashboard.
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Dashboard */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <DashboardPreview />
          </motion.div>

          {/* Features */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  variants={staggerItem}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:border-cyan-500/40"
                >
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                      <Icon className="h-7 w-7 text-cyan-400" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};