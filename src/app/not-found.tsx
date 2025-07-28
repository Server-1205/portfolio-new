"use client";

import { Button } from "@/shared/ui/kit/button";
import { Heading } from "@/shared/ui/kit/card";
import { Container } from "@/shared/ui/kit/container";
import Icon from "@/shared/ui/kit/icon";
import Section from "@/shared/ui/kit/section";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <Section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-1.5s" }}
        ></div>
      </div>

      <Container>
        <div className="text-center space-y-8">
          {/* Error Code Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black leading-none">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent opacity-20">
                404
              </span>
            </div>

            {/* Floating Code Elements */}
            <div className="absolute top-1/4 left-1/4 glass-effect p-3 rounded-xl border border-white/10 animate-float">
              <Icon name="fas fa-code" className="text-2xl text-primary" />
            </div>
            <div
              className="absolute top-1/3 right-1/4 glass-effect p-3 rounded-xl border border-white/10 animate-float"
              style={{ animationDelay: "-2s" }}
            >
              <Icon name="fas fa-bug" className="text-2xl text-accent" />
            </div>
            <div
              className="absolute bottom-1/4 left-1/2 glass-effect p-3 rounded-xl border border-white/10 animate-float"
              style={{ animationDelay: "-4s" }}
            >
              <Icon name="fas fa-search" className="text-2xl text-secondary" />
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="code-font text-accent text-lg">
              // Ошибка: Страница не найдена
            </div>

            <Heading
              size="xl"
              className="text-4xl md:text-6xl lg:text-7xl font-black"
            >
              <span className="block text-white">Упс!</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Потерялись?
              </span>
            </Heading>

            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Похоже, что страница, которую вы ищете, не существует или была
              перемещена. Но не волнуйтесь, мы поможем вам найти то, что нужно!
            </p>
          </motion.div>

          {/* Code Editor Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-md mx-auto"
          >
            <div className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
              {/* Window Controls */}
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              {/* Code Content */}
              <div className="code-font text-sm space-y-2 text-left">
                <div className="text-gray-400">// 404.js</div>
                <div className="text-purple-400"></div>
                <div className="ml-4 text-red-400">
                  throw new <span className="text-yellow-300">Error</span>(
                </div>
                <div className="ml-8 text-green-400">
                  "<span className="text-yellow-300">Страница не найдена!</span>
                  "
                </div>
                <div className="ml-4 text-red-400">);</div>
                <div className="text-purple-400">{"}"}</div>
                <div className="text-gray-400 mt-4">
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/" className="group">
              <Icon name="fas fa-home" className="mr-2" />
              На главную
            </Link>

            <Link href="/portfolio" className="group">
              <Icon name="fas fa-folder-open" className="mr-2" />
              Проекты
            </Link>

            <Button
              onClick={() => window.history.back()}
              variant="ghost"
              size="lg"
              className="group"
            >
              <Icon name="fas fa-arrow-left" className="mr-2" />
              Назад
            </Button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="pt-12 border-t border-white/10"
          >
            <div className="text-white/40 mb-6">Возможно, вы искали:</div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="text-white/60 hover:text-primary transition-colors"
              >
                О себе
              </Link>
              <Link
                href="/portfolio"
                className="text-white/60 hover:text-primary transition-colors"
              >
                Портфолио
              </Link>
              <Link
                href="/blog"
                className="text-white/60 hover:text-primary transition-colors"
              >
                Блог
              </Link>
              <Link
                href="/contact"
                className="text-white/60 hover:text-primary transition-colors"
              >
                Контакты
              </Link>
            </div>
          </motion.div>

          {/* Easter Egg - Hidden Developer Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-16"
          >
            <details className="text-white/20 text-sm">
              <summary className="cursor-pointer hover:text-white/40 transition-colors">
                Для разработчиков
              </summary>
              <div className="mt-4 code-font text-xs space-y-2">
                <div>Status: 404 - Page Not Found</div>
                <div>Timestamp: {new Date().toISOString()}</div>
                <div>
                  User-Agent:{" "}
                  {typeof navigator !== "undefined"
                    ? navigator.userAgent.slice(0, 50) + "..."
                    : "Unknown"}
                </div>
                <div>
                  Path:{" "}
                  {typeof window !== "undefined"
                    ? window.location.pathname
                    : "Unknown"}
                </div>
              </div>
            </details>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
