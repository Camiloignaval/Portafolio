import React, { useContext, useEffect, useRef, useState } from 'react'
import './Skill.css'
import { gsap } from 'gsap'
import { DarkContext } from '../context/DarkContext'

export const Skill = () => {
  const [nombreLogo, setNombreLogo] = useState('')
  const nameLogo = useRef()
  const front = ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'React', 'Redux']
  const back = ['Node']
  const DDBB = ['PostgreSQL', 'MySQL']

  const timeline = gsap.timeline({ defaults: { opacity: 0 } })

  const { isDark } = useContext(DarkContext)

  useEffect(() => {
    const texto = document.querySelector('.texto')
    // eslint-disable-next-line no-eval
    eval(isDark)
      ? texto.classList.add('darkMode')
      : texto.classList.remove('darkMode')
  }, [isDark])

  const onEnter = (e) => {
    setNombreLogo(e.target.alt)
    nameLogo.current.classList.add('mostrar')
    e.target.classList.add('activo')
    gsap.to(e.target, 1, {
      opacity: 1,
      rotate: 360,
      scale: 2,
      duration: 1,
      ease: 'power3.in',
      overwrite: true
    })
  }
  const onLeave = (e) => {
    nameLogo.current.classList.remove('mostrar')
    e.target.classList.remove('activo')
    gsap.to(e.target, {
      opacity: 1,
      rotation: '-360',
      scale: 1,
      duration: 0.5,
      overwrite: true
    })
  }

  useEffect(() => {
    document.querySelector('.navbar-toggler').classList.add('collapsed')
    document.querySelector('#navbarNav').classList.remove('show')
    timeline
      .from('.titleFront', {
        x: -100,
        ease: 'power3.in',
        duration: 0.5
      })
      .from('.iconoFront', {
        x: 20,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.in'
      })
      .from('.titleBack', {
        x: -100,
        ease: 'power3.in',
        duration: 0.5
      })

      .from('.iconoBack', {
        x: 20,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.in'
      })
      .from('.titleDDBB', {
        x: -100,
        ease: 'power3.in',
        duration: 0.5
      })
      .from('.iconoDDBB', {
        x: 20,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.in'
      })
  }, [])

  useEffect(() => {}, [])
  return (
    <div className='contenedor'>
      <p ref={nameLogo} className='texto'>
        {nombreLogo}
      </p>
      {/* front */}
      <h1 className='titleSkill titleFront pl-5 '>FRONTEND</h1>
      <div className='iconosFront  d-flex row'>
        {front.map((logo) => (
          <img
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            key={logo}
            className={`iconoFront logo${logo}`}
            src={`/assets/${logo}.png`}
            alt={logo}
          />
        ))}
      </div>
      {/* back */}
      <h1 className='titleSkill titleBack pl-5 '>BACKEND</h1>
      <div className='iconosBack d-flex row'>
        {back.map((logo) => (
          <img
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            key={logo}
            className='iconoBack'
            src={`/assets/${logo}.png`}
            alt={logo}
          />
        ))}
      </div>
      {/* DDBB */}
      <h1 className='titleSkill titleDDBB pl-5 '>BBDD</h1>
      <div className='iconosDDBB d-flex row'>
        {DDBB.map((logo) => (
          <img
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            key={logo}
            className='iconoDDBB'
            src={`/assets/${logo}.png`}
            alt={logo}
          />
        ))}
      </div>
    </div>
  )
}
