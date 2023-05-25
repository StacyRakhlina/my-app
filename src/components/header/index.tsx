import { useState, useEffect } from 'react'

import { AppBar } from '@mui/material'

import { HeaderMobile } from './parts/headerMobile'
import { HeaderDesktop } from './parts/headerDesktop'

export const Header = () => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })

  const { mobileView } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1100
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }

    setResponsiveness()

    window.addEventListener('resize', () => setResponsiveness())

    return () => {
      window.removeEventListener('resize', () => setResponsiveness())
    }
  }, [])

  return (
    <AppBar>
      {mobileView ? <HeaderMobile state={state} setState={setState} /> : <HeaderDesktop />}
    </AppBar>
  )
}
