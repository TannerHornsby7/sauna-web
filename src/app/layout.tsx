import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/ui/Nav' 
import BreadCrumb from '@/ui/BreadCrumb'
import Foot from '@/ui/Footer'
import {bg_img} from '@/lib/assets'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sauna',
  description: 'Unbox the future of Steam Markets.',
}

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
      <body className={inter.className} style={backgroundStyle}>
        <Nav />
        <BreadCrumb />
        {children}
        <Foot />
        </body>
    </html>
  )
}
