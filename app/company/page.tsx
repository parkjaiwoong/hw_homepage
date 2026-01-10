import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'

export default function Company() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-white border-b border-gray-200">
        <Container>
          <div className="max-w-4xl mx-auto pt-16 pb-12">
            <h1 className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Company
            </h1>
            <p className="text-lg text-gray-600">
              업무 효율성 향상과 운영 최적화를 위한 플랫폼 솔루션 제공
            </p>
          </div>
        </Container>
      </Section>

      {/* Company Info */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="border border-gray-200 p-8 mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                회사 정보
              </h2>
              <div className="space-y-3 text-gray-600">
                <div>
                  <span className="font-semibold text-gray-900">회사명:</span> 주식회사 언넝
                </div>
                <div>
                  <span className="font-semibold text-gray-900">설립일:</span> 2024년
                </div>
                <div>
                  <span className="font-semibold text-gray-900">사업 분야:</span> B2B 플랫폼
                  서비스 / 업무 전산 솔루션
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
                회사 미션
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  주식회사 언넝은 기업의 업무 프로세스를 개선하여 효율성과 단순성을 높이는 것을 목표로 합니다. 
                  복잡한 업무 환경에서 효율성 향상과 비용 절감을 지원하며, 모든 이해관계자에게 가치를 
                  제공하는 플랫폼을 구축하고 있습니다.
                </p>
                <p className="text-lg">
                  제품 제공을 넘어 고객의 비즈니스 성과 향상을 위한 파트너로서 함께 성장하고자 합니다.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
                해결하고자 하는 문제
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-gray-300 pl-6 py-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    비효율적인 수기 업무 프로세스
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    많은 기업들이 여전히 수기 방식으로 업무를 처리하여 처리 시간이 지연되고 
                    오류가 발생합니다. 전화나 수기 배차, 수기 정산 등으로 인한 운영 비효율을 개선합니다.
                  </p>
                </div>

                <div className="border-l-2 border-gray-300 pl-6 py-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    정보 불투명성과 신뢰 부족
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    업무 프로세스의 불투명성으로 인해 화주, 퀵업체, 기사 간 정보 공유 및 신뢰 구축에 
                    어려움이 있습니다. 실시간 모니터링 및 투명한 정보 공유 기능을 제공합니다.
                  </p>
                </div>

                <div className="border-l-2 border-gray-300 pl-6 py-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    높은 운영 비용과 복잡한 정산
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    수기 정산 및 복잡한 프로세스로 인한 운영 비용 증가와 정산 오류 발생 문제가 있습니다. 
                    자동화된 정산 시스템 도입을 통해 비용을 절감하고 정산 정확도를 개선합니다.
                  </p>
                </div>

                <div className="border-l-2 border-gray-300 pl-6 py-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    시스템 간 정보 단절
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    여러 시스템 사용으로 인한 정보 단절 및 데이터 불일치 문제가 발생합니다. 
                    통합 플랫폼을 통해 정보를 일원화하고 운영 효율성을 향상시킵니다.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
                핵심 가치
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    효율성
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    모든 업무 프로세스를 최적화하여 시간과 비용을 절감합니다.
                  </p>
                </div>

                <div className="border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    투명성
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    모든 프로세스를 투명하게 공유하여 신뢰를 구축합니다.
                  </p>
                </div>

                <div className="border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    기술 개선
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    최신 기술을 도입하여 지속적으로 시스템을 개선합니다.
                  </p>
                </div>

                <div className="border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    파트너십
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    고객과 함께 성장하는 진정한 파트너가 되겠습니다.
                  </p>
                </div>
              </div>
            </div>
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
                  제품
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  언넝의 제품 포트폴리오를 확인하세요.
                </p>
                <Button href="/products" variant="outline">
                  제품 보기
                </Button>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  연락처
                </h2>
                <div className="space-y-3 text-gray-600 mb-6">
                  <div>
                    <span className="font-semibold text-gray-900">이메일:</span>{' '}
                    contact@unnung.com
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">전화:</span> 02-1234-5678
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">주소:</span> 서울특별시
                    강남구 테헤란로 123
                  </div>
                </div>
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
