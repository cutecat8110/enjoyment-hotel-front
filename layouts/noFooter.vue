<template>
  <div class="noFooter-wrapper bg-background">
    <PageHeader class="fixed-top z-1" status="onlyLogo" />
    <NuxtImg class="fixed-top z-0 noFooter-img" src="/img/register.png" />
    <div class="noFooter-content d-flex justify-content-center align-items-center z-0 z-md-2">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.noFooter-wrapper {
  background-image: url('/svg/bg/bg_line_sm.svg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top 12rem right 0;

  .noFooter-content {
    position: relative;
    min-height: 100vh;
    margin-top: 120px;
    margin-left: 50vw;

    @include md {
      margin-top: 72px;
      margin-left: 0;
    }
  }

  .noFooter-img {
    width: 50vw;
    height: 100vh;

    object-fit: cover;
    @include md {
      display: none;
    }
  }
}
</style>
