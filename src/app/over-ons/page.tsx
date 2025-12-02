'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function OverOns() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Header />

      {/* Compact Hero / Title Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Over Ons
          </motion.h1>

          {/* Quote moved to top */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block relative"
          >
            <Quote className="w-8 h-8 text-primary absolute -top-4 -left-8 opacity-50" />
            <h2 className="text-2xl md:text-3xl font-medium italic text-muted-foreground">
              &quot;Wij lopen net even een stapje harder dan de rest&quot;
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Image & Intro */}
            <div className="lg:col-span-5 space-y-8 sticky top-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/jim_bouwmeester_cleaned.png')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-1">Jim Bouwmeester</h3>
                  <p className="text-white/80 font-medium">Eigenaar (47)</p>
                </div>
              </motion.div>

              <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
                <p className="text-lg leading-relaxed font-medium">
                  &quot;Jim Bouwmeester Vloeren (1970) staat bekend om excellent
                  vakmanschap, in combinatie met kwalitatief zeer hoogstaande
                  producten.&quot;
                </p>
              </div>
            </div>

            {/* Right Column: The Story */}
            <div className="lg:col-span-7 space-y-12 pt-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                  Bij het samenstellen van de collectie wordt er naast kwaliteit
                  en uitstraling ook gekeken naar functionaliteit en
                  duurzaamheid van de vloer. Jim Bouwmeester Vloeren richt zich,
                  onder bezielende leiding van Jim zelf, op particulieren en
                  werkt daarnaast ook met architecten, stylisten en
                  projectontwikkelaars.
                </p>

                <div className="grid gap-8">
                  <ContentBlock
                    title="Familiebedrijf"
                    text="Jim Bouwmeester Vloeren is een familiebedrijf dat in 1968 is opgericht door mijn ouders. In 1997 heb ik het overgenomen en vanaf dat moment draagt het de naam Jim Bouwmeester Vloeren. Op het moment van de overname waren de basislijnen van het bedrijf gezet. Ik ben toen verhuisd naar een veel grotere showroom en ben mij, behalve op de particuliere markt, ook gaan richten op projecten."
                    delay={0.1}
                  />
                  <ContentBlock
                    title="Passie"
                    text="Mijn passie voor hout en vloeren is met de jaren gegroeid. Ik was zestien toen ik begon. In die tijd en op die leeftijd had je niet veel keus na je opleiding, dus toen het niet zo lekker liep op school zei mijn vader: je komt maar lekker bij mij werken! Dat heb ik gedaan, nu 31 jaar geleden, en zo ben ik in het vak gerold."
                    delay={0.2}
                  />
                  <ContentBlock
                    title="Advies"
                    text="Door echt met hout en vloeren te werken, ga je het pas echt waarderen en het heel mooi vinden. Doordat je een bepaalde kijk op iets krijgt, kun je klanten steeds beter adviseren. Dat is juist zo leuk aan dit vak. Door goed te luisteren en gehoor te geven aan de wensen van de klant raak je steeds meer betrokken bij een project."
                    delay={0.3}
                  />
                  <ContentBlock
                    title="Toekomst"
                    text="Onze kracht zit ‘m in de uitvoering, de nazorg, de service en de garantie. Wij lopen net even een stapje harder dan de rest en dat wordt gelukkig beloond. Ondanks de crisis doen wij het hartstikke goed en daar zijn wij enorm trots op."
                    delay={0.4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ContentBlock({
  title,
  text,
  delay,
}: {
  title: string
  text: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-background/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-sm hover:shadow-md transition-all"
    >
      <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{text}</p>
    </motion.div>
  )
}
