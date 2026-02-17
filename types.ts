
export enum Category {
  RESEARCH = 'RESEARCH',
  CLINICAL = 'CLINICAL',
  MANAGEMENT = 'MANAGEMENT',
  MIXED = 'MIXED'
}

export interface Experience {
  id: number;
  title: string;
  organization: string;
  dates: string;
  category: Category;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  details: string;
}

export interface SkillGroup {
  name: string;
  skills: string[];
}
