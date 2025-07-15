export interface Agent {
  id: string
  name: string
  description: string
  shortDescription: string
  logo: string
  website: string
  category: string
  industry: string
  tags: string[]
  createdAt: string
  team: Team
  mediaContent: MediaContent[]
}

export interface Team {
  name: string
  description: string
  founders: Founder[]
  contact: Contact
  companyInfo: CompanyInfo
}

export interface Founder {
  name: string
  title: string
  bio: string
  avatar: string
  linkedin?: string
}

export interface Contact {
  email: string
  twitter?: string
  linkedin?: string
  github?: string
}

export interface CompanyInfo {
  founded: string
  funding?: string
  techStack: string[]
  location: string
}

export interface MediaContent {
  id: string
  title: string
  summary: string
  source: string
  url: string
  publishedAt: string
  type: 'article' | 'video' | 'podcast' | 'social'
}

export interface SearchFilters {
  category?: string
  industry?: string
  query?: string
} 