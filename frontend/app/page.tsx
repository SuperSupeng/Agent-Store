'use client'

import { useState, useMemo } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FilterBar from '@/components/FilterBar'
import AgentGrid from '@/components/AgentGrid'
import { mockAgents } from '@/lib/data'
import { Agent } from '@/types'

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [selectedIndustry, setSelectedIndustry] = useState('全部')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter agents based on selected filters and search query
  const filteredAgents = useMemo(() => {
    return mockAgents.filter((agent: Agent) => {
      const matchesCategory = selectedCategory === '全部' || agent.category === selectedCategory
      const matchesIndustry = selectedIndustry === '全部' || agent.industry === selectedIndustry
      const matchesSearch = searchQuery === '' || 
        agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesCategory && matchesIndustry && matchesSearch
    })
  }, [selectedCategory, selectedIndustry, searchQuery])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <main className="relative z-10 bg-white">
        {/* Filter Bar */}
        <FilterBar
          onCategoryChange={setSelectedCategory}
          onIndustryChange={setSelectedIndustry}
          selectedCategory={selectedCategory}
          selectedIndustry={selectedIndustry}
        />
        
        {/* Agents Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                发现 AI Native Agent
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                浏览我们精心挑选的 AI Native Agent 集合
              </p>
            </div>

            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-600">
                找到 <span className="font-semibold text-primary-600">{filteredAgents.length}</span> 个 Agent
                {selectedCategory !== '全部' && (
                  <span className="ml-2">
                    · 分类: <span className="font-semibold">{selectedCategory}</span>
                  </span>
                )}
                {selectedIndustry !== '全部' && (
                  <span className="ml-2">
                    · 行业: <span className="font-semibold">{selectedIndustry}</span>
                  </span>
                )}
              </p>
            </div>

            {/* Agents Grid */}
            <AgentGrid agents={filteredAgents} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">★</span>
                </div>
                <span className="text-xl font-bold">Agent Store</span>
              </div>
              <p className="text-gray-400">
                专注于展示高质量 AI Agent 的网络平台，为用户提供全面的 Agent 发现和评估体验。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">首页</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
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
            <p>&copy; 2024 Agent Store. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 