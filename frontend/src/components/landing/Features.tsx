import { motion } from "framer-motion";
import {
  Rocket,
  Container,
  Boxes,
  GitBranch,
  Activity,
  FileText,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import {
  staggerContainer,
  staggerItem,
  hoverElevation,
} from "@/utils/landing";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: "1",
    title: "One-Click Deployments",
    description:
      "Deploy your applications instantly with a single click.",
    icon: <Rocket className="h-7 w-7" />,
  },
  {
    id: "2",
    title: "Docker Integration",
    description:
      "Run every deployment inside secure Docker containers.",
    icon: <Container className="h-7 w-7" />,
  },
  {
    id: "3",
    title: "Kubernetes Ready",
    description:
      "Scale workloads effortlessly with Kubernetes orchestration.",
    icon: <Boxes className="h-7 w-7" />,
  },
  {
    id: "4",
    title: "CI/CD Pipelines",
    description:
      "Automate builds, testing and deployments with ease.",
    icon: <GitBranch className="h-7 w-7" />,
  },
  {
    id: "5",
    title: "Monitoring",
    description:
      "Track application health, uptime and resource usage in real time.",
    icon: <Activity className="h-7 w-7" />,
  },
  {
    id: "6",
    title: "Logs & Analytics",
    description:
      "View centralized logs and deployment history from one dashboard.",
    icon: <FileText className="h-7 w-7" />,
  },
  {
    id: "7",
    title: "Secure Authentication",
    description:
      "Protect your platform using JWT authentication and secure access.",
    icon: <ShieldCheck className="h-7 w-7" />,
  },
  {
    id: "8",
    title: "Auto Scaling",
    description:
      "Automatically scale infrastructure based on workload demands.",
    icon: <TrendingUp className="h-7 w-7" />,
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Features
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Everything You Need
            <br />
            to Deploy with Confidence
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Kurox combines deployment automation, container orchestration,
            monitoring, security, and scaling into one modern cloud platform.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={staggerItem}
              {...hoverElevation}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition-all duration-300 hover:border-cyan-500/40"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};