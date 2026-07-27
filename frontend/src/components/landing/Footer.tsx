import { motion } from "framer-motion";
import {
  Cloud,
  GitBranch,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  staggerContainer,
  staggerItem,
} from "@/utils/landing";

const productLinks = [
  "Features",
  "Architecture",
  "Dashboard",
  "Pricing",
];

const resources = [
  "Documentation",
  "API Reference",
  "Blog",
  "Changelog",
];

const company = [
  "About",
  "Careers",
  "Contact",
  "Privacy",
];

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-5"
        >

          {/* Brand */}
          <motion.div
            variants={staggerItem}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500">
                <Cloud className="h-6 w-6 text-slate-950" />
              </div>

              <span className="text-2xl font-bold text-white">
                Kurox
              </span>
            </div>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              A production-grade cloud deployment platform that helps
              developers build, deploy, monitor and scale applications
              with confidence.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-lg border border-slate-700 p-3 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <GitBranch className="h-5 w-5" />
              </a>

              <a
                href="mailto:hello@kurox.dev"
                className="rounded-lg border border-slate-700 p-3 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Mail className="h-5 w-5" />
              </a>

            </div>
          </motion.div>

          {/* Product */}
          <motion.div variants={staggerItem}>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-400 transition hover:text-cyan-400"
                  >
                    {item}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={staggerItem}>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-400 transition hover:text-cyan-400"
                  >
                    {item}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={staggerItem}>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-400 transition hover:text-cyan-400"
                  >
                    {item}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 Kurox. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with React, TypeScript, Tailwind CSS & Framer Motion.
          </p>
        </div>

      </div>
    </footer>
  );
};