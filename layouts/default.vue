<template>
  <div class="min-h-screen flex flex-col">
    <PageHeader />
    <main class="flex-1">
      <slot />
    </main>
    <PageFooter />
  </div>
</template>
