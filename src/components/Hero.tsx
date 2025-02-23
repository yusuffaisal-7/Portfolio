import { ArrowRight, Github, Linkedin, Mail, Brain, Code, Palette, ExternalLink } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 animate-gradient" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500 via-transparent to-transparent" />
      <div className="container mx-auto px-4 py-16 text-center relative">
        <div className="space-y-6">
          <h1 className="text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-slide-up md:text-8xl">
            YusuF Faisal
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up [animation-delay:200ms]">
            <span className="flex items-center gap-2 text-purple-400">
              <Code className="w-5 h-5 animate-float" /> Developer
            </span>
            <span className="flex items-center gap-2 text-pink-400">
              <Palette className="w-5 h-5 animate-float [animation-delay:200ms]" /> Designer
            </span>
            <span className="flex items-center gap-2 text-blue-400">
              <Brain className="w-5 h-5 animate-float [animation-delay:400ms]" /> ML Engineer
            </span>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 animate-slide-up [animation-delay:400ms] md:text-2xl">
            Crafting beautiful digital experiences with a focus on user-centered design,
            clean code, and innovative machine learning solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up [animation-delay:600ms]">
            <a
              href="#contact"
              className="px-8 py-3 bg-purple-600 text-white rounded-full flex items-center gap-2 hover:bg-purple-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              Hire Me <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-purple-600 text-purple-400 rounded-full hover:bg-purple-900/20 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              View Work
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 animate-slide-up [animation-delay:800ms]">
            <a
              href="https://github.com/yusuffaisal-7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all hover:scale-110"
            >
              <Github className="w-6 h-6" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yusuf-faysal-86a723319/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://www.fiverr.com/ysuf_faisal/buying?source=avatar_menu_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all hover:scale-110"
            >
              <ExternalLink className="w-6 h-6" />
              <span className="text-sm">Fiverr</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}