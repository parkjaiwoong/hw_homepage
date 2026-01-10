import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'

export default function UnnungQuick() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-white border-b border-gray-200">
        <Container>
          <div className="max-w-4xl mx-auto pt-16 pb-12">
            <h1 className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              언넝 퀵
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              실시간 배차 시스템을 제공하는 퀵서비스 플랫폼
            </p>
            <Button href="/contact" variant="primary">
              도입 문의
            </Button>
          </div>
        </Container>
      </Section>

      {/* Problem Section */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
                기존 운영 방식의 한계
              </h2>
              <p className="text-lg text-gray-600">
                전통적인 퀵서비스 운영 구조에서 발생하는 주요 문제점
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-2 border-gray-300 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  수기 배차의 비효율
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  전화나 수기 방식의 배차로 인해 시간이 지연되고 실시간 추적이 어렵습니다.
                </p>
              </div>

              <div className="border-l-2 border-gray-300 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  수익성 관리의 어려움
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  배차 최적화의 어려움으로 인한 수익성 저하 및 기사 수익 분배의 비효율적 운영이 발생합니다.
                </p>
              </div>

              <div className="border-l-2 border-gray-300 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  정보 불투명
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  배차 과정 및 진행 상황의 투명성 부족으로 이해관계자 간 정보 공유에 한계가 있습니다.
                </p>
              </div>

              <div className="border-l-2 border-gray-300 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  정산 프로세스의 복잡성
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  수기 정산으로 인한 오류와 지연, 그리고 복잡한 정산 프로세스로 운영 비용이 증가합니다.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Solution Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
                언넝 퀵의 솔루션
              </h2>
              <p className="text-lg text-gray-600">
                플랫폼 기반 퀵서비스 운영 시스템
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-10 h-10 border border-gray-300 flex items-center justify-center bg-white">
                  <span className="text-gray-900 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    실시간 자동 배차 시스템
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    알고리즘 기반 실시간 배차 시스템으로 거리, 이동시간, 기사 실적을 고려한 
                    최적 배차를 자동으로 수행합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-10 h-10 border border-gray-300 flex items-center justify-center bg-white">
                  <span className="text-gray-900 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    통합 관제 시스템
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    실시간 위치 추적 및 진행 상황 모니터링 기능을 제공하여 배차 내역을 체계적으로 관리합니다. 
                    화주, 퀵업체, 기사가 실시간으로 배차 상태를 확인할 수 있습니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-10 h-10 border border-gray-300 flex items-center justify-center bg-white">
                  <span className="text-gray-900 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    자동화된 정산 시스템
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    배차부터 완료까지의 데이터를 자동으로 수집 및 정산하여 정산 처리 효율을 향상시킵니다. 
                    정산 정확도를 개선하고 처리 시간을 단축합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-10 h-10 border border-gray-300 flex items-center justify-center bg-white">
                  <span className="text-gray-900 font-semibold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    데이터 기반 운영 최적화
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    배차 데이터 분석을 통해 운영 효율성을 지속적으로 개선합니다. 
                    지역별 수요 분석 및 기사 성과 평가 기능을 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-white border-t border-gray-200">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
                각 주체별 제공 가치
              </h2>
              <p className="text-lg text-gray-600">
                언넝 퀵은 모든 참여자가 활용할 수 있는 기능을 제공합니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 화주 */}
              <div className="border border-gray-200 p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    화주
                  </h3>
                  <div className="w-12 h-px bg-gray-300"></div>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">•</span>
                    <span>실시간 배차 처리 기능</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">•</span>
                    <span>배차 진행 상황 모니터링</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">•</span>
                    <span>자동 정산 시스템으로 운영 효율화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">•</span>
                    <span>배차 이력 자동 관리</span>
                  </li>
                </ul>
              </div>

              {/* 퀵업체 */}
              <div className="border border-gray-200 p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    퀵업체
                  </h3>
                  <div className="w-12 h-px bg-gray-300"></div>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">•</span>
                    <span>배차 효율 향상을 통한 수익성 개선</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">•</span>
                    <span>통합 관제 시스템으로 운영 관리 개선</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">•</span>
                    <span>데이터 분석 기반 운영 최적화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">•</span>
                    <span>정산 자동화로 관리 업무 효율화</span>
                  </li>
                </ul>
              </div>

              {/* 기사 */}
              <div className="border border-gray-200 p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    기사
                  </h3>
                  <div className="w-12 h-px bg-gray-300"></div>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">•</span>
                    <span>공정한 배차 시스템으로 수익 분배</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">•</span>
                    <span>자동 정산으로 정산 처리 시간 단축</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">•</span>
                    <span>명확한 배차 정보 제공으로 업무 효율 향상</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">•</span>
                    <span>이력 관리 기능으로 성과 추적</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-50 border-t border-gray-200">
        <Container>
            <div className="max-w-3xl mx-auto py-16 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              도입 문의
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              도입 상담 및 솔루션 컨설팅을 제공합니다.
            </p>
            <Button href="/contact" variant="primary">
              문의하기
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
