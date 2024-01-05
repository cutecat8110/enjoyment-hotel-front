<template>
  <div class="p-0 px-md-xl bg-primary-tint">
    <div class="border mb-3">
      <div class="row">
        <div class="col-6">圖1</div>
        <div class="col-6">圖2-4+看更多</div>
      </div>
    </div>
    <div class="container-xl">
      <div class="row">
        <div class="col-md-7">
          <h2 class="text-primary h1 fw-bold mb-3">尊爵雙人房</h2>
          <p class="text-gray-80 mb-xl">
            享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
          </p>

          <TheRoomsInfo mb-space="xl" />
        </div>

        <div class="col-md-5 mb-4 mb-lg-0">
          <div class="bg-light rounded-4 p-5">
            <h4 class="s-5 fw-bold pb-3 border-bottom mb-5">預訂房型</h4>

            <h3 class="fs-2 text-gray-80 fw-bold mb-2">尊爵雙人房</h3>
            <p class="text-gray-80 mb-5">
              享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
            </p>
            <span class="d-block text-primary fs-5 fw-bold mb-5">NT$ 10,000</span>
            <NuxtLink to="/reserve">
              <span class="btn btn-primary w-100">立即預訂</span>
            </NuxtLink>
          </div>
        </div>

        <div class="col-12">
          <h5 class="room-info-title-border fw-bold fs-5 ps-3 mb-4">訂房須知</h5>
          <ol class="mb-lg-xl pb-4 text-gray-80">
            <li>入住時間為下午3點，退房時間為上午12點。</li>
            <li>如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。</li>
            <li>請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。</li>
            <li>若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。</li>
            <li>請愛惜我們的房間與公共空間，並保持整潔。</li>
            <li>如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。</li>
            <li>我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。</li>
            <li>請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。</li>
            <li>我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。</li>
            <li>為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheRoomsInfo from '@/components/rooms/TheRoomsInfo.vue'

definePageMeta({
  layout: 'page-info'
})
</script>

<style lang="scss" scoped></style>
