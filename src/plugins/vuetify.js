/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#e8e8e8',
          secondary: '#121212',
          tertiary:'#807d7d',
        },
      },
      dark: {
        colors: {
          primary: '#171717',
          secondary: '#ebebeb',
          tertiary: '#7f7f7f',
        },
      },
    },
  },
})
