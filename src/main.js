import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// We maken een nieuwe Vue app aan
const app = createApp(App)

// We voegen configuratie toe
app.use(createPinia())
app.use(router);

// We laden die app en zijn configuratie in de browser
app.mount('#app')

