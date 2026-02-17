
import React from 'react';
import { Microscope, HeartPulse, Briefcase, Globe2, Mail, MapPin, Linkedin, Phone } from 'lucide-react';
import { Experience, Category, SkillGroup, Education } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: "Supervisor, Research Laboratory",
    organization: "University of Miami (BSSR)",
    dates: "11/2023 – 04/2024",
    category: Category.MANAGEMENT,
    highlights: [
      "Led cancer-related biospecimen collection.",
      "Oversaw IRB consents and regulatory compliance.",
      "Managed data entry in OpenSpecimen/UChart."
    ]
  },
  {
    id: 2,
    title: "Clinical Research Coordinator / Research Associate",
    organization: "University of Miami",
    dates: "05/2023 – 11/2023",
    category: Category.MIXED,
    highlights: [
      "Performed plasma/Buffy coat prep, RNA/DNA extraction.",
      "Managed patient interaction and clinical trials support."
    ]
  },
  {
    id: 3,
    title: "Research Intern",
    organization: "University of Miami",
    dates: "05/2022 – 09/2022",
    category: Category.RESEARCH,
    highlights: [
      "Studied carbon nitride dots (CNDs) using zebrafish models.",
      "Applied Western blot, ELISA, and fluorescence spectroscopy."
    ]
  },
  {
    id: 4,
    title: "Student Researcher",
    organization: "University of Florida",
    dates: "01/2022 – 04/2022",
    category: Category.RESEARCH,
    highlights: [
      "Microbiome analysis of Bermudagrass.",
      "Fungal DNA extraction and PCR."
    ]
  },
  {
    id: 5,
    title: "Senior Patient Care Associate",
    organization: "FIU Health Faculty Group Practice",
    dates: "11/2013 – 09/2014",
    category: Category.CLINICAL,
    highlights: [
      "Floated between OB/GYN, Adult Medicine, and Lab.",
      "Phlebotomy, EKGs, injections, and patient intake."
    ]
  },
  {
    id: 6,
    title: "Clinical Assistant (OB/GYN & Spine)",
    organization: "University of Miami",
    dates: "07/2006 – 04/2008",
    category: Category.CLINICAL,
    highlights: [
      "Assisted in endometrial biopsies, LEEP, and Ortho Spine procedures."
    ]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "MS in Business in Biotechnology",
    institution: "University of Florida",
    details: "Expected 2026"
  },
  {
    degree: "BS in Biological Sciences",
    institution: "Miami Dade College",
    details: "Class of 2022"
  },
  {
    degree: "Certified Medical Assistant",
    institution: "American Registry of Medical Assistants (ARMA)",
    details: "Since 2004"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: "Laboratory",
    skills: ["DNA/RNA Extraction", "PCR", "ELISA", "Western Blot", "Cell Culture", "Microscopy"]
  },
  {
    name: "Clinical",
    skills: ["Phlebotomy", "EKG", "Vitals", "Patient Education", "Sterile Technique"]
  },
  {
    name: "Software",
    skills: ["OpenSpecimen", "UChart", "Velos eResearch", "MS Office"]
  },
  {
    name: "Languages",
    skills: ["English (Fluent)", "Spanish (Fluent)", "Portuguese (Fluent)"]
  }
];

export const getCategoryIcon = (category: Category) => {
  switch (category) {
    case Category.RESEARCH: return <Microscope className="w-5 h-5" />;
    case Category.CLINICAL: return <HeartPulse className="w-5 h-5" />;
    case Category.MANAGEMENT: return <Briefcase className="w-5 h-5" />;
    case Category.MIXED: return (
      <div className="flex -space-x-1">
        <HeartPulse className="w-4 h-4" />
        <Microscope className="w-4 h-4" />
      </div>
    );
    default: return <Briefcase className="w-5 h-5" />;
  }
};
