<template>
  <div>
    <!-- SECTION-CONTENT -->
    <section id="products">
      <div class="container">
        <div class="products-header">
          <h2 class="right-line h1-replace">
            All Products
          </h2>
          <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> -->
        </div>
        <div v-for="(item, index) in productsData" :key="index" :class="`product product-${index+1}`">
          <a href="https://www.facebook.com/happycloudstoreth" target="_blank">
            <figure>
              <img :src="item.image" alt="product-image">
              <figcaption>{{ item.name }}</figcaption>
              <figcaption>{{ item.price }} ฿</figcaption>
            </figure>
          </a>
        </div>
      </div>
    </section>
    <!-- <section class="py-10">
      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="title">
          <h2 class="right-line h1-replace text-3xl font-bold text-primary">
            All Products
          </h2>
        </div>
        <div class="grid h-full card place-items-center mt-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="(item) in productsData" :key="item.id">
              <article class="mb-4">
                <a :href="`/products/${item.id}`" class="rounded-box bg-gray-100 border border-gray-200 block relative p-1 hover:border-primary-focus">
                  <img :src="item.image" class="mx-auto mix-blend-multiply w-auto max-h-52" alt="Product title here">
                </a>
                <div class="pt-3">
                  <p class="font-semibold">
                    {{ item.name }}
                  </p>
                  <h6>
                    <a :href="`/products/${item.id}`" class="text-gray-600 hover:text-primary-focus">
                      {{ item.price }} ฿
                    </a>
                  </h6>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>
<script>
export default {
  name: 'ProductAllPage',
  async asyncData ({ $axios }) {
    let res = []
    try {
      res = await $axios.$get('/products-all')
    } catch (error) {
      // console.log(error)
    }
    return { productsData: res }
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
#products .container {
	display: block;
	width: 80%;
	margin: 0 auto;
	font-size: 0;
}

#products .container .products-header {
	font-size: 16px;
	text-align: center;
	margin-top: 3rem;
	margin-bottom: 3rem;
}

#products .container .products-header h2 {
	/* padding: 2rem 1rem; */
	text-transform: uppercase;
	font-family: "Franklin Gothic Medium";
}

#products .container .products-header p {
	font-family: Cambria;
	color: rgba(89, 89, 89, 1);
	font-size: 1rem;
	font-style: italic;
	line-height: 1.5;
	text-align: center;
}

#products .container .product {
	width: 25%;
	display: inline-block;
	font-size: 16px;
	text-align: center;
	padding: 1.8rem;
	-webkit-transform: scale(1);
	transform: scale(1);
	opacity: 1;
}

#products .container .product:hover {
	-webkit-transform: scale(0.9);
	transform: scale(0.9);
	opacity: 0.8;
	-webkit-transition: opacity 800ms ease-in-out 0s;
	transition: opacity 800ms ease-in-out 0s;
	-webkit-transition: -webkit-transform 1s ease-in-out 0s;
	transition: -webkit-transform 1s ease-in-out 0s;
	transition: transform 1s ease-in-out 0s;
	transition: transform 1s ease-in-out 0s, -webkit-transform 1s ease-in-out 0s;
	cursor: pointer;
}

#products .container .product figure img {
	width: 100%;
	height: auto;
}

#products .container .product figure figcaption {
	font-family: "Franklin Gothic Medium";
	color: rgba(89, 89, 89, 1);
	font-size: 0.8rem;
	font-weight: 600;
	letter-spacing: 0.02rem;
	text-align: center;
	padding: 1rem 0rem 0rem;
	text-transform: uppercase;
}

@media only screen and (max-width: 1024px) {
	#products .container .product {
		width: 50%;
		padding: 3rem;
	}
}

@media only screen and (max-width: 768px) {
	#products .container .product {
		width: 50%;
		padding: 2rem;
	}
}

@media only screen and (max-width: 480px) {
	#products .container .product {
		width: 100%;
	}
}
</style>
