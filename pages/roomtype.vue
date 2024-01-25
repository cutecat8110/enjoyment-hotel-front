<template>
  <div>
    <!-- 輪播 -->
    <article>
      <div
        id="carouselExampleIndicators"
        class="carousel slide position-relative banner-img-mask"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            class="active"
            type="button"
            aria-current="true"
            aria-label="Slide 1"
            data-bs-slide-to="0"
            data-bs-target="#carouselExampleIndicators"
          ></button>
          <button
            type="button"
            aria-label="Slide 2"
            data-bs-slide-to="1"
            data-bs-target="#carouselExampleIndicators"
          ></button>
          <button
            type="button"
            aria-label="Slide 3"
            data-bs-slide-to="2"
            data-bs-target="#carouselExampleIndicators"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="banner-img d-block w-100"></div>
          </div>
        </div>

        <div class="banner-content position-absolute d-lg-flex justify-content-lg-between">
          <div>
            <p class="fs-4 fs-md-2 fw-bold text-primary">享樂酒店</p>
            <p class="fs-7 fs-md-5 fw-bold text-primary">Enjoyment Luxury Hotel</p>
            <div class="line"></div>
          </div>

          <div>
            <p class="right-content fs-3 fs-md-1 fw-bold text-light">客房旅宿</p>
          </div>
        </div>
      </div>
    </article>

    <!--  -->
    <article class="bg-color">
      <div class="container">
        <div class="row">
          <div class="fs-6 fs-md-8 fw-bold col-12 room-choose">房型選擇</div>
          <div class="fs-1 fs-md-3 fw-bold text-primary col-12">各種房型，任您挑選</div>
        </div>
        <!-- test star-->
        <div class="row" v-for="(room, index) in roomsTmpl" :key="index">
          <div class="col-12">
            <div class="card mb-3 mb-md-4 card-outer">
              <div class="row g-0" >
                <div class="col-12 col-lg-7">
                  <div id="demo" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button
                        v-for="(list, i) in room.imageUrlList"
                        :key="`${i}_${list}`"
                        :class="`${i === 0 ? 'active' : ''}`"
                        type="button"
                        :aria-current="`${i === 0}`"
                        :aria-label="`Slide${i + 1}`"
                        :data-bs-slide-to="`${i}`"
                        data-bs-target="#demo"
                      >
                      </button>
                      <!-- <button
                        type="button"
                        aria-label="Slide 2"
                        :data-bs-slide-to="1"
                        :data-bs-target="`${room.name}`"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 3"
                        data-bs-slide-to="2"
                        :data-bs-target="'room.name'"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 4"
                        data-bs-slide-to="3"
                        :data-bs-target="'room.name'"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 5"
                        data-bs-slide-to="4"
                        :data-bs-target="'room.name'"
                      ></button> -->
                    </div>
                    <div class="carousel-inner" >
                      <div class="carousel-item ratio ratio-16x9" v-for="(list, i) in room.imageUrlList" :key="i" :class="i === 0 ? 'active': ''">
                        <img :src="`${list}`" alt="">
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-slide="prev"
                      data-bs-target="#demo"
                    >
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-slide="next"
                      data-bs-target="#demo"
                    >
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div class="col-12 col-lg-5">
                  <div class="card-body room-content">
                    <p class="fs-2 fs-md-3 mb-md-2">{{ room.name }}</p>
                    <p class="fs-7 fs-md-8">{{  room.description }}</p>

                    <div class="room-set d-flex">
                      <div class="room-set-detail">
                        <div class="icon-space"></div>
                        <p class="fs-8 fs-md-7">{{ room.areaInfo }}</p>
                      </div>
                      <div class="room-set-detail">
                        <Icon class="icon-bed" name="ic:round-king-bed" />
                        <p class="fs-8 fs-md-7">{{ room.bedInfo }}</p>
                      </div>
                      <div class="room-set-detail">
                        <Icon class="icon-people" name="ic:round-person" />
                        <p class="fs-8 fs-md-7">2-4 人</p>
                      </div>
                    </div>

                    <dir class="room-line"></dir>
                    <div class="room-price d-flex justify-content-between align-items-center">
                      <p>NT$ {{ room.price }}</p>
                      <Icon class="icon-forward" name="ic:round-arrow-forward" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- test end -->

        <!-- 尊爵 -->
        <!-- <div class="row">
          <div class="col-12">
            <div class="card mb-3 mb-md-4 card-outer">
              <div class="row g-0">
                <div class="col-12 col-lg-7">
                  <div id="carouselLord" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button
                        class="active"
                        type="button"
                        aria-current="true"
                        aria-label="Slide 1"
                        data-bs-slide-to="0"
                        data-bs-target="#carouselLord"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 2"
                        data-bs-slide-to="1"
                        data-bs-target="#carouselLord"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 3"
                        data-bs-slide-to="2"
                        data-bs-target="#carouselLord"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 4"
                        data-bs-slide-to="3"
                        data-bs-target="#carouselLord"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 5"
                        data-bs-slide-to="4"
                        data-bs-target="#carouselLord"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="lord-img-one"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="lord-img-two"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="lord-img-three"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="lord-img-four"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="lord-img-five"></div>
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-slide="prev"
                      data-bs-target="#carouselLord"
                    >
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-slide="next"
                      data-bs-target="#carouselLord"
                    >
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div class="col-12 col-lg-5">
                  <div class="card-body room-content">
                    <p class="fs-2 fs-md-3 mb-md-2">尊爵雙人房</p>
                    <p class="fs-7 fs-md-8">
                      享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                    </p>

                    <div class="room-set d-flex">
                      <div class="room-set-detail">
                        <div class="icon-space"></div>
                        <p class="fs-8 fs-md-7">24 坪</p>
                      </div>
                      <div class="room-set-detail">
                        <Icon class="icon-bed" name="ic:round-king-bed" />
                        <p class="fs-8 fs-md-7">1 張大床</p>
                      </div>
                      <div class="room-set-detail">
                        <Icon class="icon-people" name="ic:round-person" />
                        <p class="fs-8 fs-md-7">2-4 人</p>
                      </div>
                    </div>

                    <dir class="room-line"></dir>
                    <div class="room-price d-flex justify-content-between align-items-center">
                      <p>NT$ 10,000</p>
                      <Icon class="icon-forward" name="ic:round-arrow-forward" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <!-- 景觀 -->
        <!-- <div class="row">
          <div class="col-12">
            <div class="card mb-3 mb-md-4 card-outer">
              <div class="row g-0">
                <div class="col-12 col-lg-7">
                  <div id="carouselLandscape" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button
                        class="active"
                        type="button"
                        aria-current="true"
                        aria-label="Slide 1"
                        data-bs-slide-to="0"
                        data-bs-target="#carouselLandscape"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 2"
                        data-bs-slide-to="1"
                        data-bs-target="#carouselLandscape"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 3"
                        data-bs-slide-to="2"
                        data-bs-target="#carouselLandscape"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 4"
                        data-bs-slide-to="3"
                        data-bs-target="#carouselLandscape"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 5"
                        data-bs-slide-to="4"
                        data-bs-target="#carouselLandscape"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="landscape-img-one"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="landscape-img-two"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="landscape-img-three"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="landscape-img-four"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="landscape-img-five"></div>
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-slide="prev"
                      data-bs-target="#carouselLandscape"
                    >
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-slide="next"
                      data-bs-target="#carouselLandscape"
                    >
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div class="col-12 col-lg-5">
                  <div class="card-body room-content">
                    <p class="fs-2 fs-md-3 mb-md-2">景觀雙人房</p>
                    <p class="fs-7 fs-md-8">
                      景觀雙人房擁有絕美的高雄市景觀，讓您在舒適的環境中欣賞城市之美。
                    </p>

                    <div class="room-set d-flex">
                      <div class="room-set-detail">
                        <div class="icon-space"></div>
                        <p class="fs-8 fs-md-7">28 坪</p>
                      </div>
                      <div class="room-set-detail">
                        <Icon class="icon-bed" name="ic:round-king-bed" />
                        <p class="fs-8 fs-md-7">1 張大床</p>
                      </div>
                      <div class="room-set-detail">
                        <Icon class="icon-people" name="ic:round-person" />
                        <p class="fs-8 fs-md-7">2-4 人</p>
                      </div>
                    </div>

                    <dir class="room-line"></dir>
                    <div class="room-price d-flex justify-content-between align-items-center">
                      <p>NT$ 10,000</p>
                      <Icon class="icon-forward" name="ic:round-arrow-forward" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <!-- 豪華 -->
        <!-- <div class="row">
          <div class="col-12">
            <div class="card mb-3 mb-md-4 card-outer">
              <div class="row g-0">
                <div class="col-12 col-lg-7">
                  <div id="carouselLuxury" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button
                        class="active"
                        type="button"
                        aria-current="true"
                        aria-label="Slide 1"
                        data-bs-slide-to="0"
                        data-bs-target="#carouselLuxury"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 2"
                        data-bs-slide-to="1"
                        data-bs-target="#carouselLuxury"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 3"
                        data-bs-slide-to="2"
                        data-bs-target="#carouselLuxury"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 4"
                        data-bs-slide-to="3"
                        data-bs-target="#carouselLuxury"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 5"
                        data-bs-slide-to="4"
                        data-bs-target="#carouselLuxury"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="luxury-img-one"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="luxury-img-two"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="luxury-img-three"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="luxury-img-four"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="luxury-img-five"></div>
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-slide="prev"
                      data-bs-target="#carouselLuxury"
                    >
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-slide="next"
                      data-bs-target="#carouselLuxury"
                    >
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div class="col-12 col-lg-5">
                  <div class="card-body room-content">
                    <p class="fs-2 fs-md-3 mb-md-2">豪華雅緻房</p>
                    <p class="fs-7 fs-md-8">
                      享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                    </p>

                    <div class="room-set d-flex">
                      <div class="room-set-detail">
                        <div class="icon-space"></div>
                        <p class="fs-8 fs-md-7">36 坪</p>
                      </div>
                      <div class="room-set-detail">
                        <Icon class="icon-bed" name="ic:round-king-bed" />
                        <p class="fs-8 fs-md-7">2 張大床</p>
                      </div>
                      <div class="room-set-detail">
                        <Icon class="icon-people" name="ic:round-person" />
                        <p class="fs-8 fs-md-7">2-4 人</p>
                      </div>
                    </div>

                    <dir class="room-line"></dir>
                    <div class="room-price d-flex justify-content-between align-items-center">
                      <p>NT$ 10,000</p>
                      <Icon class="icon-forward" name="ic:round-arrow-forward" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <!-- 尊榮 -->
        <!-- <div class="row">
          <div class="col-12">
            <div class="card mb-3 mb-md-4 card-outer">
              <div class="row g-0">
                <div class="col-12 col-lg-7">
                  <div id="carouselHonor" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button
                        class="active"
                        type="button"
                        aria-current="true"
                        aria-label="Slide 1"
                        data-bs-slide-to="0"
                        data-bs-target="#carouselHonor"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 2"
                        data-bs-slide-to="1"
                        data-bs-target="#carouselHonor"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 3"
                        data-bs-slide-to="2"
                        data-bs-target="#carouselHonor"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 4"
                        data-bs-slide-to="3"
                        data-bs-target="#carouselHonor"
                      ></button>
                      <button
                        type="button"
                        aria-label="Slide 5"
                        data-bs-slide-to="4"
                        data-bs-target="#carouselHonor"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="honor-img-one"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="honor-img-two"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="honor-img-three"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="honor-img-four"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="honor-img-five"></div>
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-slide="prev"
                      data-bs-target="#carouselHonor"
                    >
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-slide="next"
                      data-bs-target="#carouselHonor"
                    >
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div class="col-12 col-lg-5">
                  <div class="card-body room-content">
                    <p class="fs-2 fs-md-3 mb-md-2">景觀尊榮家庭房</p>
                    <p class="fs-7 fs-md-8">
                      景觀尊榮家庭房不僅有寬敞的空間，還有絕美的市景視野，是帶給家庭最尊榮的待遇。
                    </p>

                    <div class="room-set d-flex">
                      <div class="room-set-detail">
                        <div class="icon-space"></div>
                        <p class="fs-8 fs-md-7">48 坪</p>
                      </div>
                      <div class="room-set-detail">
                        <Icon class="icon-bed" name="ic:round-king-bed" />
                        <p class="fs-8 fs-md-7">2 張大床</p>
                      </div>
                      <div class="room-set-detail">
                        <Icon class="icon-people" name="ic:round-person" />
                        <p class="fs-8 fs-md-7">2-4 人</p>
                      </div>
                    </div>

                    <dir class="room-line"></dir>
                    <div class="room-price d-flex justify-content-between align-items-center">
                      <p>NT$ 10,000</p>
                      <Icon class="icon-forward" name="ic:round-arrow-forward" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
