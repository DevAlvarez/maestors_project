<template>

        <div class="row justify-content-center">

            <div class="col-md-12">

                <div class="card">

                    <div class="card-header"> <h4>Crear ITEM</h4></div>

                    <div class="card-body">

                        <form @submit.prevent="crear">

                            <div class="row">

                                <div class="col-4 mb-2">

                                    <div class="form-gropu">

                                        <label>MAESTRO_ID</label>

                                        <input type="number" class="form-control" v-model="itemMaestro.maestro_id" >

                                    </div>

                                </div>

                                <div class="col-4 mb-2">

                                    <div class="form-gropu">

                                        <label>Nombre</label>

                                        <input type="text" class="form-control" v-model="itemMaestro.nombre" >

                                    </div>

                                </div>

                                <div class="col-12 mb-2">
                                
                                    <div class="form-floating">

                                        <textarea name="" class="form-control" id = "floatingTextarea2" v-model="itemMaestro.descripcion" ></textarea>

                                        <label for="floatingTextarea2">Descripción</label>

                                    </div>

                                </div>

                                <div class="col-12">

                                    <button type="submit" class="btn btn-secondary w-100"><font-awesome-icon class="fa-2xl" icon="floppy-disk" /></button>

                                </div>                               

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

</template>

<script>
    export default {
        name: "form-create-item",
        
        data() {
            return {
                name: "",
                itemMaestro:{
                    nombre:"",
                    descripcion:"",
                    maestro_id: 1
                }
            };
          },


        methods:{

        
           async crear(){
                await this.axios.post('/api/items', this.itemMaestro)
                .then(response=>{
                    this.$router.push({name:"tablaMaestros"})
                })
                .catch(error=>{
                    console.log(error);
                })
            }
          }
        }

</script>
</script>
