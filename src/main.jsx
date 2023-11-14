import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Mainboard from './Components/Mainboard/Mainboard.jsx'
import Pie from './Components/Pie/Pie.jsx'
import Layout from './LayoutX.jsx'
import data from '../data.json'
import Academic from './Components/Academic/Academic.jsx'
import Behaviour from './Components/Behaviour/Behaviour.jsx'
import Attendence from './Components/Attendence/Attendence.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path="" element={<Mainboard data={data}/>}/>
    <Route path="pie" element={<Pie data={data}/>}/>
    <Route path="academic" element={<Academic data={data}/>}/>
    <Route path='behaviour' element={<Behaviour data={data}/>}/>
    <Route path='attendence' element={<Attendence data={data}/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
