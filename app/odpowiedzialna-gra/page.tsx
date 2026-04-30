import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Świadoma rozrywka — narzędzia kontroli i pomoc dla graczy 18+',
  description: 'Praktyczne zasady świadomego hazardu, sygnały ostrzegawcze uzależnienia oraz kontakty pomocowe: telefon zaufania 116 123, KCPU oraz wspólnota Anonimowych Hazardzistów.',
  openGraph: {
    title: 'Świadoma rozrywka — narzędzia kontroli i pomoc dla graczy 18+',
    description: 'Limity depozytów, samowykluczenie, czas timeout — przegląd narzędzi ochrony oraz kontakty do organizacji wspierających.',
    url: 'https://vulkanspielepoland.pl/odpowiedzialna-gra/',
  },
  robots: { index: true, follow: true },
}

export default function OdpowiedzialnaGra() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">Świadoma gra i pomoc dla graczy</h1>
      <p className="text-white/60 text-sm mb-10">
        Hazard online jest formą rozrywki tylko wtedy, gdy gracz pozostaje w pełni świadomy swoich
        decyzji finansowych i emocjonalnych. Przygotowaliśmy kompleksowy zestaw zasad, narzędzi
        samokontroli oraz kontaktów do organizacji pomocowych, które warto mieć pod ręką.
      </p>

      <div
        className="rounded-xl p-5 mb-10"
        style={{ background: 'rgba(204,0,0,0.1)', border: '1px solid rgba(204,0,0,0.3)' }}
      >
        <p className="text-white font-bold text-base mb-1">⚠ Ostrzeżenie</p>
        <p className="text-white/70 text-sm">
          Hazard wiąże się z ryzykiem uzależnienia i poważnymi konsekwencjami finansowymi.
          Graj wyłącznie za środki, których utrata nie wpłynie negatywnie na Twoje życie.
          Jeśli masz problem z hazardem — zadzwoń na bezpłatny telefon zaufania: <strong className="text-white">116 123</strong>.
        </p>
      </div>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Złote zasady odpowiedzialnej gry</h2>
          <ul className="space-y-2">
            {[
              'Traktuj hazard jako rozrywkę — nigdy jako sposób na zarobek lub wyjście z problemów finansowych.',
              'Przed sesją gry ustal budżet i nieprzekraczalny limit czasu. Trzymaj się ich bezwzględnie.',
              'Nigdy nie graj pod wpływem alkoholu, substancji psychoaktywnych ani w stanie silnego stresu.',
              'Nie staraj się "odrobić" strat — pościg za stratami jest jedną z najczęstszych przyczyn uzależnienia.',
              'Rób regularne przerwy i obserwuj, ile czasu poświęcasz na grę każdego tygodnia.',
              'Korzystaj wyłącznie z kasyn posiadających ważną licencję i certyfikowane oprogramowanie.',
              'Pamiętaj, że kasyno zawsze ma przewagę statystyczną — wygrana w dłuższej perspektywie nie jest gwarantowana.',
            ].map((rule) => (
              <li key={rule} className="flex items-start gap-2">
                <span className="text-gold mt-0.5 shrink-0">✓</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Czy hazard staje się problemem?</h2>
          <p className="mb-3">
            Uzależnienie od hazardu rozwija się stopniowo i często trudno je samodzielnie zauważyć.
            Poniższe sygnały mogą wskazywać, że gra wymknęła się spod kontroli:
          </p>
          <ul className="space-y-2">
            {[
              'Myśli o grze zajmują Ci znaczną część dnia — planujesz kolejne sesje, analizujesz poprzednie.',
              'Kwoty, którymi grasz, systematycznie rosną, by osiągnąć ten sam poziom emocji.',
              'Podejmowałeś/-aś próby ograniczenia gry, ale nie udało Ci się ich dotrzymać.',
              'Grasz, by uciec od problemów, nudy, lęku lub depresji.',
              'Ukrywasz rozmiar wydatków na hazard przed bliskimi lub kłamiesz na ten temat.',
              'Zaciągasz pożyczki lub sprzedajesz wartościowe rzeczy, żeby sfinansować grę.',
              'Zaniedbujesz obowiązki zawodowe, rodzinne lub szkolne z powodu hazardu.',
              'Po przegraniu odczuwasz silny przymus natychmiastowego powrotu do gry.',
            ].map((sign) => (
              <li key={sign} className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 shrink-0">!</span>
                <span>{sign}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-white/50">
            Jeśli rozpoznajesz u siebie chociaż kilka z powyższych zachowań, nie zwlekaj —
            skontaktuj się z jedną z organizacji pomocowych wymienionych poniżej.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Narzędzia kontroli dostępne w kasynach</h2>
          <p className="mb-3">
            Legalne kasyna online są zobowiązane przez regulatorów do udostępnienia graczom narzędzi
            pozwalających kontrolować lub ograniczać swoje nawyki:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { title: 'Limit depozytu', desc: 'Dzienny, tygodniowy lub miesięczny pułap wpłat — kasyno odmówi przyjęcia kwoty przekraczającej limit.' },
              { title: 'Limit strat', desc: 'Automatyczne wstrzymanie gry, gdy łączne straty osiągną ustalony próg w danym okresie.' },
              { title: 'Limit sesji', desc: 'Automatyczne wylogowanie po upływie wybranego czasu gry (np. 1 h, 2 h).' },
              { title: 'Przerwa chłodząca', desc: 'Czasowe zablokowanie konta na 24 h, 7 lub 30 dni bez możliwości wcześniejszego odwołania.' },
              { title: 'Samowykluczenie', desc: 'Długoterminowe lub trwałe zamknięcie konta gracza — decyzja jest nieodwołalna przez wskazany okres.' },
              { title: 'Powiadomienia o czasie gry', desc: 'Alerty co określony czas (np. co 60 minut) informujące o długości trwania sesji.' },
            ].map((tool) => (
              <div key={tool.title} className="rounded-lg p-3" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
                <p className="text-white font-semibold text-xs mb-1">{tool.title}</p>
                <p className="text-white/50 text-xs">{tool.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-white/50">
            Aby skorzystać z tych narzędzi, zaloguj się do swojego konta w kasynie i przejdź
            do sekcji &bdquo;Odpowiedzialna gra&rdquo; lub &bdquo;Ustawienia konta&rdquo;.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Gdzie szukać pomocy w Polsce?</h2>
          <p className="mb-4">
            Poniższe organizacje oferują bezpłatne wsparcie dla osób uzależnionych od hazardu
            i ich rodzin. Nie czekaj — pomoc jest dostępna teraz.
          </p>
          <div className="space-y-3">
            <div className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
              <p className="text-white font-bold mb-1">Telefon Zaufania dla Dorosłych w Kryzysie Emocjonalnym</p>
              <p className="text-white/60 text-xs mb-1">
                Telefon: <strong className="text-white">116 123</strong> — czynny całą dobę, 7 dni w tygodniu, bezpłatny
              </p>
              <p className="text-white/50 text-xs">
                Wsparcie psychologiczne i pomoc w sytuacjach kryzysowych, w tym uzależnienia behawioralne.
              </p>
            </div>
            <div className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
              <p className="text-white font-bold mb-1">Krajowe Centrum Przeciwdziałania Uzależnieniom (KCPU)</p>
              <p className="text-white/60 text-xs mb-1">
                Strona: <a href="https://kcpu.gov.pl" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">kcpu.gov.pl</a>
              </p>
              <p className="text-white/50 text-xs">
                Baza placówek leczenia uzależnień w całej Polsce, programy terapeutyczne i informacje prawne.
              </p>
            </div>
            <div className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
              <p className="text-white font-bold mb-1">Anonimowi Hazardziści — GA Polska</p>
              <p className="text-white/60 text-xs mb-1">
                Strona: <a href="https://www.hazardzisci.org" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">hazardzisci.org</a>
              </p>
              <p className="text-white/50 text-xs">
                Wspólnota wzajemnej pomocy oparta na programie 12 kroków — spotkania w całej Polsce i online.
              </p>
            </div>
            <div className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
              <p className="text-white font-bold mb-1">Fundacja Krok po Kroku</p>
              <p className="text-white/60 text-xs mb-1">Telefon: <strong className="text-white">801 889 880</strong></p>
              <p className="text-white/50 text-xs">
                Terapia indywidualna i grupowa dla osób z problemem hazardowym oraz wsparcie dla ich rodzin.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Ochrona nieletnich</h2>
          <p>
            Serwis VulkanSpiele jest dostępny wyłącznie dla osób, które ukończyły 18 rok życia.
            Jeśli jesteś rodzicem lub opiekunem, skorzystaj z narzędzi kontroli rodzicielskiej,
            aby uniemożliwić nieletnim dostęp do treści dotyczących hazardu:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><a href="https://www.netnanny.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Net Nanny</a> — blokowanie treści dla dorosłych</li>
            <li><a href="https://www.cyberpatrol.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CyberPatrol</a> — filtrowanie stron internetowych</li>
            <li>Wbudowane narzędzia kontroli rodzicielskiej w systemach Windows 11, macOS, iOS i Android</li>
          </ul>
        </section>

      </div>
    </main>
  )
}
