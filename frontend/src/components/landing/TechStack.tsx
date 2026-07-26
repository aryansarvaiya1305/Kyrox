import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Cloud,
  Database,
  Cpu,
  Boxes,
  Package,
  Workflow,
  ShieldCheck,
  BarChart3,
  GitBranch,
  Code2,
} from "lucide-react";

import {
  staggerContainer,
  staggerItem,
} from "@/utils/landing";

const techCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    technologies: [
      "Node.js",
      "Express",
      "REST API",
      "JWT",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    technologies: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
    ],
  },
  {
    title: "CI/CD",
    icon: Workflow,
    technologies: [
      "GitHub Actions",
      "Git",
      "Docker Build",
      "Automation",
    ],
  },
  {
    title: "Monitoring",
    icon: BarChart3,
    technologies: [
      "Prometheus",
      "Grafana",
      "Logs",
      "Metrics",
    ],
  },
  {
    title: "Database",
    icon: Database,
    technologies: [
      "PostgreSQL",
      "Redis",
      "Caching",
      "Storage",
    ],
  },
];

export const TechStack = () => {
  return (
    <section
      id="tech-stack"
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
            Tech Stack
          </motion.p>

          <motion.h2
            variants={staggerItem}
            className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl"
          >
            Technologies Behind Kurox
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400"
          >
            Built with modern cloud-native technologies trusted by
            companies worldwide for scalable, secure and reliable
            deployments.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {techCategories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition-all"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-500/10 p-3">
                    <Icon className="h-7 w-7 text-cyan-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-slate-800 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-10 text-center"
        >
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8"></div>
                    <div className="flex items-center gap-3">
            <GitBranch className="h-7 w-7 text-cyan-400" />
            <span className="text-slate-300 font-medium">
              GitHub
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Package className="h-7 w-7 text-cyan-400" />
            <span className="text-slate-300 font-medium">
              Docker
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Boxes className="h-7 w-7 text-cyan-400" />
            <span className="text-slate-300 font-medium">
              Kubernetes
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Cpu className="h-7 w-7 text-cyan-400" />
            <span className="text-slate-300 font-medium">
              Cloud Infrastructure
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="h-7 w-7 text-cyan-400" />
            <span className="text-slate-300 font-medium">
              Secure by Design
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Code2 className="h-7 w-7 text-cyan-400" />
            <span className="text-slate-300 font-medium">
              Modern Development
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};