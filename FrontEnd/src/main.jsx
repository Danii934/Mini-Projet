import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from './User.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Infos from './Infos.jsx'

const router = createBrowserRouter([
  {path :'/',element:<App/>},
  {path : '/infos' ,element : <Infos/>},
  {path :'*',element:<App/>}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </StrictMode>
)
