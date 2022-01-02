<template>
    <div
        class="
            relative
            w-full
            bg-white
            shadow-xl shadow-slate-700/10
            ring-1 ring-gray-900/5
            md:max-w-7xl md:mx-auto
            lg:max-w-7xl
        "
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'BaseCard'
}
</script>

<script setup>
</script>
