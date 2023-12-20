<template>
  <div class="flex-column min-h-screen d-flex">
    <PageHeader class="fixed-top" />
    <main class="layout-default-main">
      <slot />
    </main>
    <PageFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout-default-main {
  overflow-x: hidden;
  flex: 1;
}
</style>
