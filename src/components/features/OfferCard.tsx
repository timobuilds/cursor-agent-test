'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

interface OfferCardProps {
  brand: string
  description: string
  discount: string
  imageId: string
  link: string
}

export default function OfferCard({ brand, description, discount, imageId, link }: OfferCardProps) {
  return (
    <div className="bg-[#1F1F1F] rounded-lg p-4 hover:bg-[#2A2A2A] transition-colors cursor-pointer group">
      <div className="relative h-32 w-full mb-4 overflow-hidden rounded-md">
        <Image
          src={`https://picsum.photos/id/${imageId}/400/300`}
          alt={brand}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2">{brand}</h3>
      <p className="text-gray-400 text-sm mb-3">{description}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-[#00D4B4] font-medium">{discount}</span>
        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-[#00D4B4] transition-colors" />
      </div>
    </div>
  )
} 