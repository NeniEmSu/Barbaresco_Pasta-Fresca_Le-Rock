import Vue from 'vue'
import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
import * as lang from "vuejs-datepicker/src/locale";

Vue.component('datepicker', Datepicker)
Vue.use(lang)
