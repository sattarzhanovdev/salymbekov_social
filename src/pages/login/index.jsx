import React from 'react'
import c from './login.module.scss'
import logo from '../../icons/logo.png'
import { handleLoginWithGoogle } from '../../firebase'
import { useAuth } from '../../providers/useAuth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { users } = useAuth()
  
  const navigate = useNavigate()

  React.useEffect(() => {
    users && navigate('/')
  }, [users, navigate])

  return (
    <div className={c.login}>
      <img 
        src={logo}
        alt="logo"
      />
      <button onClick={() => handleLoginWithGoogle()}>
        Войти через 
        <img src="https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227" alt="logo" />
      </button>
    </div>
  )
}

export default Login