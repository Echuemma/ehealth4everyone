import { createApp } from 'vue';
import App from './App.vue';
import HighchartsVue from 'highcharts-vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

createApp(App)
  .use(HighchartsVue)
  .mount('#app');
