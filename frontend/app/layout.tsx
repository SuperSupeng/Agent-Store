import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SearchProvider } from '@/contexts/SearchContext'
import { ErrorBoundary } from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agent Store - 发现 AI Native Agent',
  description: 'Agent Store 是一个专注于展示 AI Native Agent 的平台',
  keywords: 'AI Native Agent, 人工智能, 智能助手, 自动化工具',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <ErrorBoundary>
          <SearchProvider>
            {children}
          </SearchProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
} 