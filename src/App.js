import React from 'react'
import { Components } from './components'
import { getStorage } from 'firebase/storage'

import './App.scss'

import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import MainRoutes from './routes'
import { API } from './api'
import { app } from './firebase'
import { useAuth } from './providers/useAuth'

axios.defaults.baseURL = 'https://salymbekov-social-default-rtdb.asia-southeast1.firebasedatabase.app'

export const storage = getStorage(app);



function App() {
  const path = useLocation().pathname

  const navigate = useNavigate()

  const { users } = useAuth()

  React.useEffect(() => {
    !users && navigate('/login/')
  }, [users, navigate])

  return (
    <div>
      <MainRoutes />
      {
        path === '/login/' ?
        null :
        <footer>
          <Components.BottomNav />
        </footer>
      }
    </div> 
  )
}

export default App