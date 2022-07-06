<template>
  <div class="flex justify-between ml-6 mr-6 mt-4">
    <nuxt-link to="/">
      <span class="emoji"> &#x2328;&#xFE0F; </span>
    </nuxt-link>
    <button class="snipcart-checkout flex items-center">
      <Cart />
      <span
        class="snipcart-total-price ml-3 font-semibold text-sm text-pink"
      />
    </button>
  </div>
</template>
<script>
import Cart from './icons/cart.vue'
export default {
  name: 'NavComponent',
  components: {
    Cart
  }
}
</script>
<style>
.emoji {
  font-size: 45px;
}
</style>
