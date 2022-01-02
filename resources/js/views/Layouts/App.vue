<template>
    <div class="bg-gray-50 min-h-screen">
        <div class="px-6 pt-10 flex justify-between">
            <div class="flex items-center cursor-pointer" @click="router.push({name: 'Dashboard'})">
                <img src="/images/icon.png" class="h-12" />
                <span class="ml-2 font-bold"
                    >Laravel, VueJS, Tailwind SPA CRUD</span
                >
            </div>
            <BaseButton>
                Admin UI Live Demo
            </BaseButton>
        </div>

        <div
            class="
                py-8
                flex flex-col
                relative
                overflow-hidden
                lg:py-12
            "
        >
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: "AppLayout",
};
</script>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
