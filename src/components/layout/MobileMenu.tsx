"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed right-0 top-0 z-50 h-full w-72 bg-surface border-l border-border p-6 lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-muted hover:text-foreground transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <nav className="mt-16 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`text-lg font-heading font-semibold transition-colors ${
                    pathname === link.href
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={onClose}
                className="mt-4 inline-flex items-center justify-center rounded-button bg-accent px-6 py-3 font-heading font-semibold text-background transition-all hover:bg-accent-hover"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
