import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Components/Route/Route.jsx'
import ContextAPI from './Components/AuthContextAPI/ContextAPI'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextAPI><RouterProvider router={route} /></ContextAPI>
  </React.StrictMode>,
)
