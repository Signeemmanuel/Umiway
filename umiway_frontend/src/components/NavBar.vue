<script setup>
import IconHome from '@/components/icons/IconHome.vue'
import IconChat from '@/components/icons/IconChat.vue'
import IconNotification from '@/components/icons/IconNotification.vue'
import IconSearch from '@/components/icons/IconSearch.vue'

</script>

<template>
  <header class="py-5 px-8 border-b bg-white border-gray-200 shadow-sm">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-between">
        <div class="menu-left">
          <a href="#" class="text-2xl font-bold">Umiway</a>
        </div>
        <nav class="menu-center flex space-x-12">
          <a href="#">
            <IconHome />
          </a>
          <a href="#">
            <IconChat />
          </a>
          <a href="#">
            <IconNotification />
          </a>
          <a href="#">
            <IconSearch />
          </a>
        </nav>
        <div>
          <a class="menu-left">
            <img src="https://i.pravatar.cc/40?img=70" class="rounded-full" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
