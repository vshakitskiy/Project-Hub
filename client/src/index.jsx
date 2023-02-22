import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { IdeaContextProvider } from './context/IdeaContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IdeaContextProvider>
      <App />
    </IdeaContextProvider>
  </React.StrictMode>,
)
