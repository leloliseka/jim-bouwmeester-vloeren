'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export function Motto() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/gold-texture.png')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      </div>

      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8c6b4a]">
            &quot;Wij lopen net even een stapje harder dan de rest&quot;
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
