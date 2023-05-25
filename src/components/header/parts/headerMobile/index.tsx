import React, { Dispatch, SetStateAction } from 'react'
import { NavLink, Link as RouterLink } from 'react-router-dom'
import { Box, Button, Drawer, IconButton, Link, MenuItem, Toolbar } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import CurrencySelect from 'src/components/select'

import logo from 'src/assets/images/logo.png'
import { headerMenu } from 'src/utils/constants/header'

interface IProps {
  state: {
    mobileView: boolean
    drawerOpen: boolean
  }
  setState: Dispatch<
    SetStateAction<{
      mobileView: boolean
      drawerOpen: boolean
    }>
  >
}

export const HeaderMobile: React.FC<IProps> = ({ state, setState }) => {
  const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }))
  const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }))

  return (
    <Toolbar>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        aria-haspopup='true'
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor='left' open={state.drawerOpen} onClose={handleDrawerClose}>
        <CloseIcon onClick={handleDrawerClose} />
        <Box>
          {headerMenu.map(({ label, href }) => {
            return (
              <Link
                key={label}
                component={RouterLink}
                to={href}
                color='inherit'
                sx={{ textDecoration: 'none' }}
              >
                <MenuItem>{label}</MenuItem>
              </Link>
            )
          })}
        </Box>
        <CurrencySelect />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <Button to='/signup' component={RouterLink} variant='outlined'>
            Sign Up
          </Button>
          <Button to='/login' component={RouterLink} variant='contained'>
            Login
          </Button>
        </Box>
      </Drawer>

      <Box sx={{ margin: '0 auto' }}>
        <NavLink
          to='/'
          style={{
            maxWidth: '110px',
            height: 'auto',
            display: 'flex'
          }}
        >
          <img src={logo} />
        </NavLink>
      </Box>
      <Button to='/login' component={RouterLink} variant='contained'>
        Login
      </Button>
    </Toolbar>
  )
}
