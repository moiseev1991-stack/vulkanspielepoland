import Link from 'next/link'

const GO = '/go/'

const columns = [
  {
    title: 'Kasyno',
    links: [
      { label: 'Sloty',         href: GO },
      { label: 'Kasyno live',   href: GO },
      { label: 'Ruletki',       href: GO },
      { label: 'Jackpoty',      href: GO },
      { label: 'Gry karciane',  href: GO },
      { label: 'Gry insta',     href: GO },
    ],
  },
  {
    title: 'Informacje',
    links: [
      { label: 'O nas',                       href: '/o-nas/' },
      { label: 'Kontakt',                     href: '/kontakt/' },
      { label: 'Informacja afiliacyjna',      href: '/informacja-afiliacyjna/' },
      { label: 'Odpowiedzialna gra',          href: '/odpowiedzialna-gra/' },
      { label: 'Czy Vulkan Spiele jest legalne w Polsce?', href: '/czy-vulkan-spiele-jest-legalne-w-polsce/' },
      { label: 'Jak wypłacić pieniądze',      href: '/jak-wyplacic-pieniadze-z-vulkan-spiele/' },
      { label: 'Program partnerski',          href: GO },
    ],
  },
  {
    title: 'Postanowienia ogólne',
    links: [
      { label: 'Regulamin',                href: '/regulamin/' },
      { label: 'Regulamin bonusów',        href: GO },
      { label: 'Zasady dotyczące zakładów',href: GO },
      { label: 'Polityka anulowania',      href: GO },
      { label: 'Polityka AML',             href: GO },
    ],
  },
  {
    title: 'Dostawcy',
    links: [
      { label: 'Pragmatic Play',      href: GO },
      { label: 'Evolution Gaming',    href: GO },
      { label: 'NetEnt',              href: GO },
      { label: 'Play\'n GO',          href: GO },
      { label: 'Novomatic',           href: GO },
      { label: 'Evoplay Entertainment', href: GO },
    ],
  },
  {
    title: 'Dokumentacja',
    links: [
      { label: 'Polityka prywatności',           href: '/polityka-prywatnosci/' },
      { label: 'Polityka cookie',                href: '/polityka-cookie/' },
      { label: 'Polityka AML',                   href: GO },
      { label: 'Polityka anulowania',            href: GO },
      { label: 'Polityka dotycząca skarg klientów', href: GO },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0008] border-t border-white/5 mt-12">
      <div className="container mx-auto px-4 py-12">

        {/* Multi-column nav */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-7 mb-10">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-white text-sm font-semibold mb-3">{col.title}</p>
              <ul className="space-y-1.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white/70 text-xs transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-5">
            <p className="text-white/30 text-xs">© 2026 VulkanSpiele. Wszelkie prawa zastrzeżone.</p>
            <p className="text-white/20 text-xs">18+ · Graj odpowiedzialnie</p>
          </div>

          {/* Disclaimer */}
          <p className="text-white/25 text-xs max-w-3xl leading-relaxed">
            VulkanSpiele jest niezależnym serwisem afiliacyjnym — nie jest kasynem i nie prowadzi działalności
            hazardowej. Treści na stronie mają charakter wyłącznie informacyjny. Hazard jest przeznaczony wyłącznie
            dla osób pełnoletnich (18+). Graj odpowiedzialnie.
          </p>
        </div>

      </div>
    </footer>
  )
}
