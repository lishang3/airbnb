import App from "@/App"
import Demo from "@/views/demo"
import React from "react"
import { Navigate, createBrowserRouter } from "react-router-dom"

const Home = React.lazy(() => import('@/views/home'))
const Entire = React.lazy(() => import('@/views/entire'))
const Detail = React.lazy(() => import('@/views/detail'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to='/home' />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/entire',
        element: <Entire />
      },
      {
        path: '/detail',
        element: <Detail />
      },
      {
        path: '/demo',
        element: <Demo />
      },
    ]
  },

])

export default routes