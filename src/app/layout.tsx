import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from './_providers/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Портфолио разработчика',
  description: 'Сайт-портфолио с проектами и профессиональными навыками',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}