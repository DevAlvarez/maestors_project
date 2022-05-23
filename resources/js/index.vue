<template>
    <div class="mb-2 bg-dark text-ligth">

        <Navbar></Navbar>
        
        <router-view class="mt-4 container-fluid"></router-view>
        
      
    </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";

export default {
    name:"Index",
    components:{
        Navbar,
    },
}
</script>