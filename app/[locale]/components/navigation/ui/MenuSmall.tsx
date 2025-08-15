'use client'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import DarkButton from './DarkButton'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

function MenuSmall() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('nav')

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const menuItems = [
    { href: '#home', label: t('home') },
    { href: '#about', label: t('about') },
    { href: '#skills', label: t('skills') },
    { href: '#services', label: t('services') },
    { href: '#projects', label: t('projects') },
    { href: '#contact', label: t('contact') },
  ]

  return (
    <div className="lg:hidden">
      {/* Menu toggle button */}
      <button 
        onClick={toggleMenu}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />
          
          {/* Menu content */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Menu
                </h3>
                <button 
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  <X size={24} className="text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="flex-1 p-6">
                <ul className="space-y-4">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="block py-3 px-4 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-lg transition-all duration-300"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer with theme toggle */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Theme
                  </span>
                  <DarkButton />
                </div>
                
                {/* Contact button */}
                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-4 w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 font-medium text-center block"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuSmall
