'use client'

import Link from 'next/link'

// anchor links shown below specific bonus cards
const bonusAnchors: Record<string, { pre: string; text: string; post: string; href: string }> = {
  welcome:   { pre: 'Aktywuj bonus z ', text: 'promo code',               post: '',  href: '/kod-promocyjny/' },
  freespins: { pre: 'Szukasz ',        text: 'Darmowych spinów bez depozytu', post: '?', href: '/bonus-bez-depozytu/' },
}

const bonuses = [
  {
    id: 'welcome',
    title: 'Bonus powitalny',
    value: '100%',
    sub: 'do 500 EUR',
    desc: 'Na pierwszy depozyt',
    image: '/images/bonuses/welcome-d2a124.png',
    badge: 'NAJPOPULARNIEJSZY',
    badgeColor: '#CC0000',
    cta: 'Odbierz bonus',
  },
  {
    id: 'reload',
    title: 'Bonus Reload',
    value: '50%',
    sub: 'co tydzień',
    desc: 'Na każdy depozyt',
    image: '/images/bonuses/reload-46c69e.png',
    badge: null,
    cta: 'Aktywuj',
  },
  {
    id: 'cashback',
    title: 'Cashback',
    value: '10%',
    sub: 'co tydzień',
    desc: 'Zwrot przegranych środków',
    image: '/images/bonuses/cashback-0ebdff.png',
    badge: null,
    cta: 'Dowiedz się więcej',
  },
  {
    id: 'freespins',
    title: 'Darmowe spiny',
    value: '100 FS',
    sub: 'co miesiąc',
    desc: 'Na wybrane automaty',
    image: '/images/bonuses/freespins-58c670.png',
    badge: 'NOWY',
    badgeColor: '#006633',
    cta: 'Odbierz spiny',
  },
]

const regulamin = [
  'Bonusy dostępne wyłącznie dla zarejestrowanych graczy.',
  'Każdy bonus podlega wymogowi obrotu x30 przed wypłatą.',
  'Bonus powitalny można odebrać tylko raz na konto.',
  'Cashback naliczany jest co poniedziałek za poprzedni tydzień.',
  'Darmowe spiny ważne przez 7 dni od momentu przyznania.',
  'VulkanSpiele zastrzega sobie prawo do zmiany warunków bonusów.',
]

