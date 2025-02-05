<script setup lang="ts">
const { userId, isLoaded } = useAuth()
</script>

<template>
  <div class="min-h-full">
    <ClientOnly v-if="!isLoaded">
      <SignIn />
    </ClientOnly>
  </div>
</template>

<style>
.cl-card,
.cl-footer,
.cl-rootBox,
.cl-cardBox {
  background: unset;
  background-color: var(--color-crust);
  border-radius: 0;
  color: var(--color-text);
}

.cl-footerActionText,
.cl-formFieldLabel,
.cl-dividerText,
.cl-headerTitle,
.cl-headerSubtitle {
  color: var(--color-text);
  font-weight: 600;
}

.cl-socialButtonsBlockButton {
  border-width: 2px !important;
  color: var(--color-text);
  border-color: var(--color-pink);
  border-radius: 0;
}

.cl-socialButtonsBlockButtonText {
  font-weight: 600;
}

.cl-internal-1gblaxi {
  border-radius: 0px;
}

.cl-internal-piyvrh {
  background: unset;
}

.cl-formFieldInput {
  background-color: var(--color-surface0);
  color: var(--color-text);
}

.cl-footerActionLink {
  color: var(--color-text);
}

.cl-formButtonPrimary {
  background-color: var(--color-crust);
  color: var(--color-text);
  box-shadow: unset;
}

.cl-internal-ttumny[data-variant='solid'][data-color='primary'] {
  box-shadow: none;
  border-radius: 0;
  border-color: var(--color-green);
  border-width: 2px;
}

.cl-internal-ttumny:hover {
  background-color: var(--color-green);
  color: var(--color-crust);
}

.cl-internal-ttumny[data-variant='solid']::after {
  background: unset;
}

.cl-dividerLine {
  background-color: var(--color-pink);
}
</style>
