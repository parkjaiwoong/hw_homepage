import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'

const technologies = [
  {
    title: '실시간 배차',
    description: '알고리즘 기반 실시간 배차 시스템으로 효율적인 기사 매칭을 제공합니다.',
    features: [
      '거리 및 이동시간 기반 배차 최적화',
      '기사 실적 및 평점 반영',
      '지역별 수요 분석',
      '자동 재배차 기능',
    ],
  },
  {
    title: '관제 시스템',
    description: '실시간 위치 추적 및 진행 상황 모니터링을 통한 배차 관리 기능을 제공합니다.',
    features: [
      '실시간 GPS 위치 추적',
      '배차 상태 업데이트',
      '대시보드 기반 통합 모니터링',
      '알림 및 이벤트 관리',
    ],
  },
  {
    title: '정산 자동화',
    description: '배차부터 완료까지의 데이터를 자동으로 수집하고 정산하는 시스템입니다.',
    features: [
      '자동 요금 계산 및 정산',
      '다양한 정산 주기 지원',
      '정산 내역 자동 생성',
      '정산 정확도 개선',
    ],
  },
  {
    title: 'API 연동',
    description: '기존 시스템과의 연동을 위한 RESTful API를 제공합니다.',
    features: [
      'RESTful API 제공',
      '웹훅(Webhook) 지원',
      '실시간 데이터 동기화',
      '다양한 인증 방식 지원',
    ],
  },
  {
    title: '로그 및 이력',
    description: '모든 배차 과정을 기록하여 운영 투명성과 데이터 분석을 지원합니다.',
    features: [
      '전체 배차 이력 저장',
      '상세 로그 기록',
      '검색 및 필터링 기능',
      '데이터 분석 및 리포트',
    ],
  },
  {
    title: '보안',
    description: '엔터프라이즈 수준의 보안 체계로 데이터와 시스템을 보호합니다.',
    features: [
      '데이터 암호화',
      '접근 권한 관리',
      '정기적인 보안 업데이트',
      '개인정보 보호 준수',
    ],
  },
]

export default function Technology() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-white border-b border-gray-200">
        <Container>
          <div className="max-w-4xl mx-auto pt-16 pb-12">
            <h1 className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Solutions
            </h1>
            <p className="text-lg text-gray-600">
              검증된 기술로 구축된 안정적이고 확장 가능한 플랫폼 솔루션
            </p>
          </div>
        </Container>
      </Section>

      {/* Technologies Grid */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{tech.description}</p>
                <ul className="space-y-2.5">
                  {tech.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-gray-600 flex items-start"
                    >
                      <span className="mr-2.5 text-gray-400">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Architecture Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
                시스템 아키텍처
              </h2>
              <p className="text-lg text-gray-600">
                확장 가능한 마이크로서비스 기반 시스템 구조
              </p>
            </div>

            <div className="border border-gray-200 p-8">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-10 h-10 border border-gray-300 flex items-center justify-center bg-white">
                    <span className="text-gray-900 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      마이크로서비스 구조
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      각 기능을 독립적인 서비스로 분리하여 유지보수성과 확장성을 향상시킵니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-10 h-10 border border-gray-300 flex items-center justify-center bg-white">
                    <span className="text-gray-900 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      클라우드 네이티브
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      클라우드 환경에 최적화된 구조로 높은 가용성과 자동 스케일링을 지원합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-10 h-10 border border-gray-300 flex items-center justify-center bg-white">
                    <span className="text-gray-900 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      실시간 처리
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      WebSocket과 이벤트 기반 아키텍처로 실시간 데이터 처리 및 알림 기능을 제공합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-10 h-10 border border-gray-300 flex items-center justify-center bg-white">
                    <span className="text-gray-900 font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      데이터 분석
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      대용량 데이터를 효율적으로 처리하고 분석할 수 있는 인프라를 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Links */}
      <Section className="bg-white border-t border-gray-200">
        <Container>
          <div className="max-w-6xl mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  제품
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  솔루션을 적용한 제품 포트폴리오를 확인하세요.
                </p>
                <Button href="/products" variant="outline">
                  제품 보기
                </Button>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  솔루션 문의
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  기술 스펙 및 도입 방안에 대한 상담을 제공합니다.
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
