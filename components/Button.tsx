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
      'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500 rounded-sm',
    secondary:
      'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500 rounded-sm',
    outline:
      'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 rounded-sm',
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
