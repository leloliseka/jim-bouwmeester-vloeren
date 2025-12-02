'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
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
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Kom langs in onze showroom of neem contact op voor een vrijblijvend
            adviesgesprek.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Contact Info */}
            <div className="space-y-8">
              <div className="grid gap-6">
                <ContactCard
                  icon={<MapPin className="w-6 h-6" />}
                  title="Bezoekadres"
                  content={
                    <>
                      Noordersluisweg 19F
                      <br />
                      8243 PR Lelystad
                    </>
                  }
                  delay={0.1}
                />
                <ContactCard
                  icon={<Phone className="w-6 h-6" />}
                  title="Telefoon"
                  content="0320 - 22 18 69"
                  href="tel:0320221869"
                  delay={0.2}
                />
                <ContactCard
                  icon={<Mail className="w-6 h-6" />}
                  title="E-mail"
                  content="info@jimbouwmeestervloeren.nl"
                  href="mailto:info@jimbouwmeestervloeren.nl"
                  delay={0.3}
                />
                <ContactCard
                  icon={<Clock className="w-6 h-6" />}
                  title="Openingstijden"
                  content={
                    <div className="space-y-1">
                      <div className="flex justify-between gap-4">
                        <span>Dinsdag t/m Vrijdag</span>
                        <span>10:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Zaterdag</span>
                        <span>10:00 - 15:00</span>
                      </div>
                      <div className="flex justify-between gap-4 text-muted-foreground text-sm pt-2">
                        <span>Zondag & Maandag</span>
                        <span>Gesloten</span>
                      </div>
                    </div>
                  }
                  delay={0.4}
                />
              </div>
            </div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary/30 backdrop-blur-sm p-8 rounded-3xl border border-white/5"
            >
              <h2 className="text-2xl font-bold mb-6">Stuur een bericht</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Naam</label>
                    <Input
                      placeholder="Uw naam"
                      className="bg-background/50 border-white/10 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Telefoon</label>
                    <Input
                      placeholder="06 12345678"
                      className="bg-background/50 border-white/10 focus-visible:ring-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">E-mail</label>
                  <Input
                    type="email"
                    placeholder="uw@email.nl"
                    className="bg-background/50 border-white/10 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Bericht</label>
                  <Textarea
                    placeholder="Waar kunnen we u mee helpen?"
                    className="min-h-[150px] bg-background/50 border-white/10 focus-visible:ring-primary"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full rounded-xl text-base font-semibold"
                >
                  Verstuur Bericht
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.567890123456!2d5.4956789!3d52.5123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c631a2b3c4d5e7%3A0x8f9a0b1c2d3e4f5!2sNoordersluisweg%2019F%2C%208243%20PR%20Lelystad!5e0!3m2!1snl!2snl!4v1625123456789!5m2!1snl!2snl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
        {/* Overlay for better integration when grayscale */}
        <div className="absolute inset-0 bg-primary/10 pointer-events-none mix-blend-overlay" />
      </section>

      <Footer />
    </main>
  )
}

function ContactCard({
  icon,
  title,
  content,
  href,
  delay,
}: {
  icon: React.ReactNode
  title: string
  content: React.ReactNode
  href?: string
  delay: number
}) {
  const CardContent = (
    <div className="flex items-start gap-4 p-6 h-full">
      <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <div className="text-muted-foreground leading-relaxed">{content}</div>
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-secondary/30 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-primary/20 transition-colors overflow-hidden group"
    >
      {href ? (
        <a
          href={href}
          className="block h-full hover:bg-white/5 transition-colors"
        >
          {CardContent}
        </a>
      ) : (
        <div className="h-full">{CardContent}</div>
      )}
    </motion.div>
  )
}
