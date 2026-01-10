import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'

const technologies = [
  {
    title: '실시간 배차',
    description: 'AI 기반 실시간 배차 알고리즘으로 최적의 기사를 즉시 매칭합니다.',
    features: [
      '거리 및 이동시간 기반 최적 매칭',
      '기사 실적 및 평점 고려',
      '지역별 수요 예측 알고리즘',
      '자동 재배차 시스템',
    ],
    icon: (
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
    ),
  },
  {
    title: '관제 시스템',
    description: '실시간 위치 추적과 진행 상황 모니터링을 통해 모든 배차를 투명하게 관리합니다.',
    features: [
      '실시간 GPS 위치 추적',
      '배차 상태 실시간 업데이트',
      '대시보드 기반 통합 모니터링',
      '알림 및 이벤트 관리',
    ],
    icon: (
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
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: '정산 자동화',
    description: '배차부터 완료까지의 모든 데이터를 자동으로 수집하고 정산합니다.',
    features: [
      '자동 요금 계산 및 정산',
      '다양한 정산 주기 지원',
      '정산 내역 자동 생성',
      '정산 오류 최소화',
    ],
    icon: (
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
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'API 연동',
    description: '기존 시스템과의 원활한 연동을 위한 RESTful API를 제공합니다.',
    features: [
      'RESTful API 제공',
      '웹훅(Webhook) 지원',
      '실시간 데이터 동기화',
      '다양한 인증 방식 지원',
    ],
    icon: (
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
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: '로그 및 이력',
    description: '모든 배차 과정을 상세하게 기록하여 투명한 운영과 분석이 가능합니다.',
    features: [
      '전체 배차 이력 저장',
      '상세 로그 기록',
      '검색 및 필터링 기능',
      '데이터 분석 및 리포트',
    ],
    icon: (
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: '보안',
    description: '엔터프라이즈급 보안으로 데이터와 시스템을 안전하게 보호합니다.',
    features: [
      '데이터 암호화',
      '접근 권한 관리',
      '정기적인 보안 업데이트',
      '개인정보 보호 준수',
    ],
    icon: (
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
    ),
  },
]

export default function Technology() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-white border-b border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technology & Solutions
            </h1>
            <p className="text-xl text-gray-600">
              검증된 기술로 구축된 안정적이고 확장 가능한 플랫폼
            </p>
          </div>
        </Container>
      </Section>

      {/* Technologies Grid */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-600 mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                확장 가능한 아키텍처
              </h2>
              <p className="text-lg text-gray-600">
                마이크로서비스 기반의 안정적인 시스템 구조
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      마이크로서비스 구조
                    </h3>
                    <p className="text-gray-600">
                      각 기능을 독립적인 서비스로 분리하여 유지보수성과 확장성을 높였습니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      클라우드 네이티브
                    </h3>
                    <p className="text-gray-600">
                      클라우드 환경에 최적화된 구조로 높은 가용성과 자동 스케일링을 지원합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      실시간 처리
                    </h3>
                    <p className="text-gray-600">
                      WebSocket과 이벤트 기반 아키텍처로 실시간 데이터 처리와 알림을 제공합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      데이터 분석
                    </h3>
                    <p className="text-gray-600">
                      대용량 데이터를 효율적으로 처리하고 분석할 수 있는 인프라를 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              기술 문의 및 컨설팅
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              기술 스펙과 도입 방안에 대한 상세한 상담을 제공합니다.
            </p>
            <Button href="/contact" variant="secondary">
              기술 문의하기
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
