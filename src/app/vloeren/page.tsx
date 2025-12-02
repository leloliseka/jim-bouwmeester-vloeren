'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Traditionele Vloeren',
    description: 'Tijdloze elegantie en ambachtelijk vakmanschap.',
    image:
      'https://jimbouwmeestervloeren.nl/wp-content/uploads/05-Showroom-Jim-Bouwmeester-DZ-Small.jpg', // Placeholder - using showroom image
    href: '/vloeren/traditionele-vloeren',
  },
  {
    title: 'Moderne Vloeren',
    description: 'Strak design voor een eigentijds interieur.',
    image:
      'https://jimbouwmeestervloeren.nl/wp-content/uploads/16-Bouwmeester-Pontsteiger-DZ-Small.jpg', // Placeholder - using project image
    href: '/vloeren/moderne-vloeren',
  },
  {
    title: 'Kasteelvloeren',
    description: 'Robuuste vloeren met een doorleefd karakter.',
    image:
      'https://jimbouwmeestervloeren.nl/wp-content/uploads/Villa-amsterdam-6-1024x683.jpg', // Placeholder - using project image
    href: '/vloeren/kasteelvloeren',
  },
  {
    title: 'PVC Vloeren',
    description:
      'Duurzaam, onderhoudsvriendelijk en niet van echt te onderscheiden.',
    image:
      'https://images.unsplash.com/photo-1581858726768-758a03093171?q=80&w=2070&auto=format&fit=crop', // High quality unsplash fallback
    href: '/vloeren/pvc-vloeren',
  },
  {
    title: 'Laminaatvloeren',
    description: 'Veelzijdigheid en kwaliteit voor elke ruimte.',
    image:
      'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2084&auto=format&fit=crop', // High quality unsplash fallback
    href: '/vloeren/laminaatvloeren',
  },
]

export default function VloerenPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Onze Collectie
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Ontdek de perfecte basis voor uw interieur.
          </motion.p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.title}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function CategoryCard({
  category,
  index,
}: {
  category: (typeof categories)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer ${index === categories.length - 1 && categories.length % 2 !== 0 ? 'md:col-span-2' : ''}`}
    >
      <Link href={category.href} className="block h-full w-full">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${category.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
            {category.title}
          </h3>
          <p className="text-white/80 text-lg mb-6 max-w-xl">
            {category.description}
          </p>
          <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all">
            Bekijk collectie <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
