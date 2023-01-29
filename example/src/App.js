import React from 'react'

import { useGrowl, Growl } from 'growl-hook'
import 'growl-hook/dist/index.css'

const App = () => {
  const [active, setActive] = useGrowl()

  return (
    <div className='App'>
      <header className='App-header'>
        <a className='App-link' href='#' onClick={() => void setActive(true)}>
          Clik here to activate the growl
        </a>
      </header>
      <Growl
        onDismissed={() => setActive(false)}
        active={active}
        message='Hello World!'
      />
    </div>
  )
}

export default App
