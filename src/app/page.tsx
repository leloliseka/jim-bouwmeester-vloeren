import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { BentoGrid } from '@/components/bento-grid'
import { Showcase } from '@/components/showcase'
import { Footer } from '@/components/footer'
import { Garanties } from '@/components/garanties'
import { PinterestGrid } from '@/components/pinterest-grid'

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Header />
      <Hero />
      <Marquee />
      <BentoGrid />
      <Garanties />
      <Showcase />
      <PinterestGrid />
      <Footer />
    </main>
  )
}
