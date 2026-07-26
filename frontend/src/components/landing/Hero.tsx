import { motion } from "framer-motion";

import {
  slideInLeft,
  slideInRight,
} from "@/utils/landing";

import { HeroBadge } from "@/components/landing/HeroBadge";
import { HeroButtons } from "@/components/landing/HeroButtons";
import { HeroStats } from "@/components/landing/HeroStats";
import { HeroDashboard } from "@/components/landing/HeroDashboard";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <HeroBadge />

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="block">Build.</span>

              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Deploy.
              </span>

              <span className="block">Monitor.</span>

              <span className="block">Scale.</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-400">
              Production-grade cloud deployment platform inspired by
              Vercel, Railway and Render. Deploy applications,
              monitor infrastructure, and scale confidently.
            </p>

            <HeroButtons />

            <HeroStats />
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};