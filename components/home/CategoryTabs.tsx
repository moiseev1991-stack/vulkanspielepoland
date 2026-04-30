'use client'

const tabs = [
  { id: 'lobby', label: 'LOBBY' },
  { id: 'popular', label: 'POPULARNE' },
  { id: 'new', label: 'NOWE GRY' },
  { id: 'slots', label: 'AUTOMATY' },
  { id: 'live', label: 'KASYNO NA ŻYWO' },
  { id: 'best', label: 'NAJLEPSZE GRY' },
  { id: 'easter', label: 'GRY WIELKANOCNE' },
  { id: 'more', label: 'WIĘCEJ' },
]

interface CategoryTabsProps {
  activeCategory: string
  onCategoryChange: (cat: string) => void
}

export default function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="py-3" style={{ background: 'transparent' }}>
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto scrollbar-hide pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onCategoryChange(tab.id)}
            className="shrink-0 px-4 py-2 rounded-md text-xs font-bold tracking-wider transition-colors whitespace-nowrap"
            style={
              activeCategory === tab.id
                ? { background: '#CC0000', color: '#fff' }
                : { color: '#888', background: 'transparent' }
            }
            onMouseEnter={(e) => {
              if (activeCategory !== tab.id) {
                (e.currentTarget as HTMLButtonElement).style.color = '#fff'
              }
            }}
            onMouseLeave={(e) => {
              if (activeCategory !== tab.id) {
                (e.currentTarget as HTMLButtonElement).style.color = '#888'
              }
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}
