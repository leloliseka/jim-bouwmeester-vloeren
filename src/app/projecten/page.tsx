'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Penthouse Pontsteiger',
    location: 'Amsterdam',
    image:
      'https://jimbouwmeestervloeren.nl/wp-content/uploads/16-Bouwmeester-Pontsteiger-DZ-Small.jpg',
    size: 'large',
  },
  {
    title: 'Villa Blaricum',
    location: 'Blaricum',
    image:
      'https://jimbouwmeestervloeren.nl/wp-content/uploads/Villa-amsterdam-6-1024x683.jpg',
    size: 'medium',
  },
  {
    title: 'Showroom Experience',
    location: 'Lelystad',
    image:
      'https://jimbouwmeestervloeren.nl/wp-content/uploads/05-Showroom-Jim-Bouwmeester-DZ-Small.jpg',
    size: 'medium',
  },
  {
    title: 'Herenhuis Vondelpark',
    location: 'Amsterdam',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
    size: 'large',
  },
  {
    title: 'Modern Loft',
    location: 'Rotterdam',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    size: 'medium',
  },
  {
    title: "Landhuis 't Gooi",
    location: 'Laren',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    size: 'medium',
  },
]

export default function ProjectenPage() {
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
            Gerealiseerde Projecten
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Een selectie van onze meest bijzondere vloerprojecten.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer ${project.size === 'large' ? 'md:col-span-2' : ''}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${project.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

      <div className="absolute bottom-0 left-0 right-0 p-8">
        <p className="text-primary font-medium mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {project.location}
        </p>
        <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {project.title}
        </h3>
      </div>
    </motion.div>
  )
}
