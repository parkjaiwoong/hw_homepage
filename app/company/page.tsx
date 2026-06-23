import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'

export default function Company() {
  return (
    <>
      {/* Mini Hero Section */}
      <Section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-slate-950 to-slate-950 opacity-90"></div>
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                About Unnung
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              우리는 복잡한 비즈니스 프로세스를 단순화하고, 기업이 본질에 집중할 수 있도록 돕습니다.
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision - Bento Grid Style */}
      <Section className="bg-white py-20 relative">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                기술로 만드는 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">더 나은 비즈니스 세상</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Main Mission */}
              <div className="md:col-span-2 bg-slate-50 rounded-3xl p-10 border border-slate-100 hover:border-brand-200 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  주식회사 언넝은 기업의 업무 프로세스를 혁신적으로 개선하여 효율성과 단순성을 극대화합니다.
                  우리는 모든 기업이 "언넝(빠르게)" 성장할 수 있는 기반을 제공합니다.
                </p>
                <div className="mt-8 flex gap-4">
                  <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-brand-600 shadow-sm">🚀 Speed</span>
                  <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-accent-600 shadow-sm">💎 Quality</span>
                  <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-600 shadow-sm">🤝 Trust</span>
                </div>
              </div>

              {/* Card 2: Company Info */}
              <div className="bg-brand-600 rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                <ul className="space-y-4 text-brand-100">
                  <li className="flex justify-between border-b border-brand-500 pb-2">
                    <span>EST.</span>
                    <span className="font-semibold text-white">2024</span>
                  </li>
                  <li className="flex justify-between border-b border-brand-500 pb-2">
                    <span>Location</span>
                    <span className="font-semibold text-white">Seoul, KR</span>
                  </li>
                  <li className="flex justify-between pt-2">
                    <span>Field</span>
                    <span className="font-semibold text-white">B2B SaaS</span>
                  </li>
                </ul>
              </div>

              {/* Card 3: Core Values (Grid) */}
              <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Efficiency</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    불필요한 과정을 제거하고 핵심에 집중합니다. 시간은 가장 소중한 자원입니다.
                  </p>
                </div>

                <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                    <svg className="w-6 h-6 text-teal-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Transparency</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    투명한 정보 공유를 통해 신뢰를 구축합니다. 우리는 숨기는 것이 없습니다.
                  </p>
                </div>

                <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                    <svg className="w-6 h-6 text-indigo-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Partnership</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    단순한 공급자가 아닌, 고객의 성장을 함께 고민하는 파트너가 됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-slate-50 border-t border-slate-200 py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              언넝과 함께 성장하세요
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              우리는 더 나은 미래를 함께 만들어갈 파트너를 기다립니다.
            </p>
            <div className="flex justify-center gap-4">
              <Button href="/contact" variant="primary" className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-3">
                문의하기
              </Button>
              <Button href="/products" variant="outline" className="bg-white border-slate-300 px-8 py-3">
                제품 보기
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
