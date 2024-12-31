import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from 'lucide-react'

interface TaskboardCardProps {
  title: string
  imageUrl: string
  href: string
}

export function TaskboardCard({ title, imageUrl, href }: TaskboardCardProps) {
  return (
    <Link 
      href={href}
      className="block group relative rounded-lg overflow-hidden transition-transform hover:scale-105"
    >
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="absolute bottom-4 left-4">
        <h2 className="text-white text-xl font-semibold flex items-center gap-2">
          {title}
          <ArrowUpRight className="h-4 w-4" />
        </h2>
      </div>
    </Link>
  )
}

