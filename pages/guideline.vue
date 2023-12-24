<template>
  <div class="p-4">
    <h2 class="text-primary-dark fw-bold">Font</h2>
    <h5 class="text-info-dark fw-bold">大小</h5>
    <ul class="list-unstyled row flex-wrap mb-4">
      <li class="col-4 border border-dark">
        <div class="fs-lg">"fs-lg" 100px</div>
      </li>
      <li class="col-4 border border-dark">
        <h1>"h1"/"fs-1" 48px</h1>
      </li>
      <li class="col-4 border border-dark">
        <h2>"h2"/"fs-2" 40px</h2>
      </li>
      <li class="col-4 border border-dark">
        <h3>"h3"/"fs-3" 32px</h3>
      </li>
      <li class="col-4 border border-dark">
        <h4>"h4"/"fs-4" 28px</h4>
      </li>
      <li class="col-4 border border-dark">
        <h5>"h5"/"fs-5" 24px</h5>
      </li>
      <li class="col-4 border border-dark">
        <h6>"h6"/"fs-6" 20px</h6>
      </li>
      <li class="col-4 border border-dark">
        <div class="fs-7">Base/"fs-7 "16px</div>
      </li>
      <li class="col-4 border border-dark">
        <div class="fs-8">"fs-8" 14px</div>
      </li>
      <li class="col-4 border border-dark">
        <small>small 12px</small>
      </li>
    </ul>
    <h5 class="text-info-dark fw-bold">粗細</h5>
    <ul class="list-unstyled row flex-wrap mb-4">
      <li class="col-2 border border-dark">
        <div>Base 400</div>
      </li>
      <li class="col-2 border border-dark">
        <div class="fw-medium">"fw-medium" 500</div>
      </li>
      <li class="col-2 border border-dark">
        <div class="fw-bold">"fw-bold" 700</div>
      </li>
    </ul>

    <div class="row mb-4">
      <h5 class="text-info-dark fw-bold">行高</h5>
      <ul class="row list-unstyled row flex-wrap">
        <li class="col-2 border border-dark">
          <p>Base 150%</p>
        </li>
        <li class="col-2 border border-dark">
          <p class="lh-lg">"lh-lg" 在大標題上使用 120%</p>
        </li>
      </ul>
    </div>

    <div class="border-bottom border-dark pb-5 mb-4">
      <h5 class="text-info-dark fw-bold">字母間距</h5>
      <ul class="row list-unstyled row flex-wrap">
        <li class="col-2 border border-dark">
          <p>Base 2%</p>
        </li>
        <li class="col-2 border border-dark">
          <p class="ls-1">"ls-1" 在標題上使用 5%</p>
        </li>
      </ul>
    </div>

    <h2 class="text-primary-dark fw-bold">Color</h2>
    <ul class="list-unstyled flex-wrap border-bottom border-dark pb-5 mb-4">
      <li class="d-flex flex-wrap border border-dark mb-1">
        <div class="col-2">
          <div class="p-2 bg-primary-dark text-light">Primary-dark</div>
        </div>
        <div class="col-2"><div class="p-2 bg-primary">Primary</div></div>
        <div class="col-2"><div class="p-2 bg-primary-80">Primary-80</div></div>
        <div class="col-2"><div class="p-2 bg-primary-60">Primary-60</div></div>
        <div class="col-2"><div class="p-2 bg-primary-tint">Primary-tint</div></div>
        <div class="col-2"><div class="p-2 bg-primary-40">Primary-40</div></div>
      </li>

      <li class="d-flex flex-wrap border border-dark mb-1">
        <div class="col-4"><div class="p-2 bg-success-dark text-light">Success-dark</div></div>
        <div class="col-4"><div class="p-2 bg-success">Success</div></div>
        <div class="col-4"><div class="p-2 bg-success-20">Success-20</div></div>
        <div class="col-4"><div class="p-2 bg-success-10">Success-10</div></div>
      </li>

      <li class="d-flex flex-wrap border border-dark mb-1">
        <div class="col-4"><div class="p-2 bg-info-dark text-light">Info-dark</div></div>
        <div class="col-4"><div class="p-2 bg-info">Info</div></div>
        <div class="col-4"><div class="p-2 bg-info-20">Info-20</div></div>
        <div class="col-4"><div class="p-2 bg-info-10">Info-10</div></div>
      </li>

      <li class="d-flex flex-wrap border border-dark mb-1">
        <div class="col-4"><div class="p-2 bg-danger-dark text-light">Danger-dark</div></div>
        <div class="col-4"><div class="p-2 bg-danger">Danger</div></div>
        <div class="col-4"><div class="p-2 bg-danger-20">Danger-20</div></div>
        <div class="col-4"><div class="p-2 bg-danger-10">Danger-10</div></div>
      </li>

      <li class="d-flex flex-wrap border border-dark mb-1">
        <div class="col-4"><div class="p-2 bg-gray-80 text-light">Gray-80</div></div>
        <div class="col-4"><div class="p-2 bg-gray-60">Gray-60</div></div>
        <div class="col-4"><div class="p-2 bg-gray-40">Gray-40</div></div>
        <div class="col-4"><div class="p-2 bg-gray-10">Gray-10</div></div>
      </li>

      <li class="d-flex flex-wrap border border-dark">
        <div class="col-4"><div class="p-2 bg-dark text-light">Dark</div></div>
        <div class="col-4"><div class="p-2 bg-light border-end">Light</div></div>
      </li>
    </ul>

    <h2 class="text-primary-dark fw-bold">Button</h2>
    <div class="border-bottom border-dark pb-5">
      <ul class="list-unstyled d-flex flex-wrap mb-2">
        <li class="">
          <button class="btn btn-primary me-2">Primary icon</button>
        </li>
        <li class="">
          <button class="btn btn-primary disabled">Primary disabled</button>
        </li>
      </ul>
      <ul class="list-unstyled d-flex flex-wrap mb-2">
        <li class="">
          <button class="btn btn-outline-primary me-2">Secondary icon</button>
        </li>
        <li class="">
          <button class="btn btn-outline-primary disabled">Secondary icon</button>
        </li>
      </ul>
      <ul class="list-unstyled d-flex flex-wrap mb-2">
        <li class="">
          <button class="btn btn-ghost">Ghost</button>
        </li>
        <li class="">
          <button class="btn btn-ghost disabled">Ghost disabled</button>
        </li>
      </ul>
      <ul class="list-unstyled d-flex flex-wrap">
        <li class="">
          <button class="btn btn-text">Text</button>
        </li>
        <li class="">
          <button class="btn btn-text disabled">Text disabled</button>
        </li>
      </ul>
    </div>

    <h2 class="text-primary-dark fw-bold">Input Field</h2>
    <ul class="list-unstyled d-flex flex-wrap border-bottom border-dark pb-5 mb-4">
      <li class="me-3">
        <label class="form-label d-flex justify-content-between" for="default">
          預設
          <span class="text-primary fw-bold ms-auto">必填</span>
        </label>
        <input id="text" class="form-control" type="default" placeholder="請輸入" />
      </li>
      <li>
        <label class="form-label d-flex ustify-content-between" for="name">錯誤</label>
        <input
          id="name"
          class="form-control verify-error"
          type="name"
          value="名稱"
          placeholder="error"
        />
        <div class="text-danger fs-8 fw-bold mt-2">錯誤提示訊息</div>
      </li>
    </ul>

    <h2 class="text-primary-dark fw-bold">Dropdown</h2>
    <ul class="list-unstyled d-flex flex-wrap border-bottom border-dark pb-5 mb-4">
      <li class="me-3">
        <div class="dropdown">
          <button
            class="btn btn-dropdown dropdown-toggle"
            type="button"
            aria-expanded="false"
            data-bs-auto-close="outside"
            data-bs-toggle="dropdown"
          >
            Dropdown
          </button>
          <form class="dropdown-menu">
            <div class="mb-3">
              <label class="form-label text-dark" for="exampleDropdownFormEmail2">Email</label>
              <input
                id="exampleDropdownFormEmail2"
                class="form-control"
                type="email"
                placeholder="email@example.com"
              />
            </div>
            <button class="btn btn-primary" type="submit">Sign in</button>
          </form>
        </div>
      </li>
      <li>
        <div class="dropdown w-100">
          <button
            class="btn btn-dropdown dropdown-toggle w-100 disabled"
            type="button"
            aria-expanded="false"
            data-bs-auto-close="outside"
            data-bs-toggle="dropdown"
          >
            Dropdown disabled
          </button>
          <form class="dropdown-menu">
            <div class="mb-3">
              <input id="inpuy" class="form-control" type="email" placeholder="email" />
            </div>
          </form>
        </div>
      </li>
    </ul>

    <h2 class="text-primary-dark fw-bold">Section Tab</h2>
    <ul class="nav list-unstyled d-flex flex-wrap border-bottom border-dark pb-5 mb-4">
      <li class="nav-item">
        <a class="nav-link active" href="#" aria-current="page">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Section Tab</a>
      </li>
    </ul>

    <h2 class="text-primary-dark fw-bold">Checkbox</h2>
    <ul class="list-unstyled d-flex flex-wrap border-bottom border-dark pb-5 mb-4">
      <li class="me-3">
        <label class="form-check-label" for="flexCheckChecked-1">
          <input id="flexCheckChecked-1" class="form-check-input" type="checkbox" value="" />
          Unchecked
        </label>
      </li>
      <li>
        <label class="form-check-label" for="flexCheckChecked-2">
          <input
            id="flexCheckChecked-2"
            class="form-check-input"
            type="checkbox"
            value=""
            checked
          />
          Checked
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'none'
})
</script>
