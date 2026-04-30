import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface AccordionProps {
  type?: 'single' | 'multiple'
  collapsible?: boolean
  className?: string
  children: React.ReactNode
}

interface AccordionItemProps {
  value: string
  className?: string
  children: React.ReactNode
}

interface AccordionTriggerProps {
  className?: string
  children: React.ReactNode
}

interface AccordionContentProps {
  className?: string
  children: React.ReactNode
}

function Accordion({ className, children }: AccordionProps) {
  return <div className={cn('flex w-full flex-col', className)}>{children}</div>
}

function AccordionItem({ className, children }: AccordionItemProps) {
  return (
    <details className={cn('border-b border-white/5 last:border-0 group', className)}>
      {children}
    </details>
  )
}

function AccordionTrigger({ className, children }: AccordionTriggerProps) {
  return (
    <summary className={cn(
      'flex flex-1 items-center justify-between py-3 text-sm font-medium cursor-pointer list-none outline-none',
      className
    )}>
      {children}
      <ChevronDown size={16} className="text-white/40 transition-transform group-open:rotate-180" />
    </summary>
  )
}

function AccordionContent({ className, children }: AccordionContentProps) {
  return (
    <div className={cn('pb-4 text-sm', className)}>
      {children}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
