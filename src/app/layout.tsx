import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/ui/Nav'
import BreadCrumb from '@/ui/BreadCrumb'
import Foot from '@/ui/Footer'
import { bg_img } from '@/lib/assets'
// import the auth provider
import { AuthProvider } from '@/lib/useAuth';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Sauna',
    default: 'Sauna'
  },
  description: 'Unbox the future of Steam Markets.',
  metadataBase: new URL('https://agar.io'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#201e1a',
    backgroundImage: bg_img,
  }
  return (
    <html lang="en">
      <body className={`flex flex-col ` + inter.className} style={backgroundStyle}>
        <AuthProvider>
          <Nav />
          <BreadCrumb />
          {children}
          <Foot />
        </AuthProvider>
      </body>
    </html>
  )
}
