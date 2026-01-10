import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">언넝</h3>
            <p className="text-sm">
              업무를 더 빠르고 단순하게 만드는 플랫폼 회사
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">제품</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  모든 제품
                </Link>
              </li>
              <li>
                <Link href="/products/unnung-quick" className="hover:text-white transition-colors">
                  언넝 퀵
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  언넝 오더
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  도입 문의
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  회사 소개
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} 주식회사 언넝. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
