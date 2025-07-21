'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FilterBar from '@/components/FilterBar'
import AgentGrid from '@/components/AgentGrid'
import Footer from '@/components/Footer'
import LoadingSpinner, { AgentGridSkeleton } from '@/components/LoadingSpinner'
import { useSearch } from '@/contexts/SearchContext'
import { useAgents } from '@/hooks/useAgents'

export default function HomePage() {
  const { searchQuery, selectedCategory, selectedIndustry } = useSearch()
  
  const { 
    agents, 
    loading, 
    error, 
    total, 
    filter: filterAgents 
  } = useAgents({ autoFetch: false })

  // 当筛选条件变化时重新获取数据
  useEffect(() => {
    filterAgents({
      category: selectedCategory,
      industry: selectedIndustry,
      query: searchQuery
    })
  }, [selectedCategory, selectedIndustry, searchQuery, filterAgents])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <span id="agents" />
      <main className="relative z-10 bg-white">
        {/* Filter Bar */}
        <FilterBar />
        
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
                找到 <span className="font-semibold text-primary-600">{total}</span> 个 Agent
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

            {/* Loading State */}
            {loading && (
              <div className="space-y-6">
                <div className="text-center">
                  <LoadingSpinner size="lg" text="正在加载 Agents..." />
                </div>
                <AgentGridSkeleton count={6} />
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">加载失败</h3>
                <p className="text-gray-500 mb-4">{error}</p>
                <button 
                  onClick={() => filterAgents({
                    category: selectedCategory,
                    industry: selectedIndustry,
                    query: searchQuery
                  })}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  重试
                </button>
              </div>
            )}

            {/* Agents Grid */}
            {!loading && !error && <AgentGrid agents={agents} />}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
} 