<template>
  <div class="flex-column min-h-screen d-flex">
    <PageHeader />
    <main class="layout-default-main">
      <slot />
    </main>
    <PageFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout-default-main {
  flex: 1;
  overflow-x: hidden;
}
</style>
