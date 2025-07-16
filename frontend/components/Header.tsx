'use client'

import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSearch } from '@/contexts/SearchContext'
import { InputValidator } from '@/lib/validation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { searchQuery, setSearchQuery } = useSearch()

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (InputValidator.validateSearchQuery(value)) {
      setSearchQuery(InputValidator.sanitizeSearchQuery(value))
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/logos/AgentStore.png" 
                alt="Agent Store Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">Agent Store</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-900 hover:text-primary-500 transition-colors">
              首页
            </a>
            <a href="/about" className="text-gray-900 hover:text-primary-500 transition-colors">
              关于我们
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="搜索 AI Agent..."
                value={searchQuery}
                onChange={handleSearchChange}
                maxLength={100}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                aria-label="搜索 AI Agent"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-primary-500 transition-colors"
              aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="搜索 AI Agent..."
              value={searchQuery}
              onChange={handleSearchChange}
              maxLength={100}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              aria-label="搜索 AI Agent"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="/" className="text-gray-900 hover:text-primary-500 transition-colors">
                首页
              </a>
              <a href="/about" className="text-gray-900 hover:text-primary-500 transition-colors">
                关于
              </a>
              <a href="#" className="text-gray-900 hover:text-primary-500 transition-colors">
                联系
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 