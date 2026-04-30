import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kim jesteśmy — niezależny przewodnik po kasynach online dla Polaków',
  description: 'Redakcja prowadzi niezależny serwis informacyjny o kasynach online: testy platform, weryfikacja licencji, analiza ofert bonusowych. Oceny przygotowywane bez nacisku marketingowego, działamy od 2024 roku.',
  openGraph: {
    title: 'Kim jesteśmy — niezależny przewodnik po kasynach online dla Polaków',
    description: 'Zespół redakcyjny testujący kasyna online dla polskich graczy: licencje, bonusy, wypłaty i obsługa klienta. Oceny niezależne i transparentne.',
    url: 'https://vulkanspielepoland.pl/o-nas/',
  },
}

export default function ONas() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">Kim jesteśmy?</h1>
      <p className="text-white/60 text-sm mb-10">
        Tworzymy niezależny serwis informacyjny dla osób szukających rzetelnych danych o kasynach online dostępnych
        w Polsce. Naszym celem jest dostarczanie świeżych, opartych na faktach analiz, które ułatwiają świadomy
        wybór platformy hazardowej i pomagają unikać typowych pułapek branży.
      </p>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        <div
          className="rounded-xl p-5"
          style={{ background: 'rgba(255, 215, 0, 0.05)', border: '1px solid rgba(255, 215, 0, 0.2)' }}
        >
          <p className="text-gold font-bold mb-2">ℹ Serwis afiliacyjny — ważna informacja</p>
          <p className="text-white/70 text-sm">
            VulkanSpiele jest <strong className="text-white">niezależnym portalem afiliacyjnym</strong> — nie jest kasynem
            internetowym i nie prowadzi żadnej działalności hazardowej. Nie przyjmujemy wpłat, nie prowadzimy kont
            graczy ani nie organizujemy gier losowych. Serwis może otrzymywać wynagrodzenie od operatorów kasyn
            za kierowanie do nich użytkowników. Nie ma to wpływu na obiektywność naszych ocen i recenzji.
          </p>
        </div>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Nasza misja</h2>
          <p>
            Wierzymy, że każdy gracz zasługuje na dostęp do rzetelnych, aktualnych i łatwych w odbiorze
            informacji o kasynach online. Na polskim rynku istnieje wiele operatorów — różniących się ofertą,
            licencjami, metodami płatności i jakością obsługi klienta. Naszą misją jest pomoc w nawigacji
            po tym świecie i wskazanie opcji naprawdę wartych uwagi.
          </p>
          <p className="mt-2">
            Portal VulkanSpiele działa od 2024 roku. Nasz zespół na bieżąco monitoruje rynek kasyn online,
            testuje nowe platformy i aktualizuje treści, by zawsze odzwierciedlały aktualną rzeczywistość.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Co znajdziesz w naszym serwisie?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Recenzje kasyn',
                desc: 'Kompleksowe oceny platform — od licencji i dostawców gier, przez metody płatności, aż po jakość obsługi klienta i szybkość wypłat.',
              },
              {
                title: 'Aktualne bonusy',
                desc: 'Przejrzyste zestawienia ofert powitalnych, darmowych spinów, cashbacków i innych promocji z dokładnym omówieniem warunków obrotu.',
              },
              {
                title: 'Turnieje i akcje specjalne',
                desc: 'Informacje o aktywnych turniejach slotowych, loteriach i sezonowych kampaniach dostępnych dla polskich graczy.',
              },
              {
                title: 'Poradniki i strategie',
                desc: 'Artykuły edukacyjne o zasadach najpopularniejszych gier, RTP automatów, wartości bonusów i odpowiedzialnej grze.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
                <p className="text-white font-semibold mb-1">{item.title}</p>
                <p className="text-white/50 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Jak oceniamy kasyna?</h2>
          <p className="mb-3">
            Nasze recenzje są oparte na własnych testach i niezależnej analizie. Każde kasyno oceniamy
            według tych samych kryteriów:
          </p>
          <ul className="space-y-2">
            {[
              'Ważna licencja od uznanego regulatora — Malta Gaming Authority (MGA), Curaçao eGaming lub UKGC;',
              'Certyfikowany generator liczb losowych (RNG) potwierdzający losowość wyników gier;',
              'Szeroka gama gier od renomowanych dostawców oprogramowania;',
              'Przejrzyste warunki bonusów z rozsądnymi wymogami obrotu (wagering);',
              'Szybkie i bezproblemowe wypłaty z weryfikacją w rozsądnym czasie;',
              'Narzędzia odpowiedzialnej gry: limity, przerwy, samowykluczenie;',
              'Responsywna obsługa klienta dostępna w języku polskim lub angielskim.',
            ].map((criterion) => (
              <li key={criterion} className="flex items-start gap-2">
                <span className="text-gold mt-0.5 shrink-0">✓</span>
                <span>{criterion}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            Kasyna niespełniające powyższych kryteriów nie pojawiają się w naszych rekomendacjach —
            bez względu na warunki finansowe ewentualnej umowy afiliacyjnej.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Model finansowania</h2>
          <p>
            Serwis VulkanSpiele jest finansowany w modelu afiliacyjnym. Oznacza to, że:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Gdy klikniesz w link do kasyna partnerskiego i założysz konto, możemy otrzymać prowizję od operatora;</li>
            <li>Wynagrodzenie przyjmuje formę udziału w przychodach (RevShare), opłaty za rejestrację (CPA) lub mieszaną;</li>
            <li>Umowy z partnerami nie determinują wyników recenzji ani kolejności w rankingach;</li>
            <li>Korzystanie z Serwisu jest dla użytkowników w pełni bezpłatne.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Odpowiedzialna gra</h2>
          <p>
            Jesteśmy przekonani, że hazard online może być bezpieczną rozrywką — o ile podchodzi się do niego
            świadomie. Dlatego aktywnie promujemy zasady odpowiedzialnej gry i informujemy o dostępnych narzędziach
            ochrony. Jeśli potrzebujesz pomocy lub czujesz, że gra wymknęła Ci się spod kontroli, odwiedź naszą stronę{' '}
            <Link href="/odpowiedzialna-gra" className="text-gold hover:underline">Odpowiedzialna Gra</Link>{' '}
            lub zadzwoń na bezpłatny telefon zaufania: <strong className="text-white">116 123</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Skontaktuj się z nami</h2>
          <p>
            Masz pytanie, chcesz zgłosić nieaktualną informację lub zaproponować współpracę?
            Pisz śmiało — staramy się odpowiadać w ciągu 1–2 dni roboczych.
          </p>
          <p className="mt-2">
            <a href="mailto:support@vulkanspielepoland.pl" className="text-gold hover:underline">
              support@vulkanspielepoland.pl
            </a>
          </p>
        </section>

      </div>
    </main>
  )
}
