<template>
  <div>
    <!--  MAIN SECTION  -->
    <div class="mx-6 mt-6">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2">
          <client-only>
            <Splide
              :options="options"
              @splide:arrows:mounted="onArrowsMounted"
              @splide:moved="moved"
            >
              <SplideSlide v-for="(item) in slide.data" :key="item.id">
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
      </div>
    </div>
    <div class="divider" />
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
          <a href="/inspire" class="flex flex-col items-center justify-center">
            <button class="btn btn-lg glass bg-primary btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="37pt"
                height="12pt"
                viewBox="0 0 75 23"
                version="1.1"
              >
                <g id="surface1">
                  <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 24.3125 22.78125 L 27.351562 22.78125 C 27.351562 22.289062 27.332031 15.191406 27.332031 14.699219 C 28.828125 15.753906 30.53125 16.507812 32.410156 16.421875 C 37.507812 16.226562 40.792969 12.359375 40.546875 7.828125 C 40.25 3.347656 36.382812 -0.046875 31.902344 0.253906 C 27.648438 0.535156 24.347656 4.050781 24.3125 8.300781 C 24.3125 11.007812 24.3125 20.074219 24.3125 22.78125 M 32.394531 13.398438 C 29.601562 13.433594 27.300781 11.199219 27.246094 8.40625 C 27.210938 5.613281 29.441406 3.3125 32.238281 3.257812 C 32.304688 3.257812 32.359375 3.257812 32.429688 3.257812 C 35.222656 3.3125 37.4375 5.632812 37.386719 8.425781 C 37.332031 11.164062 35.117188 13.34375 32.394531 13.398438 Z M 32.394531 13.398438 " />
                  <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 57.503906 0.253906 L 57.503906 3.207031 C 57.097656 3.277344 56.695312 3.328125 56.308594 3.417969 C 54.058594 3.996094 52.53125 5.945312 52.511719 8.335938 C 52.496094 11.023438 52.511719 13.679688 52.511719 16.347656 L 49.402344 16.347656 L 49.402344 8.390625 C 49.402344 4.136719 52.671875 0.585938 56.921875 0.269531 C 57.101562 0.253906 57.277344 0.253906 57.503906 0.253906 " />
                  <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 43.480469 0.253906 L 46.449219 0.253906 L 46.449219 16.367188 L 43.480469 16.367188 Z M 43.480469 0.253906 " />
                  <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 72.421875 2.835938 C 71.015625 1.289062 69.066406 0.359375 66.976562 0.238281 C 66.800781 0.21875 66.589844 0.21875 66.378906 0.21875 C 65.308594 0.21875 64.234375 0.414062 63.234375 0.835938 C 62.742188 1.027344 62.265625 1.273438 61.828125 1.574219 C 61.386719 1.871094 60.964844 2.207031 60.597656 2.574219 C 59.839844 3.332031 59.261719 4.226562 58.859375 5.210938 C 58.015625 7.246094 58.03125 9.550781 58.910156 11.589844 C 59.351562 12.609375 60 13.523438 60.808594 14.277344 C 62.320312 15.683594 64.324219 16.453125 66.398438 16.4375 C 68.453125 16.457031 70.421875 15.664062 71.878906 14.242188 C 72.425781 13.714844 72.898438 13.132812 73.285156 12.484375 C 73.691406 11.816406 74.023438 11.097656 74.285156 10.359375 L 74.410156 9.988281 L 71.316406 9.988281 L 71.246094 10.164062 C 71.105469 10.535156 70.929688 10.886719 70.71875 11.21875 C 70.511719 11.535156 70.28125 11.816406 70.015625 12.078125 C 69.683594 12.429688 69.296875 12.730469 68.875 12.957031 C 67.890625 13.484375 66.75 13.679688 65.640625 13.503906 C 64.519531 13.347656 63.480469 12.820312 62.671875 12.042969 C 62.304688 11.691406 61.988281 11.273438 61.742188 10.8125 C 61.652344 10.65625 61.566406 10.480469 61.496094 10.304688 C 61.371094 10.023438 61.285156 9.726562 61.230469 9.425781 L 74.515625 9.425781 L 74.535156 9.179688 C 74.550781 8.96875 74.550781 8.761719 74.550781 8.546875 C 74.582031 6.421875 73.828125 4.402344 72.421875 2.835938 Z M 61.4375 6.683594 C 61.457031 6.632812 61.472656 6.597656 61.492188 6.542969 C 61.949219 5.332031 62.84375 4.328125 63.96875 3.714844 C 64.144531 3.628906 64.320312 3.539062 64.496094 3.46875 C 65.078125 3.242188 65.707031 3.117188 66.34375 3.117188 C 66.976562 3.117188 67.605469 3.242188 68.203125 3.46875 C 69.011719 3.769531 69.734375 4.242188 70.328125 4.855469 C 70.820312 5.382812 71.191406 6.015625 71.402344 6.703125 L 61.4375 6.703125 Z M 61.4375 6.683594 " />
                  <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 21.445312 11.535156 C 21.445312 11.851562 21.410156 12.167969 21.359375 12.484375 C 21.289062 12.800781 21.199219 13.082031 21.078125 13.378906 C 20.953125 13.660156 20.8125 13.941406 20.636719 14.207031 C 20.480469 14.449219 20.285156 14.699219 20.074219 14.90625 C 19.863281 15.117188 19.636719 15.3125 19.390625 15.488281 C 19.144531 15.664062 18.882812 15.820312 18.601562 15.945312 C 18.316406 16.085938 18.019531 16.191406 17.703125 16.246094 C 17.386719 16.3125 17.070312 16.351562 16.757812 16.351562 L 5.949219 16.351562 L 5.949219 13.503906 L 16.773438 13.503906 C 17 13.503906 17.230469 13.46875 17.441406 13.359375 C 17.667969 13.253906 17.863281 13.117188 18.019531 12.941406 C 18.195312 12.765625 18.335938 12.554688 18.441406 12.308594 C 18.53125 12.0625 18.582031 11.796875 18.582031 11.535156 C 18.582031 11.289062 18.546875 11.023438 18.441406 10.796875 C 18.355469 10.585938 18.214844 10.390625 18.054688 10.234375 C 17.878906 10.078125 17.6875 9.9375 17.457031 9.847656 C 17.25 9.761719 17 9.726562 16.773438 9.726562 L 10.378906 9.726562 C 10.042969 9.726562 9.710938 9.691406 9.375 9.617188 C 9.058594 9.550781 8.742188 9.441406 8.445312 9.320312 C 8.164062 9.199219 7.882812 9.039062 7.636719 8.863281 C 7.390625 8.6875 7.144531 8.492188 6.933594 8.28125 C 6.722656 8.070312 6.527344 7.824219 6.351562 7.578125 C 6.175781 7.316406 6.035156 7.035156 5.914062 6.753906 C 5.789062 6.457031 5.703125 6.15625 5.648438 5.859375 C 5.597656 5.542969 5.5625 5.242188 5.5625 4.925781 C 5.5625 4.609375 5.597656 4.292969 5.648438 3.996094 C 5.703125 3.695312 5.804688 3.398438 5.914062 3.117188 C 6.035156 2.835938 6.175781 2.570312 6.351562 2.308594 C 6.527344 2.0625 6.722656 1.832031 6.933594 1.621094 C 7.144531 1.410156 7.390625 1.21875 7.652344 1.058594 L 7.652344 1.046875 C 7.917969 0.871094 8.199219 0.730469 8.480469 0.605469 C 8.777344 0.484375 9.074219 0.394531 9.394531 0.34375 C 9.710938 0.289062 10.042969 0.253906 10.375 0.253906 L 19.898438 0.253906 L 19.898438 3.117188 L 10.378906 3.117188 C 10.113281 3.117188 9.851562 3.152344 9.585938 3.242188 C 9.359375 3.328125 9.148438 3.453125 8.953125 3.628906 C 8.777344 3.785156 8.636719 3.980469 8.550781 4.1875 C 8.460938 4.417969 8.40625 4.679688 8.40625 4.925781 C 8.40625 5.191406 8.441406 5.453125 8.550781 5.699219 C 8.65625 5.929688 8.792969 6.140625 8.96875 6.332031 C 9.144531 6.507812 9.355469 6.648438 9.585938 6.753906 C 9.832031 6.84375 10.09375 6.894531 10.359375 6.894531 L 16.753906 6.894531 C 17.070312 6.894531 17.386719 6.929688 17.6875 6.984375 C 17.984375 7.035156 18.28125 7.140625 18.566406 7.265625 C 18.847656 7.386719 19.109375 7.527344 19.355469 7.703125 C 19.601562 7.878906 19.828125 8.054688 20.039062 8.265625 C 20.25 8.476562 20.445312 8.707031 20.601562 8.949219 C 20.777344 9.195312 20.917969 9.460938 21.023438 9.742188 C 21.148438 10.023438 21.234375 10.320312 21.304688 10.621094 C 21.410156 10.921875 21.445312 11.21875 21.445312 11.535156 Z M 21.445312 11.535156 " />
                  <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 0.238281 0.253906 L 3.207031 0.253906 L 3.207031 16.367188 L 0.238281 16.367188 Z M 0.238281 0.253906 " />
                </g>
              </svg>
            </button>
            <p class="text-center text-gray-600 group-hover:text-primary-focus">  INSPIRE  </p>
          </a>
        </nav>
      </div> <!-- container //end -->
    </section>
    <!-- SECTION-ICONMENU //END -->
    <!-- <div class="divider" /> -->

    <!-- SECTION-CONTENT -->
    <section class="py-10">
      <div class="container max-w-screen-xl px-4 mx-auto">
        <!-- <div class="divider mb-8">
          <h2 class="text-3xl font-bold text-primary">
            New products
          </h2>
        </div> -->
        <div class="title mb-8">
          <h2 class="right-line h1-replace text-3xl font-bold text-primary">
            New products
          </h2>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div v-for="(item) in newProducts.products" :key="item.id">
            <Card
              btname="Read more.."
              :imgurl="item.image.url"
              :title="item.title"
              :content="item.price"
              :link="`/products/${item.id}`"
            />
          </div>
        </div>
      </div>
    </section>
    <!--  SECTION-CONTENT  //END -->

    <!-- SECTION-CONTENT -->
    <section class="py-10">
      <div class="container max-w-screen-xl px-4 mx-auto">
        <!-- <div class="divider mb-8">
          <h2 class="text-3xl font-bold text-primary">
            Hot products
          </h2>
        </div> -->
        <div class="title mb-8">
          <h2 class="left-line h1-replace text-3xl font-bold text-primary">
            Hot products
          </h2>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <div v-for="(item) in hotProducts.products" :key="item.id">
            <Card
              btname="Read more.."
              :imgurl="item.image.url"
              :title="item.title"
              :content="item.price"
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
export default {
  name: 'IndexPage',
  async asyncData ({ $axios }) {
    let cat = []
    let slide = []
    try {
      const qs = require('qs')
      const query = qs.stringify(
        {
          populate: {
            img: {
              fields: ['url']
            }
          }
        },
        {
          encodeValuesOnly: true
        }
      )
      cat = await $axios.$get('/allcategories')
      slide = await $axios.$get(`/slideshows/?${query}`)
      // or can use https://strapi-gypsy-store.herokuapp.com/api/slideshows?populate[img][fields][0]=url
    } catch (error) {
      console.log(error)
    }
    return { allcategory: cat, slide }
  },
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
      return this.allcategory.find(x => x.id === 4)
    },
    hotProducts () {
      return this.allcategory.find(x => x.id === 3)
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
<style scoped>
.splide {
  padding: 0 !important;
}
.title {
    overflow-x: hidden;
    text-align: center;
}
h2.h1-replace {
    @apply text-primary;
    line-height: 1.2;
    margin: 0 0 10px;
    padding: 0;
}
h1, h2.h1-replace {
    position: relative;
    font-size: 40px;
    text-align: center;
    display: inline-block;
    text-transform: uppercase;
}
h1.right-line:before, h2.h1-replace.right-line:before {
    /* display: block; */
    @apply hidden md:block;
    content: "";
    position: absolute;
    height: 1px;
    @apply bg-primary;
    left: calc(100% + 120px);
    width: 100%;
    top: 25px;
}
h1.right-line:after, h2.h1-replace.right-line:after {
    /* display: block; */
    @apply hidden md:block;
    content: "";
    position: absolute;
    width: 88px;
    height: 27px;
    background: url('~@/static/images/cap-click-right.svg') 50% no-repeat;
    top: 12px;
    right: -105px;
}
h1.left-line:before, h2.h1-replace.left-line:before {
    /* display: block; */
    @apply hidden md:block;
    content: "";
    position: absolute;
    height: 1px;
    @apply bg-primary;
    right: calc(100% + 120px);
    width: 100%;
    top: 25px;
}
h1.left-line:after, h2.h1-replace.left-line:after {
    /* display: block; */
    @apply hidden md:block;
    content: "";
    position: absolute;
    width: 88px;
    height: 27px;
    background: url('~@/static/images/cap-click-left.svg') 50% no-repeat;
    top: 12px;
    left: -105px;
}
</style>
