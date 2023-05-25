import { createTheme } from '@mui/material/styles'

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 426,
      sm: 769,
      md: 1110,
      lg: 1201,
      xl: 1441
    }
  }
})

const { breakpoints } = defaultTheme

const theme = createTheme({
  ...defaultTheme,
  palette: {
    primary: {
      main: '#142241'
    },
    background: {
      default: '#ffffff'
    }
  },
  typography: {
    fontFamily: 'Gilroy'
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#142241',
          borderBottom: '1px solid rgba(233, 177, 9, 0.75)',
          boxShadow: '0px 4px 3px rgba(23, 34, 39, 0.25)'
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '80px!important'
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1300px !important',
          padding: '0!important',
          width: '100%',
          [breakpoints.down('xl')]: {
            padding: '0 16px!important'
          }
        }
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'text' },
          style: {
            padding: '0 1rem',
            position: 'relative',
            fontWeight: 600,
            textTransform: 'initial',
            '&::before': {
              content: '""',
              width: 0,
              height: '1.5px',
              backgroundColor: '#E9B109',
              transition: 'all .2s ease-in-out',
              position: 'absolute',
              left: '1rem',
              bottom: 0
            },
            '&:hover': {
              color: '#E9B109',
              background: 'none',
              '&::before': {
                width: '1.5rem'
              }
            }
          }
        },
        {
          props: { variant: 'contained' },
          style: {
            padding: '0.5rem 1.5rem',
            fontWeight: 600,
            textTransform: 'initial',
            color: '#142241',
            background: '#E9B109',
            boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.15)',
            border: '1px solid #E9B109',
            borderRadius: '4px',
            lineHeight: '1.143',
            transition: 'all .2s ease-in-out',
            '&:hover': {
              color: '#142241',
              background: '#fabe0a'
            },
            [breakpoints.down('md')]: {
              padding: '6px 1rem!important'
            }
          }
        },
        {
          props: { variant: 'outlined' },
          style: {
            padding: '0.5rem 1.5rem',
            fontWeight: 600,
            textTransform: 'initial',
            color: '#ffffff',
            background: 'transparent',
            boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.15)',
            border: '1px solid #FFFFFF',
            borderRadius: '4px',
            lineHeight: '1.143',
            transition: 'all .2s ease-in-out',
            '&:hover': {
              color: '#142241',
              background: '#ffffff'
            },
            [breakpoints.down('md')]: {
              padding: '6px 1rem!important'
            }
          }
        }
      ]
    },
    MuiSelect: {
      variants: [
        {
          props: { variant: 'standard' },
          style: {
            marginLeft: 'auto',
            color: '#FFFFFF',
            fontSize: '14px',
            padding: '10px 0',
            '&::before, &::after': {
              display: 'none'
            },
            '&:focus': {
              color: 'red',
              background: 'transparent'
            },
            '.MuiSelect-select': {
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }
          }
        }
      ]
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          '.MuiPaper-root': {
            background: '#142241',
            color: '#ffffff',
            width: '100%',
            boxSizing: 'border-box',
            padding: '1rem 1.5rem'
          },
          '.MuiSvgIcon-root': {
            padding: '0.5rem 0.5rem 0.5rem 0',
            marginBottom: '1.5rem'
          },
          '[data-testid="KeyboardArrowDownIcon"]': {
            padding: 0
          },
          li: {
            borderTop: '1px solid rgba(255,255,255,0.2)',
            padding: '10px 0',
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: '1.5rem'
          },
          a: {
            '&:hover': {
              color: '#E9B109'
            }
          },
          '.MuiInputBase-root': {
            margin: 0,
            borderTop: '1px solid rgba(255,255,255,0.2)',
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            marginBottom: '1rem'
          }
        }
      }
    }
  }
})

export default theme
