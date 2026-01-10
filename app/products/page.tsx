import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Link from 'next/link'

const products = [
  {
    id: 'unnung-quick',
    name: '언넝 퀵',
    description: '실시간 배차가 가능한 퀵서비스 플랫폼',
    problem: '전화 기반 배차로 인한 지연과 비효율성',
    solution: '실시간 플랫폼 기반 즉시 배차 시스템',
    effect: '배차 시간 90% 단축, 운영 비용 30% 절감',
    href: '/products/unnung-quick',
  },
  {
    id: 'unnung-order',
    name: '언넝 오더',
    description: '주문 및 정산 자동화 시스템',
    problem: '수기 주문 관리와 복잡한 정산 프로세스',
    solution: '통합 주문 관리 및 자동 정산 시스템',
    effect: '주문 처리 시간 50% 단축, 정산 오류 제로',
    href: '/products/unnung-order',
  },
  {
    id: 'unnung-erp',
    name: '언넝 ERP',
    description: '통합 업무 관리 시스템',
    problem: '여러 시스템 간의 정보 단절과 데이터 불일치',
    solution: '통합 ERP 시스템으로 업무 프로세스 일원화',
    effect: '업무 효율성 향상, 데이터 정합성 확보 (2025년 출시 예정)',
    href: '#',
    comingSoon: true,
  },
]

export default function Products() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-white border-b border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              제품
            </h1>
            <p className="text-xl text-gray-600">
              업무 효율성을 높이는 플랫폼 제품군
            </p>
          </div>
        </Container>
      </Section>

      {/* Products List */}
      <Section className="bg-white">
        <Container>
          <div className="space-y-16">
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {product.name}
                    </h2>
                    {product.comingSoon && (
                      <span className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded-full">
                        출시 예정
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-gray-600 mb-8">
                    {product.description}
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">
                        문제
                      </h3>
                      <p className="text-gray-700">{product.problem}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
                        해결
                      </h3>
                      <p className="text-gray-700">{product.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
                        효과
                      </h3>
                      <p className="text-gray-700 font-medium">
                        {product.effect}
                      </p>
                    </div>
                  </div>

                  {!product.comingSoon && (
                    <Button href={product.href} variant="primary">
                      자세히 알아보기
                    </Button>
                  )}
                </div>

                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg
                      className="w-24 h-24 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <p className="text-sm">{product.name} 이미지</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              맞춤형 솔루션이 필요하신가요?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              전문 상담을 통해 최적의 제품을 추천해드립니다.
            </p>
            <Button href="/contact" variant="primary">
              도입 문의하기
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
