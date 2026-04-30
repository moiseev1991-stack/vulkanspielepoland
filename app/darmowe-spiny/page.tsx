import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Vulkan Spiele Darmowe Spiny Kod Bez Depozytu 2026' },
  description: 'Aktualne kody promocyjne Vulkan Spiele 2026 ✓ Darmowe spiny bez depozytu ✓ Bonusy 50-88 FS ✓ Sprawdzone kody z forum ✓ Weryfikacja opinie graczy ✓ Instrukcja aktywacji',
  openGraph: {
    title: 'Vulkan Spiele Darmowe Spiny Kod Bez Depozytu 2026',
    description: 'Aktualne kody promocyjne Vulkan Spiele 2026 ✓ Darmowe spiny bez depozytu ✓ Bonusy 50-88 FS ✓ Sprawdzone kody z forum ✓ Weryfikacja opinie graczy ✓ Instrukcja aktywacji',
    url: 'https://vulkanspielepoland.pl/darmowe-spiny/',
  },
}

const fsList = [
  { title: '50 FS bez depozytu', desc: 'Po rejestracji konta — bez konieczności wpłaty', game: 'Big Bass Splash', badge: 'BEZ DEPOZYTU' },
  { title: '100 FS — 1. depozyt', desc: 'Doładuj konto kwotą min. 20 EUR i odbierz 100 spinów', game: 'Gates of Olympus 1000', badge: '1 DEPOZYT' },
  { title: '120 FS — 2. depozyt', desc: 'Drugi depozyt — wpłać min. 30 EUR', game: 'Sugar Rush', badge: '2 DEPOZYT' },
  { title: '130 FS — pakiet weekendowy', desc: 'Weekend FS — co sobota i niedzielę', game: 'Crown Coins', badge: 'WEEKEND' },
  { title: 'FS Reload Friday', desc: 'Co piątek 50 darmowych spinów na automat tygodnia', game: 'Book of the Fallen', badge: 'PIĄTEK' },
  { title: 'FS Wielkanocne', desc: 'Specjalna oferta sezonowa — 200 FS w pakiecie', game: 'Vulkanspiele Spark', badge: 'WIELKANOC' },
]

