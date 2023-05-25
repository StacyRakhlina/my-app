import React from 'react'
import { NavLink, Link as RouterLink } from 'react-router-dom'

import { Box, Button, Container, Toolbar } from '@mui/material'
import CurrencySelect from 'src/components/select'

import logo from 'src/assets/images/logo.png'
import { headerMenu } from 'src/utils/constants/header'

export const HeaderDesktop = () => {
  return (
    <Container>
      <Toolbar sx={{ padding: '0!important' }}>
        <Box style={{ marginRight: '24px' }}>
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
        <Box>
          {headerMenu.map(({ label, href }) => {
            return (
              <Button key={label} color='inherit' to={href} component={RouterLink} variant='text'>
                {label}
              </Button>
            )
          })}
        </Box>
        <CurrencySelect />
        <Button
          to='/login'
          color='inherit'
          component={RouterLink}
          variant='text'
          sx={{
            '&::before': {
              display: 'none'
            }
          }}
        >
          Sign Up
        </Button>
        <Button to='/login' component={RouterLink} variant='contained'>
          Login
        </Button>
      </Toolbar>
    </Container>
  )
}
