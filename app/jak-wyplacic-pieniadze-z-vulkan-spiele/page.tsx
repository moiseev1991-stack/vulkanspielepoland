import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Jak Wypłacić Pieniądze z Vulkan Spiele — Instrukcja PL 2026' },
  description: 'Jak wypłacić pieniądze z Vulkan Spiele w Polsce — instrukcja krok po kroku. Metody wypłat, czas realizacji, weryfikacja KYC, limity i najczęstsze problemy.',
  openGraph: {
    title: 'Jak Wypłacić Pieniądze z Vulkan Spiele — Instrukcja PL 2026',
    description: 'Krok po kroku wypłata wygranej z Vulkan Spiele Casino — KYC, metody wypłat, czas realizacji i limity dla polskich graczy.',
    url: 'https://vulkanspielepoland.pl/jak-wyplacic-pieniadze-z-vulkan-spiele/',
  },
}

const steps = [
  {
    title: '1. Zakończ weryfikację KYC',
    desc: 'Prześlij skan dokumentu tożsamości, potwierdzenie adresu (rachunek za media nie starszy niż 3 miesiące) oraz selfie z dokumentem. KYC trwa 24–72 godziny robocze.',
  },
  {
    title: '2. Spełnij wymóg obrotu bonusów',
    desc: 'Sprawdź w panelu gracza, czy obrót aktywnego bonusu jest zakończony (zwykle x35–x40). Wypłata przy aktywnym bonusie unieważnia środki bonusowe.',
  },
  {
    title: '3. Wybierz metodę wypłaty',
    desc: 'Wejdź w „Kasa" → „Wypłata", wybierz metodę z którą wpłacałeś środki (zgodnie z zasadą zwrotu na to samo źródło).',
  },
  {
    title: '4. Wpisz kwotę i potwierdź',
    desc: 'Minimalna wypłata to 20 EUR, maksymalna dzienna to 5 000 EUR. Potwierdź transakcję kodem SMS lub w aplikacji Authenticator.',
  },
  {
    title: '5. Czekaj na realizację',
    desc: 'Czas wypłaty zależy od metody: e-portfele (2–24h), karty (1–3 dni robocze), przelew bankowy (3–5 dni roboczych), kryptowaluty (1–4h).',
  },
]

const methods = [
  { name: 'BLIK', time: '2–6 godzin', minMax: '20 / 5 000 EUR', fee: 'Brak' },
  { name: 'Visa / Mastercard', time: '1–3 dni robocze', minMax: '20 / 5 000 EUR', fee: 'Brak' },
  { name: 'Skrill / Neteller', time: '2–24 godzin', minMax: '20 / 5 000 EUR', fee: 'Brak' },
  { name: 'Przelew bankowy', time: '3–5 dni roboczych', minMax: '50 / 10 000 EUR', fee: 'Brak' },
  { name: 'Bitcoin / USDT', time: '1–4 godziny', minMax: '30 / 10 000 EUR', fee: 'Opłata sieciowa' },
]

