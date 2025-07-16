'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ExternalLink, Calendar, MapPin, Users, Building, Mail, Twitter, Linkedin, Github, Play, FileText, Mic, Share2, Sparkles, Zap, Globe, Cpu, Database, Video, Star, TrendingUp, Award, Lightbulb, Target, Heart, Users2, BarChart3 } from 'lucide-react'
import { Agent } from '@/types'
import { mockAgents } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import LoadingSpinner from '@/components/LoadingSpinner'

// 动态粒子背景组件
const ParticleBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 gradient-bg">
        {/* 动态粒子 */}
        {dimensions.width > 0 && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-60"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        {/* 网格背景 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(249, 115, 22, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* 渐变光晕 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </div>
  )
}

// 玻璃拟态卡片组件
const GlassCard = ({ children, className = "", ...props }: any) => (
  <motion.div
    className={`backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl shadow-2xl ${className}`}
    style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
      boxShadow: '0 8px 32px 0 rgba(249, 115, 22, 0.1)'
    }}
    {...props}
  >
    {children}
  </motion.div>
)

// 理念卡片组件
const PhilosophyCard = ({ icon: Icon, title, content, className = "" }: any) => (
  <motion.div
    className={`p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 backdrop-blur-sm ${className}`}
    whileHover={{ scale: 1.02, y: -4 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
    </div>
  </motion.div>
)

// 媒体洞察卡片组件
const InsightCard = ({ content, className = "" }: any) => (
  <motion.div
    className={`p-6 rounded-xl bg-white/60 border border-primary-200 backdrop-blur-sm ${className}`}
    whileHover={{ scale: 1.01, y: -2 }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex items-start space-x-3">
      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
      <div className="flex-1">
        <p className="text-gray-700 leading-relaxed text-sm">{content}</p>
      </div>
    </div>
  </motion.div>
)

// 基础信息标签组件
const InfoTag = ({ icon: Icon, children, className = "" }: any) => (
  <motion.div
    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 border border-primary-200 ${className}`}
    whileHover={{ scale: 1.05 }}
  >
    <Icon className="w-3 h-3 mr-2 text-primary-600" />
    {children}
  </motion.div>
)

export default function AgentDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [agent, setAgent] = useState<Agent | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id = params.id as string
    const foundAgent = mockAgents.find(a => a.id === id)
    
    if (foundAgent) {
      setAgent(foundAgent)
    }
    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-bg">
        <div className="relative">
          <LoadingSpinner />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full blur-xl opacity-50"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    )
  }

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-bg">
        <GlassCard className="p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Agent 未找到</h1>
            <p className="text-gray-600 mb-6">抱歉，您查找的 Agent 不存在</p>
            <motion.button
              onClick={() => router.push('/')}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              返回首页
            </motion.button>
          </motion.div>
        </GlassCard>
      </div>
    )
  }

  const getMediaIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="w-4 h-4" />
      case 'podcast':
        return <Mic className="w-4 h-4" />
      case 'social':
        return <Share2 className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 backdrop-blur-xl bg-white/80 border-b border-primary-200"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-6">
            <motion.button
              onClick={() => router.back()}
              className="flex items-center text-gray-600 hover:text-primary-600 transition-colors mr-6 group"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-2 rounded-lg bg-primary-50 group-hover:bg-primary-100 transition-all duration-300">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="ml-2 font-medium">返回</span>
            </motion.button>
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
              <h1 className="text-xl font-semibold text-gray-900">产品洞察</h1>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section - 产品理念 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <GlassCard className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Logo & 产品名称 */}
              <div className="lg:col-span-4">
                <motion.div
                  className="relative w-40 h-40 mx-auto lg:mx-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Logo Container */}
                  <div className="relative w-full h-full">
                    {/* Background Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl blur-lg opacity-30"
                      animate={{ 
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    {/* Logo Border */}
                    <div className="relative w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-1">
                      {/* Logo Content */}
                      <div className="w-full h-full bg-white rounded-2xl overflow-hidden flex items-center justify-center">
                        <img
                          src={agent.logo}
                          alt={`${agent.name} logo`}
                          className="w-4/5 h-4/5 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                            target.nextElementSibling?.classList.remove('hidden')
                          }}
                        />
                        {/* Fallback */}
                        <div className="w-4/5 h-4/5 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center hidden">
                          <span className="text-white font-bold text-3xl">
                            {agent.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Subtle Shadow */}
                    <div className="absolute inset-0 rounded-3xl shadow-lg opacity-20" />
                  </div>
                </motion.div>
              </div>

              {/* 产品理念 */}
              <div className="lg:col-span-8">
                <div className="text-center lg:text-left">
                  <motion.h1 
                    className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {agent.name}
                  </motion.h1>
                  
                  <motion.p 
                    className="text-xl text-gray-600 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {agent.description}
                  </motion.p>

                  {/* 基础信息标签 */}
                  <motion.div 
                    className="flex items-center justify-center lg:justify-start space-x-3 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <InfoTag icon={Cpu}>{agent.category}</InfoTag>
                    <InfoTag icon={Globe}>{agent.industry}</InfoTag>
                    <InfoTag icon={Calendar}>{formatDate(agent.createdAt)}</InfoTag>
                  </motion.div>

                  <motion.a
                    href={agent.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    探索产品
                  </motion.a>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* 产品设计哲学 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              产品设计哲学
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              了解产品的核心设计理念和用户思考
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <PhilosophyCard
              icon={Target}
              title="用户洞察"
              content="深入理解用户需求，通过数据驱动和用户研究，打造真正解决痛点的产品体验。"
            />
            <PhilosophyCard
              icon={Heart}
              title="设计理念"
              content="以人为本的设计思维，追求简洁优雅的界面，让技术服务于人的需求。"
            />
            <PhilosophyCard
              icon={BarChart3}
              title="增长策略"
              content="通过产品驱动的增长模式，让优秀的产品自己说话，实现可持续的用户增长。"
            />
          </div>
        </motion.div>

        {/* 产品演示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <GlassCard className="p-8">
            <motion.h2 
              className="text-2xl font-bold text-gray-900 mb-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              产品演示
            </motion.h2>
            
            {agent.id === '1' ? (
              // Cursor 专用视频
              <div className="aspect-video bg-black rounded-2xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/logos/cursor.png"
                >
                  <source src="https://cursor.com/assets/landing/tab-video-dark.mp4" type="video/mp4" />
                  您的浏览器不支持视频播放。
                </video>
              </div>
            ) : (
              // 其他 Agent 的占位符
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-primary-300">
                <div className="text-center">
                  <Video className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                  <p className="text-gray-600">产品演示视频</p>
                  <p className="text-sm text-gray-500">点击播放了解产品功能</p>
                </div>
              </div>
            )}
          </GlassCard>
        </motion.div>

        {/* 团队信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <GlassCard className="p-8">
            <motion.h2 
              className="text-2xl font-bold text-gray-900 mb-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              团队信息
            </motion.h2>
            
            <div className="space-y-8">
              {/* 团队基本信息 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{agent.team.name}</h3>
                  <p className="text-gray-700 mb-6">{agent.team.description}</p>
                  
                  <div className="space-y-3 text-sm text-gray-600">
                    <p><span className="font-medium text-gray-900">成立时间：</span>{agent.team.companyInfo.founded}</p>
                    <p><span className="font-medium text-gray-900">地点：</span>{agent.team.companyInfo.location}</p>
                    {agent.team.companyInfo.funding && (
                      <p><span className="font-medium text-gray-900">融资情况：</span>{agent.team.companyInfo.funding}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">联系方式</h4>
                  <div className="space-y-3 text-sm">
                    <a
                      href={`mailto:${agent.team.contact.email}`}
                      className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {agent.team.contact.email}
                    </a>
                    {agent.team.contact.twitter && (
                      <a
                        href={`https://twitter.com/${agent.team.contact.twitter.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        <Twitter className="w-4 h-4 mr-2" />
                        {agent.team.contact.twitter}
                      </a>
                    )}
                    {agent.team.contact.linkedin && (
                      <a
                        href={agent.team.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* 创始人信息 */}
              {agent.team.founders.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Founder Team</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {agent.team.founders.map((founder, index) => (
                      <motion.div
                        key={index}
                        className="p-6 rounded-xl bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 backdrop-blur-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-xl">
                              {founder.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 text-lg mb-1">{founder.name}</h5>
                            <p className="text-primary-600 text-sm mb-2">{founder.title}</p>
                            <p className="text-gray-700 text-sm mb-3 leading-relaxed">{founder.bio}</p>
                            {founder.linkedin && (
                              <a
                                href={founder.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 transition-colors"
                              >
                                <Linkedin className="w-3 h-3 mr-1" />
                                LinkedIn
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </GlassCard>
        </motion.div>

        {/* 媒体洞察 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              产品洞察
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              从媒体报道中了解产品的设计思路和用户思考
            </motion.p>
          </div>

          {agent.mediaContent.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {agent.mediaContent.map((content, index) => (
                <motion.div
                  key={content.id}
                  className="p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-primary-500">
                      {getMediaIcon(content.type)}
                    </span>
                    <span className="text-sm text-gray-500 capitalize">{content.type}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{content.source}</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 text-lg mb-4">{content.title}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <InsightCard content={content.summary} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{formatDate(content.publishedAt)}</span>
                    <a
                      href={content.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    >
                      阅读全文
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-16 text-gray-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
            >
              <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-lg">暂无相关媒体内容</p>
              <p className="text-sm text-gray-400 mt-2">期待更多产品洞察分享</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
} 