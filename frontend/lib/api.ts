import { Agent } from '@/types'
import { mockAgents } from './data'
import { InputValidator } from './validation'

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
    
    // 验证和清理输入
    if (!InputValidator.validateSearchQuery(query)) {
      throw new ApiError('Invalid search query', 400, 'INVALID_INPUT')
    }
    
    const sanitizedQuery = InputValidator.sanitizeSearchQuery(query)
    
    const filteredAgents = mockAgents.filter(agent => 
      agent.name.toLowerCase().includes(sanitizedQuery.toLowerCase()) ||
      agent.shortDescription.toLowerCase().includes(sanitizedQuery.toLowerCase()) ||
      agent.tags.some(tag => tag.toLowerCase().includes(sanitizedQuery.toLowerCase()))
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
    
    // 验证和清理过滤器参数
    const sanitizedFilters = InputValidator.sanitizeFilters(filters)
    
    let filteredAgents = mockAgents

    if (sanitizedFilters.category && sanitizedFilters.category !== '全部') {
      filteredAgents = filteredAgents.filter(agent => agent.category === sanitizedFilters.category)
    }

    if (sanitizedFilters.industry && sanitizedFilters.industry !== '全部') {
      filteredAgents = filteredAgents.filter(agent => agent.industry === sanitizedFilters.industry)
    }

    if (sanitizedFilters.query) {
      filteredAgents = filteredAgents.filter(agent =>
        agent.name.toLowerCase().includes(sanitizedFilters.query!.toLowerCase()) ||
        agent.shortDescription.toLowerCase().includes(sanitizedFilters.query!.toLowerCase()) ||
        agent.tags.some(tag => tag.toLowerCase().includes(sanitizedFilters.query!.toLowerCase()))
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