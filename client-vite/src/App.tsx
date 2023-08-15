import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import browerRoutes from './routes/route';

function App() {
  const router=createBrowserRouter(browerRoutes)

  return (<RouterProvider router={router}/>);
}

export default App;
