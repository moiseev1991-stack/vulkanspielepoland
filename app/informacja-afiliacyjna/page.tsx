import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jak finansowany jest serwis — pełna transparentność partnerska',
  description: 'Wyjaśnienie modelu afiliacyjnego, źródeł prowizji oraz zasad zachowania niezależności redakcyjnej. Tłumaczymy, co linki partnerskie oznaczają w praktyce dla naszych czytelników.',
  openGraph: {
    title: 'Jak finansowany jest serwis — pełna transparentność partnerska',
    description: 'Model RevShare, CPA i hybryda — wyjaśniamy, jak zarabiamy i dlaczego nie wpływa to na obiektywność recenzji.',
    url: 'https://vulkanspielepoland.pl/informacja-afiliacyjna/',
  },
  robots: { index: true, follow: true },
}

export default function InformacjaAfiliacyjna() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">Jak działa nasz serwis afiliacyjny</h1>
      <p className="text-white/60 text-sm mb-10">
        Wierzymy, że czytelnik ma prawo wiedzieć, w jaki sposób finansowane jest medium, z którego
        czerpie informacje. Na tej stronie tłumaczymy każdy element naszego modelu współpracy z kasynami,
        zasady niezależności redakcyjnej oraz prawa, które przysługują Ci podczas korzystania z serwisu.
      </p>

      <div
        className="rounded-xl p-5 mb-10"
        style={{ background: 'rgba(255, 215, 0, 0.05)', border: '1px solid rgba(255, 215, 0, 0.2)' }}
      >
        <p className="text-gold font-bold mb-2">ℹ Najważniejsze w skrócie</p>
        <p className="text-white/70 text-sm">
          VulkanSpiele jest <strong className="text-white">niezależnym portalem afiliacyjnym</strong> —
          nie jest kasynem internetowym i nie prowadzi działalności hazardowej. Korzystamy z linków
          partnerskich, dzięki którym otrzymujemy prowizję od kasyn za użytkowników kierowanych z
          naszej strony. Dla Ciebie korzystanie z serwisu jest całkowicie bezpłatne.
        </p>
      </div>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Czym są linki afiliacyjne?</h2>
          <p>
            Linki afiliacyjne (zwane także partnerskimi) to specjalne adresy URL zawierające unikalny
            identyfikator naszego portalu. Gdy klikniesz w taki link i przejdziesz do kasyna partnerskiego,
            operator wie, że zostałeś polecony przez VulkanSpiele. Jeśli zarejestrujesz konto i zaczniesz
            grać, możemy otrzymać prowizję od kasyna.
          </p>
          <p className="mt-2">
            Wszystkie linki prowadzące do kasyn partnerskich na naszej stronie są linkami afiliacyjnymi.
            Oznaczamy je przyciskami typu „Zarejestruj się", „Odbierz bonus" lub „Zagraj teraz".
            Nie nakłada to na Ciebie żadnych dodatkowych kosztów — bonusy i warunki są identyczne,
            jakbyś trafił do kasyna bezpośrednio.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Modele rozliczeń z partnerami</h2>
          <p>Współpraca z kasynami opiera się na jednym z trzech modeli:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong className="text-white">RevShare (Revenue Share)</strong> — udział w przychodach generowanych przez polecony ruch (zwykle 25–45%).</li>
            <li><strong className="text-white">CPA (Cost Per Acquisition)</strong> — jednorazowa opłata za każdego zarejestrowanego gracza, który dokonał pierwszego depozytu.</li>
            <li><strong className="text-white">Hybryda</strong> — połączenie RevShare i CPA — najpopularniejszy model w branży.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Niezależność redakcyjna</h2>
          <p>
            Umowy afiliacyjne <strong className="text-white">nie wpływają</strong> na obiektywność naszych
            recenzji ani kolejność w rankingach. Operator, który płaci wyższą prowizję, nie otrzymuje
            automatycznie lepszej oceny ani wyższej pozycji. Każde kasyno jest oceniane według tych samych
            kryteriów: licencja, oferta gier, warunki bonusów, jakość obsługi klienta, szybkość wypłat
            i narzędzia odpowiedzialnej gry.
          </p>
          <p className="mt-2">
            Kasyna niespełniające naszych standardów nie pojawiają się w rekomendacjach — niezależnie od
            warunków finansowych ewentualnej współpracy. Regularnie usuwamy z portalu operatorów, którzy
            naruszyli zasady gry, opóźniają wypłaty lub nie odpowiadają na skargi graczy.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Co oznacza to dla Ciebie?</h2>
          <ul className="space-y-2">
            {[
              'Korzystanie z VulkanSpiele jest dla Ciebie w pełni bezpłatne — nie pobieramy żadnych opłat.',
              'Klikając w linki afiliacyjne, otrzymujesz dokładnie te same bonusy i warunki, co bezpośrednio na stronie kasyna.',
              'Nasze recenzje są niezależne — nie sponsorujemy żadnego operatora i nie ukrywamy negatywnych aspektów.',
              'Masz prawo zignorować nasze rekomendacje i wybrać dowolne kasyno z polską licencją MF.',
              'Nigdy nie udostępniamy Twoich danych osobowych operatorom kasyn — to robi sam użytkownik podczas rejestracji.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-gold mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Jak to wygląda technicznie?</h2>
          <p>
            Linki afiliacyjne na naszej stronie kierują przez stronę pośredniczącą{' '}
            <Link href="/go/" className="text-gold hover:underline">/go/</Link>, która automatycznie
            przekierowuje do kasyna z dołączonym identyfikatorem partnerskim. Strona pośrednicząca może
            także zapisywać techniczne pliki cookie (np. źródło ruchu, kampanię UTM), które pomagają
            nam analizować skuteczność naszych treści. Szczegóły znajdziesz w naszej{' '}
            <Link href="/polityka-prywatnosci" className="text-gold hover:underline">Polityce prywatności</Link>{' '}
            oraz{' '}
            <Link href="/polityka-cookie" className="text-gold hover:underline">Polityce cookie</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Zgłoszenie nieprawidłowości</h2>
          <p>
            Jeśli zauważyłeś, że któryś z polecanych przez nas operatorów nie wypłaca wygranych, opóźnia
            weryfikację lub łamie regulamin — daj nam znać. Zgłoszenia traktujemy poważnie i wyciągamy
            konsekwencje aż do usunięcia operatora z naszej listy.
          </p>
          <p className="mt-2">
            <a href="mailto:support@vulkanspielepoland.pl" className="text-gold hover:underline">
              support@vulkanspielepoland.pl
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Pytania?</h2>
          <p>
            Masz pytania dotyczące naszego modelu współpracy lub konkretnej rekomendacji? Wszystko
            wyjaśnimy — pisz na adres{' '}
            <a href="mailto:support@vulkanspielepoland.pl" className="text-gold hover:underline">
              support@vulkanspielepoland.pl
            </a>{' '}
            lub odwiedź stronę{' '}
            <Link href="/kontakt" className="text-gold hover:underline">Kontakt</Link>.
          </p>
        </section>

      </div>
    </main>
  )
}
