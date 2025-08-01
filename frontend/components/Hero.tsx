'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { mockAgents } from '@/lib/data'

export default function Hero() {
  // 预定义位置，避免每次渲染重新计算
  const agentPositions = [
    { top: '10%', left: '15%', size: 'w-16 h-16' },
    { top: '25%', left: '65%', size: 'w-16 h-16' },
    { top: '45%', left: '10%', size: 'w-16 h-16' },
    { top: '60%', left: '70%', size: 'w-16 h-16' },
    { top: '75%', left: '25%', size: 'w-16 h-16' },
    { top: '15%', left: '45%', size: 'w-16 h-16' },
    { top: '35%', left: '80%', size: 'w-16 h-16' },
    { top: '80%', left: '55%', size: 'w-16 h-16' },
    { top: '50%', left: '35%', size: 'w-16 h-16' }
  ]

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
              Your AI Loadout
            </div>

            {/* Main Headline */}
            <div className="space-y-7 mt-2 mb-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight space-y-4">
                <div>像换装备一样</div>
                <div className="mt-2 mb-2"><span className="text-primary-600">装配你的 AI 团队</span></div>
                <div>在任何任务中表现如专业团队</div>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-lg mt-4">
                从发现到装配，Agent Store 为你提供从 <b>发现 → 装配 → 进化</b> 的成为 AI 超级个体的最短路径。
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                问 Lucy 推荐
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                  // 假设首页锚点为 #agents，或直接跳转到 /agents 路由
                  // 推荐用路由跳转，保持 SPA 体验
                  window.location.href = '/#agents'
                }}
              >
                浏览 Agents
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Agent Logos Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
              {/* Agent Logos Container */}
              <div className="absolute inset-0 p-8">
                {/* Agent Logo Items - 使用预定义位置 */}
                {mockAgents.slice(0, 9).map((agent, index) => {
                  const position = agentPositions[index] || agentPositions[0]
                  const rotationAngle = (index % 3 - 1) * 5 // 轻微的旋转角度
                  
                  return (
                    <motion.div
                      key={agent.id}
                      initial={{ scale: 0, opacity: 0, rotate: 0 }}
                      animate={{ 
                        scale: [0, 1, 0.95, 1],
                        opacity: [0, 1, 0.9, 1],
                        rotate: [0, rotationAngle, -rotationAngle, rotationAngle]
                      }}
                      transition={{ 
                        duration: 2,
                        delay: index * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                      style={{
                        position: 'absolute',
                        top: position.top,
                        left: position.left,
                      }}
                      className={`${position.size} relative group`}
                    >
                      <motion.div 
                        className="w-full h-full bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        animate={{
                          scale: [1, 1.1, 0.95, 1],
                          y: [0, -8, 4, 0],
                          boxShadow: [
                            "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                            "0 20px 25px -5px rgba(59, 130, 246, 0.3)",
                            "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                          ]
                        }}
                        transition={{
                          duration: 4,
                          delay: index * 0.8,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      >
                        <img 
                          src={agent.logo} 
                          alt={`${agent.name} logo`}
                          className="w-3/4 h-3/4 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                            target.nextElementSibling?.classList.remove('hidden')
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center hidden">
                          <div className="text-white text-xs font-bold">
                            {agent.name.charAt(0)}
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Enhanced Glow Effect */}
                      <motion.div
                        animate={{ 
                          opacity: [0.2, 0.6, 0.2],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 3 + index * 0.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-primary-400 rounded-xl opacity-30 blur-sm"
                      />
                    </motion.div>
                  )
                })}
              </div>

              {/* Enhanced Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                  d="M 50 80 Q 150 40 250 120 T 450 60 T 650 100"
                  stroke="rgba(59, 130, 246, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
                />
                <motion.path
                  d="M 100 200 Q 200 160 300 240 T 500 180 T 700 220"
                  stroke="rgba(147, 51, 234, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 5, repeat: Infinity, repeatDelay: 1, delay: 1 }}
                />
                <motion.path
                  d="M 80 300 Q 180 260 280 340 T 480 280 T 680 320"
                  stroke="rgba(34, 197, 94, 0.3)"
                  strokeWidth="1.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 6, repeat: Infinity, repeatDelay: 1, delay: 2 }}
                />
              </svg>

              {/* Enhanced Center Glow */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.4, 0.1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-green-500 rounded-2xl opacity-20"
              />

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [-15, 15, -15],
                  x: [-5, 5, -5],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{ 
                  y: [15, -15, 15],
                  x: [5, -5, 5],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary-400 rounded-full opacity-30"
              />
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 -right-8 w-12 h-12 bg-purple-500 rounded-full opacity-25"
              />
            </div>
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