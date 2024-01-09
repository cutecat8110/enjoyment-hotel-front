<template>
  <div class="specFooter-wrapper flex-column min-h-screen d-flex bg-background">
    <PageHeader class="sticky-top" status="keepBg" />
    <div class="specFooter-banner">
      <div class="container fs-3 fs-md-1 text-light fw-bold lh-lg ls-1">
        <NuxtImg class="user-photo" src="/img/user.png" />
        Hello，Jessica
      </div>
    </div>
    <main class="specFooter-content container">
      <ul class="nav list-unstyled d-flex">
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/user">個人資料</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/user/orders">訂單</NuxtLink>
        </li>
      </ul>
      <slot />
    </main>
    <PageFooter status="spec" />
  </div>
</template>

<style lang="scss" scoped>
.specFooter-wrapper {
  .specFooter-banner {
    background-image: url('/img/bg/user.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    > .container {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 1rem;
      height: 24rem;

      @include md {
        align-items: start;
        flex-direction: column;
        justify-content: center;
        height: 12.875rem;
        padding: 0 1.25rem;
      }
    }
  }

  .specFooter-content {
    overflow-x: hidden;
    flex: 1;
    padding-bottom: 5rem;
    padding-top: 5rem;
    @include md {
      padding-bottom: 2.5rem;
      padding-top: 2.5rem;
    }
  }

  .nav {
    margin-bottom: 5rem;
    @include md {
      margin-bottom: 2.5rem;
    }
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
