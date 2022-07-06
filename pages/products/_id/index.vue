<template>
  <div class="flex justify-center m-6">
    <div v-if="product !== null">
      <div class="relative flex items-center min-h-screen p-5 overflow-hidden min-w-screen lg:p-10 rounded-box">
        <div class="relative w-full max-w-6xl p-10 mx-auto bg-white shadow-xl lg:p-20 md:text-left rounded-box">
          <div class="items-center -mx-10 md:flex">
            <div class="w-full px-10 mb-10 md:w-1/2 md:mb-0">
              <div class="relative">
                <img :src="product.data.attributes.image.data.attributes.url" class="relative z-10 w-full" alt="">
                <div class="absolute z-0 border-4 border-primary top-10 bottom-10 left-10 right-10" />
              </div>
            </div>
            <div class="w-full px-10 md:w-1/2">
              <div class="mb-10">
                <h1 class="mb-5 text-2xl font-bold uppercase">
                  {{ product.data.attributes.title }}
                </h1>
                <p class="text-sm">
                  {{ product.data.attributes.description }}
                </p>
              </div>
              <div>
                <div class="inline-block mr-5 align-bottom">
                  <span class="text-5xl font-bold leading-none align-baseline">{{ product.data.attributes.price.toLocaleString() }}</span>
                  <span class="text-2xl leading-none align-baseline">฿</span>
                </div>
                <div class="inline-block align-bottom">
                  <button
                    class="mt-4 btn glass bg-primary"
                    @click="goContact"
                  >
                    <i class="mr-2 -ml-2 fa-solid fa-cart-arrow-down" /> BUY NOW
                  </button>
                  <!-- <button
                    class="mt-4 snipcart-add-item btn glass bg-primary"
                    :data-item-id="product.data.id"
                    :data-item-price="product.data.attributes.price"
                    :data-item-url="`${$route.fullPath}`"
                    :data-item-description="product.data.attributes.description"
                    :data-item-image="product.data.attributes.image.data.attributes.url"
                    :data-item-name="product.data.attributes.title"
                    v-bind="customFields"
                  >
                    <i class="mr-2 -ml-2 fa-solid fa-cart-arrow-down" /> BUY NOW
                  </button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productQuery from '../../../apollo/queries/product/product'
export default {
  name: 'ProductPage',
  data () {
    return {
      product: null,
      storeUrl: process.env.storeUrl
    }
  },
  computed: {
    customFields () {
      return this.product.data.attributes.custom_field
        .map(({ title, required, options }) => ({ name: title, required, options }))
        .map((x, index) => Object.entries(x)
          .map(([key, value]) => ({ [`data-item-custom${index + 1}-${key.toString().toLowerCase()}`]: value })))
        .reduce((acc, curr) => acc.concat(curr), [])
        .reduce((acc, curr) => ({ ...acc, ...curr }))
    }
  },
  apollo: {
    product: {
      prefetch: true,
      query: productQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  },
  methods: {
    goContact () {
      window.open('https://www.facebook.com/happycloudthailand', '_blank').focus()
    }
  }
}
</script>
