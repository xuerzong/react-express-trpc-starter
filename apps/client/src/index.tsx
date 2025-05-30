import ReactDom from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routers from './routers'
import 'normalize.css'

const root = ReactDom.createRoot(document.getElementById('root')!)

root.render(<RouterProvider router={routers} />)
