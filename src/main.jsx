import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Book from './Library.jsx'
import Library from './Library.jsx'
// import Book from './Book.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>(index.html ▷ main.jsx)</div>
    <App></App>
    <Library></Library>
  </StrictMode>,
)
