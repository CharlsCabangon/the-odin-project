import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { App } from './Render.jsx'
import Greeting from './Greeting.jsx'
import { Person, Count, Name } from './State.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Name />
  </StrictMode>,
)
