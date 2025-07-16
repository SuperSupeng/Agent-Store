'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Tag } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Agent } from '@/types'
import { formatDate, truncateText } from '@/lib/utils'

interface AgentCardProps {
  agent: Agent
  index: number
}

// 图片错误处理组件
const ImageWithFallback = memo(({ src, alt, className }: { src: string; alt: string; className: string }) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    target.style.display = 'none'
    target.nextElementSibling?.classList.remove('hidden')
  }

  return (
    <>
      <img 
        src={src} 
        alt={alt}
        className={className}
        onError={handleError}
        loading="lazy"
      />
      <div className={`${className} bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center hidden`}>
        <span className="text-white font-bold text-lg">
          {alt.charAt(0)}
        </span>
      </div>
    </>
  )
})

ImageWithFallback.displayName = 'ImageWithFallback'

const AgentCard = memo(({ agent, index }: AgentCardProps) => {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/agent/${agent.id}`)
  }

  const handleExternalLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { 
          type: "spring",
          stiffness: 400,
          damping: 25,
          duration: 0.2
        }
      }}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
      onClick={handleCardClick}
    >
      {/* Card Header */}
      <div className="p-6 border-b border-gray-100 relative overflow-hidden">
        {/* Hover Background Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-50 to-purple-50"
          initial={{ opacity: 0, x: '-100%' }}
          whileHover={{ 
            opacity: 1, 
            x: '0%',
            transition: { 
              type: "spring",
              stiffness: 300,
              damping: 30
            }
          }}
        />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            {/* Logo and Name */}
            <div className="flex items-center space-x-4">
              <motion.div 
                className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }
                }}
              >
                <ImageWithFallback 
                  src={agent.logo} 
                  alt={`${agent.name} logo`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <motion.h3 
                  className="text-xl font-bold text-gray-900"
                  whileHover={{ 
                    color: '#f97316',
                    transition: { duration: 0.2 }
                  }}
                >
                  {agent.name}
                </motion.h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(agent.createdAt)}
                </p>
              </div>
            </div>

            {/* External Link */}
            <motion.a
              href={agent.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500"
              aria-label={`访问 ${agent.name} 官网`}
              onClick={handleExternalLinkClick}
              whileHover={{ 
                scale: 1.2,
                rotate: 15,
                color: '#ea580c',
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }
              }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Description */}
          <motion.p 
            className="text-gray-700 leading-relaxed"
            whileHover={{ 
              color: '#374151',
              transition: { duration: 0.2 }
            }}
          >
            {truncateText(agent.shortDescription, 120)}
          </motion.p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 relative">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {agent.tags.slice(0, 3).map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#fed7aa',
                color: '#ea580c',
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: tagIndex * 0.1 }}
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </motion.span>
          ))}
          {agent.tags.length > 3 && (
            <motion.span 
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#e5e7eb',
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }
              }}
            >
              +{agent.tags.length - 3}
            </motion.span>
          )}
        </div>

        {/* Category and Industry */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <motion.span 
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#dbeafe',
              color: '#1d4ed8',
              transition: { 
                type: "spring",
                stiffness: 400,
                damping: 25
              }
            }}
          >
            {agent.category}
          </motion.span>
          <motion.span 
            className="bg-green-100 text-green-800 px-2 py-1 rounded"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#dcfce7',
              color: '#15803d',
              transition: { 
                type: "spring",
                stiffness: 400,
                damping: 25
              }
            }}
          >
            {agent.industry}
          </motion.span>
        </div>

        {/* Team Info */}
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center space-x-3">
            <motion.div 
              className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
                transition: { 
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }
              }}
            >
              <span className="text-white text-xs font-medium">
                {agent.team.name.charAt(0)}
              </span>
            </motion.div>
            <div>
              <motion.p 
                className="text-sm font-medium text-gray-900"
                whileHover={{ 
                  color: '#111827',
                  transition: { duration: 0.2 }
                }}
              >
                {agent.team.name}
              </motion.p>
              <p className="text-xs text-gray-500">
                {agent.team.companyInfo.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <motion.div 
        className="px-6 py-4 bg-gray-50 border-t border-gray-100"
        whileHover={{ 
          backgroundColor: '#f9fafb',
          transition: { duration: 0.2 }
        }}
      >
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {agent.mediaContent.length} 个媒体内容
          </div>
          <motion.button 
            className="text-primary-500 text-sm font-medium"
            aria-label={`查看 ${agent.name} 详情`}
            onClick={handleCardClick}
            whileHover={{ 
              x: 5,
              color: '#ea580c',
              transition: { 
                type: "spring",
                stiffness: 400,
                damping: 25
              }
            }}
          >
            查看详情 →
          </motion.button>
        </div>
      </motion.div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-400/20 via-purple-400/20 to-blue-400/20 rounded-xl pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ 
          opacity: 1, 
          scale: 1,
          transition: { 
            type: "spring",
            stiffness: 300,
            damping: 30
          }
        }}
      />

      {/* Shadow Animation */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        initial={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
        whileHover={{ 
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          transition: { 
            type: "spring",
            stiffness: 300,
            damping: 30
          }
        }}
      />
    </motion.div>
  )
})

AgentCard.displayName = 'AgentCard'

export default AgentCard 