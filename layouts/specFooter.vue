<template>
  <div class="layout-default flex-column min-h-screen d-flex">
    <PageHeader class="fixed-top" />
    <main>
      <slot />
    </main>
    <PageFooter status="spec" />
  </div>
</template>

<style lang="scss" scoped>
.layout-default > main {
  overflow-x: hidden;
  flex: 1;
}
</style>
