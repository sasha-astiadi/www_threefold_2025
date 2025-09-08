import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Banner />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  )
}
