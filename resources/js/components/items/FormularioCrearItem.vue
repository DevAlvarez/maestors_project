<template>

        <div class="row justify-content-start">

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

                                     <button  class="btn btn-outline-secondary w-100" ><font-awesome-icon class="fa-2xl" icon="floppy-disk" /></button>

                            </div> 
                        
                        
                        </form>

                    </div>
                </div>
                
            </div>

            <div class="col-md-8 mr-2">

                <div class="table-responsive">
                    <table class="table table-dark table-striped table-hover">

                        <thead>
                            <tr>
                                <th>Id </th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Acciones</th>
                            </tr>                        
                        </thead>
                        <tbody>
                            <tr v-for="itemMaestro in itemsMaestro" :key="itemMaestro.id">
                                <td>{{itemMaestro.id}}</td>
                                <td>{{itemMaestro.nombre}}</td>
                                <td>{{itemMaestro.descripcion}}</td>     
                                <td>
                                    <router-link :to=' {name:"form-edit-maestro", params:{id:itemMaestro.id} }' class="btn btn-outline-light" >
                                        <font-awesome-icon icon="pen-to-square" />
                                    </router-link>
                                    <a type="button" @click="deleteMaestro(itemMaestro.id)" class="btn btn-outline-danger">
                                        <font-awesome-icon icon="trash-can" />
                                    </a>
                                </td>                       
                            </tr>

                        </tbody>

                    </table>
                </div>
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
                id_Maestro:null,

                itemMaestro:{
                    nombre:"",
                    descripcion:"",
                    maestro_id:null
                },
                maestros: [],
                itemsMaestro: null,
            
            };
          },

        mounted(){
             this.mostrarMaestros()      
        },


        methods:{


            async mostrarMaestros(){
                await this.axios.get('/api/maestros')
                .then(response=>{
                    this.maestros=response.data
                })
                .catch(error=>{
                    this.maestros = []
                })
            },


            selected(val){

                this.id_Maestro = val;

                console.log("Valor seleccionado es "+val);

                console.log(this.$store);

                this.$store.dispatch('setLastSearch', {
                    maestro: val,
                    item: val
                });

                this.axios.get(`/api/maestros/${this.id_Maestro}/items`)

                .then(response=>{
                    this.itemsMaestro=response.data.data
                })
                .catch(error=>{
                    this.itemsMaestro = []
                })
          
             
            },
            
           async crear(){              
                await this.axios.post('/api/items', this.itemMaestro)
                .then(response=>{
                    this.$router.push({
                        name:"inicio",
                        params: { errors: '123' }
                        })
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
