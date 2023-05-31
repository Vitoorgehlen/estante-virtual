'use client'
import { ReactNode, useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import {
  UserCircle,
  HouseSimple,
  BookmarksSimple,
  Lightbulb,
} from '@phosphor-icons/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Guarde livros, filmes e jogos que te marcaram.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<'lightTheme' | 'darkTheme'>(
    'darkTheme',
  )
  const handleTheme = () => {
    if (currentTheme === 'darkTheme') {
      setCurrentTheme('lightTheme')
    } else {
      setCurrentTheme('darkTheme')
    }
  }
  return (
    <html lang="pt" data-theme={currentTheme}>
      <body className={`${inter.className} relative`}>
        {children}{' '}
        <div className="btm-nav">
          <button className="text-primary">
            <UserCircle size={24} weight="duotone" />
          </button>
          <button className="active text-primary">
            <HouseSimple size={24} weight="duotone" />
          </button>
          <button className="text-primary">
            <BookmarksSimple size={24} weight="duotone" />
          </button>
        </div>
        <button
          onClick={() => {
            handleTheme()
          }}
          className="btn-ghost btn-circle btn absolute right-4 top-4"
        >
          <Lightbulb
            size={36}
            color={currentTheme === 'lightTheme' ? '#000000' : '#ffffff'}
            weight="duotone"
          />
        </button>
      </body>
    </html>
  )
}
