﻿import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href="https://github.com/yourusername"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="mailto:your.email@example.com"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} YourName. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};
