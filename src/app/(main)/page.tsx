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
import { SpotlightPreview } from '@/components/Spotlight'
import { StackSectionPreview } from '@/components/StackSection'
import GlobeDemo from '@/components/GlobeDemo'
import { Dashboard } from '@/components/Dashboard'
import { AppsPreview } from '@/components/Apps'
import { FarmerPreview } from '@/components/Farmer'


export default function Home() {
  return (
    <>
      <SpotlightPreview />
      <StackSectionPreview />
      <Dashboard />
      <FarmerPreview />
      <AppsPreview />

    </>
  )
}
