// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


const app = createApp(App)
app.use(PrimeVue)
app.use(ToastService)


app.component('InputText', InputText)
app.component('Button', Button)
app.component('Toast', Toast)
app.component('DataTable', DataTable)
app.component('Column', Column)




app.mount('#app')
