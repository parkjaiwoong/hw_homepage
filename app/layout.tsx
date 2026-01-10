import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '주식회사 언넝 - 업무를 더 빠르고 단순하게 만드는 플랫폼 회사',
  description: '언넝은 퀵서비스 플랫폼을 포함한 다양한 업무 전산 제품을 제공하는 B2B 플랫폼 회사입니다.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
