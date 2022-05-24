import VueRouter from "vue-router";
import FormularioCrearMaestro from "./components/maestros/FormularioCrearMaestro";
import FormularioEditMaestro from "./components/maestros/FormularioEditarMaestro.vue";
import FormularioCrearItem from "./components/items/FormularioCrearItem.vue";
import TablaItems from "./components/items/Tabla.vue";
import Inicio from "./inicio.vue";
import MaestroItems from "./components/maestros/MaestrosItems.vue"
import FormularioEditItem from "./components/items/FormularioEditItem.vue";

const routes = [


    {
        path: "/",
        component: Inicio,
        name: "inicio",
    },

    {
        path: "/crear-maestro",
        component: FormularioCrearMaestro,
        name: "formularioCrearMaestro",
    },

    {
        path: "/editar-maestro",
        component: FormularioEditMaestro,
        name: "form-edit-maestro",
    },

    {
        path: "/crear-item",
        component: FormularioCrearItem,
        name: "form-create-item",
        props:true
    },

    {
        path: "/tabla-item",
        component: TablaItems,
        name: "tablaItems",
        props: true
       
    },

    {
        path: "/maestro-items/:id",
        component: MaestroItems,
        name: "maestroItems",
        props: true
       
    },

    {
        path: "/editar-item",
        component: FormularioEditItem,
        name:'form-edit-item',
        props: true
    }



];


const router = new VueRouter({
    routes,
    mode:"history"
});

export default router;