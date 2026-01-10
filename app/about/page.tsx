import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-white border-b border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About 언넝
            </h1>
            <p className="text-xl text-gray-600">
              업무를 더 빠르고 단순하게 만드는 플랫폼 회사
            </p>
          </div>
        </Container>
      </Section>

      {/* Company Info */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                회사 정보
              </h2>
              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="font-semibold">회사명:</span> 주식회사 언넝
                </div>
                <div>
                  <span className="font-semibold">설립일:</span> 2024년
                </div>
                <div>
                  <span className="font-semibold">사업 분야:</span> B2B 플랫폼
                  서비스 / 업무 전산 솔루션
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                회사 미션
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                주식회사 언넝은 기업의 업무 프로세스를 혁신하여 더 빠르고
                단순하게 만드는 것을 미션으로 합니다. 복잡한 업무 환경에서
                효율성을 높이고, 비용을 절감하며, 모든 이해관계자에게 가치를
                제공하는 플랫폼을 만들어갑니다.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                우리는 단순히 제품을 판매하는 것이 아니라, 고객의 비즈니스
                성공을 위한 파트너로서 함께 성장해 나가겠습니다.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                해결하려는 문제
              </h2>
              <div className="space-y-6">
                <div className="bg-white border-l-4 border-primary-600 p-6 rounded">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    비효율적인 수기 업무 프로세스
                  </h3>
                  <p className="text-gray-700">
                    많은 기업들이 여전히 수기 방식으로 업무를 처리하고 있어
                    시간이 지연되고 오류가 발생합니다. 전화나 수기 배차, 수기
                    정산 등으로 인한 비효율을 해결합니다.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-primary-600 p-6 rounded">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    정보 불투명성과 신뢰 부족
                  </h3>
                  <p className="text-gray-700">
                    업무 프로세스가 불투명하여 화주, 퀵업체, 기사 간 신뢰 구축이
                    어렵습니다. 실시간 모니터링과 투명한 정보 공유를 통해
                    신뢰를 구축합니다.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-primary-600 p-6 rounded">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    높은 운영 비용과 복잡한 정산
                  </h3>
                  <p className="text-gray-700">
                    수기 정산과 복잡한 프로세스로 인해 운영 비용이 높고 정산
                    오류가 발생합니다. 자동화된 정산 시스템으로 비용을 절감하고
                    정확성을 높입니다.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-primary-600 p-6 rounded">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    시스템 간 정보 단절
                  </h3>
                  <p className="text-gray-700">
                    여러 시스템을 사용하면서 정보가 단절되고 데이터 불일치가
                    발생합니다. 통합 플랫폼을 통해 모든 정보를 일원화하여
                    효율성을 높입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                핵심 가치
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    효율성
                  </h3>
                  <p className="text-gray-700">
                    모든 업무 프로세스를 최적화하여 시간과 비용을 절감합니다.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    투명성
                  </h3>
                  <p className="text-gray-700">
                    모든 프로세스를 투명하게 공유하여 신뢰를 구축합니다.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    혁신
                  </h3>
                  <p className="text-gray-700">
                    최신 기술을 활용하여 지속적으로 혁신합니다.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    파트너십
                  </h3>
                  <p className="text-gray-700">
                    고객과 함께 성장하는 진정한 파트너가 되겠습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Info */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">연락처</h2>
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="space-y-4 text-gray-700">
                <div>
                  <span className="font-semibold">이메일:</span>{' '}
                  contact@unnung.com
                </div>
                <div>
                  <span className="font-semibold">전화:</span> 02-1234-5678
                </div>
                <div>
                  <span className="font-semibold">주소:</span> 서울특별시
                  강남구 테헤란로 123
                </div>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  도입 문의하기
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
