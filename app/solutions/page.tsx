import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'

const technologies = [
  {
    title: '실시간 배차 엔진',
    description: '알고리즘 기반 실시간 배차 시스템으로 효율적인 기사 매칭을 제공합니다.',
    features: [
      '거리 및 이동시간 기반 배차 최적화',
      '기사 실적 및 평점 반영',
      '지역별 수요 분석',
      '자동 재배차 기능',
    ],
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: '통합 관제 시스템',
    description: '실시간 위치 추적 및 진행 상황 모니터링을 통한 배차 관리 기능을 제공합니다.',
    features: [
      '실시간 GPS 위치 추적',
      '배차 상태 업데이트',
      '대시보드 기반 통합 모니터링',
      '알림 및 이벤트 관리',
    ],
    gradient: 'from-accent-500 to-teal-500',
  },
  {
    title: '자동화 정산',
    description: '배차부터 완료까지의 데이터를 자동으로 수집하고 정산하는 시스템입니다.',
    features: [
      '자동 요금 계산 및 정산',
      '다양한 정산 주기 지원',
      '정산 내역 자동 생성',
      '정산 정확도 개선',
    ],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'API Gateway',
    description: '기존 시스템과의 유연한 연동을 위한 강력한 RESTful API를 제공합니다.',
    features: [
      'Standardized RESTful API',
      '실시간 Webhook 이벤트',
      'Oauth 2.0 인증',
      'Rate Limiting & Security',
    ],
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    title: 'Audit Logging',
    description: '모든 배차 과정을 기록하여 운영 투명성과 데이터 분석을 지원합니다.',
    features: [
      'Immutable Activity Logs',
      '상세 트랜잭션 추적',
      '실시간 검색/필터링',
      'Compliance Report',
    ],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Enterprise Security',
    description: '엔터프라이즈 수준의 보안 체계로 데이터와 시스템을 철저하게 보호합니다.',
    features: [
      'End-to-End Encryption',
      'Role-Based Access Control',
      '정기적인 보안 감수',
      'ISO27001 준수',
    ],
    gradient: 'from-slate-600 to-slate-800',
  },
]

export default function Solutions() {
  return (
    <>
      {/* Mini Hero Section */}
      <Section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950"></div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Technology Solutions
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              안정성과 확장성이 검증된 언넝의 기술 아키텍처를 소개합니다.
            </p>
          </div>
        </Container>
      </Section>

      {/* Technologies Grid */}
      <Section className="bg-white py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Technologies</h2>
            <p className="text-slate-500">비즈니스를 지탱하는 강력한 기술 모듈</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tech.gradient}`}></div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center mb-6 text-white font-bold text-lg shadow-lg`}>
                  {tech.title.substring(0, 1)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {tech.title}
                </h3>
                <p className="text-slate-500 mb-6 leading-relaxed text-sm min-h-[3rem]">{tech.description}</p>
                <div className="space-y-3 pt-6 border-t border-slate-100">
                  {tech.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="text-sm text-slate-600 flex items-center"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tech.gradient} mr-3`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Architecture Section - Step Process Style */}
      <Section className="bg-slate-50 py-24 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              System Architecture
            </h2>
            <p className="text-lg text-slate-600">
              안정적인 서비스를 위한 클라우드 네이티브 마이크로서비스 구조
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform md:-translate-x-1/2 hidden md:block"></div>

              <div className="space-y-12 md:space-y-24">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                  <div className="md:w-1/2 md:pr-12 text-center md:text-right order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-brand-600 mb-2">Microservices</h3>
                    <p className="text-slate-600">
                      각 기능을 독립적인 서비스로 분리하여<br />유지보수성과 확장성을 극대화합니다.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-brand-500 z-10 shadow-lg hidden md:flex">
                    <span className="text-brand-600 font-bold">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                      <div className="flex gap-2 mb-2">
                        <div className="h-2 w-2 rounded-full bg-red-400"></div>
                        <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                        <div className="h-2 w-2 rounded-full bg-green-400"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-slate-100 rounded w-3/4"></div>
                        <div className="h-2 bg-slate-100 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                  <div className="md:w-1/2 md:pr-12 order-1">
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-transparent"></div>
                      <div className="relative z-10 flex items-center justify-center h-20">
                        <span className="text-4xl">☁️</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-accent-500 z-10 shadow-lg hidden md:flex">
                    <span className="text-accent-600 font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left order-2">
                    <h3 className="text-2xl font-bold text-accent-600 mb-2">Cloud Native</h3>
                    <p className="text-slate-600">
                      클라우드 환경에 최적화된 구조로<br />높은 가용성과 자동 스케일링을 지원합니다.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                  <div className="md:w-1/2 md:pr-12 text-center md:text-right order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">Real-time Processing</h3>
                    <p className="text-slate-600">
                      WebSocket과 이벤트 기반 아키텍처로<br />밀리초 단위의 데이터 처리를 보장합니다.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-indigo-500 z-10 shadow-lg hidden md:flex">
                    <span className="text-indigo-600 font-bold">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">⚡</div>
                      <div className="flex-1 space-y-2">
                        <div className="h-2 bg-indigo-50 rounded w-full animate-pulse"></div>
                        <div className="h-2 bg-indigo-50 rounded w-2/3 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Links */}
      <Section className="bg-white border-t border-slate-200 py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">기술 도입 문의</h2>
            <p className="text-lg text-slate-600 mb-10">
              귀사의 시스템 환경에 맞는 최적의 기술 컨설팅을 제공합니다.
            </p>
            <div className="flex justify-center gap-4">
              <Button href="/contact" variant="primary" className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-3">
                도입 문의하기
              </Button>
              <Button href="/products" variant="outline" className="px-8 py-3">
                제품 보기
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
