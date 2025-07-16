export interface Partner {
  id: string
  name: string
  logo: string
  type: 'tech' | 'enterprise' | 'startup' | 'research'
  description: string
}

export const partners: Partner[] = [
  // 创业公司
  {
    id: 'perplexity',
    name: 'Perplexity',
    logo: '/logos/Perplexity.png',
    type: 'startup',
    description: 'AI 搜索创新'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    logo: '/logos/cursor.png',
    type: 'startup',
    description: 'AI 编程助手'
  },
  {
    id: 'flowith',
    name: 'Flowith',
    logo: '/logos/flowith.png',
    type: 'startup',
    description: 'AI 工作流平台'
  },
  {
    id: 'genspark',
    name: 'Genspark',
    logo: '/logos/Genspark.jpg',
    type: 'startup',
    description: 'AI 内容生成'
  },
  {
    id: 'lovable',
    name: 'Lovable',
    logo: '/logos/lovable.svg',
    type: 'startup',
    description: 'AI 情感计算'
  }
]

export const partnerTypes = [
  { key: 'tech', label: '科技公司', color: 'from-blue-500 to-cyan-500' },
  { key: 'enterprise', label: '企业伙伴', color: 'from-purple-500 to-pink-500' },
  { key: 'startup', label: '创业公司', color: 'from-green-500 to-emerald-500' },
  { key: 'research', label: '研究机构', color: 'from-orange-500 to-red-500' }
] 