// theme.ts

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import '@fontsource/quicksand'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ 
    ...config, 
    fonts: {
        heading: 'Quicksand',
        body: 'Quicksand',
      },}
      )

export default theme;