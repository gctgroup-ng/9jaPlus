import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: '9jaPlus by IntarvAS | Always connected to home',
  description: 'Airtime, data, eSIMs, and international calling for Nigerians everywhere.',
  icons: {
    icon: [
      {
        url: '/logos/9japlus-mark.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logos/9japlus-mark.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logos/9japlus-mark.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logos/9japlus-mark.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
