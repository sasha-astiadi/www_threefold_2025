import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '../styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - ThreeFold',
    default: 'ThreeFold - Decentralized Internet Infrastructure',
  },
  description:
    'ThreeFold is building a decentralized internet infrastructure owned and operated by the people. Join the movement to create a more sovereign, sustainable, and accessible internet for all.',
  keywords: 'decentralized internet, blockchain, Web3, cloud infrastructure, sovereign technology',
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
