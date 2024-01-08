<template>
  <div class="specFooter-wrapper flex-column min-h-screen d-flex bg-background">
    <PageHeader class="sticky-top" status="keepBg" />
    <!-- <div class="specFooter-banner">
      <div class="container fs-3 fs-md-1 text-light fw-bold lh-lg ls-1">
        <NuxtImg class="user-photo" src="/img/user.png" />
        Hello，Jessica
      </div>
    </div> -->
    <main class="specFooter-content">
      <slot />
    </main>
    <PageFooter status="spec" />
  </div>
</template>

<style lang="scss" scoped>
.specFooter-wrapper {
  // .specFooter-banner {
  //   background-image: url('/img/bg/user.png');
  //   background-repeat: no-repeat;
  //   background-position: center;
  //   background-size: cover;

  //   > .container {
  //     display: flex;
  //     align-items: center;
  //     flex-direction: row;
  //     gap: 1rem;
  //     height: 24rem;

  //     @include md {
  //       align-items: start;
  //       flex-direction: column;
  //       justify-content: center;
  //       height: 12.875rem;
  //       padding: 0 1.25rem;
  //     }
  //   }
  // }

  .specFooter-content {
    overflow-x: hidden;
    flex: 1;
  }

  .user-photo {
    width: 9rem;
    height: 9rem;

    @include md {
      width: 4.5rem;
      height: 4.5rem;
    }
  }
}
</style>
