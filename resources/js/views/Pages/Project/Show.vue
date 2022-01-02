<template>
    <div class="w-full md:max-w-7xl md:mx-auto flex justify-between mb-4">
        <div></div>
        <BaseButton @click="router.push({name: 'Project'})">List All Projects</BaseButton>
    </div>

    <BaseCard>
        <div class="p-6 relative" ref="loadingContainer">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                    Name
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                    {{project.name}}
                </dd>
                </div>
                <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                    Description
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                    {{project.description}}
                </dd>
                </div>
            </dl>
        </div>
    </BaseCard>
</template>

<script>
export default {
    name: 'ProjectShow'
}
</script>

<script setup>
import { onMounted, inject, reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useStore } from "vuex"

const route = useRoute()
const router = useRouter()
const store = useStore()

const $loading = inject("$loading");

const loadingContainer = ref(false);

const project = reactive({})

const getItem = async () => {
    let loader = $loading.show({ container: loadingContainer.value });
    await store
        .dispatch("project/get", {
            uuid: route.params.uuid
        })
        .then((response) => {
            loader.hide()
            Object.assign(project, response);
        })
        .catch((e) => {
            loader.hide()
            router.push({name: 'Project'})
        });
};

onMounted(async () => {
    await getItem();
})
</script>
