import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SAS from './SAS.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SAS/>
  </StrictMode>,
)
