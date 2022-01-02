<template>
    <div class="w-full md:max-w-7xl md:mx-auto flex justify-between mb-4">
        <div></div>
        <BaseButton @click="router.push({name: 'ProjectCreate'})">Add New Project</BaseButton>
    </div>

    <BaseCard>
        <div class="flex flex-col" ref="loadingContainer">
            <div class="-my-2">
                <div class="py-2 align-middle inline-block min-w-full">
                    <div class="border-b border-gray-200">
                        <table class="rounded-table min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="sm:px-2 xl:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                    <th class="sm:px-2 xl:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th class="sm:px-2 xl:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                    <th class="sm:px-2 xl:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr class="hover:bg-gray-100" v-for="(project, index) in projects.data" :key="project.uuid">
                                    <td class="px-2 py-4 text-sm text-gray-500">
                                        {{index+1}}
                                    </td>
                                    <td class="px-2 py-4 text-sm">
                                        {{project.name}}
                                    </td>
                                    <td class="px-2 py-4 text-sm">
                                        {{project.description}}
                                    </td>
                                    <td class="px-2 py-4 text-sm">
                                        <DropdownMenu>
                                            <DropdownItem icon="fas fa-arrow-circle-right" @click="router.push({name: 'ProjectShow', params: {uuid: project.uuid}})">Show</DropdownItem>
                                            <DropdownItem icon="fas fa-edit" @click="router.push({name: 'ProjectEdit', params: {uuid: project.uuid}})">Edit</DropdownItem>
                                            <DropdownItem icon="fas fa-trash" @click="deleteItem(project.uuid)">Delete</DropdownItem>
                                        </DropdownMenu>
                                    </td>
                                </tr>
                                <tr v-if="projects.data.length === 0">
                                    <td colspan="4" class="px-2 py-4 text-sm text-gray-500">
                                        Could not find any data.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </BaseCard>
</template>

<script>
export default {
    name: 'ProjectList'
}
</script>

<script setup>
import { onMounted, inject, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Swal from 'sweetalert2'

const router = useRouter()
const store = useStore()

const $loading = inject("$loading");

const loadingContainer = ref(false);
const projects = reactive({
    data: []
})

const listItems = () => {
    let loader = $loading.show({ container: loadingContainer.value });
    store
        .dispatch("project/list")
        .then((response) => {
            loader.hide()
            Object.assign(projects, response)
        })
        .catch((e) => {
            loader.hide()
        });
}

const confirmDelete = async () => {
    return Swal.fire({
        icon: "warning",
        title: 'Are you sure?',
        text: 'You won\'t be able to reverse this action. Proceed to delete?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
    }).then((result) => {
        return result.isConfirmed ? true : false
    })
}

const deleteItem = async (uuid) => {
    if (await confirmDelete()) {
        let loader = $loading.show({ container: loadingContainer.value });
        await store
            .dispatch("project/delete", {
                uuid
            })
            .then(() => {
                loader.hide()
                listItems();
            })
            .catch((e) => {
                loader.hide()
            });
    }
};

onMounted(() => {
    listItems()
})
</script>
