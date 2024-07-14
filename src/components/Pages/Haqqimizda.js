import React from 'react'
import '../css/Haqqimizda.css'
import haqqimizda from '../imge/HaqqimizdaBCK.png'
import { Link, Outlet } from 'react-router-dom'
function Haqqimizda() {
  return (
    <div>
      <div className='haqqimizda-img'>
        <img src = {haqqimizda}/>
      </div>
      <div className='container about'>
        <ul className='about-ul'>
          <li className='about-ul-li'>
              <Link className='about-ul-li-link link-blue' to = "">Biz Kimik</Link>
          </li>
          <li className='about-ul-li'>
              <Link className='about-ul-li-link' to = "education">Təhsil modeli</Link>
          </li>
          <li className='about-ul-li'>
              <Link className='about-ul-li-link' to = "contacts">Əməkdaşlar</Link>
          </li>
          <li className='about-ul-li'>
              <Link className='about-ul-li-link' to = "students">Məzunlar</Link>
          </li>
        </ul>
      </div>
          <Outlet/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default Haqqimizda
