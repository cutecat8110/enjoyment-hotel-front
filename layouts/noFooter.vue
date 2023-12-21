<template>
  <div class="layout-noFooter">
    <PageHeader class="fixed-top" :status="1" />
    <div class="min-h-screen">
      <slot />
    </div>
  </div>
</template>
