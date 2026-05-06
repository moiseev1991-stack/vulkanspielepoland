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
          dangerouslySetInnerHTML={{ __html: `<h2 class="text-xl font-black text-white mb-3 mt-2">Wszystkie bonusy VulkanSpiele 2026 — pełny katalog promocji dla polskich graczy</h2>
<p class="text-gray-500 text-sm leading-relaxed mb-3">VulkanSpiele oferuje wielopoziomowy program promocyjny obejmujący sześć głównych kategorii bonusów dostępnych równocześnie dla wszystkich aktywnych graczy z Polski. Niniejszy katalog porównuje wartość każdej oferty, warunki obrotu, limity wypłat oraz okresy ważności, aby pomóc Ci wybrać optymalną kombinację promocji odpowiadającą Twojemu stylowi gry — od graczy okazjonalnych po Highrollerów odwiedzających platformę codziennie.</p>
<h2 class="text-xl font-black text-white mb-3 mt-8">Pakiet powitalny do 2 500 € + 350 FS na pierwsze cztery depozyty</h2>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Bonus powitalny VulkanSpiele jest rozłożony na cztery pierwsze wpłaty i łącznie sięga 2 500 euro plus 350 darmowych obrotów. Pierwszy depozyt aktywuje 100% do 300 €, drugi 125% do 400 €, trzeci 150% do 600 € oraz czwarty 200% do 1 200 €. Każda transza jest księgowana na oddzielnym koncie bonusowym z wymaganiem obrotu 40-krotności sumy bonusu i depozytu, przy czym maksymalna stawka pojedynczego zakładu w trakcie aktywnego bonusu wynosi 5 €. Darmowe spiny rozdzielają się porcjami po 50 obrotów dziennie przez siedem dni — przypisane są do aktualnie wybranych automatów miesiąca. Cały pakiet powitalny należy uruchomić w ciągu 30 dni od rejestracji konta, a pojedynczą transzę zrealizować w terminie 7 dni od aktywacji.</p>
<h2 class="text-xl font-black text-white mb-3 mt-8">Cashback 10% — cotygodniowy zwrot strat bez wymogu obrotu</h2>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Cashback w VulkanSpiele należy do najkorzystniejszych promocji oferowanych przez platformę, ponieważ zwrócone środki nie podlegają wymaganiu obrotu i są wypłacalne natychmiast po zaksięgowaniu. Każdy poniedziałek o godzinie 12:00 system automatycznie oblicza różnicę pomiędzy sumą depozytów a saldem konta z poprzedniego tygodnia kalendarzowego (od poniedziałku do niedzieli) i wypłaca 10% tej kwoty na konto rzeczywiste gracza. Minimalna kwota cashbacku wynosi 5 €, maksymalna nie jest ograniczona — Highrollerzy regularnie otrzymują zwroty przekraczające 1 000 € tygodniowo. Aby uzyskać status uprawniający, należy w danym tygodniu wykonać co najmniej trzy depozyty o łącznej wartości minimum 50 €. Cashback nie kumuluje się z innymi promocjami procentowymi i jest wypłacany niezależnie od poziomu w programie VIP.</p>
<h3 class="text-lg font-bold text-white mb-2 mt-5">Reload Friday: 50% do 200 € + 50 FS co tydzień</h3>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Reload Friday to cyklotygodniowa promocja aktywna w każdy piątek od godziny 00:00 do niedzieli 23:59, przeznaczona wyłącznie dla graczy, którzy zrealizowali w pełni bonus powitalny. Każdy depozyt złożony w tym oknie czasowym o wartości minimum 30 € otrzymuje doładowanie 50% do maksymalnej kwoty bonusowej 200 € oraz 50 darmowych obrotów na rotacyjnie dobieranym automacie tygodnia. Wymaganie obrotu wynosi 35-krotność sumy bonusu i depozytu, a termin realizacji to 5 dni od aktywacji. W odróżnieniu od bonusu powitalnego, Reload Friday można aktywować dowolną liczbę razy w ciągu jednego okna promocyjnego, jednak każdy kolejny bonus wymaga zakończenia obrotu poprzedniego — nie jest możliwe nakładanie się wielu aktywnych bonusów reload na koncie jednocześnie.</p>
<h3 class="text-lg font-bold text-white mb-2 mt-5">Bonus urodzinowy i niespodzianki sezonowe</h3>
<p class="text-gray-500 text-sm leading-relaxed mb-3">VulkanSpiele wysyła zarejestrowanym graczom indywidualny kod promocyjny aktywujący się dokładnie w dniu urodzin podanym podczas rejestracji konta. Wartość prezentu zależy od poziomu w programie VIP — od 25 € w darmowych spinach dla nowych użytkowników po pakiety o wartości przekraczającej 500 € dla graczy poziomu Diamond. Bonus urodzinowy jest dostępny do aktywacji przez 7 dni od godziny 00:00 daty urodzin. Niezależnie od urodzin, w okresie świątecznym (Boże Narodzenie, Wielkanoc, Halloween) operator publikuje kalendarz adwentowy z codziennymi mini-bonusami: darmowymi obrotami, mnożnikami cashbacku oraz kuponami zwiększającymi szanse w turniejach. Każdy z tych bonusów aktywuje się tylko raz dziennie po zalogowaniu i wymaga minimalnego depozytu 20 € w ciągu poprzednich 48 godzin.</p>
<h2 class="text-xl font-black text-white mb-3 mt-8">Highroller Bonus 200% do 1 000 € — oferta dla graczy wysokich stawek</h2>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Highroller Bonus jest skierowany do graczy regularnie wpłacających kwoty powyżej 500 € jednorazowo i oferuje 200% bonusu do maksymalnej wartości 1 000 € plus 100 spinów w grze Crown Coins z mnożnikiem do x500. Aktywacja wymaga minimalnej wpłaty 500 € oraz wcześniejszego osiągnięcia poziomu Gold w programie VIP, co oznacza cumulative deposity rzędu minimum 5 000 € w okresie ostatnich 90 dni. Wymaganie obrotu jest zredukowane do 25-krotności w stosunku do standardowych 35-40x, a maksymalny zakład pojedynczy wynosi 25 € — pięciokrotnie więcej niż przy zwykłych bonusach. Termin realizacji wydłużono do 21 dni, dając Highrollerom realną przestrzeń do skutecznej rotacji bonusu nawet przy strategiach niskooprocentowych takich jak gry stołowe (które w tym przypadku liczą się w 50% do warunku obrotu).</p>
<h2 class="text-xl font-black text-white mb-3 mt-8">Program poleceń Refer-a-Friend: 50 € za każde zaproszenie</h2>
<p class="text-gray-500 text-sm leading-relaxed mb-3">VulkanSpiele wynagradza graczy za polecanie platformy znajomym kwotą 50 € za każdą skuteczną aktywację konta. Mechanizm działa poprzez unikalny link partnerski generowany w panelu użytkownika w zakładce „Poleć znajomemu". Bonus jest księgowany dopiero po spełnieniu trzech warunków przez polecaną osobę: zakończenia weryfikacji KYC, dokonania pierwszej wpłaty minimum 50 € oraz wygenerowania obrotu o wartości minimum 100 € w grach kwalifikowanych. Środki za polecenia trafiają na rzeczywiste konto polecającego bez wymogu obrotu i są wypłacalne natychmiast po zaksięgowaniu. Limit programu wynosi 25 udanych poleceń miesięcznie, co odpowiada maksymalnej miesięcznej premii 1 250 €. Polecenia członków rodziny zamieszkałych pod tym samym adresem IP są systemowo blokowane i nie kwalifikują się do bonusu.</p>
<h3 class="text-lg font-bold text-white mb-2 mt-5">Porównanie warunków obrotu wszystkich bonusów Vulkan Spiele</h3>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Wybór optymalnego bonusu zależy nie tylko od jego wartości nominalnej, lecz przede wszystkim od ekonomicznego stosunku wymagania obrotu do realnej wartości oczekiwanej. Bonusy z najniższym współczynnikiem obrotu w VulkanSpiele to Highroller Bonus (25x), Reload Friday (35x) oraz pakiet powitalny (40x). Cashback i bonus za polecenie funkcjonują poza tą logiką, ponieważ nie wymagają obrotu i są bezpośrednio wypłacalne, co czyni je strategicznie najkorzystniejszymi dla graczy planujących krótkoterminowe wypłaty. Szczegółowe warunki bonusu bez depozytu i kodów promocyjnych — w tym aktualną listę kodów oraz darmowych spinów dostępnych bez wpłaty — opisaliśmy w dedykowanych sekcjach: <a href="/bonus-bez-depozytu/" style="color:#FFD700">bonus bez depozytu</a> oraz <a href="/kod-promocyjny/" style="color:#FFD700">kod promocyjny</a>.</p>` }}
        />
      </section>
    </div>
  )
}
