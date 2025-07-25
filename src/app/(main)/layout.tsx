﻿
import { Header } from '@/features/header'
import { Footer } from '@/features/footer'

interface MainLayoutProps {
  children: React.ReactNode
}

export default  function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}