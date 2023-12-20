import React from 'react'
import ReactDOM from 'react-dom/client'
import Heading from './Heading.jsx'
import FirstLine from './FirstLine.jsx'
import SecondLine from './SecondLine.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Heading></Heading>
     <FirstLine></FirstLine>
     <SecondLine />
  </React.StrictMode>
 
)
