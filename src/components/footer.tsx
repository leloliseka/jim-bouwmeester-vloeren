import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

const footerLinks = {
  producten: [
    { name: 'Gietvloeren', href: '/vloeren/gietvloeren' },
    { name: 'Houten Vloeren', href: '/vloeren/houten-vloeren' },
    { name: 'PVC Vloeren', href: '/vloeren/pvc-vloeren' },
    { name: 'Woonbeton', href: '/vloeren/woonbeton' },
  ],
  bedrijf: [
    { name: 'Over Ons', href: '/over-ons' },
    { name: 'Projecten', href: '/projecten' },
    { name: 'Contact', href: '/contact' },
    { name: 'Vacatures', href: '/vacatures' },
  ],
  legal: [
    { name: 'Algemene Voorwaarden', href: '/algemene-voorwaarden' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookies', href: '/cookies' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-white/5 pt-24 pb-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
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
            <p className="text-muted-foreground leading-relaxed text-sm max-w-xs">
              Meesterschap in vloeren sinds 1970. Wij realiseren exclusieve
              vloeren voor particulieren en bedrijven.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/jimbouwmeestervloeren/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://nl-nl.facebook.com/JimBouwmeesterVloeren/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://nl.pinterest.com/jimbouwmeestervloeren/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold mb-6">Producten</h3>
            <ul className="space-y-4">
              {footerLinks.producten.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Bedrijf</h3>
            <ul className="space-y-4">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <span className="block text-foreground font-medium mb-1">
                  Showroom
                </span>
                Noordersluisweg 19F
                <br />
                8243 PR Lelystad
              </li>
              <li>
                <span className="block text-foreground font-medium mb-1">
                  Email
                </span>
                info@jimbouwmeestervloeren.nl
              </li>
              <li>
                <span className="block text-foreground font-medium mb-1">
                  Telefoon
                </span>
                0320 - 22 18 69
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jim Bouwmeester Vloeren. Alle rechten
            voorbehouden.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
