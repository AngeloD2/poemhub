/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
//icons
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'



// Plugins
import { registerPlugins } from '@/plugins'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App)

library.add(faHatWizard)

app.component('font-awesome-icon', FontAwesomeIcon)

registerPlugins(app)

app.mount('#app')
