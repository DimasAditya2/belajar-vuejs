import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CompositionComponent from './components/CompositionComponent.vue'
import OptionComponent from './components/OptionComponent.vue'
import MainButton from './components/MainButton.vue'

const app = createApp(App)

// ? Global component

// todo: notes
//  use if component reusable
//  use PascalCase Names

// can chaining
// app
//   .component('CompositionComponent', CompositionComponent)
//   .component('OptionComponent', OptionComponent)
//   .component('MainButton', MainButton)

app.component('CompositionComponent', CompositionComponent)
app.component('OptionComponent', OptionComponent)
app.component('MainButton', MainButton)

app.mount('#app')

// createApp(App).mount('#app')
