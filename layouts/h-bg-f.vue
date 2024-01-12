<template>
  <div class="h-bg-f-wrapper flex-column min-h-screen d-flex">
    <PageHeader class="sticky-top" status="bg" />
    <main>
      <slot />
    </main>
    <PageFooter />
  </div>
</template>

<style lang="scss" scoped>
.h-bg-f-wrapper > main {
  overflow-x: hidden;
  flex: 1;
}
</style>
