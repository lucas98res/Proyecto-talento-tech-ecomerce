import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/Authcontext.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'
import { ProductosProvider } from './context/ProductosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CarritoProvider>
        <ProductosProvider>
          <App />
        </ProductosProvider>
      </CarritoProvider>
    </AuthProvider>
  </StrictMode>,
)
