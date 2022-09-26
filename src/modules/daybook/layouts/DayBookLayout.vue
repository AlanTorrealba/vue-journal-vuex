<template>
    <navbar />
    <div class="d-flex">
        <div class="col-4">
            <entrylist />
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions } from 'vuex'

export default {
    components: {
        navbar: defineAsyncComponent(() => import("../components/Nav-bar.vue")),
        entrylist: defineAsyncComponent(() => import("../components/EntryList.vue")),

    },
    methods: {
        ...mapActions('journal', ['loadEntries'])
    },
    created() {
        this.loadEntries()
    }
}

</script>