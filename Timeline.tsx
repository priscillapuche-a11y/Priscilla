
import React from 'react';
import { EXPERIENCES, getCategoryIcon } from './constants';

const Timeline: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="relative">
        {/* Timeline Path */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden md:block"></div>

        <div className="space-y-16">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Content Card */}
              <div className="w-full md:w-5/12 ml-12 md:ml-0">
                <div className="p-6 bg-white dark:bg-slate-800/50 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-bio-teal/50 transition-all duration-300 transform hover:-translate-y-1 group">
                  <span className="inline-block px-3 py-1 bg-bio-teal/10 text-bio-teal text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                    {exp.dates}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-bio-teal transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-bio-teal font-medium mb-4 text-sm">{exp.organization}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                        <span className="mr-2 text-bio-teal mt-1">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Central Icon */}
              <div className="absolute md:relative left-0 md:left-auto md:mx-auto flex items-center justify-center z-10 w-12 h-12 bg-bio-teal text-white rounded-full border-4 border-bio-light dark:border-bio-dark shadow-lg">
                {getCategoryIcon(exp.category)}
              </div>

              {/* Empty Spacer */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
