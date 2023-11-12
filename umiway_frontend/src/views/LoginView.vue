<script setup>
import { RouterLink } from 'vue-router'</script>
<template>
  <div class="max-w-7xl m-auto grid grid-cols-2 gap-4">
    <div class="main-left">
      <div class="p-12 bg-white border border-gray-200 rounded-lg">
        <h1 class="mb-6 text-2xl font-semibold">Login</h1>
        <p class="mb-6 text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          rerum eveniet atque cum natus repudiandae.
        </p>
        <p class="">
          Don't have Already have an account?
          <RouterLink :to="{name: 'signup'}" class="underline text-blue-500">Sign up</RouterLink> to create one
        </p>
      </div>
    </div>
    <div class="main-right">
      <div class="p-12 bg-white border border-gray-200 rounded-lg">
        <form class="space-y-6">
          <legend>
            <label for="email">E-mail</label><br />
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              required
              class="border border-gray-200 mt-2 p-2 w-full rounded-lg"
            />
          </legend>
          <legend>
            <label for="password">Password</label><br />
            <input
              type="password"
              id="password"
              placeholder="Your password"
              required
              class="border border-gray-200 mt-2 p-2 w-full rounded-lg"
            />
          </legend>
          <button
            type="submit"
            class="mt-4 py-3 px-6 bg-purple-600 text-white rounded-lg"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
