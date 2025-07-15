'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { mockAgents } from '@/lib/data'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Tag */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary-500 text-primary-500 text-sm font-medium">
              使命
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight space-y-2">
                <div>Agent Store:</div>
                <div><span className="text-primary-600">发现新一代</span></div>
                <div>AI Native Agent</div>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                专注于展示 AI Native Agent 的平台，为用户提供 AI 原生的 Agent 发现和交互体验。
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              开始探索
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Right Content - Agent Logos Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
              {/* Agent Logos Grid Container */}
              <div className="absolute inset-0 p-8">
                <div className="grid grid-cols-4 gap-4 h-full">
                  {/* Agent Logo Items */}
                  {mockAgents.map((agent, index) => (
                    <motion.div
                      key={agent.id}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0, 1, 0.8, 1],
                        opacity: [0, 1, 0.8, 1],
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 3 + Math.random() * 2,
                        delay: index * 0.1,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="relative group"
                    >
                      <div className="w-full h-full bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 overflow-hidden">
                        <img 
                          src={agent.logo} 
                          alt={`${agent.name} logo`}
                          className="w-3/4 h-3/4 object-contain"
                          onError={(e) => {
                            // 如果图片加载失败，回退到首字母显示
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center hidden">
                          <div className="text-white text-xs font-bold">
                            {agent.name.charAt(0)}
                          </div>
                        </div>
                      </div>
                      
                      {/* Glow Effect */}
                      <motion.div
                        animate={{ 
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        className="absolute inset-0 bg-primary-400 rounded-xl opacity-30 blur-sm"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                  d="M 50 50 Q 200 100 350 50 T 650 50"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.path
                  d="M 100 150 Q 250 200 400 150 T 700 150"
                  stroke="rgba(147, 51, 234, 0.3)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </svg>

              {/* Center Glow */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500 rounded-2xl opacity-20"
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full opacity-20"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-400 rounded-full opacity-30"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
} 