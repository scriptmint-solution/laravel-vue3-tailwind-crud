<template>
    <div :class="{
        'py-1': separator
    }">
        <MenuItem v-slot="{ active }">
            <component :is="getComponent"
                :href="href"
                class="group flex items-center px-4 py-2 text-sm"
                :class="{
                    'bg-gray-100 text-gray-900': active,
                    'text-gray-700': ! active,
                    'cursor-pointer': as === 'span'
                }"
            >
                <i v-if="icon"
                    :class="icon"
                    class="
                        mr-3
                        text-gray-400
                        group-hover:text-gray-500
                    "
                    aria-hidden="true"
                ></i>
                <slot></slot>
            </component>
        </MenuItem>
    </div>
</template>

<script>
export default {
    name: 'DropdownItem'
}
</script>

<script setup>
import { computed } from "vue"
import { useRouter } from "vue-router"
import { MenuItem } from "@headlessui/vue";

const props = defineProps({
    separator: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: ''
    },
    as: {
        type: String,
        default: 'span' // span|link|route
    },
    href: {
        type: String,
        default: '#'
    }
})

const getComponent = computed(() => {
    if (props.as === 'route') {
        return 'router-link'
    } else if (props.as === 'link') {
        return 'a'
    } else {
        return 'span'
    }
})
</script>
