<template>
  <header :class="[colorful && 'bg-background', 'page-header']">
    <NuxtLink to="/">
      <NuxtImg src="/img/logo.png" :height="width < 768 ? 40 : 72" />
    </NuxtLink>
    <nav v-if="props.status !== 'logo' || !isOverMd" class="navbar navbar-expand-md">
      <button
        ref="toggler"
        :class="[isLocked && 'isLocked', 'btn btn-ghost navbar-toggler shadow-none']"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        data-bs-target="#navbarSupportedContent"
        data-bs-toggle="collapse"
        @click="toLock"
      >
        <Icon name="ic:round-menu" />
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <button
          class="btn btn-ghost navbar-toggler inside shadow-none"
          type="button"
          @click="closeNav"
        >
          <Icon name="ic:round-close" />
        </button>
        <ul class="nav-list">
          <li>
            <NuxtLink class="btn btn-ghost" to="/rooms" @click="closeNav">客房旅宿</NuxtLink>
          </li>
          <li>
            <NuxtLink class="btn btn-ghost" to="/rooms" @click="closeNav">客房旅宿</NuxtLink>
          </li>
          <li>
            <NuxtLink class="btn btn-ghost" to="/login" @click="closeNav">會員登入</NuxtLink>
          </li>
          <li>
            <NuxtLink class="btn btn-primary" to="/rooms" @click="closeNav">立即訂房</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const props = defineProps({
  status: {
    type: String,
    default: ''
  }
})

/* 判斷 Header 是否背景 */
const colorful = computed(() => {
  if (isOverVH.value) return true
  switch (props.status) {
    case 'logo':
      return true
    case 'bg':
      return true
    default:
      return false
  }
})

/* 檢查滾動是否超過 VH */
const { y } = useWindowScroll()
const { width, height } = useWindowSize()
const isOverVH = computed(() => {
  return y.value > height.value
})

/* 鎖定 Dom */
const toggler = ref()
const isLocked = ref(false)

let windowLock: any
onMounted(() => {
  windowLock = useScrollLock(document.body)
})

const toLock = () => {
  isLocked.value = toggler.value.getAttribute('aria-expanded') === 'true'
  windowLock.value = isLocked.value
}

/* 收合 */
const isOverMd = computed(() => width.value > 768)
const closeNav = () => {
  if (!isOverMd.value && isLocked.value) {
    toggler.value.click()
  }
}
watch(width, () => {
  if (isOverMd.value && isLocked.value) {
    toggler.value.click()
  }
})
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 5rem;
  transition: background $duration-300 ease-in-out;
  background: transparentize($background, 1);

  @include md {
    padding: 1rem 0.75rem;
  }

  .navbar {
    margin-left: auto;
  }

  .navbar-toggler {
    font-size: 1.5rem;
    display: flex;
    display: none;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    transition: color $duration-150 ease-in-out;

    @include md {
      display: flex;
    }

    &.inside {
      font-size: 1.75rem;
      position: absolute;
      position: absolute;
      z-index: 1100;
      top: 1.25rem;
      right: 1.25rem;
      right: 1.8125rem;
      width: 4rem;
      height: 4rem;
    }
  }

  .navbar-collapse {
    @include md {
      position: fixed;
      z-index: 1090;
      top: 0;
      left: 0;
      overflow: hidden;
      width: 0;
      height: 100vh;
      transition: width $duration-300 ease-in-out;
      background: $background;

      &.show {
        width: 100vw;
      }

      &.collapsing {
        width: 0;
        height: 100vh;
      }
    }
  }

  .nav-list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;

    @include md {
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      width: 100%;
      height: 100vh;
      padding: 1.25rem;

      .btn {
        width: 100%;
      }
    }
  }
}
</style>
