export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
  github?: string;
  featured: boolean;
  caseStudy?: boolean;
}