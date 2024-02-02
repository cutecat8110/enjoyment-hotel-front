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
          <div class="carousel-item">
            <div class="banner-img d-block w-100"></div>
          </div>
          <div class="carousel-item">
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

        <div class="row" v-for="(room, index) in roomsTmpl" :key="index">
          <div class="col-12">
            <div class="card mb-3 mb-md-4 card-outer">
              <div class="row g-0" >
                <div class="col-12 col-lg-7">
                  <div :id="`carousel_${index}`" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button
                        v-for="(list, i) in room.imageUrlList"
                        :key="`${i}_${list}`"
                        :class="`${i === 0 ? 'active' : ''}`"
                        type="button"
                        :aria-current="`${i === 0}`"
                        :aria-label="`Slide${i + 1}`"
                        :data-bs-slide-to="`${i}`"
                        :data-bs-target="`#carousel_${index}`"
                      >
                      </button>
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
                      :data-bs-target="`#carousel_${index}`"
                    >
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-slide="next"
                      :data-bs-target="`#carousel_${index}`"
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

                    <div class="room-line"></div>
                    <div class="room-price d-flex justify-content-between align-items-center">
                      <p>NT$ {{ room.price }}</p>
                      <NuxtLink :to="`/room/${room._id}`">
                        <Icon class="icon-forward" name="ic:round-arrow-forward" />
                      </NuxtLink>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
const { getRoomsApi } = useApi()
const apiPending = computed(() => roomsPending.value)

const {
  pending: roomsPending,
  refresh: roomsRefresh
} = await getRoomsApi({
  immediate: false,
  onResponse({ response }: { response: any }) {
    if (response.status === 200) {
      const temp = response._data.result
      roomsTmpl.value = temp
    }
  },
  onResponseError({ response }: { response: any }) {
    console.log('getRoomsApi api Error:', response)
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
