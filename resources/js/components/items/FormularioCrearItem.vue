<template>

        <div class="row justify-content-center">

            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-dark text-white"> <h6>Crear items de maestros</h6></div>
                    <div class="card-body bg-dark">

                        <form @submit.prevent="crear">

                            <div class="form-gropu">
                             

                                <select @change="selected(itemMaestro.maestro_id)" class="form-select" aria-label="Default select example" v-model.number="itemMaestro.maestro_id">

                                    <option v-for="maestro in maestros" :key="maestro.id" :value="maestro.id"> {{maestro.nombre}} </option>

                                </select>
                             

                            </div>

                            <div class="form-gropu mt-2">

                                <label>Nombre</label>

                                <input type="text" class="form-control" v-model="itemMaestro.nombre" >

                            </div>

                            <div class="form-floating mt-2">

                                
                                <textarea name="" class="form-control" id = "floatingTextarea2" v-model="itemMaestro.descripcion" ></textarea>

                                <label for="floatingTextarea2">Descripción</label>

                            </div>

                            <div class="col-12 mt-2">

                                    <button type="submit" class="btn btn-outline-secondary w-100"><font-awesome-icon class="fa-2xl" icon="floppy-disk" /></button>

                            </div> 
                        
                        
                        </form>

                    </div>
                </div>
                
            </div>

            <div class="col-8">
               
                <TablaItems @selected="selected" :idMaestro="{id}" ></TablaItems>
                   
            </div>

  



        </div>

</template>

<script>
import TablaItems from "./Tabla.vue"
    export default {

        name: "form-create-item",
        components:{
            TablaItems,
        },
        
        data() {
            return {
                name: "",
                itemMaestro:{
                    nombre:"",
                    descripcion:"",
                    maestro_id:null
                },
                maestros: [],

                id:null
                
            };
          },

        mounted(){
            this.mostrarMaestros()
        },

        methods:{

            selected(val){
                this.id = val

                // console.log(this.id);
            },

            async mostrarMaestros(){
                await this.axios.get('/api/maestros')
                .then(response=>{
                    this.maestros=response.data
                })
                .catch(error=>{
                    this.maestros = []
                })
            },
            
           async crear(){

               
                await this.axios.post('/api/items', this.itemMaestro)
                .then(response=>{
                    this.$router.push({name:"tablaItems"})
                    // alert("Se ha creado el maestro")
                })
                .catch(error=>{
                    console.log(error);
                })
             }
         },

        }

</script>
</script>
