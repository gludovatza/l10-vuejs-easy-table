import './bootstrap';

import { createApp } from 'vue';
import Basic from "./components/Basic.vue";

import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const app = createApp(Basic);
app.component('EasyDataTable', Vue3EasyDataTable);
app.mount('#app');
