<template>
    <div class="w-full">
        <form @submit.prevent="submit">
            <div class="relative" ref="loadingContainer">
                <div class="grid grid-cols-2 gap-6">
                    <div class="col-span-1 sm:col-span-2">
                        <BaseInput
                            type="text"
                            v-model="form.name"
                            name="name"
                            label="Name"
                            v-model:error="formErrors.name"
                        />
                    </div>
                    <div class="col-span-1 sm:col-span-2">
                        <BaseTextarea
                            v-model="form.description"
                            name="description"
                            label="description"
                        />
                    </div>
                </div>
            </div>
            <BaseButton class="mt-2" type="submit">{{route.params.uuid ? 'Update' : 'Save'}}</BaseButton>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ProjectForm'
}
</script>

<script setup>
import { onMounted, computed, inject, ref, reactive } from "vue";
import { useRoute, useRouter, onBeforeRouteLeave } from "vue-router";
import { useStore } from "vuex";

const route = useRoute()
const router = useRouter()
const store = useStore()

const $loading = inject("$loading");

const loadingContainer = ref(false);

const initForm = {
    name: "",
    description: ""
};

const formErrors = computed(() => store.getters["project/getFormErrors"]);

const form = reactive({ ...initForm });

const submit = async () => {
    let loader = $loading.show({ container: loadingContainer.value });
    let action = route.params.uuid ? "update" : "create"
    await store
        .dispatch("project/" + action, {
            form,
            uuid: route.params.uuid,
        })
        .then((response) => {
            loader.hide()
            router.push({name: 'Project'})
        })
        .catch((e) => {
            loader.hide()
        });
};

const getItem = async () => {
    let loader = $loading.show({ container: loadingContainer.value });
    await store
        .dispatch("project/get", {
            uuid: route.params.uuid
        })
        .then((response) => {
            loader.hide()
            Object.assign(form, response);
        })
        .catch((e) => {
            loader.hide()
            router.push({name: 'Project'})
        });
};

const resetFormErrors = () => {
    store.dispatch("project/resetFormErrors");
}

onMounted(async () => {
    if (route.params.uuid) {
        await getItem();
    }
})

onBeforeRouteLeave((to, from) => {
    resetFormErrors()
});
</script>
