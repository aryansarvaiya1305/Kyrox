import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
} from "@/utils/landing";

export const Architecture = () => {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden bg-slate-950 py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <motion.p
            variants={staggerItem}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400"
          >
            Architecture
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={staggerItem}
            className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl"
          >
            How Kurox Deploys Your Application
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400"
          >
            Every deployment passes through an automated cloud-native
            pipeline—from your Git repository to a scalable Kubernetes
            cluster with built-in monitoring and security.
          </motion.p>
        </motion.div>

        {/* Placeholder */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-slate-800 bg-slate-900/50 p-16 text-center"
        >
          <motion.h3
            variants={staggerItem}
            className="text-2xl font-semibold text-white"
          >
            Deployment Pipeline
          </motion.h3>

          <motion.p
            variants={staggerItem}
            className="mt-4 text-slate-400"
          >
            Architecture diagram will be added in the next step.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};