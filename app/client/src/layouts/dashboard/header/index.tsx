import { AppBar as MuiAppBar, Box, styled, Toolbar } from '@mui/material'

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

const Header = () => {
  return (
    <AppBar elevation={0}>
      <Toolbar>
        <Box>你好</Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
