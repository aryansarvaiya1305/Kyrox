import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import {
  staggerContainer,
  staggerItem,
} from "@/utils/landing";

const faqs = [
  {
    question: "What is Kurox?",
    answer:
      "Kurox is a production-grade cloud deployment platform inspired by Vercel, Railway and Render. It enables developers to deploy, monitor and scale applications from a single dashboard.",
  },
  {
    question: "How does deployment work?",
    answer:
      "Simply connect your GitHub repository, configure your project and Kurox automatically builds, containerizes and deploys your application.",
  },
  {
    question: "Which cloud providers are supported?",
    answer:
      "Kurox is designed with cloud-native architecture and can be extended to support AWS, Azure, Google Cloud and self-hosted Kubernetes clusters.",
  },
  {
    question: "Is Kubernetes required?",
    answer:
      "No. Small projects can run without Kubernetes, while larger applications can use Kubernetes for scaling, reliability and orchestration.",
  },
  {
    question: "Can I deploy private repositories?",
    answer:
      "Yes. Kurox securely integrates with Git providers and supports deploying both public and private repositories.",
  },
  {
    question: "Is Kurox open source?",
    answer:
      "The platform is designed with open technologies. Future versions may include an open-source community edition.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-slate-950 py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
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
            FAQ
          </motion.p>

          <motion.h2
            variants={staggerItem}
            className="text-4xl font-bold text-white md:text-5xl"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400"
          >
            Everything you need to know about Kurox before deploying
            your next application.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={staggerItem}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-cyan-400" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="border-t border-slate-800 px-6 py-5">
                      <p className="leading-7 text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};