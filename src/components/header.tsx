'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, Phone, X } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Vloeren', href: '/vloeren' },
  { name: 'Projecten', href: '/projecten' },
  { name: 'Over Ons', href: '/over-ons' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'flex items-center justify-between px-2 py-2 rounded-full transition-all duration-300',
          'bg-background/60 backdrop-blur-xl border border-white/10 shadow-lg',
          'w-full max-w-5xl'
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 pl-4 pr-2">
          <div
            className="h-8 w-[280px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/gold-texture.png')",
              maskImage: "url('/logo.png')",
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'left center',
              WebkitMaskImage: "url('/logo.png')",
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'left center',
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-secondary/50 rounded-full px-2 py-1 mx-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium px-4 py-2 rounded-full transition-all duration-200',
                'hover:bg-background hover:shadow-sm',
                'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 pr-2">
          <Button size="sm" className="rounded-full px-6 hidden sm:flex">
            Offerte
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="rounded-b-[2rem] pt-16">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="flex flex-col gap-2 items-center">
                {navigation.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link
                      href={item.href}
                      className="text-2xl font-medium hover:text-primary transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
                <div className="mt-8 w-full max-w-xs">
                  <Button className="w-full rounded-full h-12 text-lg">
                    Offerte Aanvragen
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </div>
  )
}
