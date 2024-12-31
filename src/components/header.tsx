import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from 'lucide-react'

export function Header() {
  return (
    <div className="bg-black text-white rounded-lg">
      <div className="container mx-auto px-4">
        <header className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-6">
            <Link href="https://mallardlabs.xyz/" className="block">
              <Image
                src="/mlogo.webp?height=40&width=40"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </Link>
            <div className="h-6 w-px bg-gray-800" /> {/* Vertical separator */}
            <h1 className="text-xl font-semibold">Taskboards</h1>
          </div>
          <Link 
            href="https://mallardlabs.xyz/"
            className="flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition-colors"
          >
            Return to homepage
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </header>
      </div>
      <div className="h-px bg-gray-800" /> {/* Separator */}
    </div>
  )
}

