import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.errorHandler = (err, vm, info) => {
    alert(err.message);
};

app.mount("#app");