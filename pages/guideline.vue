<template>
  <div class="p-4 bg-dark">
    <h2 class="text-primary mb-3 fw-bold">Font</h2>
    <h5 class="text-info-dark fw-bold">大小</h5>
    <ul class="list-unstyled row flex-wrap mb-4 text-light">
      <li class="col-3 border border-light">
        <div class="fs-md-6 fs-lg-2 p-3">fs-responsive</div>
      </li>
      <li class="col-3 border border-light">
        <div class="fs-lg p-3">"fs-lg" 100px</div>
      </li>
      <li class="col-3 border border-light">
        <h1 class="p-3">"h1"/"fs-1" 48px</h1>
      </li>
      <li class="col-3 border border-light">
        <h2 class="p-3">"h2"/"fs-2" 40px</h2>
      </li>
      <li class="col-3 border border-light">
        <h3 class="p-3">"h3"/"fs-3" 32px</h3>
      </li>
      <li class="col-3 border border-light">
        <h4 class="p-3">"h4"/"fs-4" 28px</h4>
      </li>
      <li class="col-3 border border-light">
        <h5 class="p-3">"h5"/"fs-5" 24px</h5>
      </li>
      <li class="col-3 border border-light">
        <h6 class="p-3">"h6"/"fs-6" 20px</h6>
      </li>
      <li class="col-3 border border-light">
        <div class="fs-7 p-3">Base/"fs-7 "16px</div>
      </li>
      <li class="col-3 border border-light">
        <div class="fs-8 p-3">"fs-8" 14px</div>
      </li>
      <li class="col-3 border border-light">
        <div class="p-3">
          <small>small 12px</small>
        </div>
      </li>
    </ul>

    <h5 class="text-info-dark fw-bold">粗細</h5>
    <ul class="list-unstyled row flex-wrap mb-4 text-light">
      <li class="col-2 border border-light">
        <div class="p-3">Base 400</div>
      </li>
      <li class="col-2 border border-light">
        <div class="fw-medium p-3">"fw-medium" 500</div>
      </li>
      <li class="col-2 border border-light">
        <div class="fw-bold p-3">"fw-bold" 700</div>
      </li>
    </ul>

    <div class="row mb-4">
      <h5 class="text-info-dark fw-bold">行高</h5>
      <ul class="row list-unstyled row flex-wrap text-light">
        <li class="col-2 border border-light">
          <p class="p-3">Base 150%</p>
        </li>
        <li class="col-2 border border-light">
          <p class="lh-lg p-3">"lh-lg" 在大標題上使用 120%</p>
        </li>
      </ul>
    </div>

    <div class="border-bottom border-light pb-5 mb-4">
      <h5 class="text-info-dark fw-bold">字母間距</h5>
      <ul class="row list-unstyled row flex-wrap text-light">
        <li class="col-2 border border-light">
          <p class="p-3">Base 2%</p>
        </li>
        <li class="col-2 border border-light">
          <p class="ls-1 p-3">"ls-1" 在標題上使用 5%</p>
        </li>
      </ul>
    </div>

    <h2 class="text-primary mb-3 fw-bold">Color</h2>
    <ul class="list-unstyled flex-wrap border-bottom border-light pb-5 mb-4">
      <li class="d-flex flex-wrap mb-3">
        <div class="col-2">
          <div class="p-2 bg-primary-dark text-light">Primary-dark</div>
        </div>
        <div class="col-2"><div class="p-2 bg-primary">Primary</div></div>
        <div class="col-2"><div class="p-2 bg-primary-80">Primary-80</div></div>
        <div class="col-2"><div class="p-2 bg-primary-60">Primary-60</div></div>
        <div class="col-2"><div class="p-2 bg-primary-tint">Primary-tint</div></div>
        <div class="col-2"><div class="p-2 bg-primary-40">Primary-40</div></div>
      </li>

      <li class="d-flex flex-wrap mb-3">
        <div class="col-2"><div class="p-2 bg-success-dark text-light">Success-dark</div></div>
        <div class="col-2"><div class="p-2 bg-success">Success</div></div>
        <div class="col-2"><div class="p-2 bg-success-20">Success-20</div></div>
        <div class="col-2"><div class="p-2 bg-success-10">Success-10</div></div>
      </li>

      <li class="d-flex flex-wrap mb-3">
        <div class="col-2"><div class="p-2 bg-info-dark text-light">Info-dark</div></div>
        <div class="col-2"><div class="p-2 bg-info">Info</div></div>
        <div class="col-2"><div class="p-2 bg-info-20">Info-20</div></div>
        <div class="col-2"><div class="p-2 bg-info-10">Info-10</div></div>
      </li>

      <li class="d-flex flex-wrap mb-3">
        <div class="col-2"><div class="p-2 bg-danger-dark text-light">Danger-dark</div></div>
        <div class="col-2"><div class="p-2 bg-danger">Danger</div></div>
        <div class="col-2"><div class="p-2 bg-danger-20">Danger-20</div></div>
        <div class="col-2"><div class="p-2 bg-danger-10">Danger-10</div></div>
      </li>

      <li class="d-flex flex-wrap mb-3">
        <div class="col-2"><div class="p-2 bg-gray-80 text-light">Gray-80</div></div>
        <div class="col-2"><div class="p-2 bg-gray-60">Gray-60</div></div>
        <div class="col-2"><div class="p-2 bg-gray-40">Gray-40</div></div>
        <div class="col-2"><div class="p-2 bg-gray-10">Gray-10</div></div>
      </li>

      <li class="d-flex flex-wrap">
        <div class="col-2">
          <div class="p-2 bg-background text-light border border-light">Background</div>
        </div>
        <div class="col-2"><div class="p-2 bg-dark text-light border border-light">Dark</div></div>
        <div class="col-2"><div class="p-2 bg-light border-end">Light</div></div>
      </li>
    </ul>

    <h2 class="text-primary mb-3 fw-bold">Button</h2>
    <div class="border-bottom border-light pb-5 mb-4">
      <ul class="list-unstyled d-flex flex-wrap mb-2">
        <li class="col-2 border border-light py-2 border-end-0">
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary me-2">Primary icon</button>
          </div>
        </li>
        <li class="col-2 border border-light py-2 border-start-0">
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary disabled">Primary disabled</button>
          </div>
        </li>
        <li class="col-2 border border-light py-2 border-end-0">
          <div class="d-flex justify-content-center border-end-0">
            <button class="btn btn-outline-primary me-2 ms-auto me-auto">Secondary icon</button>
          </div>
        </li>
        <li class="col-2 border border-light py-2 border-start-0">
          <div class="d-flex justify-content-center">
            <button class="btn btn-outline-primary disabled">Secondary icon</button>
          </div>
        </li>
      </ul>
      <ul class="list-unstyled d-flex flex-wrap mb-2">
        <li class="col-2 border border-light border-end-0">
          <div class="d-flex justify-content-center">
            <button class="btn btn-ghost">Ghost</button>
          </div>
        </li>
        <li class="col-2 border border-light border-start-0">
          <div class="d-flex justify-content-center">
            <button class="btn btn-ghost disabled">Ghost disabled</button>
          </div>
        </li>
        <li class="col-2 border border-light border-end-0">
          <div class="d-flex justify-content-center align-items-center h-100">
            <button class="btn btn-text">Text</button>
          </div>
        </li>
        <li class="col-2 border border-light border-start-0">
          <div class="d-flex justify-content-center align-items-center h-100">
            <button class="btn btn-text disabled">Text disabled</button>
          </div>
        </li>
      </ul>
    </div>

    <h2 class="text-primary mb-3 fw-bold">Input Field</h2>
    <ul class="list-unstyled d-flex flex-wrap border-bottom border-light pb-5 mb-4">
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

    <h2 class="text-primary mb-3 fw-bold">Dropdown</h2>
    <ul class="list-unstyled d-flex flex-wrap border-bottom border-light pb-5 mb-4">
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

    <h2 class="text-primary mb-3 fw-bold">Section Tab</h2>
    <ul class="nav list-unstyled d-flex flex-wrap border-bottom border-light pb-5 mb-4">
      <li class="nav-item">
        <a class="nav-link active" href="#" aria-current="page">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Section Tab</a>
      </li>
    </ul>

    <h2 class="text-primary mb-3 fw-bold">Checkbox</h2>
    <ul class="list-unstyled d-flex flex-wrap border-bottom border-light pb-5 mb-4 text-light">
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

    <h2 class="text-primary mb-3 fw-bold">Material Icons</h2>
    <div class="border-bottom border-light pb-5 mb-4 text-light">
      <div>
        <span class="material-icons me-2">done</span>
        <span class="material-icons me-2">chevron_left</span>
        <span class="material-icons me-2">expand_less</span>
        <span class="material-icons me-2">expand_more</span>
        <span class="material-icons me-2">navigate_next</span>
        <span class="material-icons me-2">person</span>
        <span class="material-icons me-2">arrow_back</span>
        <span class="material-icons me-2">close</span>
        <span class="material-icons me-2">arrow_forward</span>
        <span class="material-symbols-rounded me-2">menu</span>
        <span class="material-icons me-2">king_bed</span>
      </div>
      <div class="d-flex">
        <span class="d-flex bg-light">
          <img src="~\svg\ic_car.svg" alt="ic_car" />
        </span>
        <span class="d-flex bg-light">
          <img src="~\svg\ic_train.svg" alt="ic_train" />
        </span>
        <span class="d-flex bg-light">
          <img src="~\svg\ic_luxurycar.svg" alt="ic_luxurycar" />
        </span>
        <span class="d-flex bg-light">
          <img src="~\svg\bi_line.svg" alt="bi_line" />
        </span>
        <span class="d-flex bg-light">
          <img src="~\svg\ic_Size.svg" alt="ic_Size" />
        </span>
        <span class="d-flex bg-light">
          <img src="~\svg\ic_Profile.svg" alt="ic_Profile" />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'none'
})
</script>
