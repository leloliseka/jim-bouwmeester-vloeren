'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { useRef } from 'react'
import { Button } from './ui/button'

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])

  return (
    <section ref={ref} className="py-24 px-4 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden aspect-[16/9] lg:aspect-[21/9] shadow-2xl">
          {/* Parallax Image Background */}
          <motion.div
            style={{ y }}
            className="absolute inset-0 w-full h-[140%] -top-[20%]"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://jimbouwmeestervloeren.nl/wp-content/uploads/Villa-amsterdam-6-1024x683.jpg')",
              }}
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/20" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium">
                <span>Featured Project</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Penthouse Amsterdam
              </h2>

              <p className="text-lg text-white/90 leading-relaxed">
                Een meesterwerk van licht en ruimte. 300m² naadloze gietvloer in
                de kleur &apos;Concrete Grey&apos;, perfect afgestemd op het
                minimalistische interieur.
              </p>

              <Button
                size="lg"
                className="rounded-full bg-white text-black hover:bg-white/90 border-none"
              >
                Bekijk Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
