'use client'

import { useState } from 'react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // TODO: 실제 API 연동
    // 여기서는 시뮬레이션으로 처리
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        message: '',
      })
    }, 1000)
  }

  return (
    <>
      <Section className="relative min-h-[calc(100vh-80px)] bg-slate-50 flex items-center p-4 lg:p-8">
        <div className="absolute inset-0 bg-slate-50"></div>
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-200/20 rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-200/20 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>

        <Container className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px]">

            {/* Left: Contact Info (Dark) */}
            <div className="lg:w-2/5 bg-slate-900 text-white p-10 lg:p-14 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 opacity-90"></div>
              <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-accent-500/20 rounded-full blur-[60px]"></div>

              <div className="relative z-10 space-y-12">
                <div>
                  <h1 className="text-4xl font-bold mb-4 tracking-tight">도입 문의</h1>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    비즈니스의 성장을 위한 첫 걸음,<br />언넝과 함께 시작하세요.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium uppercase tracking-wide mb-1">Email</p>
                      <a href="mailto:contact@unnung.com" className="text-lg font-semibold hover:text-accent-400 transition-colors">contact@unnung.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium uppercase tracking-wide mb-1">Phone</p>
                      <a href="tel:02-1234-5678" className="text-lg font-semibold hover:text-accent-400 transition-colors">02-1234-5678</a>
                      <p className="text-xs text-slate-500 mt-1">평일 09:00 - 18:00 (주말/공휴일 휴무)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium uppercase tracking-wide mb-1">Office</p>
                      <p className="text-lg font-semibold">서울특별시 강남구 테헤란로 123</p>
                      <p className="text-base text-slate-300">언넝빌딩 10층</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 pt-12 border-t border-white/10">
                <div className="flex gap-4">
                  {/* Social Icons Placeholders */}
                  <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-500 transition-colors cursor-pointer flex items-center justify-center">
                    <span className="text-xs">FB</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-500 transition-colors cursor-pointer flex items-center justify-center">
                    <span className="text-xs">IN</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-500 transition-colors cursor-pointer flex items-center justify-center">
                    <span className="text-xs">YT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form (Light) */}
            <div className="lg:w-3/5 p-10 lg:p-14 bg-white overflow-y-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">문의 내용 작성</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">이름</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      placeholder="홍길동"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-slate-700">회사명</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      placeholder="(주)언넝"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">이메일</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      placeholder="example@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">연락처</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="product" className="text-sm font-semibold text-slate-700">관심 제품</label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '0.65em auto' }}
                  >
                    <option value="">제품을 선택해주세요</option>
                    <option value="unnung-quick">언넝 퀵 (실시간 배차)</option>
                    <option value="unnung-order">언넝 오더 (주문/정산)</option>
                    <option value="unnung-erp">언넝 ERP (통합 관리)</option>
                    <option value="other">기타 제휴 및 솔루션 문의</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">문의 내용</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="프로젝트 규모, 예상 도입 시기 등 구체적인 내용을 적어주시면 더 정확한 상담이 가능합니다."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    문의가 성공적으로 접수되었습니다.
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full text-lg py-4 mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '전송 중...' : '문의하기'}
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
