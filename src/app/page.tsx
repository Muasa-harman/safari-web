'use client'
import { CarScene } from '@safari/3d/src/scenes/CarScene'
import { IconSearch } from '@tabler/icons-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-[calc(100vh-4rem)] ">
      <div className="absolute top-16 bottom-0 left-0 right-0">
        <CarScene />
      </div>
      <div className="flex flex-col items-start space-y-2 font-black text-8xl">
        <div className="z-10 inline-block px-3 text-green-600 mt-2">Need</div>{' '}
        <div className="z-10 inline-block w-full max-w-md px-3 text-green-600 ">
          to take a trip?
        </div>
        <Link
          href="/search"
          className="z-10 flex items-center gap-2 px-3 py-2 text-xl font-medium text-yellow-400 underline underline-offset-4 bg-green-600"
        >
          <IconSearch /> Search now
        </Link>
      </div>
    </main>
  )
}
