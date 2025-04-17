import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    { /* Uncomment the line below to render the App component */ }
    { /* <App /> */ }

    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img 
        src="/ggfolio_logo_dark_bg.png" // Replace with your image path
        alt="ggfolio logo" 
        style={{ maxWidth: '100%', height: 'auto' }} 
      />
    </div>

  </StrictMode>,
)