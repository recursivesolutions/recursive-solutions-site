export interface PortfolioApp {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  imageCount: number;
}

export interface ProjectInquiry {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}
