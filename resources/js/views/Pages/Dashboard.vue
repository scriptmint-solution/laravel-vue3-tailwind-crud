<template>
    <div class="flex justify-between  px-10 mb-4">
        <div></div>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="router.push({name: 'Project'})">CRUD Example</button>
    </div>

    <BaseCard>
    </BaseCard>
</template>

<script>
export default {
    name: "Dashboard",
};
</script>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
