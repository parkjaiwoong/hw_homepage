import Link from 'next/link'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  href?: string
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary:
      'bg-brand-600 text-white hover:bg-brand-500 focus:ring-brand-500 shadow-lg shadow-brand-500/30 border border-transparent rounded-lg',
    secondary:
      'bg-brand-50 text-brand-700 hover:bg-brand-100 focus:ring-brand-500 border border-transparent rounded-lg',
    outline:
      'border-2 border-slate-200 text-slate-700 hover:border-brand-600 hover:text-brand-600 focus:ring-brand-500 bg-transparent rounded-lg',
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}
