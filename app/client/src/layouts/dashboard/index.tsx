import { Box, Toolbar } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from './header'

const DashboardLayout = ({ }) => {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Box sx={{ p: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardLayout
