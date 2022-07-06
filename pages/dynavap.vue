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
            <div v-for="(item) in dynavapProducts" :key="item.id">
              <article class="mb-4">
                <a :href="`/products/${item.id}`" class="rounded-box bg-gray-100 border border-gray-200 block relative p-1 hover:border-primary-focus">
                  <img :src="item.attributes.image.data.attributes.url" class="mx-auto mix-blend-multiply w-auto max-h-52" alt="Product title here">
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
import productfiltersQuery from '../apollo/queries/product/productfilters'
// import categoriesQuery from '../apollo/queries/category/categories'
export default {
  name: 'DynavapPage',
  apollo: {
    products: {
      prefetch: true,
      query: productfiltersQuery,
      variables () {
        return {
          key: 'dynavap',
          pagesize: 100,
          page: 1
        }
      }
    }
  },
  data () {
    return {
      products: null
    }
  },
  computed: {
    dynavapProducts () {
      return this.products.data
    }
  }
}
</script>
