import { Roboto } from 'next/font/google'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
const base = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    button: {
      textTransform: 'none',
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
})

const theme = responsiveFontSizes(base)

export { theme, roboto }
