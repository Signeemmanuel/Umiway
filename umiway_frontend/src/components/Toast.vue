<script setup>
import { UseToastStore } from "../stores/toast"

const store = UseToastStore()
</script>

<template>
    <div v-if="store.isVisible" class="transition ease-in-out delay-500 px-6 py-6 fixed top-full right-8 rounded-xl shadow-xl" :class="store.classes">
        {{ store.message }}
    </div>
</template>