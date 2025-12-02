'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

// Skeletons / Placeholders for images
const SkeletonOne = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-100 dark:bg-neutral-900 mask-image-gradient">
    <div className="w-full h-full bg-[url('https://jimbouwmeestervloeren.nl/wp-content/uploads/05-Showroom-Jim-Bouwmeester-DZ-Small.jpg')] bg-cover bg-center transform scale-100 group-hover/bento:scale-110 transition-transform duration-500" />
  </div>
)
const SkeletonTwo = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-100 dark:bg-neutral-900">
    <div className="w-full h-full bg-[url('https://jimbouwmeestervloeren.nl/wp-content/uploads/bb-plugin/cache/fotojim-e1440077990600-circle.jpg')] bg-cover bg-center transform scale-100 group-hover/bento:scale-110 transition-transform duration-500" />
  </div>
)
const SkeletonThree = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-100 dark:bg-neutral-900">
    <div className="w-full h-full bg-[url('https://jimbouwmeestervloeren.nl/wp-content/uploads/16-Bouwmeester-Pontsteiger-DZ-Small.jpg')] bg-cover bg-center transform scale-100 group-hover/bento:scale-110 transition-transform duration-500" />
  </div>
)
const SkeletonFour = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-100 dark:bg-neutral-900">
    <div className="w-full h-full bg-[url('https://jimbouwmeestervloeren.nl/wp-content/uploads/Villa-amsterdam-6-1024x683.jpg')] bg-cover bg-center transform scale-100 group-hover/bento:scale-110 transition-transform duration-500" />
  </div>
)

const items = [
  {
    title: 'Gietvloeren',
    description:
      'Strak, naadloos en modern. De perfecte basis voor elk interieur.',
    header: <SkeletonOne />,
    className: 'md:col-span-2',
    href: '/vloeren/gietvloeren',
  },
  {
    title: 'Houten Vloeren',
    description: 'Authentiek vakmanschap en natuurlijke warmte.',
    header: <SkeletonTwo />,
    className: 'md:col-span-1',
    href: '/vloeren/houten-vloeren',
  },
  {
    title: 'PVC Vloeren',
    description: 'Duurzaam, onderhoudsarm en niet van echt te onderscheiden.',
    header: <SkeletonThree />,
    className: 'md:col-span-1',
    href: '/vloeren/pvc-vloeren',
  },
  {
    title: 'Projectinrichting',
    description: 'Complete oplossingen voor kantoren en commerciële ruimtes.',
    header: <SkeletonFour />,
    className: 'md:col-span-2',
    href: '/projecten',
  },
]

export function BentoGrid() {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Onze Collectie
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Ontdek onze veelzijdige collectie vloeren, van ambachtelijk hout tot
            modern beton.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              href={item.href}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function BentoGridItem({
  className,
  title,
  description,
  header,
  href,
  index,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  href: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        'row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-background border border-white/10 justify-between flex flex-col space-y-4',
        className
      )}
    >
      <Link href={href} className="flex flex-col h-full">
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden relative">
          {header}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover/bento:bg-black/10 transition-colors duration-300" />

          {/* Arrow Icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-md p-2 rounded-full">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>

        <div className="group-hover/bento:translate-x-2 transition duration-200 mt-4">
          <div className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
