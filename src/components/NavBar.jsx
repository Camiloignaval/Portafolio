/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { DarkContext } from '../context/DarkContext'
import DarkMode from './DarkMode'

import './navbar.css'

export const Navbar = () => {
  const dark = localStorage.getItem('darkMode')
  const valorInicial = dark === 'true'
  const [darkMode, setDarkMode] = useState(valorInicial)
  const { setIsDark } = useContext(DarkContext)
  const { pathname } = useLocation()

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
    setIsDark(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = 'black'
      localStorage.setItem('darkMode', true)
    } else {
      document.body.style.backgroundColor = 'white'
      localStorage.setItem('darkMode', false)
    }
  }, [darkMode])

  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <a className='navbar-brand' href='#' />
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse ' id='navbarNav'>
        <ul className='navbar-nav '>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/'>
              <span className='overline-left-underline-right'>Inicio</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/contact'>
              <span className='overline-left-underline-right'>Contacto</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/works'>
              <span className='overline-left-underline-right'>Trabajos</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/skills'>
              <span className='overline-left-underline-right'>Skills</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {!(pathname === '/') && (
        <div onClick={handleDarkMode} className='darkmode'>
          <DarkMode darkmode={valorInicial} />
        </div>
      )}
    </nav>
  )
}
