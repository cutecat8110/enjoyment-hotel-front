<template>
  <div>
    <!-- 輪播 -->
    <article>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
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
        <div class="carousel-inner position-relative">
          <div class="carousel-item active banner-outer">
            <div class="d-block banner-img"></div>
            <div class="banner-left-content text-primary-dark">
              <div class="zh-title">享樂酒店</div>
              <div class="en-title">Enjoyment Luxury Hotel</div>
              <div class="line"></div>
            </div>
            <div class="banner-right-content"></div>
            <div class="banner-middle-content">
              <div class="middle-content-title text-white">高雄</div>
              <div class="middle-content-title text-white">豪華住宿之選</div>
              <div class="text-white banner-slogn">
                我們致力於為您提供無與倫比的奢華體驗與優質服務
              </div>
              <button
                class="banner-button d-flex justify-content-end align-items-center"
                type="button"
              >
                <NuxtLink class="banner-button-text" to="/rooms">立即訂房</NuxtLink>
                <div class="banner-button-line"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- 最新消息 -->
    <article class="bg-goose-yellow position-relative news-outer">
      <div class="news-top-absolute"></div>
      <div class="news-bottom-absolute"></div>

      <div class="container news-content">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-2">
            <img src="/img/desktop/news.png" alt="" />
          </div>

          <div class="col-12 col-md-7 col-lg-10">
            <div class="card card-outer" v-for="(news, index) in newsTmpl" :key="index">
              <div class="news-img-desktop">
                <img :src="`/img/desktop/newsImg-${index+1}.png`" alt="" class="news-img ratio ratio-1x1">
              </div>
              <div class="card-body d-flex justify-content-start align-items-center">
                <div class="card-content">
                  <div class="card-title">{{ news.title }}</div>
                  <p class="card-text">{{ news.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- 關於我們 -->
    <article class="bg-deep about-outer position-relative">
      <div class="about-img"></div>
      <div class="text-white about-main">
        <div class="about-img-text"></div>
        <div class="about-content">
          <p class="about-content-text">
            享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
            我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
          </p>
          <p class="about-content-text">
            我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
            我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
          </p>
          <p class="about-content-text">
            在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
          </p>
          <p class="about-content-text">
            享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
          </p>
        </div>
      </div>
    </article>

    <!-- 房型 -->
    <article class="position-relative room-outer">
      <img class="position-absolute deco-top" src="/img/desktop/deco-1.png" alt="" />
      <img style="z-index: 1;" class="position-absolute deco-bottom" src="/img/desktop/deco-2.png" alt="" />
      <div class="row">
        <div class="col-12 col-lg-6 mx-lg-0 mx-1" style="z-index: 9;">
          <div class="slides">
            <div tag="div" :name="transitionName">
              <div v-for="(item, idx) of imageArray" :key="idx" class="ratio ratio-1x1" v-show="idx == showImg">
                <img :src="item" />
                <div class="btn-group d-flex flex-row justify-content-center align-items-end" style="z-index: 10;">
                  <div class="page" @click="setShowImgTo(num - 1)" v-for="num in 5" :key="num - 1" >
                    <Icon class="text-white" name="heroicons-solid:minus" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 mx-lg-0 mx-1 text-light room-content" style="z-index: 9;" v-for="(room, id) in roomsTmpl" :key="id" v-show="id == showImg">
            <h2 class="room-title">{{ room.name }}</h2>
            <div class="fs-7">{{ room.description }}</div>
            <h3 class="room-price">NT$ {{ room.price }}</h3>
            <NuxtLink class="btn room-button fs-5 d-flex justify-content-end align-items-center" to="/rooms">
              查看更多
              <img class="room-button-line" src="/img/desktop/line.png" alt="" />
            </NuxtLink>

            <div class="room-arrow d-flex justify-content-end">
              <div class="prev" @click="setShowImg(-1)">
                <img src="/img/desktop/leftButton.png" alt="" />
              </div>
              <div class="next" @click="setShowImg(1)">
                <img src="/img/desktop/rightButton.png" alt="" />
              </div>
            </div>
          </div>
      </div>
    </article>

    <!-- 佳餚美饌 -->
    <article class="bg-goose-yellow position-relative food-outer">
      <img class="food-deco" src="/img/desktop/deco-3.png" alt="" />
      <img class="position-absolute food-dot" src="/img/desktop/dot.png" alt="" />
      <img class="position-absolute food-title-absolute" src="/img/desktop/foodName.png" alt="" />

      <div class="position-absolute food-card-box">
        <div class="card-content" v-for="(culinary, i) in culinaryTmpl" :key="i">
          <img class="position-relative ratio ratio-1x1" :src="`/img/desktop/food-${i+1}.png`" alt="">
          <div class="card-bg position-absolute py-4">
            <div class="d-flex mb-4">
              <h5 class="ms-4 fs-5">{{ culinary.title }}</h5>
              <div class="ms-auto me-4 fs-8">
                <div class="fs-7 card-week">{{ culinary.diningTime }}</div>
              </div>
            </div>
            <div class="mx-4">
              <div class="card-directions fs-ml-7 fs-8">{{ culinary.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- 交通方式 -->
    <article class="bg-deep position-relative traffic-outer">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-3 traffic-name">
            <img src="/img/desktop/trafficName.png" alt="" />
          </div>
          <div class="col-12 col-lg-9"></div>

          <div class="col-12 col-lg-3 mb-3">
            <p class="fs-7 text-white">台灣高雄市新興區六角路123號</p>
          </div>
          <div class="col-lg-9"></div>

          <div class="col-12 traffic-map">
            <div class="traffic-map-img"></div>
          </div>

          <div class="col-12 col-lg-4 mb-4">
            <img class="mb-3" src="/img/desktop/car.png" alt="" />
            <h5 class="text-white mb-2">自行開車</h5>
            <div class="fs-7 text-white">
              如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
            </div>
          </div>
          <div class="col-12 col-lg-4 mb-4">
            <img class="mb-3" src="/img/desktop/train.png" alt="" />
            <h5 class="text-white mb-2">高鐵/火車</h5>
            <div class="text-white fs-7">
              如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
            </div>
          </div>
          <div class="col-12 col-lg-4 mb-4">
            <img class="mb-3" src="/img/desktop/luxurycar.png" alt="" />
            <h5 class="text-white mb-2">禮賓車服務</h5>
            <div class="fs-7 text-white">
              承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
            </div>
          </div>
        </div>
      </div>
      <img class="traffic-deco" src="/img/desktop/deco-4.png" alt="" />
    </article>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layouts: 'h-f-spl'
})

const newsTmpl = ref<
{
  title: string
  description: string
  image: string
}[]
>([])

const culinaryTmpl = ref<
{
  title: string
  diningTime: string
  description: string
}[]
>([])

let imageArray: string[]
let showImg = ref(0)
const transitionName = ref('right-in')
const roomsTmpl = ref<
{
  name: string
  description: string
  price: number
  _id: string
}[]
>([])

/* API */
const { news, culinary, getRooms } = useApi()
const apiPending = computed(() => newsPending.value || culinaryPending.value || roomsPending.value)

const {
  pending: newsPending,
  refresh: newsRefresh
} = await news({
  immediate: false,
  onResponse({ response }: { response: any }) {
    if (response.status === 200) {
      const temp = response._data.result
      newsTmpl.value = temp
    }
  },
  onResponseError({ response }: { response: any }) {
    console.log('news api Error:', response)
  }
})
newsRefresh()

const {
  pending: culinaryPending,
  refresh: culinaryRefresh
} = await culinary({
  immediate: false,
  onResponse({ response }: { response: any }) {
    if (response.status === 200) {
      const temp = response._data.result
      culinaryTmpl.value = temp
    }
  },
  onResponseError({ response }: { response: any }) {
    console.log('culinary api Error:', response)
  }
})
culinaryRefresh()

onMounted(() => {
  setInterval(setShowImg, autoPlayInterval);
})

watch(showImg, function (nIdx: number, oIdx: number) {
  transitionName.value = nIdx > oIdx ? "right-in" : "left-in";
})

function setShowImg ( changeIdx = 1) {
  switch (true) {
    case changeIdx == 1 && showImg.value == imageArray.length - 1:
      showImg.value = 0;
      break;
    case changeIdx == -1 && showImg.value == 0:
      showImg.value = imageArray.length - 1;
      break;
    default:
      showImg.value = showImg.value + changeIdx;
      break;
  }
}

function setShowImgTo (changeIdxTo: any) {
  showImg.value = changeIdxTo
}

const autoPlayInterval = 5000

const {
  pending: roomsPending,
  refresh: roomsRefresh
} = await getRooms({
  immediate: false,
  onResponse({ response }: { response: any }) {
    if (response.status === 200) {
      const temp = response._data.result
      roomsTmpl.value = temp

      imageArray = temp.map((it: { imageUrl: any; }) => {
        return it.imageUrl
      })
    }
  },
  onResponseError({ response }: { response: any }) {
    console.log('getRooms api Error:', response)
  }
})
roomsRefresh()

// culinaryPending.value = false
// newsPending.value = false
</script>

<style lang="scss" scoped>
.bg-deep {
  background-color: #140f0aff;
}

.bg-goose-yellow {
  background-color: #f7f2ee;
  max-width: 1920px;
}

.banner-outer {
  .banner-img {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/img/desktop/HeroImg.png');
    filter: brightness(60%);
  }

  .banner-middle-content {
    position: absolute;
    top: 28%;
    left: 45%;

    .middle-content-title {
      font-size: 100px;
    }

    .banner-slogn {
      font-size: 32px;
      margin-bottom: 60px;
    }

    .banner-button {
      font-size: 24px;
      width: 772px;
      padding: 40px;
      border-radius: 8px;
      font-size: 24px;
      border: none;
      border-radius: 8px;
      background-color: #fff;

      &:hover {
        background-color: #7b6651;
      }

      .banner-button-text {
        margin-right: 16px;
        color: #000000;
        text-decoration: none;
      }

      .banner-button-line {
        width: 120px;
        height: 1px;
        background-image: url('/img/desktop/line.png');
      }
    }
  }

  .banner-left-content {
    position: absolute;
    top: 45%;
    left: 5%;

    .zh-title {
      font-size: 40px;
    }

    .en-title {
      font-size: 24px;
    }

    .line {
      min-width: 636px;
      border-top: solid #be9c7c 2px;
      margin-top: 40px;
      border-top: solid #be9c7c 2px;
    }
  }

  .banner-right-content {
    position: absolute;
    background-image: linear-gradient(to bottom, #ffffff 0%, #ffffff 30%);
    top: 21%;
    left: 47%;
    padding: 334px 200px;
    min-width: 924px;
    border-radius: 80px;
    border: solid 1px #f5f7f9;
    border-left: none;
    border-bottom: none;
    opacity: 0.5;
  }

  @include md {
    .banner-img {
      background-image: url('/img/mobile/HeroImg.png');
      background-repeat: no-repeat;
      background-size: cover;
    }

    .banner-middle-content {
      top: 64%;
      left: 22%;

      .middle-content-title {
        font-size: 48px;
      }

      .banner-slogn {
        font-size: 16px;
        margin-bottom: 60px;
      }

      .banner-button {
        max-width: 309px;
        padding: 20px;
        font-size: 16px;

        .banner-button-text {
          margin-right: 16px;
        }

        .banner-button-line {
          width: 80px;
          height: 1px;
          background-image: url('/img/mobile/line.png');
        }
      }
    }

    .banner-left-content {
      top: 39%;
      left: 30%;
      display: flex;
      align-content: flex-start;
      flex-direction: column;
      justify-content: center;

      .zh-title {
        font-size: 28px;
        font-weight: 700;
        margin-left: 70px;
      }

      .en-title {
        font-size: 24px;
        font-weight: 700;
      }

      .line {
        min-width: 0px;
        border-left: 2px solid #be9c7c;
        height: 100%;
        left: 43%;
        position: absolute;
        left: 50%;
        width: 0;
        height: 100%;
        margin-top: 175px;
        border-top: solid 0px;
      }
    }

    .banner-right-content {
      top: 60%;
      left: 28%;
      padding: 185px 167px;
      min-width: 291px;
    }
  }

  @media (max-width: 576px) {
    .banner-img {
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url('/img/mobile/HeroImg.png');
    }

    .banner-middle-content {
      top: 47%;
      left: 5%;

      .middle-content-title {
        font-size: 48px;
      }

      .banner-slogn {
        font-size: 16px;
        margin-bottom: 60px;
      }

      .banner-button {
        max-width: 309px;
        padding: 20px;
        font-size: 16px;

        .banner-button-text {
          margin-right: 16px;
        }

        .banner-button-line {
          width: 80px;
          height: 1px;
          background-image: url('/img/mobile/line.png');
        }
      }
    }

    .banner-left-content {
      top: 15%;
      left: 17%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: flex-start;

      .zh-title {
        font-weight: 700;
        font-size: 28px;
        margin-left: 70px;
      }

      .en-title {
        font-weight: 700;
        font-size: 24px;
      }

      .line {
        min-width: 0px;
        border-left: 2px solid #be9c7c;
        height: 100%;
        left: 38%;
        position: absolute;
        margin-top: 175px;
        border-top: solid 0px;
      }
    }

    .banner-right-content {
      top: 37%;
      left: 14%;
      padding: 249px 167px;
      min-width: 291px;
    }
  }
}

.news-outer {
  .news-top-absolute {
    position: absolute;
    top: 100px;
    left: 1540px;
    width: 200px;
    height: 200px;
    background-image: url('/img/desktop/dot.png');
  }

  .news-bottom-absolute {
    position: absolute;
    z-index: 9;
    top: 700px;
    left: 200px;
    width: 200px;
    height: 200px;
    background-image: url('/img/desktop/dot.png');
  }

  .news-content {
    padding-top: 120px;
    padding-bottom: 120px;

    .card-outer {
      cursor: pointer;
      display: flex;
      margin-bottom: 40px;

      .news-img-desktop {
        max-width: 258px
      }

      .card-content {
        margin-left: 12px;

        .card-title {
          font-size: 24px;
        }
      }
    }
  }

  @include md {
    .news-top-absolute {
      position: absolute;
      width: 100px;
      height: 100px;
      top: 4%;
      left: 80%;
      background-image: url('/img/mobile/dot.png');
    }

    .news-bottom-absolute {
      width: 100px;
      height: 100px;
      top: 98%;
      left: 5%;
      background-image: url('/img/mobile/dot.png');
    }

    .news-content {
      .card-outer {
        display: block;
        margin-top: 40px;

        .news-img-desktop {
          max-width: 100%
        }

        .news-img {
          margin-bottom: 24px;
        }

        .card-content {
          width: 360px;
          margin-left: 0px;

          .card-title {
            font-size: 28px;
            line-height: 33px;
            letter-spacing: 5%;
            margin-bottom: 8px;
          }

          .card-text {
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 2%;
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    .news-top-absolute {
      position: absolute;
      top: 40px;
      left: 251px;
      width: 100px;
      height: 100px;
      background-image: url('/img/mobile/dot.png');
    }

    .news-bottom-absolute {
      top: 1660px;
      left: 24px;
      width: 100px;
      height: 100px;
      background-image: url('/img/mobile/dot.png');
    }

    .news-content {
      .card-outer {
        display: block;
        margin-top: 40px;

        .news-img {
          margin-bottom: 24px;
        }

        .card-content {
          width: 360px;
          margin-left: 0;

          .card-title {
            font-size: 28px;
            line-height: 33px;
            margin-bottom: 8px;
            letter-spacing: 5%;
          }

          .card-text {
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 2%;
          }
        }
      }
    }
  }
}

.about-outer {
  padding-top: 120px;
  padding-bottom: 200px;

  .about-img {
    max-width: 1920px;
    height: 672px;
    background-image: url('/img/desktop/about.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .about-main {
    position: absolute;
    top: 200px;
    left: 564px;
    opacity: 0.8;
    border: 1px solid #fff;
    border-top: none;
    border-right: none;
    border-radius: 80px 80px 0 80px;
    background-image: linear-gradient(to bottom, #140f0a 0%, #be9c7c 80%);

    .about-content {
      width: 884px;
      margin-top: 80px;
      margin-left: 80px;
      margin-right: 80px;

      .about-content-text {
        margin-bottom: 40px;
      }
    }

    .about-img-text {
      width: 304px;
      height: 120px;
      margin-top: 80px;
      margin-left: 80px;
      background-image: url('/img/desktop/aboutName.png');
    }
  }

  @include md {
    .about-img {
      max-width: 768px;
      height: 594px;
      background-image: url('/img/mobile/about.png');
    }

    .about-main {
      top: 160px;
      left: 40px;
      opacity: 0.8;
      border: 1px solid #fff;
      border-top: none;
      border-right: none;
      border-radius: 40px 40px 0 40px;
      background-image: linear-gradient(to bottom, #140f0a 0%, #be9c7c 80%);

      .about-content {
        max-width: 670px;
        margin-top: 40px;
        margin-left: 24px;
        margin-right: 24px;

        .about-content-text {
          font-size: 14px;
          margin-bottom: 40px;
        }
      }

      .about-img-text {
        margin-top: 24px;
        margin-left: 24px;
        width: 267px;
        height: 80px;
        background-image: url('/img/mobile/aboutName.png');
      }
    }
  }

  @media (max-width: 576px) {
    .about-img {
      min-width: 375px;
      height: 594px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url('/img/mobile/about.png');
    }

    .about-main {
      background-image: linear-gradient(to bottom, #140f0a 0%, #be9c7c 80%);
      opacity: 0.8;
      border-radius: 40px 40px 0 40px;
      border: 1px solid #ffffff;
      border-top: none;
      border-right: none;

      .about-content {
        width: 267px;
        margin-top: 40px;
        margin-left: 24px;
        margin-right: 24px;

        .about-content-text {
          font-size: 14px;
          margin-bottom: 40px;
        }
      }

      .about-img-text {
        width: 267px;
        height: 80px;
        margin-top: 24px;
        margin-left: 24px;
        background-image: url('/img/mobile/aboutName.png');
      }
    }
  }
}

.room-outer {
  padding-bottom: 120px;
  background-color: #140f0aff;

  .deco-top {
    top: 180px;
    left: 860px;
  }

  .deco-bottom {
    top: 463px;
  }

  .room-content {
    margin-top: 602px;

    .room-title {
      margin-bottom: 16px;
    }

    .room-price {
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .room-button {
      font-size: 24px;
      width: 628px;
      height: 116px;
      margin-bottom: 40px;
      text-align: end;
      background-color: #fff;

      &:hover {
        background-color: #7b6651;
      }

      .room-button-line {
        margin-left: 16px;
      }
    }

    .room-arrow {
      width: 628px;
    }
  }

  // transitionName(Next):'right-in'
  .right-in-enter {
      left: 100%;
  }
  .right-in-enter-active,
  .right-in-leave-active {
      transition: left 0.5s;
  }
  .right-in-enter-to,
  .right-in-leave {
      left: 0%;
  }
  .right-in-leave-to {
      left: -100%;
  }

  // transitionName(Prev):'left-in'
  .left-in-enter {
      right: 100%;
  }
  .left-in-enter-active,
  .left-in-leave-active {
      transition: right 0.5s;
  }
  .left-in-enter-to,
  .left-in-leave {
      right: 0%;
  }
  .left-in-leave-to {
      right: -100%;
  }

  @include md {
    .deco-top {
      top: 0px;
      left: 170px;
    }

    .deco-bottom {
      top: 463px;
    }

    .room-content {
      margin-top: 5px;

      .room-title {
        margin-bottom: 16px;
      }

      .room-price {
        margin-top: 40px;
        margin-bottom: 40px;
      }

      .room-button {
        width: 628px;
        height: 116px;
        text-align: end;
        font-size: 24px;
        margin-bottom: 40px;
        background-color: #ffffff;

        &:hover {
          background-color: #7b6651;
        }

        .room-button-line {
          margin-left: 16px;
        }
      }

      .room-arrow {
        width: 628px;
      }
    }
  }

  @media (max-width: 576px) {
    .deco-top {
      top: 0px;
      left: 170px;
    }

    .deco-bottom {
      top: 463px;
    }

    .room-content {
      margin-top: 5px;

      .room-title {
        margin-bottom: 16px;
      }

      .room-price {
        margin-top: 40px;
        margin-bottom: 40px;
      }

      .room-button {
        width: 351px;
        height: 64px;
        text-align: end;
        font-size: 16px;
        margin-bottom: 40px;
        background-color: #ffffff;

        &:hover {
          background-color: #7b6651;
        }

        .room-button-line {
          margin-left: 16px;
        }
      }

      .room-arrow {
        width: 360px;
      }  
    }
  }
}

.food-outer {
  .food-deco {
    z-index: 9;
    margin-top: 55px;
    margin-left: 4px;
  }

  .food-dot {
    z-index: 9;
    right: 80px;
    bottom: 880px;
    width: 200px;
    height: 200px;
  }

  .food-title-absolute {
    top: 120px;
    left: 312px;
  }

  .food-card-box {
    top: 320px;
    left: 312px;
    overflow-y: auto;
    width: 1600px;
    height: 600px;
    white-space: nowrap;

    ::-webkit-scrollbar {
      display: none;
    }

    .card-content {
      cursor: pointer;
      display: inline-block;
      width: 416px;
      height: 600px;
      margin-right: 24px;
      color: #fff;
      border-radius: 8px;

      .card-bg {
        max-width: 416px;
        height: 200px;
        background: linear-gradient(to bottom, #000000 0%, #140f0a 0%);
        opacity: 0.8;
        top: 403px;
        width: 416px;
        opacity: 0.8;
        background: linear-gradient(to bottom, #000 0%, #140f0a 0%);

        .card-week {
          margin-right: 16px;
        }

        .card-directions {
          white-space: normal;
        }
      }
    }
  }

  @include md {
    .food-deco {
      visibility: collapse;
    }

    .food-dot {
      visibility: collapse;
    }

    .food-title-absolute {
      top: 80px;
      left: 12px;
    }

    .food-card-box {
      left: 12px;
      top: 300px;
      width: 730px;

      .card-content {
        width: 416px;
        height: 600px;
        margin-right: 24px;
        border-radius: 8px;
        display: inline-block;
        color: #ffffff;
      }
    }
  }

  @media (max-width: 576px) {
    .food-deco {
      visibility: collapse;
    }

    .food-dot {
      visibility: collapse;
    }

    .food-title-absolute {
      top: 80px;
      left: 12px;
    }

    .food-card-box {
      left: 12px;
      top: 300px;
      width: 420px;
      height: 100%;

      .card-content {
        width: 300px;
        height: 480px;
        margin-right: 24px;
        border-radius: 8px;
        display: inline-block;
        color: #ffffff;

        .card-bg {
          width: 300px;
          height: 240px;
          background: linear-gradient(to bottom, #000000 0%, #140f0a 0%);
          opacity: 0.8;
          top: 403px;

          .card-week {
            margin-right: 16px;
          }

          .card-directions {
            white-space: normal;
          }
        }
      }
    }
  }
}

.traffic-outer {
  padding-top: 120px;
  padding-bottom: 80px;

  .traffic-name {
    margin-bottom: 80px;
  }

  .traffic-map {
    margin-bottom: 40px;

    .traffic-map-img {
      width: 1295px;
      height: 360px;
      background-image: url('/img/desktop/map.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .traffic-deco {
    margin-top: 80px;
  }

  @include md {
    .traffic-map {
      margin-bottom: 40px;

      .traffic-map-img {
        width: 351px;
        background-image: url('/img/mobile/map.png');
      }
    }
  }

  @media (max-width: 576px) {
    .traffic-map {
      margin-bottom: 40px;

      .traffic-map-img {
        width: 351px;
        background-image: url('/img/mobile/map.png');
      }
    }
  }
}
</style>
