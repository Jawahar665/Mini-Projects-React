import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import "./components/Qrcode.css";
// import { Usercard } from './components/Usercard'
import { Qrcode } from './components/Qrcode';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <App />  */}
     {/* <Usercard/> */}
     <Qrcode/>
  </React.StrictMode>,
)
