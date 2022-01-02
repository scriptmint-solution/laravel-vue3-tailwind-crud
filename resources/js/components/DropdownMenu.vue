<template>
    <Menu
        as="div"
        class="
            relative
            flex
            justify-end
            items-center
        "
    >
        <MenuButton
            class="
                h-8
                bg-white
                inline-flex
                items-center
                justify-center
                text-gray-400
                rounded-full
                hover:text-gray-500
            "
        >
            <span class="sr-only"
                >Open options</span
            >
            <slot name="clickable">
                <DotsVerticalIcon
                    class="w-5 h-5"
                    aria-hidden="true"
                />
            </slot>
        </MenuButton>
        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <MenuItems
                class="
                    mx-3
                    origin-top-right
                    absolute
                    right-7
                    w-48
                    mt-1
                    rounded-md
                    shadow-lg
                    z-20
                    bg-white
                    ring-1 ring-black ring-opacity-5
                    divide-y divide-gray-200
                    focus:outline-none
                "
            >
                <slot></slot>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script>
export default {
    name: 'DropdownMenu'
}
</script>

<script setup>
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
import { MenuAlt1Icon } from "@heroicons/vue/outline";
</script>
