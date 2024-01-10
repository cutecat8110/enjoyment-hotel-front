<template>
  <div class="h-f-spl-wrapper d-flex flex-column min-h-screen bg-primary-tint">
    <PageHeader class="fixed-top" />
    <main>
      <slot />
    </main>
    <PageFooter status="spl" />
  </div>
</template>

<style lang="scss" scoped>
.h-f-spl-wrapper > main {
  overflow-x: hidden;
  flex: 1;
}
</style>
