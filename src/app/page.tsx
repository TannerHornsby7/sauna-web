import Image from 'next/image'
import Nav from '@/ui/Nav'
import Hero from '@/ui/Hero'
import Numbers from '@/ui/Numbers'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Hero />
      <Numbers />
    </div>
  )
}
