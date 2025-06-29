"use client"

import Link from 'next/link'
import { useState } from 'react'
import { ThemeSwitcher } from '@/features/theme-switcher/theme-switcher'
import { cn } from '@/shared/lib/css'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Проекты', href: '/projects' },
  { name: 'Обо мне', href: '/about' },
  { name: 'Блог', href: '/blog' },
  { name: 'Контакты', href: '/contact' },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-x-12">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-gray-900 dark:text-white">YourName</span>
          </Link>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <ThemeSwitcher />
          <div className="flex lg:hidden ml-4">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Открыть меню</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      
      {/* Мобильное меню */}
      <div className={cn(
        "fixed inset-0 z-50 bg-white dark:bg-gray-900 lg:hidden",
        mobileMenuOpen ? "block" : "hidden"
      )}>
        <div className="fixed inset-0 flex">
          <div className="w-full">
            <div className="flex items-center justify-between p-6">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-xl font-bold text-gray-900 dark:text-white">YourName</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Закрыть меню</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}