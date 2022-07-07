<template>
  <div>
    <!-- SECTION-CONTENT -->
    <section class="py-10">
      <div class="flex flex-col w-full border-opacity-50">
        <div class="divider">
          <h2 class="text-3xl font-bold text-primary">
            Dynavap Products
          </h2>
        </div>
        <div class="grid h-full card place-items-center mt-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="(item) in dynavapData.data" :key="item.id">
              <article class="mb-4">
                <a :href="`/products/${item.id}`" class="rounded-box bg-gray-100 border border-gray-200 block relative p-1 hover:border-primary-focus">
                  <img :src="item.attributes.image.data.attributes.url" class="mx-auto mix-blend-multiply w-auto max-h-52" alt="Product title here">
                </a>
                <div class="pt-3">
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
  name: 'DynavapPage',
  async asyncData ({ $axios }) {
    let dynavapData = []
    try {
      dynavapData = await $axios.$get('/products?filters[categories][name][$eq]=dynavap&populate[image][fields][0]=url&populate[categories]=%2A')
    } catch (error) {
      console.log(error)
    }
    return { dynavapData }
  },
  data () {
    return {
      products: null
    }
  }
}
</script>
