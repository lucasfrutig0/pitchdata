import { DarkIcon } from '@/icons/DarkIcon'
import { LightIcon } from '@/icons/LightIcon'
import { useEffect, useState } from 'react'

export function SwitchThemeButton() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className='flex justify-center items-center flex-shrink-0 mt-2'>
      <button className='dark:bg-forest-dark' onClick={handleClick}>
        {theme === 'light' ? (
          <DarkIcon className='h-6 w-6' />
        ) : (
          <LightIcon className='h-6 w-6' />
        )}
      </button>
    </div>
  )
}
