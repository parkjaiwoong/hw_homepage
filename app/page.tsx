import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              업무를 더 빠르고<br />
              단순하게 만드는 플랫폼 회사
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              주식회사 언넝은 퀵서비스 플랫폼을 포함한 다양한 업무 전산 제품을 통해<br />
              기업의 업무 효율성을 높이고 운영 비용을 절감합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/products" variant="primary">
                제품 살펴보기
              </Button>
              <Button href="/contact" variant="outline">
                도입 문의하기
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Value Proposition */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                빠른 배차
              </h3>
              <p className="text-gray-600">
                실시간 배차 시스템으로 즉시 매칭되어 업무 처리 시간을 최소화합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                안정적인 플랫폼
              </h3>
              <p className="text-gray-600">
                검증된 기술로 구축된 플랫폼으로 안정적인 서비스를 제공합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                비용 절감
              </h3>
              <p className="text-gray-600">
                자동화된 정산과 효율적인 운영으로 운영 비용을 크게 절감합니다.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              언넝 플랫폼으로 업무를 혁신하세요
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              전문 상담을 통해 최적의 솔루션을 제안해드립니다.
            </p>
            <Button href="/contact" variant="secondary">
              무료 상담 신청
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
