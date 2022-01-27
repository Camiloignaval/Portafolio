import { useContext } from 'react'
import { DarkContext } from '../context/DarkContext'

import './trabajo.css'

export const ButtonTrabajo = ({ click, name, icono }) => {
  const { isDark } = useContext(DarkContext)
  // eslint-disable-next-line no-eval
  const theme = eval(isDark)

  return (
    <>
      <button
        className={theme ? 'btn btn-dark btnVideo' : 'btn btn-light btnVideo '}
        onClick={click}
      >
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3'>
            <i className={icono} />
          </div>
          <div className='col col-lg-8 col-xl-9 text-md-left text-lg-center text-xl-left p-0'>
            {name}
          </div>
        </div>
      </button>
    </>
  )
}
