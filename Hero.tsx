
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const roles = [
  "Clinical Research Supervisor",
  "Biotechnology Specialist",
  "Healthcare Operations Manager"
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const currentRole = roles[roleIndex];

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Bio-Shapes */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-bio-teal opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-bio-coral opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h2 className="text-bio-teal font-semibold tracking-widest uppercase mb-4 animate-fade-in">Precision & Empathy</h2>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Priscilla C. <span className="text-bio-teal">Puche</span>
          </h1>
          <div className="h-12 flex items-center justify-center lg:justify-start">
            <p className="text-xl md:text-2xl font-light text-slate-600 dark:text-slate-300">
              {displayText}<span className="inline-block w-0.5 h-6 bg-bio-teal ml-1 animate-pulse"></span>
            </p>
          </div>
          <p className="mt-8 text-lg text-slate-500 max-w-lg mx-auto lg:mx-0">
            Bridging the gap between clinical application, laboratory research, and operational business strategy.
          </p>
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#about" className="px-8 py-3 bg-bio-teal text-white rounded-full font-medium hover:bg-teal-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-teal-500/20">
              The Story
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-slate-300 dark:border-slate-700 rounded-full font-medium hover:border-bio-teal hover:text-bio-teal transition-all transform hover:-translate-y-1">
              Contact Me
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
            {/* Organic Profile Border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-bio-teal to-bio-coral rounded-full opacity-20 animate-spin-slow"></div>
            <div className="absolute inset-4 bg-white dark:bg-slate-900 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
              <img
                src="https://picsum.photos/seed/bio6/600/600"
                alt="Priscilla C. Puche"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Bio-Floating Badges */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl animate-bounce-slow">
              <span className="text-2xl">🧬</span>
            </div>
            <div className="absolute bottom-8 -left-8 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl animate-bounce-slow delay-700">
              <span className="text-2xl">💼</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-400 hover:text-bio-teal transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
