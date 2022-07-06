<template>
  <div>
    <!--  MAIN SECTION  -->
    <div class="mx-6 mt-6">
      <div class="flex flex-col md:flex-row">
        <!-- <div class="grid grid-cols-1 gap-4 md:grid-rows-2 md:grid-cols-3 place-content-stretch"> -->
        <div class="md:w-1/2">
          <client-only>
            <Splide
              :options="options"
              @splide:arrows:mounted="onArrowsMounted"
              @splide:moved="moved"
            >
              <SplideSlide v-for="(item) in slideshows.data" :key="item.id">
                <img :src="item.attributes.img.data.attributes.url">
              </SplideSlide>
            </Splide>
          </client-only>
        </div>
        <div class="flex flex-col md:w-1/2">
          <div class="mt-4 md:mt-0">
            <Carousel title="Social Gallery" content="Dynaverse" imgurl="https://happycloud.sgp1.digitaloceanspaces.com/strapi/ea62e9b0399dcda59429e9e53674505a.webp?updated_at=2022-07-06T17:38:01.712Z" />
          </div>
          <div class="mt-4">
            <Carousel title="How to Use & Clean" content="Your Dynavap" imgurl="https://happycloud.sgp1.digitaloceanspaces.com/strapi/2a034289701e242c4c9563c2edfc7336.webp?updated_at=2022-07-06T17:38:01.890Z" />
          </div>
        </div>

        <!-- </div> -->
      </div>
    </div>
    <!--  MAIN SECTION //END -->
    <!-- SECTION-ICONMENU -->
    <section class="pt-10">
      <div class="container max-w-screen-xl px-4 mx-auto">
        <nav class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-x-3 gap-y-6">
          <a href="/dynavap" class="flex flex-col items-center justify-center">
            <button class="btn btn-lg glass bg-primary btn-circle">
              <img width="64" height="64" src="images/icons/category-svg-white/dynavap_logo_white.svg">
            </button>
            <p class="text-center text-gray-600 group-hover:text-primary-focus">  DYNAVAP  </p>
          </a>
          <a href="/stickybrick" class="flex flex-col items-center justify-center">
            <button class="btn btn-lg glass bg-primary btn-circle">
              <img width="32" height="32" src="/sticky-brick-labs.webp">
            </button>
            <p class="text-center text-gray-600 group-hover:text-primary-focus">  STICKY BRICK  </p>
          </a>
        </nav>
      </div> <!-- container //end -->
    </section>
    <!-- SECTION-ICONMENU //END -->
    <div class="divider" />

    <!-- SECTION-CONTENT -->
    <section class="py-10">
      <div class="container max-w-screen-xl px-4 mx-auto">
        <h2 class="mb-8 text-3xl font-bold text-primary">
          New products
        </h2>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div v-for="(item) in newProducts.attributes.products.data" :key="item.id">
            <Card
              btname="Read more.."
              :imgurl="item.attributes.image.data.attributes.url"
              :title="item.attributes.title"
              :content="item.attributes.price"
              :link="`/products/${item.id}`"
            />
          </div>
        </div>
      </div>
    </section>
    <!--  SECTION-CONTENT  //END -->
    <div class="divider" />

    <!-- SECTION-CONTENT -->
    <section class="py-10">
      <div class="container max-w-screen-xl px-4 mx-auto">
        <h2 class="mb-8 text-3xl font-bold text-primary">
          Hot products
        </h2>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <div v-for="(item) in hotProducts.attributes.products.data" :key="item.id">
            <Card
              btname="Read more.."
              :imgurl="item.attributes.image.data.attributes.url"
              :title="item.attributes.title"
              :content="item.attributes.price"
              :link="`/products/${item.id}`"
            />
          </div>
        </div>
      </div>
    </section>
    <div class="divider" />
    <!--  SECTION-CONTENT  //END -->
    <div class="flex justify-center mx-6 mb-6">
      <div class="shadow stats bg-base-200">
        <div class="stat place-items-center">
          <div class="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--fa-solid"
              width="40"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 640 512"
            ><path fill="currentColor" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" /></svg>
          </div>
          <div class="stat-value text-primary">
            Free shipping
          </div>
          <div class="stat-desc">
            On order over 4,200 THB
          </div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--icomoon-free"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
            ><path fill="currentColor" d="M15.25 0h-6c-.412 0-.989.239-1.28.53L.531 7.969a.752.752 0 0 0 0 1.061l6.439 6.439a.752.752 0 0 0 1.061 0L15.47 8.03c.292-.292.53-.868.53-1.28v-6a.753.753 0 0 0-.75-.75zM11.5 6a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 11.5 6z" /></svg>
          </div>
          <!-- <div class="stat-title">
                Page Views
              </div> -->
          <div class="stat-value text-secondary">
            Friendly Price
          </div>
          <div class="stat-desc">
            100% happy in every items
          </div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-figure text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--ri"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            ><path fill="currentColor" d="M19.938 8H21a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.062A8.001 8.001 0 0 1 12 23v-2a6 6 0 0 0 6-6V9A6 6 0 1 0 6 9v7H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.062a8.001 8.001 0 0 1 15.876 0zM3 10v4h1v-4H3zm17 0v4h1v-4h-1zM7.76 15.785l1.06-1.696A5.972 5.972 0 0 0 12 15a5.972 5.972 0 0 0 3.18-.911l1.06 1.696A7.963 7.963 0 0 1 12 17a7.963 7.963 0 0 1-4.24-1.215z" /></svg>
          </div>
          <!-- <div class="stat-title">
                Page Views
              </div> -->
          <div class="stat-value text-accent">
            Expert advice
          </div>
          <div class="stat-desc">
            Friendly Service
          </div>
        </div>
      </div>
    </div>
    <!--  SECTION-CONTENT  //END -->
    <!-- <div class="flex flex-col justify-between mx-6 mt-6 mb-6 md:flex-row">
      <Carousel height-class="h-full" />
      <Carousel height-class="h-full" class="my-4 md:mt-0 md:mb-0 md:ml-6" />
    </div> -->
  </div>
</template>

<script>
import slideshowQuery from '../apollo/queries/slideshow/slideshows'
import categoriesQuery from '../apollo/queries/category/categories'

export default {
  name: 'IndexPage',
  data () {
    return {
      options: {
        // heightRatio: 0.5,
        // trimSpace: 'move',
        // focus: 'center',
        rewind: true,
        perPage: 1,
        direction: 'ttb',
        wheel: true,
        releaseWheel: true,
        arrows: false,
        type: 'loop', // breakpoints: {
        //   640: {
        //     perPage: 1
        //   }
        // },
        // padding: { bottom: 20 },
        height: '70%',
        // width: '50%',
        fixedWidth: '100%'
        // fixedHeight: '100%'
        // autoWidth: true
      }
    }
  },
  computed: {
    newProducts () {
      return this.categories.data.find(x => x.id === '4')
    },
    hotProducts () {
      return this.categories.data.find(x => x.id === '3')
    }
  },
  apollo: {
    slideshows: {
      prefetch: true,
      query: slideshowQuery
    },
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
  },
  methods: {
    onArrowsMounted (splide, prev, next) {
    },
    moved (splide, prevIndex, destIndex) {
    }
  }
}
</script>
<style>
.splide {
  padding: 0 !important;
}
</style>
