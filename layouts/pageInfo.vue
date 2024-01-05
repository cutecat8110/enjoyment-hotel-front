<template>
  <div class="layout-default d-flex flex-column min-h-screen">
    <PageHeader class="sticky-top" status="auth" />
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
