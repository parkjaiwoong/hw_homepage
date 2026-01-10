'use client'

import { useEffect, useState } from 'react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      {/* Hero Section - 전체 화면 다이나믹 디자인 */}
      <Section className="relative bg-gradient-to-b from-white via-gray-50 to-white h-screen flex items-center border-b border-gray-200 overflow-hidden">
        {/* 다이나믹 배경 그리드 */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
              backgroundPosition: '0 0, 0 0'
            }}
          ></div>
        </div>

        {/* 부유하는 배경 요소들 */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        {/* 메인 콘텐츠 */}
        <Container className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* 왼쪽: 텍스트 콘텐츠 */}
              <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Badge */}
                <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <span className="inline-block px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-sm shadow-sm tracking-wider uppercase">
                    B2B 플랫폼 솔루션
                  </span>
                </div>
                
                {/* Main Heading */}
                <h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-6 leading-[1.1] tracking-tight animate-fade-in-up"
                  style={{ animationDelay: '0.4s' }}
                >
                  업무 효율성 향상과<br />
                  <span className="text-gray-600 font-light">운영 최적화를 위한</span><br />
                  <span className="relative">
                    플랫폼
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-900/20"></span>
                  </span>
                </h1>
                
                {/* Description */}
                <p 
                  className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl font-light animate-fade-in-up"
                  style={{ animationDelay: '0.6s' }}
                >
                  주식회사 언넝은 퀵서비스 플랫폼을 포함한 다양한 업무 전산 솔루션을 제공하여 기업의 운영 효율성과 비용 절감을 지원합니다.
                </p>

                {/* CTA Buttons */}
                <div 
                  className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                  style={{ animationDelay: '0.8s' }}
                >
                  <Button href="/products" variant="primary" className="text-base px-8 py-4 font-medium">
                    제품 보기
                  </Button>
                  <Button href="/company" variant="outline" className="text-base px-8 py-4 font-medium border-gray-300">
                    회사 소개
                  </Button>
                </div>
              </div>

              {/* 오른쪽: 비주얼 요소 */}
              <div className={`hidden lg:block relative ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} style={{ transitionDelay: '0.5s' }}>
                <div className="relative">
                  {/* 제품 카드 미리보기 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="w-10 h-10 bg-gray-900 rounded-sm mb-4"></div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">언넝 퀵</h3>
                      <p className="text-sm text-gray-600">실시간 배차 시스템</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 mt-8">
                      <div className="w-10 h-10 bg-gray-900 rounded-sm mb-4"></div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">언넝 오더</h3>
                      <p className="text-sm text-gray-600">자동화 정산</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 p-6 rounded-sm col-span-2">
                      <div className="w-10 h-10 bg-gray-400 rounded-sm mb-4"></div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">언넝 ERP</h3>
                      <p className="text-sm text-gray-600">통합 업무 관리 (출시 예정)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* 스크롤 인디케이터 */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-40"
          style={{ animationDelay: '1s' }}
        >
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </Section>

      {/* Products Overview */}
      <Section className="bg-white py-20 md:py-24 relative">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                제품
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
                업무 효율성 향상을 위한 플랫폼 제품군
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="group border border-gray-200 p-10 hover:border-gray-900 transition-all duration-500 hover:shadow-xl bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-900 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="mb-6 relative z-10">
                  <div className="w-14 h-14 bg-gray-900 rounded-sm mb-6 group-hover:scale-110 transition-transform duration-300"></div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-900 transition-colors">
                    언넝 퀵
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    실시간 배차 시스템을 제공하는 퀵서비스 플랫폼
                  </p>
                </div>
                <Button href="/products/unnung-quick" variant="outline" className="w-full group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all duration-300 relative z-10">
                  자세히 보기
                </Button>
              </div>

              <div className="group border border-gray-200 p-10 hover:border-gray-900 transition-all duration-500 hover:shadow-xl bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-900 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="mb-6 relative z-10">
                  <div className="w-14 h-14 bg-gray-900 rounded-sm mb-6 group-hover:scale-110 transition-transform duration-300"></div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-900 transition-colors">
                    언넝 오더
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    주문 및 정산 프로세스 자동화 솔루션
                  </p>
                </div>
                <Button href="/products" variant="outline" className="w-full group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all duration-300 relative z-10">
                  자세히 보기
                </Button>
              </div>

              <div className="group border border-gray-200 p-10 hover:border-gray-300 transition-all duration-300 bg-gray-50 relative">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gray-400 rounded-sm mb-6"></div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    언넝 ERP
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    통합 업무 관리 시스템 (2025년 출시 예정)
                  </p>
                  <span className="inline-block px-4 py-2 text-sm font-medium bg-white text-gray-600 border border-gray-200 rounded-sm">
                    출시 예정
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Value Proposition */}
      <Section className="bg-gray-900 text-white py-20 md:py-24 relative overflow-hidden">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>
        <Container className="relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl md:text-5xl font-light mb-4 text-white/80">01</div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  실시간 배차 시스템
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  실시간 배차 매칭 시스템으로 배차 처리 시간을 단축하고 운영 효율성을 향상시킵니다.
                </p>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl md:text-5xl font-light mb-4 text-white/80">02</div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  안정적인 인프라
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  검증된 기술 스택 기반의 안정적인 플랫폼으로 지속적인 서비스를 제공합니다.
                </p>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="text-4xl md:text-5xl font-light mb-4 text-white/80">03</div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  운영 비용 최적화
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  자동화된 정산 시스템과 효율적인 운영 프로세스를 통해 운영 비용을 절감합니다.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Company & Contact */}
      <Section className="bg-white border-t border-gray-200 py-20 md:py-24">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                  회사
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                  주식회사 언넝은 기업의 업무 프로세스를 개선하여 효율성과 단순성을 높이는 것을 목표로 합니다.
                </p>
                <Button href="/company" variant="outline" className="text-base px-8 py-4">
                  회사 소개
                </Button>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                  도입 문의
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                  도입 상담 및 솔루션 컨설팅을 제공합니다.
                </p>
                <Button href="/contact" variant="primary" className="text-base px-8 py-4">
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
