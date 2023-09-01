import React from 'react'
import c from './nav.module.scss'
import { NavList } from '../../utils'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../providers/useAuth'

const BottomNav = () => {
  const path = useLocation().pathname

  const { users } = useAuth()

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
            src={users?.photo}
            alt="profile"
            className={c.profile}
          />
        </Link>
      </li>
    </div>
  )
}

export default BottomNav