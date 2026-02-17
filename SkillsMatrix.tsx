
import React from 'react';
import { SKILL_GROUPS } from './constants';
import { FlaskConical, Stethoscope, Laptop, Languages } from 'lucide-react';

const getIcon = (name: string) => {
  switch (name) {
    case 'Laboratory': return <FlaskConical className="w-6 h-6 text-bio-teal" />;
    case 'Clinical': return <Stethoscope className="w-6 h-6 text-bio-coral" />;
    case 'Software': return <Laptop className="w-6 h-6 text-bio-gold" />;
    case 'Languages': return <Languages className="w-6 h-6 text-blue-500" />;
    default: return null;
  }
};

const SkillsMatrix: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {SKILL_GROUPS.map((group) => (
        <div key={group.name} className="flex flex-col p-6 rounded-3xl glass shadow-xl border border-white/20 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white dark:bg-slate-700 rounded-xl shadow-inner">
              {getIcon(group.name)}
            </div>
            <h3 className="text-xl font-bold tracking-tight">{group.name}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-full border border-transparent hover:border-bio-teal hover:bg-bio-teal/10 skill-tag transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsMatrix;
