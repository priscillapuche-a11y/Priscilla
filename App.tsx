
import React, { useState, useEffect } from 'react';
import { MapPin, Globe, Mail, Phone, GraduationCap, Linkedin } from 'lucide-react';
import Header from './Header';
import Hero from './Hero';
import Timeline from './Timeline';
import SkillsMatrix from './SkillsMatrix';
import { EDUCATION_LIST } from './constants';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-white dark:bg-slate-900/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-10 h-0.5 bg-bio-teal"></span>
                    <span className="text-bio-teal font-bold tracking-widest uppercase text-sm">The Story</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">Bridging the Bench and the Business</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    Biotechnology professional with a B.S. in Biological Sciences and over 15 years of combined experience in clinical healthcare and laboratory research.
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-bio-teal pl-6 py-2 bg-bio-teal/5 rounded-r-xl">
                    "I bridge the gap between bench research, clinical application, and operational business strategy. Currently pursuing a Master of Science in Business in Biotechnology at the University of Florida to further this mission."
                  </p>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                      <MapPin className="w-5 h-5 text-bio-coral" />
                      <span>Pembroke Pines, FL</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                      <Globe className="w-5 h-5 text-blue-500" />
                      <span>Trilingual: EN, ES, PT</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="p-8 bg-bio-teal/5 rounded-3xl border border-bio-teal/10 text-center">
                    <div className="text-4xl font-bold text-bio-teal mb-2">15+</div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 dark:bg-slate-900 -z-10 rounded-l-[100px]"></div>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-bio-teal font-bold tracking-widest uppercase text-sm mb-4">Chronology</h2>
              <h3 className="text-4xl font-bold">Professional Journey</h3>
            </div>
            <Timeline />
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 bg-bio-teal dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-teal-200 font-bold tracking-widest uppercase text-sm mb-4">Competencies</h2>
              <h3 className="text-4xl font-bold text-white">Interactive Skills Matrix</h3>
            </div>
            <SkillsMatrix />
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-24 bg-white dark:bg-slate-900/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-bio-teal font-bold tracking-widest uppercase text-sm mb-4">Learning</h2>
                <h3 className="text-4xl font-bold">Academic Background</h3>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {EDUCATION_LIST.map((edu, idx) => (
                  <div key={idx} className="group flex flex-col md:flex-row items-center gap-8 p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-bio-teal transition-all">
                    <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center shadow-lg text-bio-teal group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-10 h-10" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                      <p className="text-bio-teal font-semibold">{edu.institution}</p>
                    </div>
                    <div className="text-slate-500 font-medium">
                      {edu.details}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto glass rounded-[40px] p-12 shadow-2xl overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-bio-teal/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-bio-coral/10 rounded-full blur-2xl"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    Interested in discussing potential research collaborations, biotechnology leadership opportunities, or operational strategies? Reach out directly.
                  </p>
                  <div className="space-y-6">
                    <a href="mailto:priscilla.puche01@gmail.com" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-bio-teal text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase">Email</p>
                        <p className="text-lg font-medium">priscilla.puche01@gmail.com</p>
                      </div>
                    </a>
                    <a href="tel:3057105746" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-bio-teal text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase">Phone</p>
                        <p className="text-lg font-medium">(305) 710-5746</p>
                      </div>
                    </a>
                    <a href="https://linkedin.com/in/priscilla-puche-5075035a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-bio-teal text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase">LinkedIn</p>
                        <p className="text-lg font-medium">linkedin.com/in/priscilla-puche</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center border-4 border-white dark:border-slate-700">
                    <img src="https://picsum.photos/seed/science/400/400" alt="Connect" className="w-full h-full object-cover opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-overlay" />
                    <div className="absolute text-center p-8">
                       <p className="text-2xl font-bold text-bio-teal italic leading-tight">"Bridging Science & Strategy"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-slate-900 text-slate-400 text-center border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center gap-4 mb-6">
             <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-bold border border-slate-700">🇺🇸 English</span>
             <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-bold border border-slate-700">🇪🇸 Spanish</span>
             <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-bold border border-slate-700">🇧🇷 Portuguese</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Priscilla C. Puche. Designed for Precision, Empathy, and Leadership.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
