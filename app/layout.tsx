import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { ConvexClientProvider } from '@/lib/convex'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Absolute Site Prep & Tree - Professional Site Preparation Services',
  description: 'Professional site preparation and tree services. Expert land clearing, excavation, and tree solutions.',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <ConvexClientProvider>
            <Navigation />

            {/* Main Content */}
            <main>
              {children}
            </main>

            <Footer />
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}