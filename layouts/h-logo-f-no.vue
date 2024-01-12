<template>
  <div class="h-logo-f-no-wrapper d-flex min-h-screen bg-background">
    <PageHeader class="fixed-top z-1" status="logo" />
    <NuxtImg class="fixed-top h-logo-f-no-img z-0" src="/img/register.png" />
    <div class="h-logo-f-no-content d-flex justify-content-center align-items-center z-0 z-md-2">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.h-logo-f-no-wrapper {
  background-image: url('/svg/bg/bg_line_sm.svg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top 12rem right 0;

  .h-logo-f-no-content {
    overflow-x: hidden;
    flex: 1;
    margin-top: 7.5rem;
    margin-left: 50vw;

    @include md {
      margin-top: 4.5rem;
      margin-left: 0;
    }
  }

  .h-logo-f-no-img {
    width: 50vw;
    height: 100vh;

    object-fit: cover;
    @include md {
      display: none;
    }
  }
}
</style>
