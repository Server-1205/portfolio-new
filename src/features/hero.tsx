import { Badge } from "@/shared/ui/kit/badge";
import { PortfolioCode } from "./portfolio-code";
import Link from "next/link";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { Button } from "@/shared/ui/kit/button";

interface HeroProps {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  codeComment?: string;
}

export const Hero = ({
  title,
  subtitle,
  description,
  codeComment = "// страница",
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              <div className="code-font text-accent text-lg animate-fade-in-down">
                {codeComment}
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl leading-none">
                <span className="block text-white">{title}</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent text-shimmer">
                  {subtitle}
                </span>
              </h1>
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed inli">
                  {description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="text-secondary">
                    JavaScript/TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-primary">
                    React & Next.js
                  </Badge>

                  <Badge variant="outline" className="text-accent">
                    Node.js & Express
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 animate-fade-in-up">
              <Button asChild variant="outline" className="relative bg-primary">
                <Link href="/portfolio">
                  <span className="relative z-10">Посмотреть проекты</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>

              <Button asChild className="bg-accent">
                <Link href="/contact">Связаться со мной</Link>
              </Button>
            </div>
            {/* Иконки соц сетей */}
            <div className="flex space-x-6 animate-fade-in-up">
              <a
                href="#"
                className="text-white/60 hover:text-primary text-2xl transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-accent text-2xl transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <CiLinkedin />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-secondary text-2xl transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <FaTelegram />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-primary text-2xl transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative">
              <div className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 group">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <PortfolioCode />
              </div>

              <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse-glow"></div>

              <div className="absolute -top-4 left-1/4 glass-effect p-3 rounded-xl border border-white/10 animate-float">
                <FaReact className="text-blue-400 text-4xl" />
              </div>
              <div className="absolute -right-4 top-1/3 glass-effect p-3 rounded-xl border border-white/10 animate-float">
                <FaNodeJs className="text-2xl text-green-400" />
              </div>
              <div className="absolute -bottom-4 left-1/3 glass-effect p-3 rounded-xl border border-white/10 animate-float">
                <FaJs className="text-2xl text-yellow-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-7 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