export default function JakWyplacicPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <span
        className="inline-flex items-center gap-1 text-xs font-bold text-white px-3 py-1 rounded-sm mb-4"
        style={{ background: '#C9000D' }}
      >
        💸 INSTRUKCJA WYPŁATY
      </span>
      <h1 className="text-3xl font-black text-white mb-2">
        Jak wypłacić pieniądze z Vulkan Spiele?
      </h1>
      <p className="text-white/60 text-sm mb-10">
        Pełna instrukcja wypłaty wygranej z Vulkan Spiele Casino dla polskich graczy. Weryfikacja KYC,
        metody, limity i najczęstsze problemy — wszystko, co musisz wiedzieć, by szybko otrzymać środki.
      </p>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        {/* Steps */}
        <section>
          <h2 className="text-white font-bold text-lg mb-4">Wypłata krok po kroku</h2>
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{ background: '#140002', border: '1px solid #2a0008' }}
              >
                <p className="text-white font-bold mb-1">{step.title}</p>
                <p className="text-white/60 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Methods table */}
        <section>
          <h2 className="text-white font-bold text-lg mb-4">Dostępne metody wypłat</h2>
          <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid #2a0008' }}>
            <table className="w-full text-sm">
              <thead style={{ background: '#180007' }}>
                <tr>
                  <th className="text-left px-4 py-3 text-gold font-bold">Metoda</th>
                  <th className="text-left px-4 py-3 text-gold font-bold">Czas</th>
                  <th className="text-left px-4 py-3 text-gold font-bold">Min / Max</th>
                  <th className="text-left px-4 py-3 text-gold font-bold">Opłata</th>
                </tr>
              </thead>
              <tbody>
                {methods.map((m, i) => (
                  <tr key={i} style={{ borderTop: '1px solid #1c000e' }}>
                    <td className="px-4 py-3 text-white font-semibold">{m.name}</td>
                    <td className="px-4 py-3 text-white/60">{m.time}</td>
                    <td className="px-4 py-3 text-white/60">{m.minMax}</td>
                    <td className="px-4 py-3 text-white/60">{m.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Weryfikacja KYC — czego się spodziewać?</h2>
          <p>
            Pierwsza wypłata zawsze wymaga ukończenia procedury Know Your Customer (KYC). Wymagane
            dokumenty to: skan dwóch stron dowodu osobistego lub paszportu (min. 300 DPI), potwierdzenie
            adresu (rachunek za prąd, gaz, internet — nie starszy niż 3 miesiące) oraz selfie z
            dokumentem. Czas weryfikacji w 60% przypadków to 24–72 godziny robocze. Najczęstsze
            powody odrzucenia dokumentów: nieczytelne skany, niezgodność danych z formularzem
            rejestracyjnym, dokument wygasły lub edytowany graficznie.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Limity wypłat</h2>
          <ul className="space-y-2">
            {[
              'Minimalna wypłata: 20 EUR (50 EUR dla przelewu bankowego).',
              'Dzienny limit standardowy: 5 000 EUR.',
              'Tygodniowy limit standardowy: 15 000 EUR.',
              'Miesięczny limit standardowy: 50 000 EUR.',
              'Wyższe limity dla graczy VIP (Gold, Platinum, Diamond) — ustalane indywidualnie.',
              'Maksymalna wypłata z bonusu bez depozytu: 100 EUR.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-gold mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Najczęstsze problemy z wypłatami</h2>
          <ul className="space-y-2">
            {[
              'Wypłata utknęła w statusie „Oczekuje" — odczekaj 24h, jeśli nadal brak postępu, napisz na <support@vulkanspiele.com>.',
              'Wypłata anulowana — sprawdź, czy nie masz aktywnego bonusu lub niespełnionego obrotu.',
              'KYC zostało odrzucone — przeczytaj komunikat odrzucenia (DOC_BLUR, DOC_EXPIRED, DATA_MISMATCH) i wyślij ponownie.',
              'Pieniądze nie dotarły na konto — sprawdź folder spam (potwierdzenie e-mail) lub zapytaj bank o blokadę przelewu.',
              'System wymaga dodatkowych dokumentów — to standardowe „Enhanced Due Diligence" przy wypłatach powyżej 5 000 EUR.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 shrink-0">!</span>
                <span dangerouslySetInnerHTML={{ __html: item.replace(/<([^>]+)>/g, '<span class="text-gold">$1</span>') }} />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Wskazówki — jak przyspieszyć wypłatę</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Ukończ KYC od razu po rejestracji — nie czekaj na pierwszą wygraną.</li>
            <li>Wybieraj metody wypłat o najszybszym czasie realizacji (e-portfele, kryptowaluty).</li>
            <li>Zachowuj zgodność danych — adres na koncie musi pokrywać się z dokumentem.</li>
            <li>Wypłacaj pełną kwotę — częste małe wypłaty mogą wzbudzić podejrzenia AML.</li>
            <li>Dla wypłat powyżej 5 000 EUR przygotuj dodatkowo dowód źródła pochodzenia środków.</li>
          </ol>
        </section>

      </div>
    </main>
  )
}
