import React from 'react'
import { Components } from './components'

import './App.scss'

function App() {
  return (
    <div>
      <Components.MainPosts />

      <footer>
        <Components.BottomNav />
      </footer>
    </div>
  )
}

export default App