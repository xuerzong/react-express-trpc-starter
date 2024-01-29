import { useEffect } from 'react'
import { Box, CircularProgress } from '@mui/material'
import trpc from '@/libs/trpc'

const Page = () => {
  useEffect(() => {
    trpc.base.list.query().then(console.log)
  }, [])

  return (
    <Box
      sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <CircularProgress />
    </Box>
  )
}

export default Page
