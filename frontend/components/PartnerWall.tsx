'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { partners } from '@/lib/partners'
import { ChevronDown, ExternalLink } from 'lucide-react'

export default function PartnerWall() {
  const [isExpanded, setIsExpanded] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const scrollPositionRef = useRef(0)
  const animationIdRef = useRef<number>()

  const displayedPartners = isExpanded ? partners : partners.slice(0, 12)
  
  // 创建重复的合作伙伴列表以实现无缝滚动（仅在未展开时）
  const repeatedPartners = isExpanded ? displayedPartners : [...displayedPartners, ...displayedPartners]

  // 自动滚动效果
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isExpanded) return

    const scrollSpeed = 0.5 // 滚动速度

    const scroll = () => {
      if (!isHovered) {
        scrollPositionRef.current += scrollSpeed
        if (scrollPositionRef.current >= scrollContainer.scrollWidth / 2) {
          scrollPositionRef.current = 0
        }
        scrollContainer.scrollLeft = scrollPositionRef.current
      }
      animationIdRef.current = requestAnimationFrame(scroll)
    }

    animationIdRef.current = requestAnimationFrame(scroll)

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [isHovered, isExpanded])

  return (
    <section className="pt-8 pb-16 bg-gradient-to-br from-gray-50 via-primary-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            共建伙伴
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            与来自全球的 AI 技术公司、研究机构、创业企业和开发者社区一起，共同构建开放、繁荣的 AI Agent 生态
          </p>
        </motion.div>

        {/* Horizontal Scrolling Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          {/* Gradient Overlays */}
          {!isExpanded && (
            <>
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 via-primary-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 via-primary-50 to-transparent z-10 pointer-events-none" />
            </>
          )}
          
          {/* Scroll Container */}
          <div
            ref={scrollRef}
            onMouseEnter={() => !isExpanded && setIsHovered(true)}
            onMouseLeave={() => !isExpanded && setIsHovered(false)}
            className={`${
              isExpanded 
                ? 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 py-8' 
                : 'flex space-x-8 overflow-x-hidden py-8 cursor-grab active:cursor-grabbing'
            }`}
            style={{ scrollBehavior: isHovered ? 'smooth' : 'auto' }}
          >
            {repeatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (index % displayedPartners.length) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group relative flex-shrink-0"
              >
                <div className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 ${
                  isExpanded ? '' : 'min-w-[200px]'
                }`}>
                  {/* Glow Effect */}
                  <motion.div
                    animate={{ 
                      opacity: [0.1, 0.4, 0.1],
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-primary-400 via-purple-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  />
                  
                  {/* Logo Container */}
                  <div className="relative z-10 flex flex-col items-center space-y-4">
                    <motion.div 
                      className="w-20 h-20 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center hidden">
                        <div className="text-white text-sm font-bold text-center">
                          {partner.name.split(' ').map(word => word[0]).join('')}
                        </div>
                      </div>
                    </motion.div>
                    
                    <div className="text-center">
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {partner.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {partner.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center"
                  >
                    <ExternalLink className="w-3 h-3 text-white" />
                  </motion.div>

                  {/* Floating Particles */}
                  <motion.div
                    animate={{ 
                      y: [-5, 5, -5],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="absolute -top-1 -left-1 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100"
                  />
                  <motion.div
                    animate={{ 
                      y: [5, -5, 5],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.7
                    }}
                    className="absolute -bottom-1 -right-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          {!isExpanded && (
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center"
            >
              <div className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">
                {isHovered ? '暂停滚动' : '自动滚动中'}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Expand/Collapse Button */}
        {partners.length > 12 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors border border-primary-200 shadow-lg hover:shadow-xl"
            >
              {isExpanded ? '收起' : `查看全部 (${partners.length})`}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-2"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-8"
        >
          {[
            { number: partners.length, label: '共建伙伴' },
            { number: '50+', label: 'AI Agent' },
            { number: '1000+', label: '用户群体' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-3xl md:text-4xl font-bold text-primary-600 mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 group-hover:text-primary-500 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 