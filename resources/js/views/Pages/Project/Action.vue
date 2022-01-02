<template>
    <div class="w-full md:max-w-7xl md:mx-auto flex justify-between mb-4">
        <div></div>
        <BaseButton @click="router.push({name: 'Project'})">List All Project</BaseButton>
    </div>

    <BaseCard class="p-6">
        <ProjectForm></ProjectForm>
    </BaseCard>
</template>

<script>
export default {
    name: 'ProjectAction'
}
</script>

<script setup>
import { useRouter } from "vue-router";
import ProjectForm from "./Form";

const router = useRouter();
</script>
