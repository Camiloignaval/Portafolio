import React, { useEffect } from 'react'
import './header.css'
import { TextoPrincipal } from './TextoPrincipal'

export const Header = () => {
  useEffect(() => {
    document.querySelector('.navbar-toggler').classList.add('collapsed')
    document.querySelector('#navbarNav').classList.remove('show')
  }, [])
  return (
    <header style={{ backgroundImage: 'url(/assets/Wallpaper_mio.png)' }}>
      <TextoPrincipal />
    </header>
  )
}
