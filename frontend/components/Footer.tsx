import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logos/AgentStore.png" 
                alt="Agent Store Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">Agent Store</span>
            </div>
            <p className="text-gray-400">
              专注于展示 AI Native Agent 的平台，为用户提供 AI 原生的 Agent 发现和交互体验。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">首页</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">关于我们</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <ul className="space-y-2 text-gray-400">
              <li>邮箱: hello@agentstore.com</li>
              <li>地址: 北京市朝阳区</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Agent Store. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
} 