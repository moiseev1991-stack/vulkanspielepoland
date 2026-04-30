import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Skontaktuj się z redakcją — kanały komunikacji i sprawy biznesowe',
  description: 'Adresy e-mail do spraw redakcyjnych, współpracy biznesowej, ochrony danych RODO i zgłoszeń nieprawidłowości. Standardowy czas odpowiedzi to 1–2 dni robocze, sprawy pilne traktowane priorytetowo.',
  openGraph: {
    title: 'Skontaktuj się z redakcją — kanały komunikacji i sprawy biznesowe',
    description: 'Wszystkie sposoby kontaktu z naszym zespołem: redakcja, partnerstwa, RODO oraz reklamacje. Odpowiadamy w ciągu 24–48 godzin.',
    url: 'https://vulkanspielepoland.pl/kontakt/',
  },
  robots: { index: true, follow: true },
}

const channels = [
  {
    icon: '✉',
    title: 'Sprawy ogólne i redakcyjne',
    desc: 'Pytania dotyczące treści, sugestie tematów, zgłaszanie nieaktualnych informacji.',
    contact: 'support@vulkanspielepoland.pl',
    href: 'mailto:support@vulkanspielepoland.pl',
  },
  {
    icon: '🤝',
    title: 'Współpraca biznesowa',
    desc: 'Propozycje afiliacyjne, partnerstwa, materiały reklamowe i guest postingi.',
    contact: 'partners@vulkanspielepoland.pl',
    href: 'mailto:partners@vulkanspielepoland.pl',
  },
  {
    icon: '⚠',
    title: 'Zgłoszenie nieprawidłowości',
    desc: 'Reklamacje na operatorów, opóźnione wypłaty, problemy z bonusami u partnerów.',
    contact: 'support@vulkanspielepoland.pl',
    href: 'mailto:support@vulkanspielepoland.pl',
  },
  {
    icon: '🔒',
    title: 'Ochrona danych osobowych (RODO)',
    desc: 'Sprawy dotyczące przetwarzania danych, prośby o usunięcie, dostęp do danych.',
    contact: 'privacy@vulkanspielepoland.pl',
    href: 'mailto:privacy@vulkanspielepoland.pl',
  },
]

export default function KontaktPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">Napisz do redakcji</h1>
      <p className="text-white/60 text-sm mb-10">
        Każda wiadomość jest czytana przez nasz zespół, a odpowiedź wysyłamy zwykle w ciągu 24–48 godzin
        roboczych. Aby przyspieszyć obsługę zgłoszenia, wybierz kanał najbliższy charakterowi sprawy
        z listy poniżej — dzięki temu trafi ona bezpośrednio do osoby odpowiedzialnej.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 mb-12">
        {channels.map((c) => (
          <a
            key={c.title}
            href={c.href}
            className="rounded-xl p-5 transition-colors hover:border-gold/40 block"
            style={{ background: '#1a0000', border: '1px solid #3a0000' }}
          >
            <span className="text-2xl mb-2 inline-block">{c.icon}</span>
            <p className="text-white font-bold text-sm mb-1">{c.title}</p>
            <p className="text-white/50 text-xs mb-3">{c.desc}</p>
            <p className="text-gold text-sm font-semibold">{c.contact}</p>
          </a>
        ))}
      </div>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Czas odpowiedzi</h2>
          <ul className="space-y-2">
            {[
              'Sprawy ogólne i redakcyjne — 1–2 dni robocze.',
              'Współpraca biznesowa — do 3 dni roboczych.',
              'Zgłoszenia nieprawidłowości — priorytet, do 24 godzin.',
              'Sprawy RODO — do 30 dni kalendarzowych (zgodnie z art. 12 RODO).',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-gold mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Czego nie obsługujemy?</h2>
          <p className="mb-3">
            VulkanSpiele jest <strong className="text-white">niezależnym portalem afiliacyjnym</strong> —
            nie jest kasynem internetowym i nie prowadzi działalności hazardowej. Oznacza to, że nie
            możemy pomóc w następujących sprawach:
          </p>
          <ul className="space-y-2">
            {[
              'Nie obsługujemy kont graczy w kasynach — w sprawach związanych z Twoim kontem skontaktuj się bezpośrednio z operatorem.',
              'Nie przyjmujemy depozytów ani wypłat — wszystkie transakcje odbywają się w wybranym przez Ciebie kasynie.',
              'Nie weryfikujemy tożsamości graczy — KYC przeprowadza wyłącznie operator kasyna.',
              'Nie udzielamy porad prawnych ani podatkowych — w razie wątpliwości zgłoś się do właściwego doradcy.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 shrink-0">!</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Pomoc dla graczy</h2>
          <p>
            Jeśli masz problem z hazardem lub potrzebujesz wsparcia — odwiedź naszą stronę{' '}
            <Link href="/odpowiedzialna-gra" className="text-gold hover:underline">Odpowiedzialna Gra</Link>{' '}
            lub zadzwoń na bezpłatny telefon zaufania:{' '}
            <strong className="text-white">116 123</strong> (dostępny 7 dni w tygodniu).
          </p>
          <p className="mt-2">
            Centrum Pomocy dla Osób z Problemem Hazardowym (KCPU):{' '}
            <a href="https://www.kcpu.gov.pl" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
              kcpu.gov.pl
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Dane wydawcy</h2>
          <p>
            Portal VulkanSpiele jest prowadzony przez niezależną redakcję pasjonatów branży hazardu
            online. Pełne dane wydawcy oraz informacje o przetwarzaniu danych osobowych znajdziesz w{' '}
            <Link href="/polityka-prywatnosci" className="text-gold hover:underline">Polityce prywatności</Link>{' '}
            oraz na stronie{' '}
            <Link href="/o-nas" className="text-gold hover:underline">O Nas</Link>.
          </p>
        </section>

      </div>
    </main>
  )
}
