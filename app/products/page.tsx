import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Link from 'next/link'

const products = [
  {
    id: 'unnung-quick',
    name: '언넝 퀵',
    description: '실시간 배차 시스템을 제공하는 퀵서비스 플랫폼',
    problem: '전화 기반 배차 방식으로 인한 처리 지연 및 관리의 어려움',
    solution: '실시간 플랫폼 기반 자동 배차 시스템 구축',
    effect: '배차 처리 시간 단축 및 운영 비용 절감',
    href: '/products/unnung-quick',
  },
  {
    id: 'unnung-order',
    name: '언넝 오더',
    description: '주문 및 정산 프로세스 자동화 솔루션',
    problem: '수기 주문 관리 및 복잡한 정산 프로세스로 인한 비효율',
    solution: '통합 주문 관리 및 자동 정산 시스템 도입',
    effect: '주문 처리 효율 향상 및 정산 정확도 개선',
    href: '/products/unnung-order',
  },
  {
    id: 'unnung-erp',
    name: '언넝 ERP',
    description: '통합 업무 관리 시스템',
    problem: '여러 시스템 간 정보 단절 및 데이터 불일치로 인한 운영 복잡성',
    solution: '통합 ERP 시스템을 통한 업무 프로세스 일원화',
    effect: '업무 효율성 향상 및 데이터 정합성 확보 (2025년 출시 예정)',
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
          <div className="max-w-4xl mx-auto pt-16 pb-12">
            <h1 className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              제품
            </h1>
            <p className="text-lg text-gray-600">
              업무 효율성을 높이는 플랫폼 제품군
            </p>
          </div>
        </Container>
      </Section>

      {/* Products List */}
      <Section className="bg-white">
        <Container>
          <div className="space-y-24 py-16">
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
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

                  <div className="space-y-8 mb-10">
                    <div className="border-l-2 border-gray-300 pl-4">
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                        문제
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{product.problem}</p>
                    </div>

                    <div className="border-l-2 border-gray-300 pl-4">
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                        해결
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{product.solution}</p>
                    </div>

                    <div className="border-l-2 border-gray-900 pl-4">
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                        효과
                      </h3>
                      <p className="text-gray-900 font-medium leading-relaxed">
                        {product.effect}
                      </p>
                    </div>
                  </div>

                  {!product.comingSoon && (
                    <Button href={product.href} variant="primary">
                      상세 정보
                    </Button>
                  )}
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-sm aspect-video flex items-center justify-center">
                  <p className="text-sm text-gray-400 font-medium">{product.name}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Related Links */}
      <Section className="bg-gray-50 border-t border-gray-200">
        <Container>
          <div className="max-w-6xl mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  솔루션
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  제품의 기술적 세부사항과 솔루션 아키텍처를 확인하세요.
                </p>
                <Button href="/solutions" variant="outline">
                  솔루션 보기
                </Button>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  도입 문의
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  필요에 맞는 솔루션 도입을 위한 상담을 제공합니다.
                </p>
                <Button href="/contact" variant="primary">
                  문의하기
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
