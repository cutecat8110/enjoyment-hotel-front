<template>
  <div class="h-bg-f-spl-wrapper flex-column min-h-screen d-flex bg-background">
    <PageHeader class="sticky-top" status="bg" />
    <div class="h-bg-f-spl-banner">
      <div class="container fs-3 fs-md-1 text-light fw-bold lh-lg ls-1">
        <NuxtImg class="user-photo" src="/img/user.png" />
        Hello，{{ name }}
      </div>
    </div>
    <div class="h-bg-f-spl-content container-xl">
      <ul class="nav list-unstyled d-flex">
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/user">個人資料</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/user/orders">我的訂單</NuxtLink>
        </li>
      </ul>
      <slot />
    </div>
    <PageFooter status="spl" />
  </div>
</template>

<script lang="ts" setup>
const commonStore = useCommonStore()
const name = computed(() => (!('name' in commonStore.me) ? '' : commonStore.me.name))
</script>

<style lang="scss" scoped>
.h-bg-f-spl-wrapper {
  .h-bg-f-spl-banner {
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

  .h-bg-f-spl-content {
    overflow-x: hidden;
    flex: 1;
    padding-top: 5rem;
    padding-bottom: 7.5rem;

    @include md {
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;
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
