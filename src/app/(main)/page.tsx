import { SpotlightPreview } from '../../components/Spotlight'
import { StackSectionPreview } from '../../components/StackSection'
import { Dashboard } from '../../components/Dashboard'
import { AppsPreview } from '../../components/Apps'
import { FarmerPreview } from '../../components/Farmer'
import { Reviews } from '../../components/Reviews'
import { Faqs } from '../../components/Faqs'
import Cta from '../../components/Cta'

export default function Home() {
  return (
    <>
      <SpotlightPreview />
      <StackSectionPreview />
      <Dashboard />
      <FarmerPreview />
      <AppsPreview />
      <Reviews />
      <Faqs />
      <Cta />
    </>
  )
}
