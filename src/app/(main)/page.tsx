import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import Tractions from '@/components/Tractions'
import Benefits from '@/components/Benefits'
import  Cta from '@/components/Cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Tractions />
      <Benefits />
      <SecondaryFeatures />
      <Reviews />
      <Pricing />
      <Cta />
      <Faqs />
    </>
  )
}
