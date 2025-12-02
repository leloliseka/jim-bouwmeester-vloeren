'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Wallet, Scale } from 'lucide-react'

const guarantees = [
  {
    title: 'Veilig aanbetalen',
    description:
      'Uw aanbetaling is gegarandeerd veilig bij CBW-erkende winkels.',
    icon: <Wallet className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Extra goede productgarantie',
    description: 'Profiteer van uitgebreide garantievoorwaarden op uw aankoop.',
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Onpartijdige klachtafhandeling',
    description:
      'Geschillencommissie Wonen zorgt voor een eerlijke oplossing bij klachten.',
    icon: <Scale className="w-8 h-8 text-primary" />,
  },
]

export function Garanties() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            CBW Erkend
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            CBW erkende winkels bieden meer zekerheid, want ze hanteren een
            erkenningsregeling met drie garanties.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guarantees.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-colors text-center group"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