export default function DarmoweSpinyPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0a0000' }}>
      <div className="container mx-auto px-4 py-12 max-w-2xl">

        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-1 text-xs font-bold text-white px-3 py-1 rounded-sm mb-4"
            style={{ background: '#C9000D' }}
          >
            ⚡ DARMOWE SPINY
          </span>
          <h1 className="text-4xl font-black text-white mb-3">Vulkan Spiele Darmowe Spiny – Kody Promocyjne Bez Depozytu 2026</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Vulkan Spiele Darmowe Spiny — odbierz 50 FS bez depozytu po rejestracji, 350 FS w pakiecie
            powitalnym i cotygodniowe oferty Free Spins na popularne automaty.
          </p>
        </div>

        {/* Main Offer */}
        <div
          className="rounded-3xl p-8 mb-6 text-center"
          style={{ background: 'linear-gradient(135deg, #180007 0%, #0b000e 100%)', border: '1px solid #35001c' }}
        >
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Pakiet powitalny</p>
          <p className="text-6xl font-black mb-2" style={{ color: '#FFD700' }}>350 FS</p>
          <p className="text-white font-bold text-xl mb-1">Darmowych Spinów</p>
          <p className="text-gray-500 text-sm mb-6">Rozłożone na pierwsze 4 depozyty — tylko dla nowych graczy PL</p>
          <Link
            href="/go/"
            className="inline-block text-black font-black text-base px-8 py-3 rounded-xl hover:bg-yellow-400 transition"
            style={{ background: '#FFD700' }}
          >
            Odbierz Darmowe Spiny
          </Link>
          <p className="text-gray-600 text-xs mt-3">18+ | Graj odpowiedzialnie | Obowiązuje regulamin</p>
        </div>

        {/* FS list */}
        <div className="space-y-4 mb-10">
          <h2 className="text-lg font-bold text-white">Aktualne pakiety darmowych spinów</h2>
          {fsList.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-5 flex items-center justify-between gap-4"
              style={{ background: '#140002', border: '1px solid #2a0008' }}
            >
              <div>
                <span className="text-xs font-bold px-2 py-0.5 rounded mb-2 inline-block" style={{ background: '#3a0000', color: '#FFD700' }}>
                  {item.badge}
                </span>
                <p className="text-white font-bold">{item.title}</p>
                <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                <p className="text-gold/70 text-xs mt-1">Slot: <span className="text-gold">{item.game}</span></p>
              </div>
              <Link href="/go/" className="text-black font-bold text-xs px-4 py-2 rounded-lg hover:bg-yellow-400 transition whitespace-nowrap" style={{ background: '#FFD700' }}>
                Odbierz
              </Link>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px mb-10" style={{ background: '#1e0000' }} />

        {/* Article */}
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div
            className="prose-casino"
            dangerouslySetInnerHTML={{ __html: `<h2 class="text-xl font-black text-white mb-3 mt-2">Vulkan Spiele Darmowe Spiny – Kody Promocyjne Bez Depozytu 2026</h2>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Odkryj kompleksowy przewodnik po darmowych spinach w kasynie Vulkan Spiele. Sprawdź aktualne kody promocyjne bez depozytu, bonusy powitalne oraz sprawdzone strategie maksymalizacji korzyści z ofert free spins w 2026 roku.</p>
<h2 class="text-xl font-black text-white mb-3 mt-8">Jakie darmowe spiny oferuje Vulkan Spiele w 2026 roku?</h2>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Vulkan Spiele w 2026 roku oferuje nowym graczom pakiet 88 darmowych spinów w ramach bonusu powitalnego bez wymogu wpłaty depozytu. Ta oferta wyróżnia się na tle konkurencji, która zazwyczaj ogranicza się do 50 spinów lub mniej, zapewniając graczom o 76 procent więcej okazji do testowania automatów bez angażowania własnych środków. Darmowe spiny są aktywowane automatycznie po weryfikacji adresu e-mail i numeru telefonu, bez konieczności wprowadzania specjalnych kodów promocyjnych.</p>
<h3 class="text-lg font-bold text-white mb-2 mt-5">88 darmowych spinów vs standardowa oferta 50 FS – analiza różnic</h3>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Standardowa oferta 50 darmowych spinów dostępna w większości kasyn online pozwala graczom na przetestowanie przeciętnie 2-3 automatów przy założeniu stawki 0,10 euro za spin. Vulkan Spiele, oferując 88 spinów, zwiększa ten potencjał do 4-5 różnych tytułów gier, co daje szansę na lepsze poznanie portfolio automatu przed podjęciem decyzji o wpłacie depozytu. Różnica w liczbie spinów przekłada się na średnio o 30-40 minut dłuższy czas gry, co zwiększa prawdopodobieństwo trafienia bonusowych rund w grach. Z perspektywy wartości finansowej, zakładając stawkę 0,20 euro za spin, 88 spinów reprezentuje wartość 17,60 euro w porównaniu do 10 euro dla standardowego pakietu 50 spinów. Ta różnica staje się jeszcze bardziej wyraźna przy wyższych limitach wygranych, gdzie większa liczba spinów zwiększa statystyczną szansę na osiągnięcie maksymalnego progu wypłaty z bonusu bez depozytu.</p>
<h3 class="text-lg font-bold text-white mb-2 mt-5">Bonus powitalny bez depozytu: warunki obrotu i wymagania</h3>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Bonus 88 darmowych spinów podlega wymogowi obrotu określonemu jako 40-krotność wartości wygranych uzyskanych z tych spinów, co stanowi standard branżowy dla bonusów bez depozytu. Maksymalna kwota do wypłaty z wygranych uzyskanych dzięki darmowym spinom jest ograniczona do 100 euro, niezależnie od faktycznie wygranej sumy. Ważność bonusu wynosi 7 dni od momentu aktywacji, a niewykorzystane spiny przepadają po tym okresie. Warunki wymagają weryfikacji tożsamości poprzez przesłanie kopii dokumentu ze zdjęciem oraz potwierdzenie adresu zamieszkania w ciągu 30 dni od rejestracji. Obrót musi zostać zrealizowany wyłącznie na automatach oznaczonych jako kwalifikujące się do rozliczenia bonusu, przy czym gry stołowe, karciane i z krupierem na żywo nie są uwzględniane w spełnianiu wymagań. Minimalna stawka za spin podczas realizacji obrotu wynosi 0,10 euro, a maksymalna 5 euro, co zapobiega nadmiernemu ryzyku i szybkiemu spaleniu środków bonusowych.</p>` }}
          />
        </section>

      </div>
    </div>
  )
}
