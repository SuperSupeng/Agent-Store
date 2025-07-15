import { Agent } from '@/types'

export const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'Atlas',
    description: 'Atlas 是一个智能客服 Agent，能够理解用户意图并提供个性化的客户服务体验。支持多语言对话，24/7 全天候服务。',
    shortDescription: '智能客服助手，24/7 全天候服务',
    logo: '/api/placeholder/80/80',
    website: 'https://atlas-ai.com',
    category: '客服',
    industry: '电商',
    tags: ['客服', '多语言', '24/7'],
    createdAt: '2024-01-15',
    team: {
      name: 'Atlas AI Team',
      description: '专注于智能客服解决方案的团队',
      founders: [
        {
          name: '张明',
          title: 'CEO & 联合创始人',
          bio: '前阿里巴巴技术专家，拥有10年AI产品开发经验',
          avatar: '/api/placeholder/60/60',
          linkedin: 'https://linkedin.com/in/zhangming'
        }
      ],
      contact: {
        email: 'hello@atlas-ai.com',
        twitter: '@atlas_ai',
        linkedin: 'https://linkedin.com/company/atlas-ai'
      },
      companyInfo: {
        founded: '2023年',
        funding: 'A轮 500万美元',
        techStack: ['React', 'Node.js', 'OpenAI', 'PostgreSQL'],
        location: '北京'
      }
    },
    mediaContent: [
      {
        id: '1',
        title: 'Atlas AI 如何改变客服行业',
        summary: '深度解析 Atlas AI 在客服领域的创新应用...',
        source: '微信公众号',
        url: 'https://example.com/article1',
        publishedAt: '2024-01-20',
        type: 'article'
      }
    ]
  },
  {
    id: '2',
    name: 'Pulse',
    description: 'Pulse 是一个营销自动化 Agent，帮助品牌制定个性化营销策略，优化广告投放效果，提升ROI。',
    shortDescription: '智能营销助手，优化广告投放效果',
    logo: '/api/placeholder/80/80',
    website: 'https://pulse-marketing.com',
    category: '营销',
    industry: '电商',
    tags: ['营销', '广告', 'ROI优化'],
    createdAt: '2024-01-10',
    team: {
      name: 'Pulse Marketing',
      description: '专注于营销自动化的创新团队',
      founders: [
        {
          name: '李华',
          title: 'CEO',
          bio: '前字节跳动产品经理，营销自动化专家',
          avatar: '/api/placeholder/60/60'
        }
      ],
      contact: {
        email: 'contact@pulse-marketing.com',
        twitter: '@pulse_marketing'
      },
      companyInfo: {
        founded: '2023年',
        techStack: ['Python', 'TensorFlow', 'React', 'AWS'],
        location: '上海'
      }
    },
    mediaContent: []
  },
  {
    id: '3',
    name: 'DataFlow',
    description: 'DataFlow 是一个数据分析 Agent，能够自动处理和分析大量数据，生成可视化报告和业务洞察。',
    shortDescription: '智能数据分析，自动生成业务洞察',
    logo: '/api/placeholder/80/80',
    website: 'https://dataflow.ai',
    category: '数据分析',
    industry: '金融',
    tags: ['数据分析', '可视化', '业务洞察'],
    createdAt: '2024-01-05',
    team: {
      name: 'DataFlow Analytics',
      description: '专业的数据分析和商业智能团队',
      founders: [
        {
          name: '王强',
          title: 'CTO',
          bio: '前腾讯数据科学家，机器学习专家',
          avatar: '/api/placeholder/60/60'
        }
      ],
      contact: {
        email: 'info@dataflow.ai',
        github: 'https://github.com/dataflow-ai'
      },
      companyInfo: {
        founded: '2023年',
        funding: '种子轮 200万美元',
        techStack: ['Python', 'Pandas', 'D3.js', 'Kubernetes'],
        location: '深圳'
      }
    },
    mediaContent: []
  }
]

export const categories = [
  '全部',
  '客服',
  '营销',
  '数据分析',
  '内容创作',
  '教育',
  '医疗',
  '金融'
]

export const industries = [
  '全部',
  '电商',
  '金融',
  '教育',
  '医疗',
  '制造业',
  '服务业',
  '科技'
] 