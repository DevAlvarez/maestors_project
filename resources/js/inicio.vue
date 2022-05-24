<template>

    <div>
        <FormularioCrearItem></FormularioCrearItem>
        <TablaMaestros></TablaMaestros>
        
        
        
    </div>

    
</template>
<script>
import TablaMaestros from "./components/maestros/Tabla.vue";
import FormularioCrearItem from "./components/items/FormularioCrearItem.vue"

export default {
    name:"inicio",
    components:{
        TablaMaestros,
        FormularioCrearItem
    },
}
</script>