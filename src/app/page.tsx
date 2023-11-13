import Image from 'next/image'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Numbers from '@/components/Numbers'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Hero />
      <Numbers />
    </div>
  )
}
