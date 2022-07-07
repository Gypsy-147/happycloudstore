<template>
  <div>
    <!-- SECTION-CONTENT -->
    <section class="py-10">
      <div class="flex flex-col w-full border-opacity-50">
        <div class="title">
          <h2 class="right-line h1-replace text-3xl font-bold text-primary">
            Inspire Products
          </h2>
        </div>
        <div class="grid h-full mt-6 card place-items-center">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div v-for="(item) in inspireData.data" :key="item.id">
              <article class="mb-4">
                <a :href="`/products/${item.id}`" class="relative block p-1 bg-gray-100 border border-gray-200 rounded-box hover:border-primary-focus">
                  <img :src="item.attributes.image.data.attributes.url" class="w-auto mx-auto mix-blend-multiply max-h-52" alt="Product title here">
                </a>
                <div class="pt-3">
                  <!-- <a class="float-right px-3 py-2 text-gray-400 border border-gray-300 rounded-md hover:border-primary-focus hover:text-primary-focus">
                  <i class="fa fa-heart" />
                </a> -->
                  <p class="font-semibold">
                    {{ item.attributes.title }}
                  </p>
                  <h6>
                    <a :href="`/products/${item.id}`" class="text-gray-600 hover:text-primary-focus">
                      {{ item.attributes.price }} ฿
                    </a>
                  </h6>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  SECTION-CONTENT  //END -->
  </div>
</template>
<script>
export default {
  name: 'InspirePage',
  async asyncData ({ $axios }) {
    let inspireData = []
    try {
      inspireData = await $axios.$get('/products?filters[categories][name][$eq]=inspire&populate[image][fields][0]=url&populate[categories]=%2A')
    } catch (error) {
      console.log(error)
    }
    return { inspireData }
  },
  data () {
    return {
      products: null
    }
  }
}
</script>
<style scoped>
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
</style>
