export type ProjectCategory =
  | "All"
  | "Web Applications"
  | "Mobile Applications"
  | "Websites"
  | "AI Solutions"
  | "Education Technology"
  | "University Systems"
  | "Business Systems"
  | "SaaS"
  | "APIs & Backend"
  | "Fintech"
  | "Custom Software";

export type ProjectStatus = "Production" | "Completed" | "In Development" | "Featured";

export interface ProjectArchitecture {
  overview: string;
  components: {
    name: string;
    description: string;
  }[];
}

export interface Project {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  secondaryCategories?: ProjectCategory[];
  status: ProjectStatus;
  technologies: string[];
  features: string[];
  problem: string;
  solution: string;
  challenges: string[];
  solutions?: string[];
  results: string[];
  role: string;
  images: string[];
  video?: string;
  liveUrl?: string;
  githubUrl?: string;
  startDate: string;
  completionDate: string;
  featured: boolean;
  architecture?: ProjectArchitecture;
  lessonsLearned?: string[];
  relatedServices?: string[];
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  typicalUseCases: string[];
  relatedProjectSlugs: string[];
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "AI & Machine Learning"
  | "DevOps & Cloud"
  | "Architecture & Security";

export interface Skill {
  name: string;
  category: SkillCategory;
  description: string;
  experienceLevel: string;
  iconName: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  position: string;
  organization: string;
  period: string;
  location: string;
  type: "Full-Time" | "Contract" | "Project-Based" | "Consulting";
  description: string;
  responsibilities: string[];
  technologies: string[];
  projects: string[];
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  category: "Milestone" | "Project" | "Education" | "Skill" | "Architecture";
  description: string;
  technologies?: string[];
  image?: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishDate: string;
  readingTime: string;
  author: string;
  coverImage: string;
}

export interface PhilosophyItem {
  title: string;
  principle: string;
  description: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  subheadline: string;
  motto: string;
  location: string;
  whatsapp: string;
  whatsappFormatted: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  facebookUrl: string;
  availability: {
    status: "Available for New Projects" | "Limited Availability" | "Consulting Only";
    isAcceptingWork: boolean;
    description: string;
    acceptedTypes: string[];
  };
  bioSummary: string;
  bioFull: string[];
  education: {
    degree: string;
    field: string;
    institution: string;
    period: string;
    description: string;
  }[];
  languages: {
    language: string;
    proficiency: string;
  }[];
  interests: string[];
}
