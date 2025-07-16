/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除已废弃的experimental配置
  images: {
    domains: ['localhost', 'agentstore.com', 'cdn.agentstore.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // 安全头配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
  
  // 性能优化
  compress: true,
  poweredByHeader: false,
  
  // 构建优化
  swcMinify: true,
}

module.exports = nextConfig 