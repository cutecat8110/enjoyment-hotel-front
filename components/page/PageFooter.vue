<template>
  <footer class="page-footer bg-black text-light">
    <div class="container d-flex flex-column">
      <div class="d-flex justify-content-between">
        <div class="social-wrapper d-flex flex-column">
          <NuxtImg src="/img/logo.png" height="72" />
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
            <div>TEL</div>
            <div>+886-7-1234567</div>
          </li>
          <li>
            <div>FAX</div>
            <div>+886-7-1234567</div>
          </li>
          <li>
            <div>MAIL</div>
            <div>elh@hexschool.com</div>
          </li>
          <li>
            <div>WEB</div>
            <div>www.elhhexschool.com.tw</div>
          </li>
        </ul>
      </div>
      <div class="d-flex justify-content-between">
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
  .social-wrapper {
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
    gap: 5rem 2.5rem;

    > li {
      width: calc((100% - 2.5rem) / 2);
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
}
</style>
