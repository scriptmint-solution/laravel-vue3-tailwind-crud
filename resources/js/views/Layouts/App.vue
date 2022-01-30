<template>
    <div class="flex flex-col bg-gray-50 h-screen">
        <div></div>
        <div class=" bg-indigo-900 text-center py-4 lg:px-4">
            <a href="https://ui.scriptmint.com" target="_blank">
                <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                        <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                        <span class="font-semibold mr-2 text-left flex-auto">Looking for Laravel, VueJS, Tailwind Admin Panel? - Check Super Advanced Vana Admin Panel Live Demo! </span>
                        <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>

                </div>
            </a>
        </div>
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
                    <a href="https://ui.scriptmint.com" target="_blank">
                        <BaseButton>
                            Vana Admin Live Demo
                        </BaseButton>
                    </a>
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
