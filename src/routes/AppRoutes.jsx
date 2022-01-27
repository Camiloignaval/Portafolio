import { Routes, Route } from 'react-router-dom'

import React from 'react'
import { Header } from '../components/Header'
import { Skills } from '../components/Skills'
import { Home } from '../components/Home'
import { ContactForm } from '../components/ContactForm'
import { Trabajos } from '../components/Trabajos'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/*' element={<Home />}>
        <Route path='' element={<Header />} />
        <Route path='skills' element={<Skills />} />
        <Route path='contact' element={<ContactForm />} />
        <Route path='works' element={<Trabajos />} />
      </Route>
    </Routes>
  )
}
