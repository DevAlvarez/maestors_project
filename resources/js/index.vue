<template>
    <div class="mb-2 bg-dark text-ligth">

        <Navbar></Navbar>
        
        <router-view class="mt-4 container-fluid"></router-view>
        
      
    </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import { mapState } from "vuex";
export default {
    name:"Index",
    components:{
        Navbar,
    },
    data() {
        return {
            lastSearch: this.$store.state.lastSearch,
        }
    },

    computed: mapState({
             lastSearchComputed: state => state.lastSearch
         })
}
</script>