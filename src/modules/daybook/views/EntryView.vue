<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold"> 22</span>
            <span class="mx-1 fs-3">Octubre</span>
            <span class="mx-2 fs-4 fw-light"> 2022, jueves</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
                subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="Que sucedio hoy?"></textarea>
    </div>
    <Fab icon="fa-save" />

    <img class="img-thumbnail" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/E7E9/production/_117696395_eso2105a.jpg" alt="entry-picture">
</template>
<script>
    import { defineAsyncComponent } from "vue";
export default {
    components: {
        Fab: defineAsyncComponent(()=> import('../components/Fab.vue'))
    }
}
</script>
<style lang="scss" scoped>

    textarea{
        font-size: 20px;
        border:none;
        height: 100%;

        &:focus{
            outline: none;
        }
    }

    img{
        width: 200px;
        position: fixed;
        bottom:110px;
        right: 10px;
        box-shadow: 0px 5px 10px rgba($color: #0000, $alpha: 1.0);
    }




</style>