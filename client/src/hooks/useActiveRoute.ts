'use client'

import { usePathname } from 'next/navigation'

export const useActiveRoute = () => {
  const pathname = usePathname()
  
  return (href: string, exact = false) => 
    exact ? pathname === href : pathname.startsWith(href)
}