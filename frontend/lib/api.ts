import { Agent } from '@/types'
import { mockAgents } from './data'

// API 响应类型
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export interface AgentsResponse extends ApiResponse<Agent[]> {
  total: number
  page: number
  limit: number
}

// 模拟API延迟
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Agents API
export class AgentsAPI {
  static async getAll(): Promise<AgentsResponse> {
    // 模拟API调用延迟
    await delay(300)
    
    return {
      data: mockAgents,
      success: true,
      total: mockAgents.length,
      page: 1,
      limit: mockAgents.length
    }
  }

  static async search(query: string): Promise<AgentsResponse> {
    await delay(200)
    
    const filteredAgents = mockAgents.filter(agent => 
      agent.name.toLowerCase().includes(query.toLowerCase()) ||
      agent.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
      agent.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    )

    return {
      data: filteredAgents,
      success: true,
      total: filteredAgents.length,
      page: 1,
      limit: filteredAgents.length
    }
  }

  static async filter(filters: {
    category?: string
    industry?: string
    query?: string
  }): Promise<AgentsResponse> {
    await delay(250)
    
    let filteredAgents = mockAgents

    if (filters.category && filters.category !== '全部') {
      filteredAgents = filteredAgents.filter(agent => agent.category === filters.category)
    }

    if (filters.industry && filters.industry !== '全部') {
      filteredAgents = filteredAgents.filter(agent => agent.industry === filters.industry)
    }

    if (filters.query) {
      filteredAgents = filteredAgents.filter(agent =>
        agent.name.toLowerCase().includes(filters.query!.toLowerCase()) ||
        agent.shortDescription.toLowerCase().includes(filters.query!.toLowerCase()) ||
        agent.tags.some(tag => tag.toLowerCase().includes(filters.query!.toLowerCase()))
      )
    }

    return {
      data: filteredAgents,
      success: true,
      total: filteredAgents.length,
      page: 1,
      limit: filteredAgents.length
    }
  }

  static async getById(id: string): Promise<ApiResponse<Agent | null>> {
    await delay(150)
    
    const agent = mockAgents.find(a => a.id === id)
    
    return {
      data: agent || null,
      success: !!agent,
      message: agent ? undefined : 'Agent not found'
    }
  }
}

// 错误处理工具
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number = 500,
    public code?: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

// 通用错误处理
export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof ApiError) {
    return error
  }
  
  if (error instanceof Error) {
    return new ApiError(error.message)
  }
  
  return new ApiError('An unexpected error occurred')
} 