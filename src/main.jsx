import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import AuthProvider from './components/AuthProvider';
import Login from './components/Login';
import TaskBoard from './components/TaskBoard';
import Update from './components/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>
  },
  {
    path: "/task",
    element: <TaskBoard></TaskBoard>
  },
  {
    path: "/update/:id",
    element: <Update></Update>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
      <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
