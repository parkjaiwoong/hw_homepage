import Link from 'next/link'
import Container from '@/components/Container'
import Section from '@/components/Section'

export default function NotFound() {
  return (
    <Section className="bg-white min-h-screen flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center py-20">
          <h1 className="text-6xl md:text-8xl font-semibold text-gray-900 mb-6 tracking-tight">
            홈페이지 제작중
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            현재 페이지는 제작 중입니다.
            <br />
            곧 완성되어 제공될 예정입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors"
            >
              홈으로 이동
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
            >
              문의하기
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
