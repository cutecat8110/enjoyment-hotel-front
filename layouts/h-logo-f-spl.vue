<template>
  <div class="h-bg-f-wrapper bg-background flex-column min-h-screen d-flex">
    <PageHeader class="sticky-top" status="logo" />
    <main>
      <slot />
    </main>
    <PageFooter status="spl" />
  </div>
</template>

<style lang="scss" scoped>
.h-bg-f-wrapper > main {
  overflow-x: hidden;
  flex: 1;
}
</style>
