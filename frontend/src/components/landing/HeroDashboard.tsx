import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  Cpu,
  HardDrive,
  Zap,
  Activity,
} from "lucide-react";

import {
  slideInRight,
  staggerContainer,
  staggerItem,
  pulse,
} from "@/utils/landing";

const services = [
  {
    id: "1",
    name: "frontend-service",
    status: "running",
  },
  {
    id: "2",
    name: "auth-api",
    status: "running",
  },
  {
    id: "3",
    name: "worker",
    status: "building",
  },
];

const metrics = [
  {
    id: "1",
    label: "CPU Usage",
    value: "31%",
    icon: Cpu,
  },
  {
    id: "2",
    label: "Memory",
    value: "2.4 GB",
    icon: HardDrive,
  },
  {
    id: "3",
    label: "Network",
    value: "Healthy",
    icon: Zap,
  },
  {
    id: "4",
    label: "Response",
    value: "62 ms",
    icon: Activity,
  },
];

export const HeroDashboard = () => {
  return (
    <motion.div
      variants={slideInRight}
      initial="hidden"
      animate="visible"
      className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
        <h3 className="text-sm font-semibold text-white">
          Dashboard
        </h3>

        <div className="flex items-center gap-2">
          <motion.div
            variants={pulse}
            animate="animate"
            className="h-2 w-2 rounded-full bg-green-500"
          />

          <span className="text-xs font-medium text-green-400">
            Live
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-6 p-6">

        {/* Deployments */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Deployments
          </h4>

          <div className="space-y-2">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className="flex items-center justify-between rounded-lg bg-slate-800/50 px-3 py-2"
              >
                <span className="text-sm text-slate-300">
                  {service.name}
                </span>

                {service.status === "running" ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />

                    <span className="text-xs text-green-400">
                      Running
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-yellow-500" />

                    <span className="text-xs text-yellow-400">
                      Building
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Metrics
          </h4>

          <div className="grid grid-cols-2 gap-3">
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <motion.div
                  key={metric.id}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  className="rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="h-5 w-5 text-cyan-400" />

                    <span className="text-xs text-slate-400">
                      {metric.label}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-white">
                    {metric.value}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-t border-slate-800 pt-4"
        >
          <p className="text-xs text-slate-400">
            Last updated{" "}
            <span className="text-slate-300">
              2 seconds ago
            </span>
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
};