<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col">
    <header>
      <Navbar />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
