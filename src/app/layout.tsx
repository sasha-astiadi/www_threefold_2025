import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - EngageOS',
    default: 'EngageOS - Invest at the perfect time.',
  },
  description:
    'By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('antialiased', inter.variable)} style={{ backgroundColor: '#121212' }}>
      <body style={{ backgroundColor: '#121212', color: '#ffffff' }}>{children}</body>
    </html>
  )
}
