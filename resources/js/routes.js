import VueRouter from "vue-router";
import TablaMaestros from "./components/maestros/Tabla";
import FormularioCrearMaestro from "./components/maestros/FormularioCrearMaestro";
import FormularioEditMaestro from "./components/maestros/FormularioEditarMaestro.vue";
import FormularioCrearItem from "./components/items/FormularioCrearItem.vue";
import TablaItems from "./components/items/Tabla.vue";

const routes = [
    {
        path: "/",
        component: TablaMaestros,
        name: "tablaMaestros",
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
    },

    {
        path: "/tabla-item",
        component: TablaItems,
        name: "tablaItems",
    },

];


const router = new VueRouter({
    routes,
    mode:"history"
});

export default router;