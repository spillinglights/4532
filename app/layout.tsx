import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'exploitingis.FUN - Discontinued',
  description: 'exploitingis.FUN has been permanently shut down.',
  icons: {
    icon: '/assets/e.ico',
  },
  themeColor: '#030005',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="background-container"></div>
        {children}
      </body>
    </html>
  )
} 