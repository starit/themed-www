import type { Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import { siteUrl } from '@/lib/site'
import './globals.css'

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

const description =
  'Research studio at the intersection of content structure and system design. We connect content creators with mechanism designers—where themes become mechanisms.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Themed Labs',
    template: '%s · Themed Labs',
  },
  description,
  keywords: [
    'Themed Labs',
    'theme modeling',
    'mechanism design',
    'content systems',
    'systems design',
    'structured content',
  ],
  authors: [{ name: 'Themed Labs', url: siteUrl }],
  creator: 'Themed Labs',
  openGraph: {
    title: 'Themed Labs',
    description,
    url: '/',
    siteName: 'Themed Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Themed Labs',
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  category: 'technology',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Themed Labs',
  url: siteUrl,
  description,
  email: 'research@themedlabs.studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plexMono.variable} ${plexSans.variable}`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}


