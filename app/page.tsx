import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'

export default function Home() {
  return (
    <>
      {/* Hero Section - Colorful & Dense B2B Design */}
      <Section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 text-white selection:bg-brand-500 selection:text-white">

        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Main Gradient Field */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900 via-slate-950 to-slate-950 opacity-80"></div>

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
            }}
          ></div>

          {/* Animated Blobs */}
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-600/30 rounded-full blur-[100px] animate-float"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-float-slow"></div>
          <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-[80px] animate-pulse-slow"></div>
        </div>

        {/* Content */}
        <Container className="relative z-10 w-full pt-20 pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left: Text Content */}
              <div className="flex flex-col justify-center animate-fade-in-up">

                {/* Badge */}
                <div className="inline-flex self-start mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 backdrop-blur-md border border-white/20 text-brand-100 shadow-lg shadow-brand-500/10">
                    🚀 Next-Gen B2B Platform
                  </span>
                </div>

                {/* Heading */}
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] animate-fade-in-up"
                  style={{ animationDelay: '0.2s' }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-50 to-blue-200">
                    업무의 모든 흐름을
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400 mt-2">
                    하나로 연결하다
                  </span>
                </h1>

                {/* Description */}
                <p
                  className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl animate-fade-in-up"
                  style={{ animationDelay: '0.3s' }}
                >
                  언넝은 퀵서비스부터 정산까지, 기업 운영에 필요한 모든 솔루션을 제공합니다.
                  복잡한 업무는 저희에게 맡기고 <strong>성장</strong>에만 집중하세요.
                </p>

                {/* CTA Buttons */}
                <div
                  className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                  style={{ animationDelay: '0.4s' }}
                >
                  <Button href="/products" variant="primary" className="bg-brand-600 hover:bg-brand-500 text-white border-none shadow-lg shadow-brand-600/25 px-8 py-4 text-lg">
                    서비스 시작하기
                  </Button>
                  <Button href="/contact" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
                    도입 문의
                  </Button>
                </div>
              </div>

              {/* Right: Visual Element (Glass Cards) */}
              <div className="hidden lg:block relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="relative w-full aspect-square max-w-lg mx-auto">

                  {/* Abstract Central Visual */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-accent-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

                  {/* Floating Cards */}
                  {/* Card 1: Quick */}
                  <div className="absolute top-10 left-0 w-64 p-5 glass-dark rounded-2xl animate-float" style={{ animationDelay: '0s' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold">Q</div>
                      <div>
                        <div className="text-sm font-semibold text-white">Unnung Quick</div>
                        <div className="text-xs text-slate-400">실시간 배차 완료</div>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-[80%] bg-accent-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Card 2: Order */}
                  <div className="absolute bottom-20 right-0 w-72 p-6 glass-dark rounded-2xl animate-float-slow" style={{ animationDelay: '2s', zIndex: 20 }}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-sm text-slate-400 mb-1">이번 달 처리 건수</div>
                        <div className="text-3xl font-bold text-white">12,450+</div>
                      </div>
                      <div className="text-accent-400 text-sm font-semibold">+24% ▲</div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-8 bg-slate-700/50 rounded flex items-center px-3">
                        <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                        <div className="w-16 h-2 bg-slate-600 rounded"></div>
                      </div>
                      <div className="w-full h-8 bg-slate-700/50 rounded flex items-center px-3">
                        <div className="w-2 h-2 rounded-full bg-brand-400 mr-2"></div>
                        <div className="w-24 h-2 bg-slate-600 rounded"></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </Section>

      {/* Products Section - Clean but Polished */}
      <Section className="py-24 bg-white relative">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Products</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              기업 성장을 위한 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">핵심 솔루션</span>
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed">
              각 분야별 최적화된 전문 솔루션으로 업무의 복잡함을 줄이고 효율을 극대화하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-brand-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-brand-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">언넝 퀵</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                실시간 기사 매칭부터 배송 추적까지. 기업 물류 이동의 시작과 끝을 책임지는 퀵서비스 플랫폼입니다.
              </p>
              <Button href="/products/quick" variant="outline" className="w-full border-slate-200 group-hover:border-brand-600 group-hover:text-brand-600 transition-colors">
                자세히 보기
              </Button>
            </div>

            {/* Product 2 */}
            <div className="group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-brand-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-accent-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-accent-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-accent-600 transition-colors">언넝 오더</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                주문 접수부터 정산까지, 반복되는 업무를 자동화하여 휴먼 에러를 줄이고 시간을 절약합니다.
              </p>
              <Button href="/products/order" variant="outline" className="w-full border-slate-200 group-hover:border-accent-500 group-hover:text-accent-600 transition-colors">
                자세히 보기
              </Button>
            </div>

            {/* Product 3 (Coming Soon) */}
            <div className="group relative bg-slate-50/50 rounded-2xl p-8 border border-dashed border-slate-300 hover:border-slate-400 transition-all duration-300">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-slate-200 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wide">Coming Soon</span>
              </div>
              <div className="w-14 h-14 bg-slate-200 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-slate-400 mb-3">언넝 ERP</h4>
              <p className="text-slate-400 mb-6 leading-relaxed">
                인사, 재무, 자재 관리를 하나의 시스템으로 통합 관리하는 차세대 ERP 시스템입니다.
              </p>
              <div className="w-full py-4 text-center text-slate-400 text-sm font-medium cursor-not-allowed">
                2025년 하반기 출시 예정
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Feature / Infinite Scroll Logo Section (Optional) or Value Prop */}
      <Section className="bg-slate-900 py-20 border-y border-slate-800">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Imagine Partner Logos here */}
            <div className="h-12 flex items-center justify-center text-white font-bold text-xl">Partner 1</div>
            <div className="h-12 flex items-center justify-center text-white font-bold text-xl">Partner 2</div>
            <div className="h-12 flex items-center justify-center text-white font-bold text-xl">Partner 3</div>
            <div className="h-12 flex items-center justify-center text-white font-bold text-xl">Partner 4</div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-800 to-slate-950 opacity-100"></div>
        </div>
        <Container className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            지금 바로 언넝과 함께하세요
          </h2>
          <Button href="/contact" variant="primary" className="bg-white text-brand-900 hover:bg-slate-100 px-10 py-4 text-lg font-bold shadow-xl">
            무료 상담 신청하기
          </Button>
        </Container>
      </Section>
    </>
  )
}
