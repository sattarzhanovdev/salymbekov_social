import React from 'react'
import c from './nav.module.scss'
import { NavList } from '../../utils'
import { Link, useLocation } from 'react-router-dom'

const BottomNav = () => {
  const path = useLocation().pathname

  return (
    <div className={c.nav}>
      {
        NavList.map(item => (
          <li key={item.id}>
            <Link 
              to={item.route}
            >
              <img 
                src={path === item.route ? item.activeIcon : item.icon} 
                alt="icon" 
              />
            </Link>
          </li>
        ))
      }
      <li>
        <Link to={'/profile/'}>
          <img  
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            alt="profile"
            className={c.profile}
          />
        </Link>
      </li>
    </div>
  )
}

export default BottomNav