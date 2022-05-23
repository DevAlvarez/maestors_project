<template>

    <div>
        <TablaMaestros></TablaMaestros>
        
        <FormularioCrearItem></FormularioCrearItem>
        
    </div>

    
</template>
<script>
import TablaMaestros from "./components/maestros/Tabla.vue";
import FormularioCrearItem from "./components/items/FormularioCrearItem.vue"

export default {
    name:"tablaMaestros",
    components:{
        TablaMaestros,
        FormularioCrearItem
    },
}
</script>