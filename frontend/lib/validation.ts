// 输入验证和清理工具
export class InputValidator {
  // 清理搜索查询
  static sanitizeSearchQuery(query: string): string {
    if (typeof query !== 'string') return ''
    
    return query
      .trim()
      .replace(/[<>]/g, '') // 移除潜在的HTML标签
      .slice(0, 100) // 限制长度
  }

  // 验证搜索查询
  static validateSearchQuery(query: string): boolean {
    if (!query || typeof query !== 'string') return false
    if (query.length > 100) return false
    if (/[<>]/.test(query)) return false // 检查HTML标签
    return true
  }

  // 清理和验证过滤器参数
  static sanitizeFilters(filters: {
    category?: string
    industry?: string
    query?: string
  }) {
    return {
      category: filters.category ? this.sanitizeSearchQuery(filters.category) : undefined,
      industry: filters.industry ? this.sanitizeSearchQuery(filters.industry) : undefined,
      query: filters.query ? this.sanitizeSearchQuery(filters.query) : undefined
    }
  }

  // 验证URL
  static validateUrl(url: string): boolean {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  // 清理HTML内容
  static sanitizeHtml(html: string): string {
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
  }
}

// 安全配置
export const securityConfig = {
  maxSearchLength: 100,
  maxDescriptionLength: 500,
  allowedImageDomains: ['localhost', 'agentstore.com', 'cdn.agentstore.com'],
  rateLimit: {
    search: 10, // 每分钟搜索次数
    api: 100    // 每分钟API调用次数
  }
} as const 