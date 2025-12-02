'use client'

import { motion } from 'framer-motion'

const brands = [
  {
    name: 'Brand 1',
    logo: 'https://images.unsplash.com/photo-1622542796254-5b9c46a3d2f1?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Brand 2',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Brand 3',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop',
  }, // Placeholder duplicate
  {
    name: 'Brand 4',
    logo: 'https://images.unsplash.com/photo-1622542796254-5b9c46a3d2f1?q=80&w=200&auto=format&fit=crop',
  }, // Placeholder duplicate
  {
    name: 'Brand 5',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop',
  }, // Placeholder duplicate
]

export function Marquee() {
  return (
    <section className="py-12 overflow-hidden bg-background/50 backdrop-blur-sm border-y border-white/5">
      <div className="container px-4 mx-auto mb-8 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Onze Partners & Merken
        </p>
      </div>

      <div className="relative flex w-full overflow-hidden mask-linear-gradient">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Content */}
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 20,
          }}
        >
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="relative w-32 h-12 grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            >
              {/* Using a simple div placeholder for now if images fail, but trying img first */}
              <div className="flex items-center justify-center w-full h-full font-bold text-xl text-muted-foreground/50">
                LOGO
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
