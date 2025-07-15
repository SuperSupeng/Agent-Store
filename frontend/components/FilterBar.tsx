'use client'

import { useState } from 'react'
import { ChevronDown, Filter } from 'lucide-react'
import { categories, industries } from '@/lib/data'

interface FilterBarProps {
  onCategoryChange: (category: string) => void
  onIndustryChange: (industry: string) => void
  selectedCategory: string
  selectedIndustry: string
}

export default function FilterBar({
  onCategoryChange,
  onIndustryChange,
  selectedCategory,
  selectedIndustry
}: FilterBarProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isIndustryOpen, setIsIndustryOpen] = useState(false)

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6 py-4">
          {/* Filter Icon */}
          <div className="flex items-center space-x-2 text-gray-600">
            <Filter className="w-5 h-5" />
            <span className="font-medium">筛选</span>
          </div>

          {/* Category Filter */}
          <div className="relative">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-primary-500 transition-colors"
            >
              <span className="text-gray-700">
                {selectedCategory === '全部' ? '所有分类' : selectedCategory}
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
            </button>

            {isCategoryOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      onCategoryChange(category)
                      setIsCategoryOpen(false)
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                      selectedCategory === category ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Industry Filter */}
          <div className="relative">
            <button
              onClick={() => setIsIndustryOpen(!isIndustryOpen)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-primary-500 transition-colors"
            >
              <span className="text-gray-700">
                {selectedIndustry === '全部' ? '所有行业' : selectedIndustry}
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isIndustryOpen ? 'rotate-180' : ''}`} />
            </button>

            {isIndustryOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => {
                      onIndustryChange(industry)
                      setIsIndustryOpen(false)
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                      selectedIndustry === industry ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Active Filters Display */}
          <div className="flex items-center space-x-2">
            {(selectedCategory !== '全部' || selectedIndustry !== '全部') && (
              <>
                <span className="text-gray-500">已选择:</span>
                {selectedCategory !== '全部' && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {selectedCategory}
                  </span>
                )}
                {selectedIndustry !== '全部' && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {selectedIndustry}
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop for closing dropdowns */}
      {(isCategoryOpen || isIndustryOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsCategoryOpen(false)
            setIsIndustryOpen(false)
          }}
        />
      )}
    </div>
  )
} 