<template>
  <div class="flex min-h-screen flex-col">
    <PageHeader />
    <main class="flex-1 overflow-x-hidden">
      <slot />
    </main>
    <PageFooter />
  </div>
</template>
