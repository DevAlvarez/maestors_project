require('./bootstrap');

import router from "./routes"
import Index from "./index";
import VueRouter from "vue-router";

window.Vue = require('vue').default;

Vue.use(VueRouter);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    router: router,
    components: {

        "index": Index,
    }
});
