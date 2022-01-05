<template>
    <div class="flex flex-col bg-gray-50 h-screen">
        <div></div>
        <div class="flex-1 overflow-y-auto">
            <div class="px-6 pt-10 flex justify-between">
                <div class="flex items-center cursor-pointer" @click="router.push({name: 'Dashboard'})">
                    <img src="/images/icon.png" class="h-12" />
                    <span class="ml-2 font-bold"
                        >Laravel, VueJS, Tailwind SPA CRUD</span
                    >
                </div>

                <div class="flex items-center space-x-4">
                    <a href="https://github.com/scriptmintsolution/laravel-vue3-tailwind-crud" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                </div>
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
