<template>
    <button
        type="button"
        class="
            text-white
            bg-gray-800
            hover:bg-gray-900
            focus:ring-4 focus:ring-gray-300
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2
            text-center
            mr-2
            mb-2
            dark:bg-gray-800
            dark:hover:bg-gray-700
            dark:focus:ring-gray-800
            dark:border-gray-700
        "
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'BaseButton'
}
</script>

<script setup>
</script>
