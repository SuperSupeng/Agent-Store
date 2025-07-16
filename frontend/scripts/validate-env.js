#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// 必需的环境变量
const requiredEnvVars = [
  'NEXT_PUBLIC_API_BASE_URL',
  'NEXT_PUBLIC_SITE_URL'
]

// 可选但推荐的环境变量
const recommendedEnvVars = [
  'NEXT_PUBLIC_ENABLE_ANALYTICS',
  'NEXT_PUBLIC_ENABLE_ERROR_REPORTING',
  'NEXT_PUBLIC_SENTRY_DSN',
  'NEXT_PUBLIC_GOOGLE_ANALYTICS_ID'
]

function validateEnvironment() {
  console.log('🔍 验证环境变量...')
  
  const missingVars = []
  const missingRecommended = []
  
  // 检查必需的环境变量
  requiredEnvVars.forEach(varName => {
    if (!process.env[varName]) {
      missingVars.push(varName)
    }
  })
  
  // 检查推荐的环境变量
  recommendedEnvVars.forEach(varName => {
    if (!process.env[varName]) {
      missingRecommended.push(varName)
    }
  })
  
  // 报告结果
  if (missingVars.length > 0) {
    console.error('❌ 缺少必需的环境变量:')
    missingVars.forEach(varName => {
      console.error(`   - ${varName}`)
    })
    console.error('\n请在 .env.local 文件中设置这些变量')
    process.exit(1)
  }
  
  if (missingRecommended.length > 0) {
    console.warn('⚠️  缺少推荐的环境变量:')
    missingRecommended.forEach(varName => {
      console.warn(`   - ${varName}`)
    })
    console.warn('\n这些变量是可选的，但建议设置以获得完整功能')
  }
  
  console.log('✅ 环境变量验证通过')
}

// 如果直接运行此脚本
if (require.main === module) {
  validateEnvironment()
}

module.exports = { validateEnvironment } 