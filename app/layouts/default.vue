<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="flex-none">
      <Navbar />
    </header>
    <main class="grow flex items-center justify-center">
      <slot />
    </main>
  </div>
</template>
