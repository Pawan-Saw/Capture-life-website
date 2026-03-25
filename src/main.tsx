import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import PaymentGatewayDemo from './components/PaymentGatewayDemo.tsx'
import ServicesPage from './components/ServicesPage.tsx'
import ServiceDetailPage from './components/ServiceDetailPage.tsx'
import GalleryPage from './components/GalleryPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/payment-demo" element={<PaymentGatewayDemo />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
