// 应用配置
export const config = {
  // API 配置
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api',
    timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '10000'),
  },
  
  // 功能开关
  features: {
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    errorReporting: process.env.NEXT_PUBLIC_ENABLE_ERROR_REPORTING === 'true',
    mockData: process.env.NEXT_PUBLIC_ENABLE_MOCK_DATA !== 'false', // 默认启用
    debugMode: process.env.NEXT_PUBLIC_ENABLE_DEBUG_MODE === 'true',
  },
  
  // 外部服务
  services: {
    sentry: {
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    },
    analytics: {
      googleId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    },
  },
  
  // 应用设置
  app: {
    name: 'Agent Store',
    description: '发现 AI Native Agent',
    version: '1.0.0',
  },
} as const

// 开发环境检查
export const isDevelopment = process.env.NODE_ENV === 'development'
export const isProduction = process.env.NODE_ENV === 'production'

// 配置验证
export function validateConfig() {
  const requiredEnvVars: string[] = [
    // 在这里添加必需的环境变量
  ]
  
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName])
  
  if (missingVars.length > 0) {
    console.warn('Missing required environment variables:', missingVars)
  }
  
  return missingVars.length === 0
} 