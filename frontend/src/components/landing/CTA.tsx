import { motion } from "framer-motion";
import { ArrowRight, GitBranch } from "lucide-react";

import { staggerContainer, staggerItem } from "@/utils/landing";

export const CTA = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-slate-950 py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-10 shadow-2xl md:p-16"
        >
          <motion.div
            variants={staggerItem}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              Ready to Deploy?
            </span>

            <h2 className="mt-8 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Deploy Your Next Application with{" "}
              <span className="text-cyan-400">Kurox</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Build, deploy, monitor and scale your applications from a
              modern cloud platform designed for developers.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-7 py-4 text-base font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <GitBranch className="h-5 w-5" />
                View on GitHub
              </motion.a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
              <span>✓ One-click deployments</span>
              <span>✓ GitHub integration</span>
              <span>✓ Real-time monitoring</span>
              <span>✓ Kubernetes ready</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};