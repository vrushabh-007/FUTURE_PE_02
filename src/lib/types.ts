import type { LucideIcon } from "lucide-react";

export type Skill = {
  name: string;
  icon: LucideIcon;
  description: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  techStack: string[];
  liveUrl: string;
};
