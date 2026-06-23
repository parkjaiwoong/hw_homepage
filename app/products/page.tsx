import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'

const products = [
  {
    id: 'unnung-quick',
    name: '언넝 퀵',
    description: '실시간 배차 시스템을 제공하는 퀵서비스 플랫폼',
    problem: '전화 기반 배차 방식으로 인한 처리 지연 및 관리의 어려움',
    solution: '실시간 플랫폼 기반 자동 배차 시스템 구축',
    effect: '배차 처리 시간 단축 및 운영 비용 절감',
    href: '/products/unnung-quick',
    color: 'from-brand-500 to-brand-700',
    iconColor: 'bg-brand-100 text-brand-600',
  },
  {
    id: 'unnung-order',
    name: '언넝 오더',
    description: '주문 및 정산 프로세스 자동화 솔루션',
    problem: '수기 주문 관리 및 복잡한 정산 프로세스로 인한 비효율',
    solution: '통합 주문 관리 및 자동 정산 시스템 도입',
    effect: '주문 처리 효율 향상 및 정산 정확도 개선',
    href: '/products',
    color: 'from-accent-400 to-accent-600',
    iconColor: 'bg-accent-100 text-accent-600',
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
    color: 'from-slate-400 to-slate-600',
    iconColor: 'bg-slate-100 text-slate-500',
  },
]

export default function Products() {
  return (
    <>
      {/* Mini Hero Section */}
      <Section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-brand-900 opacity-90"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Our Products
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              기업의 성장을 가속화하는 언넝의 핵심 솔루션을 소개합니다.
            </p>
          </div>
        </Container>
      </Section>

      {/* Products List */}
      <Section className="bg-slate-50 py-20">
        <Container>
          <div className="space-y-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-brand-300 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left: Visual Content */}
                  <div className={`relative p-10 lg:p-14 flex items-center justify-center bg-gradient-to-br ${product.color} overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/30">
                        {/* Ideally icons would be dynamic, using text placeholder for now */}
                        <span className="text-3xl font-bold text-white">{product.name.substring(3, 4)}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">{product.name}</h3>
                      {product.comingSoon && (
                        <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full backdrop-blur-sm border border-white/20 mt-2">Coming Soon</span>
                      )}
                    </div>
                  </div>

                  {/* Right: Text Content */}
                  <div className="p-10 lg:p-14 flex flex-col justify-center">
                    <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-6 mb-10">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                          <span className="text-red-500 text-sm font-bold">!</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Problem</h4>
                          <p className="text-slate-600">{product.problem}</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                          <span className="text-green-500 text-sm font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Solution</h4>
                          <p className="text-slate-600">{product.solution}</p>
                        </div>
                      </div>

                      <div className="pl-14">
                        <div className="p-4 bg-brand-50 rounded-xl border border-brand-100">
                          <p className="text-brand-700 font-semibold text-sm">
                            ✨ Effect: {product.effect}
                          </p>
                        </div>
                      </div>
                    </div>

                    {!product.comingSoon && (
                      <Button href={product.href} variant="primary" className="self-start">
                        상세 정보 보기
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Related Links */}
      <Section className="bg-white border-t border-slate-200 py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">아직 고민되시나요?</h2>
            <p className="text-lg text-slate-600 mb-10">
              전문 컨설턴트가 귀사의 상황에 맞는 최적의 솔루션을 제안해 드립니다.
            </p>
            <div className="flex justify-center gap-4">
              <Button href="/contact" variant="primary" className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-3">
                도입 문의하기
              </Button>
              <Button href="/solutions" variant="outline" className="px-8 py-3">
                솔루션 더보기
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
