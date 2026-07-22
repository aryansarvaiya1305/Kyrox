import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { NAV_LINKS } from "@/constants/landing";
import { slideInTop, buttonHover } from "@/utils/landing";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      variants={slideInTop}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex cursor-pointer items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 font-bold text-white">
            K
          </div>

          <span className="hidden text-xl font-bold text-white sm:block">
            Kurox
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <motion.button
            {...buttonHover}
            className="rounded-lg px-4 py-2 text-sm text-slate-300 hover:text-white"
          >
            Login
          </motion.button>

          <motion.button
            {...buttonHover}
            className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-800 bg-slate-950 md:hidden"
          >
            <div className="space-y-4 px-6 py-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-300 hover:text-cyan-400"
                >
                  {link.label}
                </a>
              ))}

              <div className="flex gap-3 pt-4">
                <button className="flex-1 rounded-lg border border-slate-700 py-2 text-white">
                  Login
                </button>

                <button className="flex-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 py-2 font-medium text-white">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;