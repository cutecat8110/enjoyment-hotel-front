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
      </section>

      <section>
        <h2 class="fs-4">Colors</h2>
        <div class="guideline-container">
          <ul class="guideline-content">
            <li class="colors-wrapper">
              <div>
                <div class="colors-content bg-primary-dark mb-2"></div>
                <div class="label">primary-dark</div>
                <div>#7B6651</div>
              </div>
              <div>
                <div class="colors-content bg-primary mb-2"></div>
                <div class="label">primary</div>
                <div>#BF9D7D</div>
              </div>
              <div>
                <div class="colors-content bg-primary-80 mb-2"></div>
                <div class="label">primary-80</div>
                <div>#AE9984</div>
              </div>
              <div>
                <div class="colors-content bg-primary-60 mb-2"></div>
                <div class="label">primary-60</div>
                <div>#E1D1C2</div>
              </div>
              <div>
                <div class="colors-content bg-primary-40 mb-2"></div>
                <div class="label">primary-40</div>
                <div>#F1EAE4</div>
              </div>
              <div>
                <div class="colors-content bg-primary-tint mb-2"></div>
                <div class="label">primary-tint</div>
                <div>#FAF7F5</div>
              </div>
            </li>
            <li class="colors-wrapper">
              <div>
                <div class="colors-content bg-success-dark mb-2"></div>
                <div class="label">success-dark</div>
                <div>#299F65</div>
              </div>
              <div>
                <div class="colors-content bg-success mb-2"></div>
                <div class="label">success</div>
                <div>#52DD7E</div>
              </div>
              <div>
                <div class="colors-content bg-success-20 mb-2"></div>
                <div class="label">success-20</div>
                <div>#BCFBBD</div>
              </div>
              <div>
                <div class="colors-content bg-success-10 mb-2"></div>
                <div class="label">success-10</div>
                <div>#E8FEE7</div>
              </div>
            </li>
            <li class="colors-wrapper">
              <div>
                <div class="colors-content bg-info-dark mb-2"></div>
                <div class="label">info-dark</div>
                <div>#1D66AC</div>
              </div>
              <div>
                <div class="colors-content bg-info mb-2"></div>
                <div class="label">info</div>
                <div>#3BADEF</div>
              </div>
              <div>
                <div class="colors-content bg-info-20 mb-2"></div>
                <div class="label">info-20</div>
                <div>#B1EFFD</div>
              </div>
              <div>
                <div class="colors-content bg-info-10 mb-2"></div>
                <div class="label">info-10</div>
                <div>#E6FBFE</div>
              </div>
            </li>
            <li class="colors-wrapper">
              <div>
                <div class="colors-content bg-danger-dark mb-2"></div>
                <div class="label">danger-dark</div>
                <div>#C22538</div>
              </div>
              <div>
                <div class="colors-content bg-danger mb-2"></div>
                <div class="label">danger</div>
                <div>#DA3E51</div>
              </div>
              <div>
                <div class="colors-content bg-danger-20 mb-2"></div>
                <div class="label">danger-20</div>
                <div>#F5CCD1</div>
              </div>
              <div>
                <div class="colors-content bg-danger-10 mb-2"></div>
                <div class="label">danger-10</div>
                <div>#FDECEF</div>
              </div>
            </li>
            <li class="colors-wrapper">
              <div>
                <div class="colors-content bg-gray-80 mb-2"></div>
                <div class="label">gray-80</div>
                <div>#4B4B4B</div>
              </div>
              <div>
                <div class="colors-content bg-gray-60 mb-2"></div>
                <div class="label">gray-60</div>
                <div>#909090</div>
              </div>
              <div>
                <div class="colors-content bg-gray-40 mb-2"></div>
                <div class="label">gray-40</div>
                <div>#ECECEC</div>
              </div>
              <div>
                <div class="colors-content bg-gray-10 mb-2"></div>
                <div class="label">gray-10</div>
                <div>#F9F9F9</div>
              </div>
            </li>
            <li class="colors-wrapper">
              <div>
                <div class="colors-content bg-background mb-2"></div>
                <div class="label">background</div>
                <div>#140F0A</div>
              </div>
              <div>
                <div class="colors-content bg-dark mb-2"></div>
                <div class="label">dark</div>
                <div>#000000</div>
              </div>
              <div>
                <div class="colors-content bg-light mb-2"></div>
                <div class="label">light</div>
                <div>#FFFFFF</div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 class="fs-4">Buttons</h2>
        <div class="guideline-container overflow-x">
          <table class="table table-bordered buttons-wrapper">
            <thead>
              <tr>
                <th scope="col"></th>
                <th class="label" scope="col">Initial</th>
                <th class="label" scope="col">Disabled</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="label" scope="row">Primary</td>
                <td>
                  <button class="btn btn-primary mb-2">Button</button>
                  <div>"btn btn-primary"</div>
                </td>
                <td>
                  <button class="btn btn-primary disabled mb-2">Button</button>
                  <div>"btn btn-primary disabled"</div>
                </td>
              </tr>
              <tr>
                <td class="label" scope="row">Secondary</td>
                <td>
                  <button class="btn btn-outline-primary mb-2">Button</button>
                  <div>"btn btn-outline-primary"</div>
                </td>
                <td>
                  <button class="btn btn-outline-primary disabled mb-2">Button</button>
                  <div>"btn btn-outline-primary disabled"</div>
                </td>
              </tr>
              <tr>
                <td class="label" scope="row">Ghost</td>
                <td>
                  <button class="btn btn-ghost mb-2">Button</button>
                  <div>"btn btn-ghost"</div>
                </td>
                <td>
                  <button class="btn btn-ghost disabled mb-2">Button</button>
                  <div>"btn btn-ghost disabled"</div>
                </td>
              </tr>
              <tr>
                <td class="label" scope="row">Text</td>
                <td>
                  <button class="btn btn-text mb-2">Button</button>
                  <div>"btn btn-text"</div>
                </td>
                <td>
                  <button class="btn btn-text disabled mb-2">Button</button>
                  <div>"btn btn-text disabled"</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 class="fs-4">Input Field</h2>
        <div class="guideline-container">
          <ul class="guideline-content flex-row flex-wrap">
            <li>
              <div class="label fs-5 mb-2">Base</div>
              <label class="form-label Base d-flex justify-content-between" for="name">
                姓名
                <span class="text-primary fw-bold ms-auto">必填</span>
              </label>
              <input id="name" class="form-control" type="text" placeholder="請輸入姓名" />
            </li>
            <li>
              <div class="label fs-5 mb-2">Error</div>
              <label class="form-label d-flex ustify-content-between" for="password">密碼</label>
              <input
                id="name"
                class="form-control verify-error"
                type="password"
                value="password"
                placeholder="請輸入密碼"
              />
              <div class="text-danger fs-8 fw-bold mt-2">錯誤提示訊息</div>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 class="fs-4">Dropdown</h2>
        <div class="guideline-container">
          <ul class="guideline-content flex-row flex-wrap">
            <li>
              <div class="label fs-5 mb-2">Base</div>
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
                    <label class="form-label text-dark" for="exampleDropdownFormEmail2">
                      Email
                    </label>
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
              <div class="label fs-5 mb-2">Disabled</div>
              <div class="dropdown">
                <button
                  class="btn btn-dropdown dropdown-toggle w-100 disabled"
                  type="button"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                  data-bs-toggle="dropdown"
                >
                  Dropdown
                </button>
                <form class="dropdown-menu">
                  <div class="mb-3">
                    <input id="inpuy" class="form-control" type="email" placeholder="email" />
                  </div>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 class="fs-4">Section Tab</h2>
        <div class="guideline-container">
          <ul class="guideline-content flex-row flex-wrap">
            <li>
              <ul class="nav list-unstyled d-flex">
                <li class="nav-item">
                  <a class="nav-link active" href="#" aria-current="page">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Section Tab</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 class="fs-4">Checkbox</h2>
        <div class="guideline-container">
          <ul class="guideline-content flex-row flex-wrap">
            <li>
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
      </section>

      <section>
        <h2 class="fs-4">Material Icons</h2>
        <div class="guideline-container">
          <ul class="guideline-content text-light">
            <li class="icons-wrapper flex-wrap">
              <Icon class="fs-5 fw-blod" name="ic:round-check" />
              <Icon class="fs-3 fw-blod" name="ic:round-keyboard-arrow-left" />
              <Icon class="fs-3 fw-blod" name="ic:round-keyboard-arrow-down" />
              <Icon class="fs-3 fw-blod" name="ic:round-keyboard-arrow-up" />
              <Icon class="fs-3 fw-blod" name="ic:round-keyboard-arrow-right" />
              <Icon class="fs-5 fw-blod" name="ic:round-person" />
              <Icon class="fs-5 fw-blod" name="ic:round-arrow-back" />
              <Icon class="fs-5 fw-blod" name="ic:round-close" />
              <Icon class="fs-5 fw-blod" name="ic:round-arrow-forward" />
              <Icon class="fs-5 fw-blod" name="ic:round-menu" />
              <Icon class="fs-5 fw-blod" name="ic:round-king-bed" />
              <Icon class="fs-5 fw-blod" name="ic:round-directions-car-filled" />
              <Icon class="fs-5 fw-blod" name="ic:round-train" />
            </li>
            <li class="icons-wrapper flex-wrap">
              <div class="bg-light p-1 rounded-1">
                <img src="\svg\ic_luxurycar.svg" alt="ic_luxurycar" />
              </div>
              <div class="bg-light p-1 rounded-1">
                <img src="\svg\bi_line.svg" alt="bi_line" />
              </div>
              <div class="bg-light p-1 rounded-1">
                <img src="\svg\ic_Size.svg" alt="ic_Size" />
              </div>
              <div class="bg-light p-1 rounded-1">
                <img src="\svg\ic_Profile.svg" alt="ic_Profile" />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'none'
})
</script>
