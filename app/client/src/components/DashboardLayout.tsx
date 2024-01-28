import { Outlet } from 'react-router-dom'
import { Box, Toolbar } from '@mui/material'

const DashboardLayout = () => {
  return (
    <Box>
      <Toolbar />
      <Outlet />
    </Box>
  )
}

export default DashboardLayout
