import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// import ReactDOM  from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import React from 'react'
// import Projects from './3-Projects/projects.jsx'
// import Contact from './4-ContactUS/contact'
// import Hero from './2-Hero/hero'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element= {<App />} >
//       <Route path='/hero' element={<Hero />} />
//       <Route path='/contact' element={<Contact />} />
//       <Route path='/projects' element={<Projects />} />
//     </Route>
//   )
// )

// const root = document.getElementById("root");
// ReactDOM.createRoot(root).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
