import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
} from "@/utils/landing";

export const DashboardPreview = () => {
  return (
    <section
      id="dashboard"
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
          <motion.p
            variants={staggerItem}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400"
          >
            Dashboard Preview
          </motion.p>

          <motion.h2
            variants={staggerItem}
            className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl"
          >
            Monitor Your Infrastructure In Real Time
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400"
          >
            Get complete visibility into your deployments, services,
            infrastructure health, and performance from one modern cloud
            dashboard.
          </motion.p>
        </motion.div>

        {/* Dashboard Content */}
        <div className="mt-20">
          {/* We will build this in the next step */}
        </div>
      </div>
    </section>
  );
};