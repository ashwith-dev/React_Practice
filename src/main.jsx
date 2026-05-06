import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Todomain from './todomain.jsx'
import Axios from './AxiosComponent.jsx'
import AxiosComponent from './AxiosComponent.jsx'
import ExcuserComponent from './Excuser.jsx'
import Ecommerce from './Ecommerc.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <Todomain/> */}
    <Ecommerce/>
  </>,
)
