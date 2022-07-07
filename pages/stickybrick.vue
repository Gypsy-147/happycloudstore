<template>
  <div>
    <!-- SECTION-CONTENT -->
    <section class="py-10">
      <div class="flex flex-col w-full border-opacity-50">
        <div class="divider">
          <h2 class="text-3xl font-bold text-primary">
            Sticky Brick Products
          </h2>
        </div>
        <div class="grid h-full mt-6 card place-items-center">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div v-for="(item) in stickybrickData.data" :key="item.id">
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
  name: 'StickyBrickPage',
  async asyncData ({ $axios }) {
    let stickybrickData = []
    try {
      stickybrickData = await $axios.$get('/products?filters[categories][name][$eq]=stickybrick&populate[image][fields][0]=url&populate[categories]=%2A')
    } catch (error) {
      console.log(error)
    }
    return { stickybrickData }
  },
  data () {
    return {
      products: null
    }
  }
}
</script>
