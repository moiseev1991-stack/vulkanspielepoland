import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ochrona danych osobowych zgodnie z RODO — pełne zasady',
  description: 'Zasady przetwarzania danych użytkowników serwisu: rodzaje gromadzonych informacji, podstawy prawne, okresy retencji, prawa osób, których dane dotyczą, oraz kontakt do administratora.',
  openGraph: {
    title: 'Ochrona danych osobowych zgodnie z RODO — pełne zasady',
    description: 'Pełna informacja o przetwarzaniu danych zgodnie z rozporządzeniem RODO: prawa dostępu, usunięcia, sprzeciwu i kanały kontaktowe.',
    url: 'https://vulkanspielepoland.pl/polityka-prywatnosci/',
  },
}

export default function PolitykaPrywatnosci() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">Zasady ochrony danych osobowych</h1>
      <p className="text-white/40 text-sm mb-10">Dokument obowiązuje od 1 kwietnia 2026 r.</p>
      <p className="text-white/60 text-sm mb-10">
        Niniejszy dokument przedstawia w przejrzysty sposób, w jaki sposób przetwarzamy dane osobowe odwiedzających
        portal, jakie kategorie informacji gromadzimy, na jakiej podstawie prawnej oraz jak długo je przechowujemy.
        Zasady są w pełni zgodne z rozporządzeniem RODO oraz polską ustawą o ochronie danych osobowych z 10 maja 2018 r.
      </p>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">1. Administrator danych osobowych</h2>
          <p>
            Administratorem danych osobowych zbieranych za pośrednictwem serwisu VulkanSpiele
            (dalej: &bdquo;Serwis&rdquo;), dostępnego pod adresem vulkanspielepoland.pl, jest jego operator.
            Serwis funkcjonuje wyłącznie jako portal afiliacyjno-informacyjny i nie prowadzi
            działalności hazardowej, nie przyjmuje wpłat ani nie przetwarza danych płatniczych.
          </p>
          <p className="mt-2">
            We wszelkich kwestiach dotyczących prywatności i ochrony danych osobowych można skontaktować
            się z administratorem pod adresem:{' '}
            <a href="mailto:support@vulkanspielepoland.pl" className="text-gold hover:underline">support@vulkanspielepoland.pl</a>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">2. Podstawa prawna</h2>
          <p>
            Przetwarzanie danych odbywa się zgodnie z Rozporządzeniem (UE) 2016/679 (RODO) oraz
            krajowymi przepisami o ochronie danych osobowych. Podstawy przetwarzania obejmują:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Art. 6 ust. 1 lit. a RODO — dobrowolna zgoda użytkownika (m.in. cookies analityczne i marketingowe);</li>
            <li>Art. 6 ust. 1 lit. f RODO — uzasadniony interes administratora (bezpieczeństwo i statystyki Serwisu);</li>
            <li>Art. 6 ust. 1 lit. c RODO — wypełnienie obowiązków wynikających z przepisów prawa.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">3. Jakie dane zbieramy?</h2>
          <p>W trakcie korzystania z Serwisu mogą być zbierane następujące kategorie danych:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Dane techniczne: adres IP, rodzaj i wersja przeglądarki, system operacyjny, rozdzielczość ekranu;</li>
            <li>Dane o aktywności: odwiedzane podstrony, czas spędzony na stronie, źródło ruchu, klikane linki;</li>
            <li>Pliki cookies i podobne technologie — szczegóły w <Link href="/polityka-cookie" className="text-gold hover:underline">Polityce Cookie</Link>;</li>
            <li>Dane podane dobrowolnie w formularzach kontaktowych (imię, adres e-mail, treść wiadomości).</li>
          </ul>
          <p className="mt-2">
            Serwis nie zbiera i nie przetwarza szczególnych kategorii danych osobowych (tzw. danych wrażliwych),
            takich jak dane o zdrowiu, poglądach politycznych czy przekonaniach religijnych.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">4. Cele przetwarzania</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Zapewnienie prawidłowego działania technicznego Serwisu;</li>
            <li>Analiza ruchu i zachowań użytkowników w celu ulepszania treści i funkcjonalności;</li>
            <li>Odpowiadanie na zapytania przesłane drogą elektroniczną;</li>
            <li>Wyświetlanie spersonalizowanych treści i reklam (wyłącznie po udzieleniu zgody);</li>
            <li>Zapobieganie nadużyciom i ochrona bezpieczeństwa Serwisu;</li>
            <li>Rozliczenia prowizji afiliacyjnych z partnerami kasyn.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">5. Czas przechowywania danych</h2>
          <p>
            Dane osobowe przechowujemy wyłącznie przez okres niezbędny do realizacji celów, dla których
            zostały zgromadzone. Dane analityczne są anonimizowane lub usuwane po 26 miesiącach.
            Dane z formularzy kontaktowych przechowujemy przez 12 miesięcy od udzielenia ostatniej odpowiedzi.
            Po wycofaniu zgody przez użytkownika dane objęte tą zgodą są usuwane niezwłocznie.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">6. Udostępnianie danych podmiotom trzecim</h2>
          <p>
            Dane użytkowników mogą być przekazywane wyłącznie zaufanym podmiotom, z którymi współpracujemy:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Dostawcy usług analitycznych (Google Analytics) — dane zagregowane i zanonimizowane;</li>
            <li>Dostawcy infrastruktury hostingowej — w zakresie niezbędnym do utrzymania Serwisu;</li>
            <li>Partnerzy afiliacyjni — wyłącznie dane identyfikujące ruch (kliknięcia, konwersje) bez danych osobowych.</li>
          </ul>
          <p className="mt-2">
            Administrator nie sprzedaje, nie wynajmuje ani w żaden inny sposób nie komercjalizuje
            danych osobowych użytkowników na rzecz podmiotów trzecich.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">7. Przekazywanie danych poza EOG</h2>
          <p>
            Niektórzy z naszych dostawców (np. Google) mogą przetwarzać dane w krajach spoza Europejskiego
            Obszaru Gospodarczego. Przekazywanie odbywa się wyłącznie na podstawie odpowiednich zabezpieczeń,
            takich jak standardowe klauzule umowne zatwierdzone przez Komisję Europejską.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">8. Prawa użytkownika</h2>
          <p>Na mocy RODO przysługują Ci następujące prawa:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong className="text-white">Prawo dostępu</strong> — możesz zażądać informacji o tym, jakie dane na Twój temat przetwarzamy;</li>
            <li><strong className="text-white">Prawo do sprostowania</strong> — możesz zażądać poprawienia nieprawidłowych lub uzupełnienia niekompletnych danych;</li>
            <li><strong className="text-white">Prawo do usunięcia</strong> — w określonych przypadkach możesz żądać trwałego usunięcia danych;</li>
            <li><strong className="text-white">Prawo do ograniczenia przetwarzania</strong> — możesz zażądać zawieszenia przetwarzania Twoich danych;</li>
            <li><strong className="text-white">Prawo do przenoszenia danych</strong> — możesz otrzymać swoje dane w ustrukturyzowanym formacie;</li>
            <li><strong className="text-white">Prawo do sprzeciwu</strong> — możesz sprzeciwić się przetwarzaniu opartemu na uzasadnionym interesie;</li>
            <li><strong className="text-white">Prawo do wycofania zgody</strong> — bez wpływu na legalność przetwarzania sprzed wycofania.</li>
          </ul>
          <p className="mt-2">
            Aby skorzystać z przysługujących praw, skontaktuj się z nami:{' '}
            <a href="mailto:support@vulkanspielepoland.pl" className="text-gold hover:underline">support@vulkanspielepoland.pl</a>.
            Odpowiemy w ciągu 30 dni.
          </p>
          <p className="mt-2">
            Masz również prawo złożenia skargi do Urzędu Ochrony Danych Osobowych (UODO),
            ul. Stawki 2, 00-193 Warszawa —{' '}
            <a href="https://uodo.gov.pl" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">uodo.gov.pl</a>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">9. Zmiany polityki prywatności</h2>
          <p>
            Niniejsza Polityka może być aktualizowana w miarę zmian prawnych, technologicznych lub
            organizacyjnych. Każda nowa wersja będzie publikowana na tej stronie z aktualną datą.
            W przypadku istotnych zmian użytkownicy mogą zostać poinformowani za pośrednictwem bannera
            na stronie głównej Serwisu.
          </p>
        </section>

      </div>
    </main>
  )
}
