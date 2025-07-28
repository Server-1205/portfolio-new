import { SkillCategory } from "@prisma/client";

export type {
  Project,
  Skill,
  Experience,
  Education,
  Contact,
  BlogPost,
  Testimonial,
  Certificate,
  SiteSettings,
  SkillCategory,
  ContactStatus,
} from "@prisma/client";

// Дополнительные типы для API
export interface CreateProjectData {
  title: string;
  description?: string;
  shortDesc?: string;
  image?: string;
  images?: string[];
  url?: string;
  githubUrl?: string;
  technologies: string[];
  category: string;
  featured?: boolean;
  completed?: boolean;
}

export interface CreateContactData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
  company?: string;
}

export interface UpdateSkillData {
  name?: string;
  category?: SkillCategory;
  level?: number;
  icon?: string;
  color?: string;
  order?: number;
  visible?: boolean;
}

// Типы для фильтрации и сортировки
export interface ProjectFilters {
  category?: string;
  featured?: boolean;
  technologies?: string[];
}

export interface SkillFilters {
  category?: SkillCategory;
  visible?: boolean;
}

export interface BlogPostFilters {
  published?: boolean;
  featured?: boolean;
  tags?: string[];
}

// Типы для API ответов
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Типы для статистики
export interface DashboardStats {
  totalProjects: number;
  totalSkills: number;
  totalContacts: number;
  unreadContacts: number;
  publishedPosts: number;
  totalViews: number;
}
