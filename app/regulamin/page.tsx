import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Zasady korzystania z serwisu informacyjnego dla osób 18+',
  description: 'Warunki korzystania z portalu informacyjnego: ograniczenia wiekowe, charakter afiliacyjny treści, prawa autorskie, wyłączenie odpowiedzialności oraz procedura składania reklamacji i uwag.',
  openGraph: {
    title: 'Zasady korzystania z serwisu informacyjnego dla osób 18+',
    description: 'Pełny zbiór reguł korzystania z portalu — ograniczenia wiekowe, prawa autorskie, charakter informacyjny i procedura reklamacji.',
    url: 'https://vulkanspielepoland.pl/regulamin/',
  },
}

export default function Regulamin() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">Warunki korzystania z serwisu</h1>
      <p className="text-white/40 text-sm mb-10">Dokument w wersji obowiązującej od 1 kwietnia 2026 r.</p>
      <p className="text-white/60 text-sm mb-10">
        Korzystanie z naszego portalu oznacza akceptację warunków przedstawionych w poniższym regulaminie.
        Dokument określa zasady funkcjonowania serwisu, ograniczenia wiekowe, prawa i obowiązki użytkowników
        oraz procedurę zgłaszania uwag, reklamacji i wniosków o korektę publikowanych informacji.
      </p>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">1. Informacje ogólne</h2>
          <p>
            Serwis VulkanSpiele dostępny pod adresem vulkanspielepoland.pl (dalej: &bdquo;Serwis&rdquo;) jest
            niezależnym portalem informacyjno-afiliacyjnym poświęconym tematyce kasyn internetowych.
            Serwis nie jest kasynem, nie posiada licencji hazardowej i nie prowadzi żadnej działalności
            polegającej na organizowaniu gier losowych ani zakładów wzajemnych.
          </p>
          <p className="mt-2">
            Przeglądanie treści Serwisu jest równoznaczne z akceptacją wszystkich poniższych postanowień.
            Prosimy o uważne zapoznanie się z Regulaminem przed dalszym korzystaniem z Serwisu.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">2. Ograniczenie wiekowe — tylko 18+</h2>
          <div
            className="rounded-xl p-4 mb-4"
            style={{ background: 'rgba(204,0,0,0.1)', border: '1px solid rgba(204,0,0,0.3)' }}
          >
            <p className="text-white font-semibold">
              Dostęp do Serwisu mają wyłącznie osoby, które ukończyły 18 rok życia.
              Osoby niepełnoletnie są zobowiązane do niezwłocznego opuszczenia strony.
            </p>
          </div>
          <p>
            Treści prezentowane w Serwisie dotyczą hazardu online, który w Polsce jest regulowany
            prawnie i dozwolony wyłącznie dla osób pełnoletnich. Operator Serwisu podejmuje kroki
            w celu ograniczenia dostępu niepełnoletnim, jednak nie ponosi odpowiedzialności za
            samodzielne wejście osoby niepełnoletniej na strony kasyn zewnętrznych.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">3. Charakter i cel serwisu</h2>
          <p>
            Serwis pełni funkcję afiliacyjną i informacyjną. Oznacza to w szczególności, że:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Publikowane recenzje i rankingi kasyn mają charakter redakcyjny i informacyjny;</li>
            <li>Serwis może pobierać wynagrodzenie prowizyjne od operatorów kasyn, do których odsyła użytkowników;</li>
            <li>Żadna treść Serwisu nie stanowi oferty zawarcia umowy, porady prawnej ani finansowej;</li>
            <li>Opisywane promocje i bonusy mogą ulec zmianie bez uprzedzenia ze strony kasyn zewnętrznych;</li>
            <li>Serwis nie gwarantuje wygranych ani pozytywnych wyników finansowych z gry w kasynie.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">4. Ograniczenie odpowiedzialności</h2>
          <p>
            Operator Serwisu nie odpowiada za:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Warunki świadczenia usług, regulaminy bonusów ani praktyki kasyn podmiotów trzecich;</li>
            <li>Szkody finansowe wynikłe z uczestnictwa użytkownika w grach hazardowych;</li>
            <li>Przerwy w dostępności, błędy techniczne lub zmiany na stronach kasyn partnerskich;</li>
            <li>Decyzje podejmowane przez użytkowników w oparciu o treści opublikowane w Serwisie;</li>
            <li>Treści stron trzecich, do których prowadzą linki zamieszczone w Serwisie.</li>
          </ul>
          <p className="mt-2">
            Wszelkie informacje o bonusach, promocjach i warunkach gry należy weryfikować bezpośrednio
            u danego operatora kasyna przed podjęciem decyzji o rejestracji lub wpłacie.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">5. Prawa autorskie</h2>
          <p>
            Wszystkie materiały opublikowane w Serwisie — teksty, grafiki, układy stron, logotypy
            oraz kod źródłowy — są chronione przepisami prawa autorskiego. Ich powielanie, dystrybucja
            lub komercyjne wykorzystanie bez wyraźnej, pisemnej zgody Operatora jest zabronione
            i może stanowić podstawę dochodzenia roszczeń cywilnych lub karnych.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">6. Dane osobowe i cookies</h2>
          <p>
            Zasady gromadzenia i przetwarzania danych osobowych zostały opisane w{' '}
            <Link href="/polityka-prywatnosci" className="text-gold hover:underline">Polityce Prywatności</Link>.
            Informacje o plikach cookies — w{' '}
            <Link href="/polityka-cookie" className="text-gold hover:underline">Polityce Cookie</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">7. Odpowiedzialna gra</h2>
          <p>
            VulkanSpiele aktywnie wspiera idee odpowiedzialnego hazardu. Jeżeli gra przestaje być
            dla Ciebie rozrywką i staje się problemem, zapoznaj się z materiałami dostępnymi na stronie{' '}
            <Link href="/odpowiedzialna-gra" className="text-gold hover:underline">Odpowiedzialna Gra</Link>{' '}
            lub zadzwoń na bezpłatny telefon zaufania: <strong className="text-white">116 123</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">8. Linki zewnętrzne</h2>
          <p>
            Serwis zawiera odnośniki do zewnętrznych stron internetowych (kasyn, dostawców oprogramowania,
            organów regulacyjnych). Operator nie ma wpływu na treść ani dostępność tych stron i nie ponosi
            odpowiedzialności za ich zawartość lub politykę prywatności.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">9. Prawo właściwe i jurysdykcja</h2>
          <p>
            Regulamin podlega prawu polskiemu. Wszelkie spory wynikające z korzystania z Serwisu
            będą rozstrzygane przez sąd właściwy dla siedziby Operatora, chyba że przepisy prawa
            konsumenckiego stanowią inaczej.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">10. Zmiany Regulaminu</h2>
          <p>
            Operator zastrzega prawo do modyfikacji niniejszego Regulaminu w dowolnym czasie.
            Zaktualizowana wersja z nową datą wejścia w życie będzie publikowana na tej stronie.
            Kontynuowanie korzystania z Serwisu po opublikowaniu zmian oznacza ich akceptację.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">11. Kontakt</h2>
          <p>
            Pytania związane z Regulaminem prosimy kierować na adres:{' '}
            <a href="mailto:support@vulkanspielepoland.pl" className="text-gold hover:underline">support@vulkanspielepoland.pl</a>
          </p>
        </section>

      </div>
    </main>
  )
}
