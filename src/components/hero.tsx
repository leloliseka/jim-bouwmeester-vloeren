'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

const heroImages = [
  'https://jimbouwmeestervloeren.nl/wp-content/uploads/16-Bouwmeester-Pontsteiger-DZ-Small.jpg',
  'https://jimbouwmeestervloeren.nl/wp-content/uploads/05-Showroom-Jim-Bouwmeester-DZ-Small.jpg',
  'https://jimbouwmeestervloeren.nl/wp-content/uploads/Villa-amsterdam-6-1024x683.jpg',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [currentImage])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    )
  }

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-12 px-4 overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-sm font-medium"
            >
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <span>Premium Vloeren & Projectinrichting</span>
            </motion.div>

            <motion.a
              href="https://www.google.com/search?q=Jim+Bouwmeester+Vloeren+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
              </svg>
              <span>Google Review 4.9/5</span>
            </motion.a>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            Meesterschap in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8c6b4a]">
              Elke Meter
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Van exclusieve gietvloeren tot ambachtelijk parket. Wij realiseren
              uw visie met ongekende precisie en oog voor detail.
            </p>

            {/* Integrated Motto */}
            <div className="flex items-center gap-3 text-primary/80 italic font-medium max-w-md mx-auto lg:mx-0 bg-primary/5 p-4 rounded-2xl border border-primary/10">
              <Quote className="w-5 h-5 shrink-0 rotate-180" />
              <span className="text-sm">
                &quot;Wij lopen net even een stapje harder dan de rest&quot;
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="rounded-full h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all"
            >
              Bekijk Collectie
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base bg-background/50 backdrop-blur-sm"
            >
              Neem Contact Op
            </Button>
          </motion.div>
        </div>

        {/* Visual Content (The "Capsule" Image Gallery) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative group"
        >
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-background">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${heroImages[currentImage]}')`,
                }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

            {/* Navigation Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={prevImage}
                className="p-3 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors border border-white/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="p-3 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors border border-white/10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentImage
                      ? 'bg-white w-6'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl text-white z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">Exclusieve Projecten</span>
                <ArrowRight className="h-5 w-5" />
              </div>
              <p className="text-sm text-white/80">Bekijk onze realisaties.</p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary rounded-full blur-2xl opacity-20" />
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary rounded-full blur-2xl opacity-20" />
        </motion.div>
      </div>
    </section>
  )
}
