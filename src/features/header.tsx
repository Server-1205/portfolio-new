"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navigationLinks = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О себе" },
  { href: "/portfolio", label: "Проекты" },
  { href: "/blog", label: "Блог" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-xl border-b border-white/10"
          : "bg-white/10 backdrop-blur-lg border-b border-white/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent code-font"
            >
              &lt;AS/&gt;
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-white/80 hover:text-white transition-all duration-300 relative group ${
                  pathname === link.href ? "text-white" : ""
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary to-accent px-6 py-2 rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              Контакты
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-xl`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 text-white/80 hover:text-white transition-colors ${
                    pathname === link.href ? "text-white" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Контакты
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
