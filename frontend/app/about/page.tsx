'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PartnerWall from '@/components/PartnerWall'
import Link from 'next/link'
import { ArrowRight, Globe, Users, Zap, Shield } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Gradient Background */}
        <div className="absolute inset-0 gradient-bg"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-primary-500 text-primary-500 text-sm font-medium"
            >
              关于我们
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              构建开放、中立、创新的
              <br />
              <span className="text-primary-600">AI Native Agent</span> 生态平台
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              我们致力于连接 AI Agent 开发者与用户，打造一个繁荣、开放、中立的生态系统
            </motion.p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 right-20 w-16 h-16 bg-primary-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            x: [10, -10, 10],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-12 h-12 bg-primary-500 rounded-full opacity-30"
        />
      </section>

      {/* Main Content */}
      <main className="relative z-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          {/* 核心理念 */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6"
              >
                <Zap className="w-8 h-8 text-primary-600" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                我们的核心理念
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                以开放、中立、创新为基石，构建下一代 AI Agent 生态
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-primary-50 to-orange-50 p-8 rounded-2xl border border-primary-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 pr-16">开放协作</h3>
                <p className="text-gray-600 leading-relaxed">
                  我们相信开放的力量。Agent Store 致力于构建一个开放的平台，让所有参与者都能平等地贡献和受益，共同推动 AI Agent 生态的发展。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute top-4 right-4 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 pr-16">中立公正</h3>
                <p className="text-gray-600 leading-relaxed">
                  作为平台方，我们保持中立立场，不偏袒任何特定技术或厂商，确保生态的公平竞争环境，让最优秀的 Agent 脱颖而出。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute top-4 right-4 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 pr-16">创新驱动</h3>
                <p className="text-gray-600 leading-relaxed">
                  我们鼓励创新，支持前沿的 AI Native Agent 技术发展，为开发者提供展示和推广的平台，推动整个行业的进步。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 pr-16">生态共建</h3>
                <p className="text-gray-600 leading-relaxed">
                  与合作伙伴一起共建繁荣的 AI Agent 生态，让每个人都能找到适合自己的 AI 助手，实现技术与价值的完美结合。
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* 为什么做这件事 */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                为什么我们要做这件事
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                在 AI 时代的关键节点，我们看到了机遇，也承担着责任
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "AI 时代的机遇与挑战",
                  description: "随着 AI 技术的快速发展，AI Native Agent 正在成为连接用户与 AI 服务的重要桥梁。我们看到了这个领域的巨大潜力，也看到了当前市场的碎片化问题。"
                },
                {
                  number: "02", 
                  title: "解决用户痛点",
                  description: "用户在选择和使用 AI Agent 时面临信息不对称、质量参差不齐、缺乏统一标准等问题。我们希望通过平台化的方式，为用户提供更好的发现和选择体验。"
                },
                {
                  number: "03",
                  title: "推动行业标准化", 
                  description: "通过建立开放的平台标准，我们希望推动 AI Agent 行业的规范化发展，让优秀的 Agent 能够被更多人发现和使用，促进整个生态的繁荣。"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {item.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 开放生态平台 */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-0"
          >
            <div className="bg-gradient-to-br from-gray-50 via-primary-50 to-orange-50 p-12 rounded-3xl border border-primary-100">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-2xl mb-6"
                >
                  <Globe className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  开放中立生态平台
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  与合作伙伴共建繁荣生态，让每个人都能在 AI 时代找到自己的位置
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: "🏢",
                    title: "企业合作伙伴",
                    description: "欢迎各类企业加入我们的生态，共同推广优质的 AI Agent 产品和服务，实现商业价值与技术创新的双赢。"
                  },
                  {
                    icon: "👨‍💻", 
                    title: "开发者社区",
                    description: "为开发者提供技术支持和推广渠道，让优秀的 Agent 作品被更多人看到，激发更多创新灵感。"
                  },
                  {
                    icon: "🎯",
                    title: "用户群体", 
                    description: "倾听用户需求，持续优化平台体验，为用户提供最优质的 AI Agent 选择，让技术真正服务于人。"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  我们相信，只有通过开放协作，才能构建真正繁荣的 AI Agent 生态。
                  <br />
                  无论您是 Agent 开发者、企业用户，还是对 AI 技术感兴趣的爱好者，
                  <br />
                  我们都欢迎您加入 Agent Store 的大家庭！
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/"
                    className="btn-primary inline-flex"
                  >
                    开始探索 Agent Store
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

        </div>
      </main>

      {/* Partner Wall */}
      <PartnerWall />

      {/* Footer */}
      <Footer />
    </div>
  )
} 