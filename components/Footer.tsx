import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-4 bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent inline-block">언넝</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              업무 효율성 향상과 운영 최적화를 위한<br />
              차세대 B2B 플랫폼 솔루션
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">제품</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products" className="hover:text-brand-400 transition-colors duration-200">
                  모든 제품
                </Link>
              </li>
              <li>
                <Link href="/products/unnung-quick" className="hover:text-brand-400 transition-colors duration-200">
                  언넝 퀵
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brand-400 transition-colors duration-200">
                  언넝 오더
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">회사</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/company" className="hover:text-brand-400 transition-colors duration-200">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-brand-400 transition-colors duration-200">
                  솔루션
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-400 transition-colors duration-200">
                  도입 문의
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-12 pt-8 text-center text-sm text-slate-600">
          <p>© {new Date().getFullYear()} UNNUNG Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
