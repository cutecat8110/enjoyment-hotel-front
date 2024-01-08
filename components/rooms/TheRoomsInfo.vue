<template>
  <div>
    <h5 class="room-info-title-border fw-bold fs-5 ps-3 mb-3 mb-lg-4">房型基本資訊</h5>
    <ul :class="`mb-lg-${mbSpace}`" class="list-unstyled d-flex mb-4">
      <li
        class="info-icon-wrap d-flex flex-column justify-content-center p-3 me-3 bg-light rounded-3 text-gray-80"
      >
        <span class="mb-2">
          <img src="~\svg\ic_Size.svg" alt="ic_Size" />
        </span>
        24坪
      </li>
      <li
        class="info-icon-wrap d-flex flex-column justify-content-center p-3 me-3 bg-light rounded-3 text-gray-80"
      >
        <span class="mb-2">
          <Icon class="fs-5 fw-blod text-primary" name="ic:round-king-bed" />
        </span>
        1 張大床
      </li>
      <li
        class="info-icon-wrap d-flex flex-column justify-content-center p-3 bg-light rounded-3 text-gray-80"
      >
        <span class="mb-2">
          <Icon class="fs-5 fw-blod text-primary" name="ic:round-person" />
        </span>
        2-4 人
      </li>
    </ul>

    <h5 class="room-info-title-border fw-bold fs-5 ps-3 mb-3 mb-lg-4">房間格局</h5>
    <ul
      :class="`mb-lg-${mbSpace}`"
      class="list-unstyled row row-cols-2 row-cols-lg-5 p-4 bg-light rounded-3 mb-4 mx-0"
    >
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        市景
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        獨立衛浴
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        客廳
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        書房
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        樓層電梯
      </li>
    </ul>

    <h5 class="room-info-title-border fw-bold fs-5 ps-3 mb-3 mb-lg-4">房內設備</h5>
    <ul
      :class="`mb-lg-${mbSpace}`"
      class="list-unstyled row row-cols-2 row-cols-lg-5 flex-wrap p-4 bg-light rounded-3 mb-4 mx-0"
    >
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        平面電視
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        吹風機
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        冰箱
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        熱水壺
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        檯燈
      </li>

      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        衣櫃
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        除濕機
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        浴缸
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        書桌
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        音響
      </li>
    </ul>

    <h5 class="room-info-title-border fw-bold fs-5 ps-3 mb-3 mb-lg-4">備品提供</h5>
    <ul
      :class="`mb-lg-${mbSpace}`"
      class="list-unstyled row row-cols-2 row-cols-lg-5 flex-wrap p-4 bg-light rounded-3 mb-4 mx-0"
    >
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        衛生紙
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        拖鞋
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        沐浴用品
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        清潔用品
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        刮鬍刀
      </li>

      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        吊衣架
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        浴巾
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        浴刷牙用品缸
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        罐裝水
      </li>
      <li class="col fw-bold text-gray-80">
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        梳子
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ mbSpace?: string }>()
</script>

<style lang="scss" scoped>
.info-icon-wrap {
  width: 97px;
  height: 97px;
}
</style>
