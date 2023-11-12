<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <main class="px-8 py-6">
    <RouterView />
  </main>
</template>

<style scoped></style>
