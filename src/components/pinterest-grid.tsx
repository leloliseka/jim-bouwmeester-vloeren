'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Pin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const pinterestImages = [
  {
    src: 'https://jimbouwmeestervloeren.nl/wp-content/uploads/16-Bouwmeester-Pontsteiger-DZ-Small.jpg',
    height: 'h-64 md:h-80',
    alt: 'Gietvloer inspiratie',
  },
  {
    src: 'https://jimbouwmeestervloeren.nl/wp-content/uploads/05-Showroom-Jim-Bouwmeester-DZ-Small.jpg',
    height: 'h-80 md:h-96',
    alt: 'Showroom inspiratie',
  },
  {
    src: 'https://jimbouwmeestervloeren.nl/wp-content/uploads/Villa-amsterdam-6-1024x683.jpg',
    height: 'h-64 md:h-72',
    alt: 'Houten vloer inspiratie',
  },
  {
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
    height: 'h-72 md:h-80',
    alt: 'Visgraat vloer',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    height: 'h-64 md:h-64',
    alt: 'Modern interieur',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    height: 'h-80 md:h-96',
    alt: 'Landelijke stijl',
  },
]

export function PinterestGrid() {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-primary font-medium mb-2"
            >
              <Pin className="w-4 h-4" />
              <span>Dagelijkse Inspiratie</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold tracking-tight"
            >
              Volg ons op Pinterest
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              asChild
              variant="outline"
              className="rounded-full h-12 px-6 gap-2 border-primary/20 hover:bg-primary/5"
            >
              <Link
                href="https://nl.pinterest.com/jimbouwmeestervloeren/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bekijk alle pins <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {pinterestImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <div
                className={`relative ${image.height} w-full rounded-3xl overflow-hidden group cursor-pointer`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${image.src}')` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <Pin className="w-5 h-5 text-red-600" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
