<template>
  <div>
    <div v-if="!showPart">
      <h5 class="room-info-title-border title-border-primary fw-bold fs-5 ps-3 mb-3 mb-lg-4">
        房型基本資訊
      </h5>
      roomDetail: {{ roomDetail }}
      <ul :class="`mb-lg-${mbSpace}`" class="list-unstyled d-flex mb-4">
        <li
          class="info-icon-wrap d-flex flex-column justify-content-center p-3 me-3 bg-light rounded-3 text-gray-80"
        >
          <span class="mb-2">
            <img src="\svg\ic_Size.svg" alt="ic_Size" />
          </span>
          {{ roomDetail?.areaInfo }}
        </li>
        <li
          class="info-icon-wrap d-flex flex-column justify-content-center p-3 me-3 bg-light rounded-3 text-gray-80"
        >
          <span class="mb-2">
            <Icon class="fs-5 fw-blod text-primary" name="ic:round-king-bed" />
          </span>
          {{ roomDetail.bedInfo }}
        </li>
        <li
          class="info-icon-wrap d-flex flex-column justify-content-center p-3 bg-light rounded-3 text-gray-80"
        >
          <span class="mb-2">
            <Icon class="fs-5 fw-blod text-primary" name="ic:round-person" />
          </span>
          {{ roomDetail.maxPeople }} 人
        </li>
      </ul>
    </div>

    <div v-if="!showPart">
      <h5 class="room-info-title-border title-border-primary fw-bold fs-5 ps-3 mb-3 mb-lg-4">
        房間格局
      </h5>
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
    </div>

    <h5 class="room-info-title-border title-border-primary fw-bold fs-5 ps-3 mb-3 mb-lg-4">
      房內設備
    </h5>
    <ul
      :class="[
        `mb-lg-${mbSpace}`,
        { 'row-cols-lg-5': !showPart },
        { 'row-cols-lg-3 border': showPart }
      ]"
      class="list-unstyled row flex-wrap row-cols-2 p-4 bg-light rounded-3 mb-4 mx-0"
    >
      <li
        v-for="facility in roomDetail.facilityInfo"
        :key="facility.title"
        class="col fw-bold text-gray-80"
      >
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        {{ facility.title }}
      </li>
      <!-- <li class="col fw-bold text-gray-80">
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
      </li> -->
    </ul>

    <h5 class="room-info-title-border title-border-primary fw-bold fs-5 ps-3 mb-3 mb-lg-4">
      備品提供
    </h5>
    <ul
      :class="[
        `mb-lg-${mbSpace}`,
        { 'row-cols-lg-5': !showPart },
        { 'row-cols-lg-3 border': showPart }
      ]"
      class="list-unstyled row flex-wrap row-cols-2 p-4 bg-light rounded-3 mb-4 mx-0"
    >
      <li
        v-for="amenity in roomDetail.amenityInfo"
        :key="amenity.title"
        class="col fw-bold text-gray-80"
      >
        <Icon class="fs-5 fw-blod text-primary" name="ic:round-check" />
        {{ amenity.title }}
      </li>
      <!-- <li class="col fw-bold text-gray-80">
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
      </li> -->
    </ul>
  </div>
</template>

<script lang="ts" setup>
interface InfoItem {
  isProvide: Boolean
  title: string
}
interface RoomDetail {
  amenityInfo: Array<InfoItem> // 備品
  facilityInfo: Array<InfoItem> // 房內設備
  areaInfo: string // 坪數
  bedInfo: string // 床型
  maxPeople: number // 人數
}

defineProps<{
  mbSpace?: string
  showPart?: boolean
  roomDetail: RoomDetail
}>()
</script>

<style lang="scss" scoped>
.info-icon-wrap {
  min-width: 97px;
  height: 97px;
}
</style>
