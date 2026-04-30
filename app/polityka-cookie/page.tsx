import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pliki cookie i sposoby zarządzania nimi w przeglądarkach',
  description: 'Wyjaśnienie rodzajów plików cookie wykorzystywanych w serwisie (sesyjne, trwałe, analityczne, afiliacyjne), celu ich gromadzenia oraz instrukcja konfiguracji w Chrome, Firefox, Safari i Edge.',
  openGraph: {
    title: 'Pliki cookie i sposoby zarządzania nimi w przeglądarkach',
    description: 'Cztery kategorie ciasteczek: techniczne, analityczne, marketingowe i partnerskie. Sprawdź, jak nimi zarządzać.',
    url: 'https://vulkanspielepoland.pl/polityka-cookie/',
  },
}

export default function PolitykaCookie() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">Wszystko o plikach cookie</h1>
      <p className="text-white/40 text-sm mb-10">Dokument zaktualizowany 1 kwietnia 2026 r.</p>
      <p className="text-white/60 text-sm mb-10">
        W naszym serwisie wykorzystujemy pliki cookie wyłącznie w celach niezbędnych do prawidłowego działania portalu,
        analizy ruchu oraz rozliczeń z partnerami afiliacyjnymi. Poniżej znajdziesz pełną listę kategorii ciasteczek,
        ich przeznaczenie oraz krok po kroku opisane sposoby zarządzania nimi w popularnych przeglądarkach.
      </p>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">1. Co to są pliki cookies?</h2>
          <p>
            Pliki cookies (inaczej: ciasteczka) to niewielkie pliki tekstowe zapisywane lokalnie
            na Twoim urządzeniu — komputerze, smartfonie lub tablecie — przez odwiedzane strony
            internetowe. Pozwalają one stronom zapamiętywać Twoje ustawienia i preferencje między
            kolejnymi wizytami, a także analizować sposób, w jaki korzystasz z witryny.
          </p>
          <p className="mt-2">
            Cookies nie są programami komputerowymi i nie mogą uruchamiać żadnych procesów na Twoim
            urządzeniu. Nie są również nośnikami wirusów ani złośliwego oprogramowania.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">2. Jakie cookies stosujemy?</h2>

          <div className="space-y-4">
            <div className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: '#2d5a1b', color: '#7dca52' }}>Niezbędne</span>
                <p className="text-white font-semibold text-sm">Cookies funkcjonalne (zgoda: NIE wymagana)</p>
              </div>
              <p className="text-xs text-white/50">
                Zapewniają podstawowe działanie Serwisu — przechowują wybór języka, stan sesji
                oraz preferencje dotyczące cookies. Bez nich Serwis nie może funkcjonować poprawnie.
                Są aktywne zawsze i nie można ich wyłączyć.
              </p>
            </div>

            <div className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: '#1a3a5c', color: '#52a8ca' }}>Analityczne</span>
                <p className="text-white font-semibold text-sm">Cookies analityczne (zgoda: TAK)</p>
              </div>
              <p className="text-xs text-white/50">
                Pozwalają nam mierzyć ruch i analizować zachowania użytkowników w Serwisie w celu
                ulepszania jego treści i struktury. Korzystamy z Google Analytics w trybie anonimizacji IP.
                Dane są zbierane w sposób zagregowany i nie pozwalają na identyfikację konkretnej osoby.
              </p>
              <p className="text-xs text-white/40 mt-1">Pliki: _ga, _gid, _ga_XXXXXXXX</p>
            </div>

            <div className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: '#4a2d00', color: '#ca9052' }}>Marketingowe</span>
                <p className="text-white font-semibold text-sm">Cookies reklamowe (zgoda: TAK)</p>
              </div>
              <p className="text-xs text-white/50">
                Umożliwiają wyświetlanie spersonalizowanych reklam oraz mierzenie skuteczności kampanii
                marketingowych. Mogą być ustawiane przez partnerów reklamowych, takich jak Google Ads
                czy Meta (Facebook Pixel). Działają w oparciu o profil zainteresowań budowany z historii przeglądania.
              </p>
            </div>

            <div className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: '#3a1a5c', color: '#a052ca' }}>Afiliacyjne</span>
                <p className="text-white font-semibold text-sm">Cookies śledzenia afiliacyjnego (zgoda: TAK)</p>
              </div>
              <p className="text-xs text-white/50">
                Służą do śledzenia kliknięć w linki kierujące do kasyn partnerskich i przypisywania
                zarejestrowanych użytkowników do właściwego źródła ruchu. Są niezbędne do poprawnego
                rozliczenia wynagrodzenia prowizyjnego i nie zawierają danych osobowych gracza.
              </p>
              <p className="text-xs text-white/40 mt-1">Okres przechowywania: do 90 dni</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">3. Cookies podmiotów zewnętrznych</h2>
          <p className="mb-3">
            Część plików cookies jest ustawiana przez podmioty zewnętrzne, z których usług korzysta Serwis.
            Poniżej wykaz dostawców i linki do ich polityk prywatności:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 pr-4 text-white/60 font-semibold">Dostawca</th>
                  <th className="text-left py-2 pr-4 text-white/60 font-semibold">Przeznaczenie</th>
                  <th className="text-left py-2 text-white/60 font-semibold">Polityka prywatności</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: 'Google Analytics', purpose: 'Statystyki i analityka', url: 'https://policies.google.com/privacy' },
                  { name: 'Google Ads', purpose: 'Remarketing i reklama', url: 'https://policies.google.com/privacy' },
                  { name: 'Meta (Facebook)', purpose: 'Reklama społecznościowa', url: 'https://www.facebook.com/policy' },
                ].map((row) => (
                  <tr key={row.name}>
                    <td className="py-2 pr-4 text-white/70">{row.name}</td>
                    <td className="py-2 pr-4 text-white/50">{row.purpose}</td>
                    <td className="py-2">
                      <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                        Czytaj
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">4. Jak zarządzać cookies?</h2>

          <div className="space-y-4">
            <div>
              <p className="text-white font-semibold mb-1">Panel zgód (baner cookie)</p>
              <p>
                Przy pierwszej wizycie w Serwisie wyświetlamy baner z możliwością wyboru kategorii
                cookies, na które wyrażasz zgodę. Możesz zaakceptować wszystkie, wybrać tylko
                niezbędne lub dostosować ustawienia indywidualnie. Wybór można zmienić w dowolnym momencie.
              </p>
            </div>

            <div>
              <p className="text-white font-semibold mb-1">Ustawienia przeglądarki</p>
              <p className="mb-2">
                Każda przeglądarka internetowa pozwala na zarządzanie, blokowanie lub usuwanie plików cookies.
                Instrukcje dla popularnych przeglądarek:
              </p>
              <ul className="space-y-1">
                {[
                  { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                  { name: 'Mozilla Firefox', url: 'https://support.mozilla.org/pl/kb/ciasteczka' },
                  { name: 'Microsoft Edge', url: 'https://support.microsoft.com/pl-pl/microsoft-edge' },
                  { name: 'Apple Safari', url: 'https://support.apple.com/pl-pl/guide/safari/sfri11471/mac' },
                  { name: 'Opera', url: 'https://help.opera.com/pl/latest/web-preferences/#cookies' },
                ].map((browser) => (
                  <li key={browser.name}>
                    <a href={browser.url} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                      {browser.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-xl p-4"
              style={{ background: 'rgba(204,100,0,0.08)', border: '1px solid rgba(204,100,0,0.25)' }}
            >
              <p className="text-white/80 text-xs">
                <strong className="text-white">Uwaga:</strong> zablokowanie cookies funkcjonalnych może
                uniemożliwić prawidłowe działanie Serwisu. Wyłączenie cookies analitycznych i marketingowych
                nie ogranicza dostępu do treści.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">5. Kontakt i więcej informacji</h2>
          <p>
            Szczegółowe zasady przetwarzania Twoich danych osobowych opisuje{' '}
            <Link href="/polityka-prywatnosci" className="text-gold hover:underline">Polityka Prywatności</Link>.
            Wszelkie pytania dotyczące cookies prosimy kierować na adres:{' '}
            <a href="mailto:support@vulkanspielepoland.pl" className="text-gold hover:underline">support@vulkanspielepoland.pl</a>.
          </p>
        </section>

      </div>
    </main>
  )
}
