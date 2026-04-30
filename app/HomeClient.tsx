'use client'

import { useState, useMemo } from 'react'
import { games } from '@/data/games'
import { tournaments } from '@/data/tournaments'
import { winners } from '@/data/winners'
import HeroBanner from '@/components/home/HeroBanner'
import CategoryTabs from '@/components/home/CategoryTabs'
import GameGrid from '@/components/home/GameGrid'
import TournamentBanner from '@/components/home/TournamentBanner'
import LiveCasinoGrid from '@/components/home/LiveCasinoGrid'
import CurrentWinners from '@/components/home/CurrentWinners'
import CrashGames from '@/components/home/CrashGames'

const activeTournament = tournaments.find((t) => t.status === 'active' && t.type === 'weekly')!

export default function HomeClient() {
  const [activeCategory, setActiveCategory] = useState('lobby')

  const filteredGames = useMemo(() => {
    if (activeCategory === 'lobby' || activeCategory === 'best' || activeCategory === 'popular') return games
    if (activeCategory === 'slots') return games.filter((g) => g.category === 'slots')
    if (activeCategory === 'live') return games.filter((g) => g.category === 'live')
    if (activeCategory === 'new') return games.filter((g) => g.tags.includes('new'))
    return games
  }, [activeCategory])

  const tournamentGames = activeTournament
    ? games.filter((g) => activeTournament.gameIds.includes(g.id))
    : []

  return (
    <div>
      <HeroBanner />
      <div className="container mx-auto px-4">
        <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <GameGrid title="Najlepsze gry w Polsce" count={filteredGames.length} games={filteredGames} />
        <LiveCasinoGrid />
        <CrashGames />
        <CurrentWinners winners={winners} />
        {activeTournament && (
          <TournamentBanner tournament={activeTournament} games={tournamentGames} />
        )}
      </div>

      {/* SEO Text */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div
          className="prose-casino"
          dangerouslySetInnerHTML={{ __html: `<h1 class="text-2xl font-black text-white mb-4 mt-2">VulkanSpiele Kasyno Online – Recenzja, Bonusy i Opinie 2026</h1>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Kompleksowa recenzja platformy VulkanSpiele w Polsce: analiza legalności, dostępnych bonusów, metod wypłat oraz prawdziwych opinii graczy. Sprawdź, czy warto grać w tym kasynie online.</p>
<h2 class="text-xl font-black text-white mb-3 mt-8">Czy VulkanSpiele jest legalnym kasynem w Polsce?</h2>
<p class="text-gray-500 text-sm leading-relaxed mb-3">VulkanSpiele nie posiada licencji wydanej przez polskie Ministerstwo Finansów, co oznacza, że jego działalność na terenie Polski jest nielegalna zgodnie z obowiązującym prawem hazardowym. Platforma ta operuje na podstawie licencji wydanej przez zagraniczny organ regulacyjny, jednak taka licencja nie uprawnia do oferowania usług hazardowych polskim graczom. W praktyce oznacza to, że korzystanie z tej platformy wiąże się z brakiem ochrony prawnej oraz narażeniem na sankcje administracyjne.</p>
<h3 class="text-lg font-bold text-white mb-2 mt-5">Status prawny VulkanSpiele na polskim rynku hazardowym</h3>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Zgodnie z ustawą o grach hazardowych z 19 listopada 2009 roku, organizowanie gier hazardowych w Polsce wymaga uzyskania koncesji lub zezwolenia wydanego przez Ministerstwo Finansów. VulkanSpiele nie figuruje w rejestrze legalnych operatorów dostępnym na stronie <a href="https://www.gov.pl" target="_blank" rel="noopener noreferrer" class="text-red-400 underline hover:text-red-300">Ministerstwa Finansów</a>, co potwierdza jego nielegalny status. Operator ten funkcjonuje na podstawie licencji z Curaçao, Malta Gaming Authority lub innej jurysdykcji offshore, która nie jest uznawana przez polskie władze. Polski ustawodawca konsekwentnie egzekwuje monopol państwa w zakresie gier losowych oraz ściśle reguluje rynek kasyn online, dopuszczając wyłącznie podmioty z polską licencją. Strony internetowe nielegalnych kasyn podlegają blokadzie przez dostawców usług internetowych na mocy art. 20a ustawy o grach hazardowych, a operatorzy mogą być zobowiązani do zapłaty kar finansowych sięgających kilkudziesięciu milionów złotych.</p>
<h3 class="text-lg font-bold text-white mb-2 mt-5">Różnice między VulkanSpiele a legalnymi kasynami z licencją MF</h3>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Podstawowa różnica polega na ramach prawnych funkcjonowania oraz poziomie ochrony konsumenta. Legalne kasyna online z polską licencją podlegają nadzorowi Ministerstwa Finansów oraz kontroli Krajowej Administracji Skarbowej, która weryfikuje uczciwość oprogramowania, wypłacalność operatora oraz zgodność z wymogami odpowiedzialnej gry. Operatorzy legalni muszą implementować obowiązkowy system wykluczenia graczy uzależnionych, zgłaszać podejrzane transakcje do Generalnego Inspektora Informacji Finansowej oraz respektować polskie przepisy dotyczące ochrony danych osobowych zgodnie z RODO. VulkanSpiele natomiast działa poza tym systemem kontroli, co oznacza brak mechanizmów weryfikacji poprawności działania generatorów liczb pseudolosowych, brak obowiązku raportowania transakcji oraz brak możliwości dochodzenia roszczeń przed polskimi sądami w przypadku sporów. Z perspektywy gracza rezygnuje on z gwarancji wypłaty wygranych, możliwości złożenia skargi do polskiego regulatora oraz wsparcia instytucji zajmujących się rozwiązywaniem sporów konsumenckich. Dodatkowo legalne kasyna stosują obowiązujący w Polsce podatek od wygranych w wysokości dziesięciu procent od kwot przekraczających 2280 złotych, który jest automatycznie potrącany i odprowadzany do urzędu skarbowego, podczas gdy w VulkanSpiele odpowiedzialność za rozliczenie podatkowe spoczywa wyłącznie na graczu.</p>
<h3 class="text-lg font-bold text-white mb-2 mt-5">Jakie ryzyko wiąże się z grą w kasynie bez polskiej licencji?</h3>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Gracz korzystający z VulkanSpiele naraża się na konsekwencje prawne, finansowe oraz techniczne. Po pierwsze, uczestnictwo w nielegalnych grach hazardowych jest wykroczeniem skarbowym zgodnie z art. 107 kodeksu karnego skarbowego, zagrożonym grzywną do 120 stawek dziennych, co w praktyce może oznaczać karę nawet kilkunastu tysięcy złotych. Choć do tej pory polskie organy ścigania koncentrowały się głównie na operatorach, a nie indywidualnych graczach, organy skarbowe posiadają formalne uprawnienia do nakładania sankcji na użytkowników nielegalnych platform. Po drugie, gracze nie mają żadnej gwarancji wypłaty wygranych, ponieważ operator działający bez polskiej licencji nie podlega nadzorowi krajowego regulatora i może arbitralnie zablokować konto lub odmówić transferu środków bez możliwości skutecznego odwołania się do polskich instytucji ochrony konsumenta. Po trzecie, transakcje finansowe realizowane z nieregulowanymi operatorami narażają dane karty kredytowej oraz informacje osobowe na potencjalne nadużycia, gdyż brak lokalnego nadzoru eliminuje mechanizmy kontroli bezpieczeństwa przetwarzania płatności. Po czwarte, polskie banki oraz operatorzy kart płatniczych mają prawo blokować transakcje kierowane do nielegalnych kasyn, co w praktyce może prowadzić do zamrożenia konta bankowego lub ograniczenia możliwości wykonywania operacji online do czasu wyjaśnienia sprawy. Wreszcie, zgodnie z art. 89 ustawy o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu, instytucje finansowe są zobowiązane do zgłaszania podejrzanych transakcji, co może skutkować wszczęciem postępowania wyjaśniającego przez Generalnego Inspektora Informacji Finansowej oraz potencjalnym objęciem gracza wzmożoną kontrolą skarbową.</p>
<h2 class="text-xl font-black text-white mb-3 mt-8">System bonusów VulkanSpiele – co faktycznie otrzymasz?</h2>
<p class="text-gray-500 text-sm leading-relaxed mb-3">System bonusowy VulkanSpiele opiera się na wielopoziomowej strukturze promocji depozytowych, które na pierwszy rzut oka wyglądają atrakcyjnie, jednak są obwarowane restrykcyjnymi warunkami obrotu uniemożliwiającymi łatwą realizację wygranych. Platforma oferuje pakiet powitalny rozłożony na kilka pierwszych depozytów, bonusy reload dla stałych graczy oraz okazjonalne promocje związane z konkretnymi grami lub dostawcami oprogramowania. Kluczowym elementem strategii marketingowej operatora jest stworzenie iluzji hojności poprzez wysokie nominalne wartości bonusów, podczas gdy rzeczywiste szanse na wypłatę środków bonusowych są znikome ze względu na wymagania wagera przekraczające trzydzieści pięć do pięćdziesięciu krotności kwoty bonusu, krótkie terminy realizacji oraz rozbudowane wykazy gier wykluczonych z uczestnictwa w programie bonusowym.</p>
<h3 class="text-lg font-bold text-white mb-2 mt-5">Bonus powitalny: struktura oferty i wymagania obrotu</h3>
<p class="text-gray-500 text-sm leading-relaxed mb-3">Standardowy pakiet powitalny VulkanSpiele składa się z trzech do pięciu bonusów depozytowych aktywowanych przy kolejnych wpłatach środków na konto gracza. Typowa konstrukcja obejmuje bonus sto procent od pierwszego depozytu do wysokości tysiąca złotych lub równowartości w euro, siedemdziesiąt pięć procent od drugiego depozytu do pięciuset złotych oraz pięćdziesiąt procent od trzeciego depozytu do dwustu pięćdziesięciu złotych. Łączna nominalna wartość pakietu powitalnego może sięgać nawet trzech tysięcy złotych, co wydaje się imponującą ofertą w porównaniu z konkurencją. Jednak aby uwolnić środki bonusowe i móc wypłacić wygrane, gracz musi spełnić wymóg obrotu określany jako wager, który w przypadku VulkanSpiele wynosi typowo czterdzieści razy suma depozytu i bonusu. W praktyce oznacza to, że przy pierwszym depozycie tysiąc złotych i bonusie tysiąc złotych gracz musi obrócić łącznie osiemdziesiąt tysięcy złotych zanim będzie mógł zlecić wypłatę jakichkolwiek środków. Dodatkowo obowiązują ograniczenia czasowe, gdzie realizacja wagera musi nastąpić w ciągu czternastu do trzydziestu dni od aktywacji bonusu, co przy przeciętnym RTP slotów na poziomie dziewięćdziesięciu sześciu procent czyni pełną realizację warunków matematycznie mało prawdopodobną dla większości graczy.</p>` }}
        />
      </section>
    </div>
  )
}
