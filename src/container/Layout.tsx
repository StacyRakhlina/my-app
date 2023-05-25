import React, { ReactNode } from 'react'
import { Container } from '@mui/material'

import { Header } from '../components/header'

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
    </div>
  )
}

export default Layout
