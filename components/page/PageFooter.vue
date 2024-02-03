<template>
  <footer class="page-footer bg-background text-light">
    <NuxtImg v-if="props.status == 'spl'" class="page-footer-img" src="/svg/bg/bg_line_lg.svg" />
    <div class="page-footer-container container-md d-flex flex-column">
      <div class="footer-top">
        <div class="social-wrapper">
          <NuxtLink to="/">
            <NuxtImg src="/img/logo.png" height="72" />
          </NuxtLink>

          <div>
            <button class="rounded-circle btn btn-outline-light social-link" type="button">
              <Icon name="bi:line"></Icon>
            </button>
            <button class="rounded-circle btn btn-outline-light social-link" type="button">
              <Icon name="bi:instagram"></Icon>
            </button>
          </div>
        </div>

        <ul class="info-list text-nowrap m-0 p-0">
          <li>
            <div class="fw-bold">TEL</div>
            <div>+886-7-1234567</div>
          </li>
          <li>
            <div class="fw-bold">FAX</div>
            <div>+886-7-1234567</div>
          </li>
          <li>
            <div class="fw-bold">MAIL</div>
            <div>elh@hexschool.com</div>
          </li>
          <li>
            <div class="fw-bold">WEB</div>
            <div>www.elhhexschool.com.tw</div>
          </li>
        </ul>
      </div>

      <div class="footer-down">
        <!-- <div class="d-flex gap-3 align-items-center">
          <NuxtLink
            class="btn btn-ghost footer-link"
            target="_blank"
            to="https://freyja-7ddy.onrender.com/swagger"
          >
            <Icon name="cib:swagger" />
            Swagger
          </NuxtLink>
          |
          <NuxtLink class="btn btn-ghost footer-link" target="_blank" to="/guideline">
            <Icon name="ic:round-book" />
            Guideline
          </NuxtLink>
        </div> -->
        <div class="w-100 text-end">Copyright © 2024 by Hao,Tori,Renee / 素材取自網路，僅作學習用途</div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const props = defineProps({
  status: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.page-footer {
  .page-footer-img {
    height: 11.75rem;
    width: 100%;
    object-fit: cover;
    @include md {
      height: 5.25rem;
    }
  }
  .page-footer-container {
    padding-top: 5rem;
    padding-bottom: 7.5rem;
  }
  .container-md {
    gap: 5rem;
  }

  .footer-top {
    display: flex;
    justify-content: space-between;

    @include md {
      flex-direction: column;
      gap: 5rem;
    }
  }

  .social-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;

    &:last-child {
      margin-left: 1rem;
    }

    svg {
      font-size: 1.5rem;
    }
  }

  .info-list {
    display: grid;
    gap: 2.5rem 5rem;
    grid-template-columns: auto auto;
    list-style: none;

    @include md {
      gap: 1rem;
      grid-template-columns: 1fr;
    }

    > li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: calc((100% - 2.5rem) / 2);

      @include md {
        order: 0;
      }

      &:nth-child(2) {
        order: 2;
      }

      &:nth-child(3) {
        order: 1;
      }

      &:nth-child(4) {
        order: 3;
      }
    }
  }

  .footer-down {
    display: flex;
    justify-content: space-between;

    @include md {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .footer-link {
    padding: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