const roomsTmpl = ref<
{
  name: string
  description: string
  imageUrl:string
  imageUrlList: string[]
  areaInfo: string
  bedInfo: string
  maxPeople: string
  price: string
  _id:string
}[]
>([])

/* API */
const { getRooms } = useApi()
const apiPending = computed(() => roomsPending.value)

const {
  pending: roomsPending,
  refresh: roomsRefresh
} = await getRooms({
  immediate: false,
  onResponse({ response }: { response: any }) {
    if (response.status === 200) {
      const temp = response._data.result
      console.log('response._data.result:', response._data.result)
      roomsTmpl.value = temp
    }
  },
  onResponseError({ response }: { response: any }) {
    console.log('getRooms api Error:', response)
  }
})
roomsRefresh()

</script>

<style lang="scss" scoped>
.banner-img-mask {
  filter: brightness(60%);

  .banner-img {
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url('/img/desktop/HeroImg.png');
  }

  .banner-content {
    width: 780px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .line {
      max-width: 500px;
      border-top: solid #be9c7c 2px;
      margin-top: 40px;
    }

    .right-content {
      margin-top: 33.5px;
    }
  }
}

.bg-color {
  background-color: #f7f2ee;
  padding-top: 120px;

  .room-choose {
    margin-bottom: 16px;
  }

  .card-outer {
    max-width: 1296px;
    margin-bottom: 48px;
    .carousel-control-prev {
      background-color: #ffffff;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      top: 50%;
      left: 5%;
      transform: translate(-50%, -50%);
      opacity: 10;

      .carousel-control-prev-icon {
        background-image: url('/img/desktop/room-arrow-left.png');
      }
    }

    .carousel-control-next {
      background-color: #ffffff;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      top: 50%;
      right: 3%;
      transform: translate(-50%, -50%);
      opacity: 10;

      .carousel-control-next-icon {
        background-image: url('/img/desktop/room-arrow-right.png');
      }
    }

    .lord-img-one {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype1-1.png');
    }

    .lord-img-two {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype1-2.png');
    }

    .lord-img-three {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype1-3.png');
    }

    .lord-img-four {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype1-4.png');
    }

    .lord-img-five {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype1-5.png');
    }

    .landscape-img-one {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype2-1.png');
    }

    .landscape-img-two {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype2-2.png');
    }

    .landscape-img-three {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype2-3.png');
    }

    .landscape-img-four {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype2-4.png');
    }

    .landscape-img-five {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype2-5.png');
    }

    .luxury-img-one {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype3-1.png');
    }

    .luxury-img-two {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype3-2.png');
    }

    .luxury-img-three {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype3-3.png');
    }

    .luxury-img-four {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype3-4.png');
    }

    .luxury-img-five {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype3-5.png');
    }

    .honor-img-one {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype4-1.png');
    }

    .honor-img-two {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype4-2.png');
    }

    .honor-img-three {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype4-3.png');
    }

    .honor-img-four {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype4-4.png');
    }

    .honor-img-five {
      width: 100%;
      height: 457px;
      background-image: url('/img/desktop/roomtype4-5.png');
    }

    .room-content {
      border-radius: 0 20px 20px 0;
      padding: 40px;
      background-color: #fff;

      .room-set {
        margin-top: 40px;
        margin-bottom: 40px;

        .room-set-detail {
          width: 100px;
          margin-right: 16px;
          padding: 16px;
          border-radius: 8px;
          border: solid 1px;
          border-color: #f1eae4;

          .icon-space {
            width: 24px;
            height: 24px;
            background-image: url('/img/desktop/space.png');
            background-repeat: no-repeat;
          }

          .icon-bed {
            color: #bf9d7d;
            width: 24px;
            height: 24px;
          }

          .icon-people {
            color: #bf9d7d;
            width: 24px;
            height: 24px;
          }
        }
      }

      .room-line {
        max-width: 443px;
        height: 1px;
        background-image: url('/img/desktop/room-line.png');
        margin-bottom: 40px;
      }

      .room-price {
        margin-bottom: 16px;
        font-size: 24px;
        color: #bf9d7d;
      }
    }
  }
}
@include md {
  .banner-img-mask {
    .banner-img {
      background-image: url('/img/mobile/HeroImg.png');
    }
    .banner-content {
      width: 375px;
      top: 28%;
      text-align: center;

      .line {
        max-width: 83px;
        margin-top: 32%;
        margin-left: 36%;
        transform: rotate(90deg);
      }

      .right-content {
        margin-top: 60px;
      }
    }
  }
  .bg-color {
    padding-top: 40px;

    .room-choose {
      margin-bottom: 8px;
    }

    .card-outer {
      max-width: 800px;
      margin-top: 40px;

      .carousel-control-prev {
        opacity: 0;
      }

      .carousel-control-next {
        opacity: 0;
      }

      .lord-img-one {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype1-1.png');
      }

      .lord-img-two {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype1-2.png');
      }

      .lord-img-three {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype1-3.png');
      }

      .lord-img-four {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype1-4.png');
      }

      .lord-img-five {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype1-5.png');
      }

      .landscape-img-one {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype2-1.png');
      }

      .landscape-img-two {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype2-2.png');
      }

      .landscape-img-three {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype2-3.png');
      }

      .landscape-img-four {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype2-4.png');
      }

      .landscape-img-five {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype2-5.png');
      }

      .luxury-img-one {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype3-1.png');
      }

      .luxury-img-two {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype3-2.png');
      }

      .luxury-img-three {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype3-3.png');
      }

      .luxury-img-four {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype3-4.png');
      }

      .luxury-img-five {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype3-5.png');
      }

      .honor-img-one {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype4-1.png');
      }

      .honor-img-two {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype4-2.png');
      }

      .honor-img-three {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype4-3.png');
      }

      .honor-img-four {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype4-4.png');
      }

      .honor-img-five {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/img/desktop/roomtype4-5.png');
      }

      .room-content {
        border-radius: 0 0px 20px 20px;
        padding: 16px;

        .room-set {
          margin-top: 24px;
          margin-bottom: 24px;

          .room-set-detail {
            width: 100px;
            height: 97px;
            margin-right: 16px;
            padding: 16px;
            border-radius: 8px;
            border: solid 1px;
            border-color: #f1eae4;

            .icon-space {
              width: 24px;
              height: 24px;
              background-image: url('/img/desktop/space.png');
              background-repeat: no-repeat;
            }

            .icon-bed {
              color: #bf9d7d;
              width: 24px;
              height: 24px;
            }

            .icon-people {
              color: #bf9d7d;
              width: 24px;
              height: 24px;
            }
          }
        }

        .room-line {
          max-width: 443px;
          height: 1px;
          background-image: url('/img/desktop/room-line.png');
          margin-bottom: 40px;
        }

        .room-price {
          margin-bottom: 16px;
          font-size: 24px;
          color: #bf9d7d;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .banner-img-mask {
    .banner-img {
      background-image: url('/img/mobile/HeroImg.png');
    }
    .banner-content {
      width: 375px;
      top: 28%;
      text-align: center;

      .line {
        max-width: 83px;
        margin-top: 32%;
        margin-left: 36%;
        transform: rotate(90deg);
      }

      .right-content {
        margin-top: 60px;
      }
    }
  }
  .bg-color {
    padding-top: 40px;

    .room-choose {
      margin-bottom: 8px;
    }

    .card-outer {
      max-width: 800px;
      margin-top: 40px;

      .carousel-control-prev {
        opacity: 0;
      }

      .carousel-control-next {
        opacity: 0;
      }

      .lord-img-one {
        width: 100%;
        height: 200px;
        background-image: url('/img/mobile/roomtype1-1.png');
      }

      .lord-img-two {
        width: 100%;
        height: 200px;
        background-image: url('/img/mobile/roomtype1-2.png');
      }

      .lord-img-three {
        width: 100%;
        height: 200px;
        background-image: url('/img/mobile/roomtype1-3.png');
      }

      .lord-img-four {
        width: 100%;
        height: 200px;
        background-image: url('/img/mobile/roomtype1-4.png');
      }

      .lord-img-five {
        width: 100%;
        height: 200px;
        background-image: url('/img/mobile/roomtype1-5.png');
      }

      .luxury-img-one {
        width: 100%;
        height: 200px;
        background-image: url('/img/mobile/roomtype3-1.png');
      }

      .luxury-img-two {
        width: 100%;
        height: 200px;
        background-image: url('/img/mobile/roomtype3-2.png');
      }

      .luxury-img-three {
        width: 100%;
        height: 200px;
        background-image: url('/img/mobile/roomtype3-3.png');
      }

      .luxury-img-four {
        width: 100%;
        height: 200px;
        background-image: url('/img/mobile/roomtype3-4.png');
      }

      .luxury-img-five {
        width: 100%;
        height: 200px;
        background-image: url('/img/mobile/roomtype3-5.png');
      }

      .honor-img-one {
        width: 100%;
        height: 200px;
        background-image: url('/img/mobile/roomtype4-1.png');
      }

      .honor-img-two {
        width: 100%;
        height: 200px;
        background-image: url('/img/mobile/roomtype4-2.png');
      }

      .honor-img-three {
        width: 100%;
        height: 200px;
        background-image: url('/img/mobile/roomtype4-3.png');
      }

      .honor-img-four {
        width: 100%;
        height: 200px;
        background-image: url('/img/mobile/roomtype4-4.png');
      }

      .honor-img-five {
        width: 100%;
        height: 200px;
        background-image: url('/img/mobile/roomtype4-5.png');
      }

      .room-content {
        border-radius: 0 0px 20px 20px;
        padding: 16px;

        .room-set {
          margin-top: 24px;
          margin-bottom: 24px;

          .room-set-detail {
            width: 100px;
            height: 97px;
            margin-right: 16px;
            padding: 16px;
            border-radius: 8px;
            border: solid 1px;
            border-color: #f1eae4;

            .icon-space {
              width: 24px;
              height: 24px;
              background-image: url('/img/desktop/space.png');
              background-repeat: no-repeat;
            }

            .icon-bed {
              color: #bf9d7d;
              width: 24px;
              height: 24px;
            }

            .icon-people {
              color: #bf9d7d;
              width: 24px;
              height: 24px;
            }
          }
        }

        .room-line {
          max-width: 443px;
          height: 1px;
          background-image: url('/img/desktop/room-line.png');
          margin-bottom: 40px;
        }

        .room-price {
          margin-bottom: 16px;
          font-size: 24px;
          color: #bf9d7d;
        }
      }
    }
  }
}
</style>
