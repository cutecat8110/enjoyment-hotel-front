<template>
  <div class="layout-default flex-column min-h-screen d-flex bg-background">
    <PageHeader class="fixed-top" status="keepBg" />
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
