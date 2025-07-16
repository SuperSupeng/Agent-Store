import { Agent } from '@/types'

export const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'Cursor',
    description: 'Cursor 是一个基于AI的代码编辑器，集成了强大的代码生成、重构和调试功能。它能够理解代码上下文，提供智能代码补全和实时错误检测，大幅提升开发效率。',
    shortDescription: 'AI 代码编辑器',
    logo: '/logos/cursor.png',
    website: 'https://cursor.sh',
    category: '开发工具',
    industry: '科技',
    tags: ['AI编程', '代码生成', '代码调试'],
    createdAt: '2023-01-15',
    team: {
      name: 'Cursor Team',
      description: '专注于AI编程工具的创新团队',
      founders: [
        {
          name: 'Michael Truell',
          title: 'CEO & 联合创始人',
          bio: '前Google工程师，专注于AI和开发工具领域',
          avatar: '/api/placeholder/60/60',
          linkedin: 'https://linkedin.com/in/michael-truell'
        }
      ],
      contact: {
        email: 'hello@cursor.sh',
        twitter: '@cursor_ai',
        linkedin: 'https://linkedin.com/company/cursor-ai'
      },
      companyInfo: {
        founded: '2023年',
        funding: '种子轮 1000万美元',
        techStack: ['TypeScript', 'React', 'Node.js', 'OpenAI', 'VSCode'],
        location: '旧金山'
      }
    },
    mediaContent: [
      {
        id: '1',
        title: 'Cursor: 重新定义AI编程体验',
        summary: '深度解析Cursor如何通过AI技术改变开发者的编程体验...',
        source: 'TechCrunch',
        url: 'https://techcrunch.com/cursor-ai-programming',
        publishedAt: '2024-01-20',
        type: 'article'
      }
    ]
  },
  {
    id: '2',
    name: 'Manus',
    description: 'Manus 是一个专注于手部追踪和手势识别的AI技术公司，为VR/AR、游戏和工业应用提供高精度的手部交互解决方案。',
    shortDescription: '高精度手部追踪和手势识别技术',
    logo: '/logos/manus.png',
    website: 'https://manus.com',
    category: '计算机视觉',
    industry: '科技',
    tags: ['手部追踪', '手势识别', 'VR/AR', '人机交互'],
    createdAt: '2023-01-10',
    team: {
      name: 'Manus Team',
      description: '专注于手部追踪技术的创新团队',
      founders: [
        {
          name: 'Bart Loosman',
          title: 'CEO & 联合创始人',
          bio: '计算机视觉专家，拥有15年VR/AR技术开发经验',
          avatar: '/api/placeholder/60/60',
          linkedin: 'https://linkedin.com/in/bart-loosman'
        }
      ],
      contact: {
        email: 'info@manus.com',
        twitter: '@manus_vr',
        linkedin: 'https://linkedin.com/company/manus-vr'
      },
      companyInfo: {
        founded: '2014年',
        funding: 'B轮 1500万美元',
        techStack: ['C++', 'OpenCV', 'Unity', 'Unreal Engine', 'TensorFlow'],
        location: '荷兰埃因霍温'
      }
    },
    mediaContent: [
      {
        id: '2',
        title: 'Manus Pro: 专业级手部追踪解决方案',
        summary: '探索Manus Pro如何为VR/AR行业带来革命性的手部交互体验...',
        source: 'VRScout',
        url: 'https://vrscout.com/manus-pro-review',
        publishedAt: '2024-01-15',
        type: 'article'
      }
    ]
  },
  {
    id: '3',
    name: 'Flowith',
    description: 'Flowith 是一个智能工作流自动化平台，帮助企业通过AI技术优化业务流程，提高工作效率和决策质量。',
    shortDescription: '智能工作流自动化平台',
    logo: '/logos/flowith.png',
    website: 'https://flowith.com',
    category: '工作流自动化',
    industry: '企业服务',
    tags: ['工作流', '自动化', '业务流程', 'AI决策'],
    createdAt: '2023-01-05',
    team: {
      name: 'Flowith Team',
      description: '专注于工作流自动化的创新团队',
      founders: [
        {
          name: 'Alex Chen',
          title: 'CEO & 联合创始人',
          bio: '前微软产品经理，企业软件和AI专家',
          avatar: '/api/placeholder/60/60',
          linkedin: 'https://linkedin.com/in/alex-chen'
        }
      ],
      contact: {
        email: 'hello@flowith.com',
        twitter: '@flowith_ai',
        linkedin: 'https://linkedin.com/company/flowith'
      },
      companyInfo: {
        founded: '2023年',
        funding: '种子轮 800万美元',
        techStack: ['Python', 'React', 'PostgreSQL', 'AWS', 'OpenAI'],
        location: '西雅图'
      }
    },
    mediaContent: [
      {
        id: '3',
        title: 'Flowith: 让工作流自动化更智能',
        summary: '了解Flowith如何通过AI技术重新定义工作流自动化...',
        source: 'Forbes',
        url: 'https://forbes.com/flowith-workflow-automation',
        publishedAt: '2024-01-10',
        type: 'article'
      }
    ]
  },
  {
    id: '4',
    name: 'Lovable',
    description: 'Lovable 是一个AI驱动的客户关系管理平台，帮助企业建立更深入、更有意义的客户关系，提升客户满意度和忠诚度。',
    shortDescription: 'AI驱动的客户关系管理平台',
    logo: '/logos/lovable.svg',
    website: 'https://lovable.com',
    category: '客户关系管理',
    industry: '企业服务',
    tags: ['CRM', '客户关系', 'AI分析', '客户体验'],
    createdAt: '2023-02-01',
    team: {
      name: 'Lovable Team',
      description: '专注于客户关系管理的创新团队',
      founders: [
        {
          name: 'Sarah Johnson',
          title: 'CEO & 联合创始人',
          bio: '前Salesforce产品总监，客户体验专家',
          avatar: '/api/placeholder/60/60',
          linkedin: 'https://linkedin.com/in/sarah-johnson'
        }
      ],
      contact: {
        email: 'hello@lovable.com',
        twitter: '@lovable_crm',
        linkedin: 'https://linkedin.com/company/lovable-crm'
      },
      companyInfo: {
        founded: '2023年',
        funding: 'A轮 1200万美元',
        techStack: ['React', 'Node.js', 'MongoDB', 'AWS', 'OpenAI'],
        location: '纽约'
      }
    },
    mediaContent: [
      {
        id: '4',
        title: 'Lovable: 重新定义客户关系管理',
        summary: '探索Lovable如何通过AI技术改变企业与客户的互动方式...',
        source: 'Business Insider',
        url: 'https://businessinsider.com/lovable-crm-ai',
        publishedAt: '2024-01-25',
        type: 'article'
      }
    ]
  },
  {
    id: '5',
    name: 'Lovart',
    description: 'Lovart 是一个AI艺术创作平台，为用户提供智能化的艺术创作工具，支持多种艺术风格和创作形式，让每个人都能成为艺术家。',
    shortDescription: 'AI艺术创作平台',
    logo: '/logos/lovart.png',
    website: 'https://lovart.ai',
    category: '内容创作',
    industry: '创意产业',
    tags: ['AI艺术', '创意工具', '数字艺术', '生成式AI'],
    createdAt: '2023-03-01',
    team: {
      name: 'Lovart Team',
      description: '专注于AI艺术创作的创新团队',
      founders: [
        {
          name: 'Emma Davis',
          title: 'CEO & 联合创始人',
          bio: '前Adobe创意总监，AI艺术和设计专家',
          avatar: '/api/placeholder/60/60',
          linkedin: 'https://linkedin.com/in/emma-davis'
        }
      ],
      contact: {
        email: 'hello@lovart.ai',
        twitter: '@lovart_ai',
        linkedin: 'https://linkedin.com/company/lovart-ai'
      },
      companyInfo: {
        founded: '2023年',
        funding: '种子轮 600万美元',
        techStack: ['Python', 'React', 'TensorFlow', 'AWS', 'Stable Diffusion'],
        location: '洛杉矶'
      }
    },
    mediaContent: [
      {
        id: '5',
        title: 'Lovart: AI让艺术创作更简单',
        summary: '了解Lovart如何通过AI技术 democratize 艺术创作...',
        source: 'The Verge',
        url: 'https://theverge.com/lovart-ai-art-creation',
        publishedAt: '2024-01-30',
        type: 'article'
      }
    ]
  },
  {
    id: '6',
    name: 'Wegic',
    description: 'Wegic 是一个智能电商解决方案平台，通过AI技术为电商企业提供个性化推荐、智能定价、库存优化和客户行为分析等全方位服务。',
    shortDescription: 'AI驱动的智能电商解决方案',
    logo: '/logos/wegic.jpg',
    website: 'https://wegic.com',
    category: '数据分析',
    industry: '电商',
    tags: ['电商', '个性化推荐', '智能定价', '库存管理'],
    createdAt: '2023-02-15',
    team: {
      name: 'Wegic Team',
      description: '专注于电商AI解决方案的创新团队',
      founders: [
        {
          name: 'David Wang',
          title: 'CEO & 联合创始人',
          bio: '前阿里巴巴技术专家，电商AI和机器学习专家',
          avatar: '/api/placeholder/60/60',
          linkedin: 'https://linkedin.com/in/david-wang'
        }
      ],
      contact: {
        email: 'hello@wegic.com',
        twitter: '@wegic_ai',
        linkedin: 'https://linkedin.com/company/wegic-ai'
      },
      companyInfo: {
        founded: '2023年',
        funding: 'A轮 2000万美元',
        techStack: ['Python', 'React', 'TensorFlow', 'AWS', 'Kubernetes'],
        location: '杭州'
      }
    },
    mediaContent: [
      {
        id: '6',
        title: 'Wegic: 重新定义电商AI体验',
        summary: '探索Wegic如何通过AI技术改变电商行业的运营模式...',
        source: 'TechNode',
        url: 'https://technode.com/wegic-ecommerce-ai',
        publishedAt: '2024-02-01',
        type: 'article'
      }
    ]
  },
  {
    id: '7',
    name: 'Genspark',
    description: 'Genspark 是一个AI代码生成平台，专注于为开发者提供高质量的代码生成、重构和优化服务，支持多种编程语言和框架。',
    shortDescription: 'AI代码生成和优化平台',
    logo: '/logos/Genspark.jpg',
    website: 'https://genspark.ai',
    category: '开发工具',
    industry: '科技',
    tags: ['代码生成', 'AI编程', '代码优化', '开发工具'],
    createdAt: '2023-01-20',
    team: {
      name: 'Genspark Team',
      description: '专注于AI代码生成的创新团队',
      founders: [
        {
          name: 'Lisa Zhang',
          title: 'CEO & 联合创始人',
          bio: '前GitHub高级工程师，AI和代码生成专家',
          avatar: '/api/placeholder/60/60',
          linkedin: 'https://linkedin.com/in/lisa-zhang'
        }
      ],
      contact: {
        email: 'hello@genspark.ai',
        twitter: '@genspark_ai',
        linkedin: 'https://linkedin.com/company/genspark-ai'
      },
      companyInfo: {
        founded: '2023年',
        funding: '种子轮 1500万美元',
        techStack: ['TypeScript', 'Python', 'OpenAI', 'Vercel', 'PostgreSQL'],
        location: '旧金山'
      }
    },
    mediaContent: [
      {
        id: '7',
        title: 'Genspark: AI代码生成的新标准',
        summary: '了解Genspark如何通过AI技术提升开发者的编程效率...',
        source: 'VentureBeat',
        url: 'https://venturebeat.com/genspark-ai-code-generation',
        publishedAt: '2024-02-05',
        type: 'article'
      }
    ]
  },
  {
    id: '8',
    name: 'Head',
    description: 'Head 是一个AI驱动的智能客服平台，通过自然语言处理和机器学习技术，为企业提供24/7的智能客服解决方案。',
    shortDescription: 'AI智能客服平台',
    logo: '/logos/Head.webp',
    website: 'https://head.ai',
    category: '客户关系管理',
    industry: '企业服务',
    tags: ['智能客服', '客户服务', 'AI对话'],
    createdAt: '2023-03-10',
    team: {
      name: 'Head Team',
      description: '专注于AI客服技术的创新团队',
      founders: [
        {
          name: 'Tom Anderson',
          title: 'CEO & 联合创始人',
          bio: '前Zendesk产品总监，客服AI和NLP专家',
          avatar: '/api/placeholder/60/60',
          linkedin: 'https://linkedin.com/in/tom-anderson'
        }
      ],
      contact: {
        email: 'hello@head.ai',
        twitter: '@head_ai',
        linkedin: 'https://linkedin.com/company/head-ai'
      },
      companyInfo: {
        founded: '2023年',
        funding: '种子轮 900万美元',
        techStack: ['Python', 'React', 'OpenAI', 'FastAPI', 'Redis'],
        location: '奥斯汀'
      }
    },
    mediaContent: [
      {
        id: '8',
        title: 'Head: 重新定义智能客服体验',
        summary: '探索Head如何通过AI技术改变企业客服模式...',
        source: 'Customer Experience Today',
        url: 'https://cxtoday.com/head-ai-customer-service',
        publishedAt: '2024-02-10',
        type: 'article'
      }
    ]
  },
  {
    id: '9',
    name: 'Perplexity',
    description: 'Perplexity 是一个AI驱动的智能搜索和问答平台，通过先进的自然语言处理技术，为用户提供准确、实时的信息检索和知识问答服务。',
    shortDescription: 'AI智能搜索和问答平台',
    logo: '/logos/Perplexity.png',
    website: 'https://perplexity.ai',
    category: '数据分析',
    industry: '科技',
    tags: ['智能搜索', '问答系统', '知识检索', 'AI对话'],
    createdAt: '2022-12-01',
    team: {
      name: 'Perplexity Team',
      description: '专注于AI搜索和问答技术的创新团队',
      founders: [
        {
          name: 'Aravind Srinivas',
          title: 'CEO & 联合创始人',
          bio: '前OpenAI研究员，搜索AI和NLP专家',
          avatar: '/api/placeholder/60/60',
          linkedin: 'https://linkedin.com/in/aravind-srinivas'
        }
      ],
      contact: {
        email: 'hello@perplexity.ai',
        twitter: '@perplexity_ai',
        linkedin: 'https://linkedin.com/company/perplexity-ai'
      },
      companyInfo: {
        founded: '2022年',
        funding: 'B轮 2500万美元',
        techStack: ['Python', 'React', 'OpenAI', 'PostgreSQL', 'Elasticsearch'],
        location: '旧金山'
      }
    },
    mediaContent: [
      {
        id: '9',
        title: 'Perplexity: 重新定义AI搜索体验',
        summary: '了解Perplexity如何通过AI技术改变信息检索方式...',
        source: 'The Information',
        url: 'https://theinformation.com/perplexity-ai-search',
        publishedAt: '2024-02-15',
        type: 'article'
      }
    ]
  }
]

export const categories = [
  '全部',
  '开发工具',
  '计算机视觉',
  '工作流自动化',
  '客户关系管理',
  '内容创作',
  '数据分析',
  '教育',
  '医疗',
  '金融'
]

export const industries = [
  '全部',
  '科技',
  '企业服务',
  '创意产业',
  '电商',
  '金融',
  '教育',
  '医疗',
  '制造业',
  '服务业'
] 