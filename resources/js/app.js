require('./bootstrap');
import Vue from "vue";
import router from "./routes"
import Index from "./index";
import VueRouter from "vue-router";
import Vuex from 'vuex';
import storeDefinition from "./store";

///////////////////////////////////////////////////////////
//**************/   FONTAWESOME    /*********************//
///////////////////////////////////////////////////////////

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import {} from '@fortawesome/free-solid-svg-icons'
/* import specific icons */
import { faPhone, faPlus, faPlusCircle, faFloppyDisk, faPenFancy, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAxios from "vue-axios";
import axios  from "axios";
/* add icons to the library */
library.add(faPhone, faPlus, faPlusCircle, faFloppyDisk, faPenFancy, faPenToSquare, faTrashCan);
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);





window.Vue = require('vue').default;

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vuex);

const store = new Vuex.Store(storeDefinition);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    router: router,
    store,
    components: {

        "index": Index,
    },
    // beforeCreate() {
    //     this.$store.dispatch("loadStoredState");
    // },
});
