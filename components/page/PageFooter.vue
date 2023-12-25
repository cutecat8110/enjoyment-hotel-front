<template>
  <footer class="page-footer bg-background text-light">
    <div class="container d-flex flex-column">
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
        <div>806023 台灣高雄市新興區六角路123號</div>
        <div>© 享樂酒店 2023 All Rights Reserved.</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.page-footer {
  padding-top: 5rem;
  padding-bottom: 7.5rem;
  .container {
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
    width: 2.5rem;
    height: 2.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    &:last-child {
      margin-left: 1rem;
    }
    svg {
      font-size: 24px;
    }
  }

  .info-list {
    display: grid;
    grid-template-columns: auto auto;
    list-style: none;
    gap: 2.5rem 5rem;

    @include md {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    > li {
      width: calc((100% - 2.5rem) / 2);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &:nth-child(2) {
        order: 2;
      }
      &:nth-child(3) {
        order: 1;
      }
      &:nth-child(4) {
        order: 3;
      }

      @include md {
        order: 0;
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
}
</style>
