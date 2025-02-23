import { Code, Palette, Brain, Database, Server, Layout } from 'lucide-react';
import { Skill } from '../types';
import { useScrollAnimation } from './ScrollAnimation';

const skills: Skill[] = [
  { name: 'Full-Stack Development', icon: 'Code', level: 90 },
  { name: 'Machine Learning', icon: 'Brain', level: 85 },
  { name: 'UI/UX Design', icon: 'Palette', level: 88 },
  { name: 'Database Design', icon: 'Database', level: 82 },
  { name: 'Backend Architecture', icon: 'Server', level: 85 },
  { name: 'Frontend Development', icon: 'Layout', level: 92 },
];

const iconMap = {
  Code,
  Brain,
  Palette,
  Database,
  Server,
  Layout,
};

export function Skills() {
  useScrollAnimation();

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
          data-animate="slide-up"
        >
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon as keyof typeof iconMap];
            return (
              <div
                key={skill.name}
                className="p-6 bg-gray-800 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
                data-animate="scale-up"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-900/50 rounded-lg animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: '0%',
                      background: 'linear-gradient(to right, #a78bfa, #f472b6)',
                      animation: 'progress 1s ease-out forwards',
                      animationDelay: `${index * 100 + 500}ms`,
                    }}
                  />
                </div>
                <p className="mt-2 text-right text-sm text-purple-400">
                  {skill.level}%
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}