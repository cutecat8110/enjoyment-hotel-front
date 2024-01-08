<template>
  <div class="layout-default flex-column min-h-screen d-flex">
    <PageHeader class="sticky-top" status="keepBg" />
    <main>
      <slot />
    </main>
    <PageFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout-default > main {
  overflow-x: hidden;
  flex: 1;
}
</style>
