import Link from 'next/link'
import Container from '@/components/Container'
import Section from '@/components/Section'

export default function NotFound() {
  return (
    <Section className="relative min-h-[calc(100vh-80px)] bg-slate-950 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-brand-900 opacity-50"></div>

      {/* Background Typo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
        <span className="text-[20vw] md:text-[30vw] font-bold text-slate-900/50 leading-none tracking-tighter mix-blend-overlay">
          404
        </span>
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center py-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-6">
            <span className="text-sm font-semibold text-brand-400">Page Not Found</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            페이지를<br />찾을 수 없습니다.
          </h1>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg mx-auto">
            요청하신 페이지가 삭제되었거나, 이름이 변경되었거나,
            일시적으로 사용할 수 없습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-500/30 transition-all duration-300"
            >
              홈으로 돌아가기
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              문의하기
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
