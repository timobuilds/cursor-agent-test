'use client'

import { Home, Layout, Compass, HelpCircle, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Spaces', href: '/spaces', icon: Layout },
  { name: 'Explore N26', href: '/explore', icon: Compass },
  { name: 'Support', href: '/support', icon: HelpCircle },
  { name: 'My Account', href: '/account', icon: User },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full bg-[#1F1F1F] border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-[#00D4B4] font-bold text-xl">N26</div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${isActive 
                      ? 'text-[#00D4B4] bg-[#2A2A2A]' 
                      : 'text-gray-300 hover:text-[#00D4B4] hover:bg-[#2A2A2A]'
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
          
          <div className="flex items-center">
            <button className="bg-[#00D4B4] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#00BFA0] transition-colors">
              Get N26
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 