export default function BonusesClient() {
  return (
    <div>
      {/* Bonus cards */}
      <div id="bonuses" className="container mx-auto px-4 py-10">
        <h2 className="text-white font-bold text-xl mb-6">Dostępne bonusy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              className="rounded-xl overflow-hidden flex flex-col hover:border-brand/40 transition-colors"
              style={{ background: '#1a0000', border: '1px solid #2a0000' }}
            >
              {/* Image area */}
              <div className="relative h-36 overflow-hidden" style={{ background: 'linear-gradient(135deg, #2d0000 0%, #0d0000 100%)' }}>
                {bonus.badge && (
                  <span
                    className="absolute top-2 left-2 z-10 text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm"
                    style={{ background: bonus.badgeColor }}
                  >
                    {bonus.badge}
                  </span>
                )}
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <p className="text-white/50 text-xs mb-0.5">{bonus.desc}</p>
                <p className="text-gold font-black text-2xl leading-none mb-1">{bonus.value}</p>
                <p className="text-white font-bold text-sm mb-1">{bonus.title}</p>
                <p className="text-white/40 text-xs mb-4">{bonus.sub}</p>
                <a
                  href="/go/"
                  className="mt-auto w-full py-2 rounded-lg text-black font-bold text-sm hover:bg-yellow-400 transition-colors text-center block"
                  style={{ background: '#FFD700' }}
                >
                  {bonus.cta}
                </a>
              </div>
              {bonusAnchors[bonus.id] && (
                <div className="px-4 pb-4">
                  <p className="text-xs text-white/50">
                    {bonusAnchors[bonus.id].pre}
                    <Link
                      href={bonusAnchors[bonus.id].href}
                      className="underline hover:text-yellow-300 transition"
                      style={{ color: '#FFD700' }}
                    >
                      {bonusAnchors[bonus.id].text}
                    </Link>
                    {bonusAnchors[bonus.id].post}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Regulamin */}
      <div className="container mx-auto px-4 pt-2 pb-6">
        <div
          className="rounded-xl p-6"
          style={{ background: '#110000', border: '1px solid #2a0000' }}
        >
          <h3 className="text-white font-bold text-base mb-4">Regulamin bonusów</h3>
          <ol className="list-decimal list-inside space-y-2">
            {regulamin.map((item, i) => (
              <li key={i} className="text-white/50 text-sm leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>
      </div>


      {/* SEO Text */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div
          className="prose-casino"
          dangerouslySetInnerHTML={{ __html: `<h2 class="text-xl font-black text-white mb-3 mt-2">Vulkan Spiele Bonus: Kompletny Przewodnik po Kodach Promocyjnych 2026</h2>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Platforma Vulkan Spiele oferuje polskim graczom jeden z najbardziej konkurencyjnych systemów bonusowych na rynku kasyn online. Od bonusów bez depozytu przez darmowe spiny po ekskluzywne kody promocyjne – nasza analiza ujawnia wszystkie dostępne oferty, warunki ich aktywacji oraz ukryte mechanizmy, które determinują rzeczywistą wartość każdej promocji dla gracza.</p>
<h2 class="text-xl font-black text-white mb-3 mt-8">Jakie bonusy oferuje Vulkan Spiele dla polskich graczy w 2026?</h2>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Vulkan Spiele wyróżnia się na polskim rynku trzema kluczowymi promocjami: bonusem bez depozytu w wysokości 10 euro dostępnym bezpośrednio po rejestracji, pakietem 88 darmowych obrotów przypisanych do wybranych automatów oraz bonusem powitalnym sięgającym 100% wartości pierwszej wpłaty do maksymalnej kwoty 500 euro. Wszystkie te oferty charakteryzują się wymaganiem obrotu na poziomie 35-krotności kwoty bonusowej, co stawia je w średnim przedziale konkurencyjności względem innych platform działających w Polsce. Dostęp do promocji jest ograniczony czasowo – bonus bez depozytu należy wykorzystać w ciągu 72 godzin od aktywacji, natomiast darmowe spiny tracą ważność po 7 dniach.</p>
<h3 class="text-lg font-bold text-white mb-2 mt-5">Bonus bez depozytu 10 euro: warunki aktywacji i obrotu</h3>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Bonus bez depozytu o wartości 10 euro aktywuje się automatycznie po zweryfikowaniu numeru telefonu oraz adresu e-mail w procesie rejestracji konta. Proces weryfikacji wymaga potwierdzenia tożsamości poprzez przesłanie skanu dowodu osobistego lub paszportu bezpośrednio w panelu użytkownika w zakładce "Weryfikacja". Środki bonusowe trafiają na konto w ciągu 15 minut od zakończenia procesu i podlegają wymaganiu obrotu w wysokości 35x, co oznacza konieczność postawienia zakładów o łącznej wartości 350 euro przed zleceniem wypłaty. Maksymalna kwota, którą można wypłacić z tego bonusu, wynosi 100 euro niezależnie od wysokości wygranej. Ważne zastrzeżenie: wymaganie obrotu musi zostać spełnione w terminie 7 dni od aktywacji, przy czym tylko zakłady na automaty liczą się w 100% – gry stołowe takie jak blackjack czy ruletka są całkowicie wykluczone z realizacji warunku.</p>
<h3 class="text-lg font-bold text-white mb-2 mt-5">Pakiet 88 darmowych spinów: na które gry i jak go otrzymać</h3>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Pakiet 88 darmowych obrotów jest przypisany wyłącznie do trzech automatów: Book of Ra Deluxe (40 spinów), Sizzling Hot Deluxe (30 spinów) oraz Lucky Lady's Charm (18 spinów), z wartością pojedynczego obrotu ustaloną na 0,10 euro. Aby otrzymać ten bonus, należy dokonać minimalnej wpłaty w wysokości 20 euro w ciągu pierwszych 24 godzin od rejestracji konta i wprowadzić kod promocyjny SPIN88 w polu przeznaczonym do kuponów podczas realizacji transakcji. Spiny są rozdzielane automatycznie na trzy równe transze: pierwsza partia 30 obrotów trafia na konto natychmiast po wpłacie, druga po 24 godzinach, trzecia po kolejnych 24 godzinach. Wygrane z darmowych spinów podlegają wymaganiu obrotu 40x i muszą zostać przeobrotowane w ciągu 5 dni od momentu ich przyznania. Maksymalny limit wypłaty wygranych z tego pakietu wynosi 200 euro, przy czym minimalna kwota zakładu podczas realizacji warunku to 0,20 euro za spin.</p>
<h3 class="text-lg font-bold text-white mb-2 mt-5">Bonus powitalny z pierwszą wpłatą: procenty i maksymalne kwoty</h3>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Bonus powitalny oferuje 100% wartości pierwszej wpłaty do maksymalnej kwoty bonusowej wynoszącej 500 euro, co wymaga faktycznego depozytu w wysokości minimum 10 euro i maksymalnie 500 euro. Środki bonusowe są księgowane na oddzielnym koncie bonusowym i podlegają wymaganiu obrotu 35x, co przy maksymalnym bonusie oznacza konieczność postawienia zakładów o łącznej wartości 17 500 euro. Realizacja warunku jest możliwa wyłącznie na automatach – gry stołowe, gry z krupierem na żywo oraz zakłady sportowe są wykluczzone z promocji. Bonus traci ważność po 30 dniach od momentu aktywacji, przy czym gracz może w każdej chwili anulować bonus i wycofać wpłacone środki własne bez realizacji warunku obrotu, tracąc jednocześnie całą kwotę bonusową oraz wygrane z niej pochodzące. Maksymalna stawka zakładu podczas aktywnego bonusu jest ograniczona do 5 euro za pojedynczy spin – przekroczenie tego limitu skutkuje automatyczną anulacją bonusu i skonfiskowaniem wygranych.</p>
<h2 class="text-xl font-black text-white mb-3 mt-8">Kody promocyjne Vulkan Spiele 2026: gdzie je znaleźć i jak użyć</h2>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Kody promocyjne Vulkan Spiele stanowią alternatywny sposób uzyskania dostępu do ekskluzywnych ofert bonusowych, które często przewyższają wartością standardowe promocje widoczne na stronie głównej. W 2026 roku platforma dystrybuuje kody poprzez trzy główne kanały: oficjalny newsletter e-mailowy wysyłany do zarejestrowanych użytkowników co czwartek o godzinie 18:00 czasu środkowoeuropejskiego, społeczności na forach tematycznych takich jak Bankier.pl oraz dedykowane grupy na platformie Telegram zarządzane przez autoryzowanych partnerów afiliacyjnych. Wprowadzenie kodu promocyjnego podczas rejestracji lub pierwszej wpłaty może zwiększyć wartość bonusu od 20% do nawet 150% w porównaniu ze standardową ofertą, przy czym każdy kod posiada limit aktywacji liczony globalnie dla wszystkich graczy oraz indywidualny termin ważności, po którego przekroczeniu system automatycznie odrzuca próbę jego użycia.</p>
<h3 class="text-lg font-bold text-white mb-2 mt-5">Aktualne kody promocyjne bez depozytu na forum i oficjalnych kanałach</h3>
<p class="text-gray-500 text-sm leading-relaxed mb-3">W marcu 2026 roku Vulkan Spiele udostępnia cztery aktywne kody promocyjne bez wymogu wpłaty, dystrybuowane poprzez zróżnicowane kanały komunikacji. Kod VULKAN15FREE, dostępny wyłącznie dla subskrybentów newslettera, przyznaje 15 euro bonusu bez depozytu z wymaganiem obrotu 40x i maksymalną wypłatą ograniczoną do 75 euro, przy czym jego ważność wygasa 31 marca 2026 o godzinie 23:59. Kod FORUM20 publikowany na polskich forach hazardowych zapewnia 20 darmowych spinów na automacie Starburst o wartości 0,25 euro każdy, z wymogiem obrotu wygranych 35x i terminem wykorzystania do 15 kwietnia 2026. Najbardziej wartościowy kod TELEGRAM25 dystrybuowany jest wyłącznie przez oficjalny kanał Telegram kasyna i oferuje 25 euro bonusu gotówkowego z wymaganiem obrotu 30x oraz maksymalną wypłatą 150 euro, jednak jego limit globalny wynosi tylko 500 aktywacji. Czwarty kod VERIFY10 aktywuje się automatycznie po pełnej weryfikacji tożsamości poprzez wideo-rozmowę z operatorem i przyznaje 10 euro bez warunku obrotu, z możliwością bezpośredniej wypłaty po spełnieniu minimalnego wymogu postawienia 5 zakładów o łącznej wartości minimum 50 euro.</p>` }}
        />
      </section>
    </div>
  )
}
