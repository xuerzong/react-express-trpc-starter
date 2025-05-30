import { createHashRouter } from 'react-router-dom'
import IndexPage from '@/pages/index'
import HomePage from '@/pages/dashboard/home'
import DashboardLayout from '@/layouts/dashboard'

type Route = {
  key?: string
  path: string
  children?: Route[]
  element: React.ReactNode
}

const routes: Route[] = [
  {
    key: 'index',
    path: '/',
    element: <IndexPage />,
  },
  {
    key: 'dashboard',
    path: '/dashboard/',
    element: <DashboardLayout />,
    children: [
      {
        key: 'home',
        path: '',
        element: <HomePage />,
      },
    ],
  },
]

export default createHashRouter(routes)
