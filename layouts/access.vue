<template>
  <div class="access-wrapper bg-background">
    <PageHeader class="fixed-top" status="auth" />
    <NuxtImg class="fixed-top z-0 access-img" src="/img/register.png" />

    <div class="access-content d-flex justify-content-center align-items-center">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.access-wrapper {
  .access-content {
    min-height: 100vh;
    padding-left: 50vw;
    padding-top: 120px;
    @include md {
      padding-left: 0;
      padding-top: 72px;
    }
  }

  .access-img {
    object-fit: cover;
    width: 50vw;
    height: 100vh;
    @include md {
      display: none;
    }
  }
}
</style>
