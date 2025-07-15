'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Tag } from 'lucide-react'
import { Agent } from '@/types'
import { formatDate, truncateText } from '@/lib/utils'

interface AgentCardProps {
  agent: Agent
  index: number
}

export default function AgentCard({ agent, index }: AgentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover"
    >
      {/* Card Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-4">
          {/* Logo and Name */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {agent.name.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
              <p className="text-sm text-gray-500 flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(agent.createdAt)}
              </p>
            </div>
          </div>

          {/* External Link */}
          <a
            href={agent.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:text-primary-600 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">
          {truncateText(agent.shortDescription, 120)}
        </p>
      </div>

      {/* Card Body */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {agent.tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
          {agent.tags.length > 3 && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
              +{agent.tags.length - 3}
            </span>
          )}
        </div>

        {/* Category and Industry */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {agent.category}
          </span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
            {agent.industry}
          </span>
        </div>

        {/* Team Info */}
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-medium">
                {agent.team.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {agent.team.name}
              </p>
              <p className="text-xs text-gray-500">
                {agent.team.companyInfo.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {agent.mediaContent.length} 个媒体内容
          </div>
          <button className="text-primary-500 hover:text-primary-600 text-sm font-medium transition-colors">
            查看详情 →
          </button>
        </div>
      </div>
    </motion.div>
  )
} 