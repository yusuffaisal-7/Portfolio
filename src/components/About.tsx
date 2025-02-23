import { useScrollAnimation } from './ScrollAnimation';

export function About() {
  useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2" data-animate="slide-right">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-20 group-hover:opacity-50 transition duration-700"></div>
              <img
                src="src/components/images/tempImageteoZ8J-removebg.jpeg"
                alt="YusuF Faisal"
                className="relative w-60 h-60 rounded-full border-2 border-purple-400 shadow-xl transform transition duration-700 group-hover:scale-102"
              />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              data-animate="slide-up"
            >
              About Me
            </h2>
            <p 
              className="text-lg text-gray-300"
              data-animate="slide-left"
            >
              I'm a passionate developer, designer, and machine learning engineer with a
              unique blend of creative and technical skills. My approach combines
              aesthetic design principles with robust engineering practices to create
              innovative digital solutions.
            </p>
            <p 
              className="text-lg text-gray-300"
              data-animate="slide-left"
            >
              When I'm not coding or designing, you can find me exploring new
              technologies, contributing to open-source projects, or diving deep into
              machine learning algorithms.
            </p>
            <div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6"
              data-animate="scale-up"
            >
              <div className="transform hover:scale-105 transition-all duration-300 p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2 text-purple-400">
                  Education
                </h3>
                <p className="text-gray-300">
                  B.Sc. in Statistics
                  <br />
                  Noakhali Science and Technology University, Noakhali-3814
                </p>
              </div>
              <div className="transform hover:scale-105 transition-all duration-300 p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2 text-purple-400">
                  Expertise
                </h3>
                <p className="text-gray-300">
                  Full-Stack Development
                  <br />
                  Machine Learning
                  <br />
                  Front-End
                  <br />
                  UI/UX Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
