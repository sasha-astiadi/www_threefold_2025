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
    template: '%s - ThreeFold',
    default: 'ThreeFold - Decentralized internet  by everyone, for everyone.',
  },
  description:
    'ThreeFold is a fully operational, decentralized internet infrastructure – deployed locally, scalable globally, and owned and powered by the people.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('antialiased', inter.variable)} suppressHydrationWarning>
      <body className="bg-[#121212] text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
