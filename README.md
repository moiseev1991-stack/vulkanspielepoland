# VulkanSpiele Casino PL — Affiliate Site Template

Next.js 14 (App Router) — польскоязычный аффилиат-сайт казино со статическим экспортом.

---

## Что это за проект

Информационно-аффилиатный сайт, замаскированный под официальный портал казино VulkanSpiele.  
Все кнопки «Играj», «Zarejestruj się», навигационные ссылки в футере и т.д. ведут на `/go/` — страницу-редирект с реальной аффилиат-ссылкой.  
Сайт генерирует статические HTML-файлы (`next build` → папка `out/`), которые можно разместить на любом хостинге без Node.js.

---

## Структура проекта

```
app/                    # Страницы (Next.js App Router)
  page.tsx              # Главная
  HomeClient.tsx        # UI главной + SEO-текст
  bonus-bez-depozytu/   # Страница бонуса без депозита
  kod-promocyjny/       # Промокоды
  lootboxes/            # Лутбоксы
  wheel-of-fortune/     # Колесо фортуны
  tournaments/          # Турниры
  vip/                  # VIP-программа
  bonuses/              # Бонусы
  promotions/           # Акции
  aplikacja/            # Мобильное приложение
  rejestracja/          # Регистрация/вход
  hall-of-fame/         # Зал славы (крупные выигрыши)
  quests/               # Квесты и миссии
  go/                   # Редирект на аффилиат-ссылку ← ГЛАВНЫЙ ФАЙЛ
  regulamin/            # Регламент
  polityka-prywatnosci/ # Политика конфиденциальности
  polityka-cookie/      # Политика cookie
  odpowiedzialna-gra/   # Ответственная игра
  o-nas/                # О нас

components/
  layout/               # Header, Footer, CookieBanner, MobileBottomNav
  home/                 # Секции главной страницы
  vip/ tournaments/     # Компоненты страниц
  promotions/ sports/   # Компоненты страниц
  lootboxes/ ui/        # Общие UI-компоненты

data/                   # Все данные сайта (TypeScript)
  bonuses.ts            # Бонусы и условия
  games.ts              # Список игр (слоты + live)
  tournaments.ts        # Турниры, призы, даты
  lootboxes.ts          # Лутбоксы и цены
  quests.ts             # Квесты и награды
  winners.ts            # Победители (зал славы)
  sports.ts             # Матчи и коэффициенты

public/                 # Статика (картинки, иконки, robots, sitemap)
text/                   # Исходные SEO-тексты статей (txt)
out/                    # Готовая сборка для деплоя (git ignore не задан)
```

---

## Запуск локально

```bash
npm install
npm run dev       # http://localhost:3000
```

Сборка статики:

```bash
npm run build     # генерирует папку out/
```

---

## Что менять при создании дубля сайта

### 1. Аффилиат-ссылка — ПЕРВОЕ ЧТО НУЖНО

**Файл:** `app/go/GoClient.tsx`  
Найди строку с URL и замени на свою ссылку:
```ts
window.location.href = 'https://твоя-партнёрская-ссылка'
```

---

### 2. Домен и бренд

| Что менять | Где |
|-----------|-----|
| Домен в метатегах | `app/layout.tsx` → `metadataBase` |
| Домен в OpenGraph | Все `app/*/page.tsx` → поле `url:` |
| Название бренда | `app/layout.tsx` → `title`, `description` |
| Название бренда | `components/layout/Header.tsx`, `Footer.tsx` |
| Домен в sitemap | `public/sitemap.xml` |
| Домен в robots | `public/robots.txt` |

Быстро: `Ctrl+Shift+H` в VS Code → заменить `vulkanspielepoland.pl` на новый домен.

---

### 3. SEO-тексты на страницах

Каждая страница имеет SEO-блок внизу (рендерится через `dangerouslySetInnerHTML`).  
Тексты находятся прямо в файлах страниц — ищи по метке `{/* SEO Text */}`.  
Заменить нужно на текст под новый бренд/казино.

Страницы с SEO-текстами:
- `app/HomeClient.tsx`
- `app/bonus-bez-depozytu/page.tsx`
- `app/kod-promocyjny/page.tsx`
- `app/wheel-of-fortune/page.tsx`
- `app/lootboxes/page.tsx`
- `app/vip/VipClient.tsx`
- `app/bonuses/BonusesClient.tsx`
- `app/promotions/PromotionsClient.tsx`
- `app/aplikacja/page.tsx`
- `app/rejestracja/page.tsx`

---

### 4. Метаданные каждой страницы

В каждом `page.tsx` есть блок:
```ts
export const metadata: Metadata = {
  title: { absolute: '...' },
  description: '...',
}
```
Заменить название казино в title и description.

---

### 5. Google Search Console

**Файл:** `app/layout.tsx`
```ts
verification: {
  google: 'ВАШ_КОД',
},
```

---

### 6. Логотип и фавиконка

| Файл | Назначение |
|------|-----------|
| `public/images/logo-official.png` | Логотип в хедере |
| `public/favicon.svg` | Фавиконка (браузер) |
| `app/icon.svg` | Фавиконка (Next.js App Router) |
| `app/favicon.ico` | Фавиконка ICO |

---

### 7. Данные (бонусы, игры, турниры)

Все данные вынесены в `data/*.ts`. Меняй суммы бонусов, названия турниров, призовые пулы под реальные условия казино-партнёра.

---

### 8. Цвета бренда

**Файл:** `tailwind.config.ts` — там прописаны кастомные цвета (`bgDark`, `gold`, `red` и т.д.).  
**Файл:** `app/globals.css` — CSS-переменные.

---

### 9. Юридические страницы

Страницы `/regulamin/`, `/polityka-prywatnosci/`, `/polityka-cookie/`, `/odpowiedzialna-gra/`, `/o-nas/` — содержат реальный текст.  
При смене бренда заменить упоминания `VulkanSpiele` и email `support@vulkanspielepoland.pl` на новые.

---

### 10. Язык (если нужен другой рынок)

Все тексты на польском (PL). Для другого рынка:
- Заменить `lang="pl"` в `app/layout.tsx`
- Заменить `locale: 'pl_PL'` в OpenGraph
- Перевести все тексты в компонентах и `data/*.ts`
