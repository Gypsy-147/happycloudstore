<template>
  <div>
    <section id="slide">
      <div class="container">
        <client-only>
          <Splide
            ref="main"
            aria-labelledby="thumbnail-example-heading"
            :options="mainOptions"
          >
            <SplideSlide v-for="(item) in slide.data" :key="item.id">
              <img :src="item.attributes.img.data.attributes.url" :alt="`slide-${item.id}`">
            </SplideSlide>
          </Splide>

          <Splide
            ref="thumbs"
            aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
            :options="thumbsOptions"
          >
            <SplideSlide v-for="(item) in slide.data" :key="item.id">
              <img :src="item.attributes.img.data.attributes.url" :alt="`slide-${item.id}`">
            </SplideSlide>
          </Splide>
        </client-only>
      </div>
    </section>
    <section id="summer-collection">
      <div class="container">
        <div class="sc-content">
          <h1>ARE YOU NEW TO DYNAVAP?</h1>
          <p class="description">
            DynaVap makes battery-free, dry herb vaporizers that provide exceptional flavor, reduces your amount of flower used, and will last you a lifetime.
          </p>
          <a href="/howtouse">LEARN MORE</a>
        </div>
        <div class="sc-media">
          <div class="sc-media-bg">
            <img src="https://happycloud.sgp1.digitaloceanspaces.com/strapi/a54314cc94b29ea3b1ee5ca06d1caa54.webp?updated_at=2022-07-06T23:39:06.226Z" alt="sc-image">
          </div>
        </div>
      </div>
    </section>
    <section id="category" class="py-10">
      <div class="container">
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
      </div>
    </section>
    <section id="newproducts">
      <div class="container">
        <div class="products-header">
          <h2 class="right-line h1-replace">
            new products
          </h2>
          <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> -->
        </div>
        <div v-for="(item, index) in newProducts.products" :key="index" :class="`product product-${index+1}`">
          <a href="https://www.facebook.com/happycloudstoreth" target="_blank">
            <!-- <a :href="`/products/${item.id}`"></a> -->
            <figure>
              <img :src="item.image.url" alt="product-image">
              <figcaption>{{ item.title }}</figcaption>
              <figcaption>{{ item.price }} ฿</figcaption>
            </figure>
          </a>
        </div>
      </div>
    </section>
    <section id="hotproducts">
      <div class="container">
        <div class="products-header">
          <h2 class="left-line h1-replace">
            popular products
          </h2>
          <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> -->
        </div>
        <div v-for="(item, index) in hotProducts.products" :key="index" :class="`product product-${index+1}`">
          <a href="https://www.facebook.com/happycloudstoreth" target="_blank">
            <!-- <a :href="`/products/${item.id}`"></a> -->
            <figure>
              <img :src="item.image.url" alt="product-image">
              <figcaption>{{ item.title }}</figcaption>
              <figcaption>{{ item.price }} ฿</figcaption>
            </figure>
          </a>
        </div>
      </div>
    </section>
    <section id="collections">
      <div class="container">
        <div class="c-1">
          <div class="c-1-image-holder">
            <img src="https://happycloud.sgp1.digitaloceanspaces.com/strapi/ea62e9b0399dcda59429e9e53674505a.webp?updated_at=2022-07-06T17:38:01.712Z" alt="image">
          </div>
        </div>
        <div class="c-2">
          <h2>WHY DYNAVAP</h2>
          <hr>
          <div class="c-2-image-holder">
            <img class="left" :src="slide.data[3].attributes.img.data.attributes.url" alt=""><img
              class="right"
              src="https://happycloud.sgp1.digitaloceanspaces.com/strapi/2a034289701e242c4c9563c2edfc7336.webp?updated_at=2022-07-06T17:38:01.890Z"
              alt=""
            >
          </div>
          <p class="button">
            <a href="https://www.youtube.com/watch?v=EczQQarfSms&ab_channel=DrewIsSharing" target="_blank">Watch Video</a>
          </p>
        </div>
      </div>
    </section>
    <section id="blog">
      <div class="container">
        <div class="blog-header">
          <h2 class="right-line h1-replace">
            latest from blog
          </h2>
          <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> -->
        </div>
        <!-- GETTINGS STARTED-->
        <div v-for="(item, index) in article.data" id="blog-card" :key="index" class="blog-card">
          <!-- item.attributes.image.data.attributes.url -->
          <div
            class="photo bg-cover"
            :style="{ backgroundImage: `url(${item.attributes.image.data.attributes.url})` }"
          />
          <ul class="details">
            <li class="prauthor">
              Happy Cloud Store
            </li>
            <li class="prtags">
              <ul>
                <li>Dynavap</li>
              </ul>
            </li>
          </ul>
          <div class="description">
            <h2>{{ item.attributes.title }}</h2>
            <h3>{{ $dayjs(item.attributes.createdAt).format('MMM D, YYYY h:mm A') }}</h3>
            <p v-if="item.attributes.description" ref="editor" class="truncate">
              {{ item.attributes.description }}
            </p>
            <a :href="`/articles/${item.id}`">Read More</a>
          </div>
        </div>
      </div>
    </section>
    <div class="back-to-top">
      <a href="#nav"> <img title="Back to Top." src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412541/E-commerce%20landing%20page/icons/back_-_top_1x.png" alt="back to top"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $axios }) {
    let cat = []
    let slide = []
    let article = []
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
      const queryArticle = qs.stringify(
        {
          populate: {
            image: {
              fields: ['url']
            }
          }
        },
        {
          encodeValuesOnly: true
        }
      )
      cat = await $axios.$get('/allcategories')
      article = await $axios.$get(`/articles/?${queryArticle}`)
      slide = await $axios.$get(`/slideshows/?${query}`)
      // console.log(article)
      // or can use https://strapi-gypsy-store.herokuapp.com/api/slideshows?populate[img][fields][0]=url
    } catch (error) {
      console.log(error)
    }
    return { allcategory: cat, slide, article }
  },
  data () {
    return {
      mainOptions: {
        arrows: false,
        type: 'loop',
        perPage: 2,
        perMove: 1,
        gap: '1rem',
        pagination: false
      },
      thumbsOptions: {
        type: 'slide',
        rewind: true,
        gap: '1rem',
        pagination: false,
        fixedWidth: 110,
        fixedHeight: 70,
        cover: true,
        focus: 'center',
        isNavigation: true,
        updateOnMove: true
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
  mounted () {
    setTimeout(() => {
      const main = this.$refs.main
      const thumbs = this.$refs.thumbs
      const thumbsSplide = thumbs?.splide
      // const blog = this.$refs.editor
      // console.log(blog)
      // if (blog) {
      //   blog[0].childNodes[0].classList.add('truncate')
      // }
      if (thumbsSplide) {
        main?.sync(thumbsSplide)
      }
    }, 0)
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
#editor {
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.75;
}
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

#slide {
	width: 100%;
	margin: 3rem 0rem;
	padding: 1.4rem 0rem;
}

#slide .container {
	margin: 0 auto;
	width: 80%;
}

#summer-collection {
	width: 100%;
	display: block;
	margin: 6rem 0rem;
}

#summer-collection .container {
	margin: 0 auto;
	width: 80%;
	background-color: #ffffff;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
}

#summer-collection .container .sc-content {
	width: 60%;
	padding-top: 3.4rem;
	padding-right: 3rem;
	padding-bottom: 2rem;
}

#summer-collection .container .sc-content h1 {
	font-family: "Franklin Gothic Medium";
	@apply text-primary;
	font-size: 4rem;
	font-weight: 800;
	letter-spacing: 1rem;
	line-height: 6rem;
	text-transform: uppercase;
	margin-bottom: 2vw;
}

#summer-collection .container .sc-content p.description {
	font-family: Cambria;
	color: rgba(89, 89, 89, 0.8);
	font-size: 1rem;
	font-style: italic;
	line-height: 2rem;
	margin-bottom: 4vw;
	padding-right: 4rem;
}

#summer-collection .container .sc-content a {
	border-bottom: 2px solid;
  @apply border-primary;
	text-decoration: none;
	font-family: "Franklin Gothic Medium";
	color: #000000;
	font-weight: 400;
	text-transform: uppercase;
}

#summer-collection .container .sc-media {
	width: 40vw;
}

#summer-collection .container .sc-media .sc-media-bg {
	width: 100%;
	height: auto;
	padding-top: 3vw;
}

#summer-collection .container .sc-media .sc-media-bg img {
	width: 100%;
	height: auto;
}

@media only screen and (max-width: 1024px) {
	#summer-collection {
		width: 100vw;
		display: block;
		margin-top: 0rem;
	}
	#summer-collection .container {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
	}
	#summer-collection .container .sc-content {
		width: 80vw;
		padding: 0rem 2rem 2rem;
	}
	#summer-collection .container .sc-media {
		width: 80vw;
	}
	#summer-collection .container .sc-content h1 {
		font-size: 5.6vw;
		letter-spacing: 1rem;
		line-height: 4rem;
	}
}

@media only screen and (max-width: 768px) {
	#summer-collection .container .sc-content h1 {
		font-size: 5.6vw;
		letter-spacing: 0.6rem;
		line-height: 2.4rem;
		margin-bottom: 1rem;
	}
}

@media only screen and (max-width: 480px) {
	#summer-collection .container .sc-content p.description {
		font-size: 1rem;
		line-height: 1.8rem;
		margin-bottom: 4vw;
		padding-right: 1.2rem;
		text-align: justify;
		margin-bottom: 2rem;
	}
}
#category {
  width: 100%;
}

#category .container {
	display: block;
	width: 80%;
	margin: 0 auto;
	font-size: 0;
}

#newproducts {
	width: 100%;
  display: block;
	margin: 2rem 0rem;
	/*  background-color:  #f5f2f1;*/
	/* padding: 1.4rem 0rem; */
}

#newproducts .container {
	display: block;
	width: 80%;
	margin: 0 auto;
	font-size: 0;
}

#newproducts .container .products-header {
	font-size: 16px;
	text-align: center;
	margin-bottom: 3rem;
}

#newproducts .container .products-header h2 {
	/* padding: 2rem 1rem; */
	text-transform: uppercase;
	font-family: "Franklin Gothic Medium";
}

#newproducts .container .products-header p {
	font-family: Cambria;
	color: rgba(89, 89, 89, 1);
	font-size: 1rem;
	font-style: italic;
	line-height: 1.5;
	text-align: center;
}

#newproducts .container .product {
	width: 25%;
	display: inline-block;
	font-size: 16px;
	text-align: center;
	padding: 1.8rem;
	-webkit-transform: scale(1);
	transform: scale(1);
	opacity: 1;
}

#newproducts .container .product:hover {
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

#newproducts .container .product figure img {
	width: 100%;
	height: auto;
}

#newproducts .container .product figure figcaption {
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
	#newproducts .container .product {
		width: 50%;
		padding: 3rem;
	}
}

@media only screen and (max-width: 768px) {
	#newproducts .container .product {
		width: 50%;
		padding: 2rem;
	}
}

@media only screen and (max-width: 480px) {
	#newproducts .container .product {
		width: 100%;
	}
}

#hotproducts {
	width: 100%;
  display: block;
	margin: 2rem 0rem;
	/*  background-color:  #f5f2f1;*/
	/* padding: 1.4rem 0rem; */
}

#hotproducts .container {
	display: block;
	width: 80%;
	margin: 0 auto;
	font-size: 0;
}

#hotproducts .container .products-header {
	font-size: 16px;
	text-align: center;
	margin-bottom: 3rem;
}

#hotproducts .container .products-header h2 {
	/* padding: 2rem 1rem; */
	text-transform: uppercase;
	font-family: "Franklin Gothic Medium";
}

#hotproducts .container .products-header p {
	font-family: Cambria;
	color: rgba(89, 89, 89, 1);
	font-size: 1rem;
	font-style: italic;
	line-height: 1.5;
	text-align: center;
}

#hotproducts .container .product {
	width: 25%;
	display: inline-block;
	font-size: 16px;
	text-align: center;
	padding: 1.8rem;
	-webkit-transform: scale(1);
	transform: scale(1);
	opacity: 1;
}

#hotproducts .container .product:hover {
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

#hotproducts .container .product figure img {
	width: 100%;
	height: auto;
}

#hotproducts .container .product figure figcaption {
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
	#hotproducts .container .product {
		width: 50%;
		padding: 3rem;
	}
}

@media only screen and (max-width: 768px) {
	#hotproducts .container .product {
		width: 50%;
		padding: 2rem;
	}
}

@media only screen and (max-width: 480px) {
	#hotproducts .container .product {
		width: 100%;
	}
}

#collections {
	width: 100%;
	display: block;
	margin: 3rem 0rem;
	/*  background-color:  #f5f2f1;*/
	padding: 1.4rem 0rem;
}

#collections .container {
	margin: 0 auto;
	width: 80%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
}

#collections .container .c-1 {
	-webkit-box-flex: 1;
	-ms-flex: 1;
	flex: 1;
	padding: 3rem 0rem 0rem 1rem;
	/*  background-color:  #f5f2f1;*/
}

#collections .container .c-1 .c-1-image-holder {
	width: 100%;
	height: auto;
}

#collections .container .c-1 .c-1-image-holder img {
	width: 100%;
	height: auto;
}

#collections .container .c-2 .c-2-image-holder {
	width: 45%;
	height: auto;
	margin: 3rem auto;
}

#collections .container .c-2 .c-2-image-holder img {
	width: 100%;
	height: auto;
}

#collections .container .c-2 {
	-webkit-box-flex: 1;
	-ms-flex: 1;
	flex: 1;
	padding: 1rem;
	/*  background-color:  #f5f2f1;*/
}

#collections .container .c-2 h2 {
  @apply text-primary;
	padding: 1rem 0rem;
	text-align: right;
	font-family: "Franklin Gothic Medium";
	font-size: 1.8rem;
	letter-spacing: 0.094rem;
	text-transform: uppercase;
}

#collections .container .c-2 hr {
	width: 30%;
	margin-left: 70%;
	display: block;
	height: 1px;
	border: 0;
	border-top: 0.1rem solid;
  @apply border-primary;
	padding: 0;
	margin-bottom: 4rem;
}

#collections .container .c-2 p.button {
	@apply bg-primary;
	-webkit-box-shadow: 0px 1px 3.92px 0.08px rgba(204, 204, 153, 0.35);
	box-shadow: 0px 1px 3.92px 0.08px rgba(204, 204, 153, 0.35);
	width: 45%;
	text-align: center;
	padding: 0.8rem 0.2rem;
	color: #ffffff;
	text-transform: uppercase;
	font-size: 0.7rem;
	margin: 0 auto;
	margin-right: -1%;
	font-weight: 600;
	letter-spacing: 0.1rem;
}

#collections .container .c-2 p.button:hover {
	cursor: pointer;
	background-color: #ffffff;
	@apply text-primary;
	-webkit-transition: background-color 1s ease-in-out 0s;
	-o-transition: background-color 1s ease-in-out 0s;
	transition: background-color 1s ease-in-out 0s;
	-webkit-transition: color 400ms ease-in-out 0s;
	-o-transition: color 400ms ease-in-out 0s;
	transition: color 400ms ease-in-out 0s;
}

#collections .container .c-2 .left {
	position: relative;
	right: -6rem;
	-webkit-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
	box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
}

#collections .container .c-2 .right {
	position: relative;
	top: -2rem;
	right: 2rem;
	-webkit-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
	box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width: 1024px) {
	#collections .container {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
	}
	#collections .container .c-1 {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		padding: 4rem 0rem 0rem 0rem;
	}
	#collections .container .c-2 .c-2-image-holder {
		width: 50%;
		height: auto;
		margin: 3rem auto;
	}
}

@media only screen and (max-width: 768px) {
	#collections .container .c-2 .c-2-image-holder {
		width: 70%;
		height: auto;
		margin: 3rem auto;
	}
	#collections .container .c-2 .left {
		position: relative;
		right: 0rem;
		margin-bottom: 2rem;
	}
	#collections .container .c-2 .right {
		position: relative;
		top: 0rem;
		right: 0rem;
	}
	#collections .container .c-2 p.button {
		width: 60%;
		padding: 0.8rem 2rem;
	}
}

#blog {
	width: 100%;
	display: block;
	/* margin: 3rem 0rem 0rem; */
	/* background-color: #f2f2f2; */
	padding: 0rem 0rem 3rem;
}

#blog .container {
	margin: 0 auto;
	width: 80%;
	/* background-color: #f2f2f2; */
}

#blog .container .blog-header {
	text-align: center;
	margin-bottom: 3rem;
}

#blog .container .blog-header h2 {
	/* padding: 2rem 1rem; */
	text-transform: uppercase;
	font-family: "Franklin Gothic Medium";
	/* color: #000000;
	font-size: 1.875rem;
	font-weight: 400;
	letter-spacing: 0.2rem;
	line-height: 1;
	text-align: center; */
}

#blog .container .blog-header p {
	font-family: Cambria;
	color: rgba(89, 89, 89, 1);
	font-size: 1rem;
	font-style: italic;
	line-height: 1.5;
	text-align: center;
}

.blog-card {
  transition: height 0.3s ease;
  -webkit-transition: height 0.3s ease;
  background: #F8F8F8;
  border-radius: 3px;
  box-shadow: 0 3px 7px -3px rgba(0, 0, 0, 0.3);
  margin: 0 auto 1.6%;
  overflow: hidden;
  position: relative;
  font-size: 14px;
}
.blog-card:hover .details {
  left: 0;
}
.blog-card:hover.alt .details {
  right: 0;
}
.blog-card.alt .details {
  right: -100%;
  left: inherit;
}
.blog-card .photo {
  height: 200px;
  position: relative;
}
/* .blog-card .photo.photo1 {
  background: url("https://www.permaculturereflections.com/wp-content/uploads/2015/07/startsprout.jpg") center no-repeat;
  background-size: cover;
}
.blog-card .photo.photo2 {
  background: url("https://www.permaculturereflections.com/wp-content/uploads/2015/07/designfundamentals1.jpg") center no-repeat;
  background-size: cover;
} */
.blog-card .details {
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  background: rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
  color: #fff;
  font-family: "Roboto";
  list-style: none;
  margin: 0;
  padding: 10px 15px;
  height: 200px;
  /*POSITION*/
  position: absolute;
  top: 0;
  left: -100%;
}
.blog-card .details > li {
  padding: 3px 0;
}
.blog-card .details li:before, .blog-card .details .prtags ul:before {
  font-family: FontAwesome;
  margin-right: 10px;
  vertical-align: middle;
}
.blog-card .details .prauthor:before {
  content: "\f007";
}
.blog-card .details .date:before {
  content: "\f133";
}
.blog-card .details .prtags ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.blog-card .details .prtags ul:before {
  content: "\f02b";
}
.blog-card .details .prtags li {
  display: inline-block;
  margin-right: 3px;
}
.blog-card .details a {
  color: inherit;
  border-bottom: 1px dotted;
}
.blog-card .details a:hover {
  color: #ffa100;
}
.blog-card .description {
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  height:200px;
}
.blog-card .description h2 {
  font-family: "Roboto";
  line-height: 1em;
  font-weight: 800;
  margin: 0 0 10px 0;
}
.blog-card .description h3 {
  color: #9b9b9b;
  line-height: 1.2em;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 400;
  margin: 1.2% 0;
}
.blog-card .description p {
  position: relative;
  margin: 0;
  padding-top: 20px;
}
.blog-card .description p:after {
  content: "";
  background: #00c04e;
  height: 6px;
  width: 40px;
  /*POSITION*/
  position: absolute;
  top: 6px;
  left: 0;
}
.blog-card .description a {
  @apply text-primary;
  margin-bottom: 10px;
  float: right;
}
.blog-card .description a:after {
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  content: "\f061";
  font-family: FontAwesome;
  margin-left: -10px;
  opacity: 0;
  vertical-align: middle;
}
.blog-card .description a:hover:after {
  margin-left: 5px;
  opacity: 1;
}

@media screen and (min-width: 600px) {
  .blog-card {
    height: 150px;
    max-width: 600px;
  }
  .blog-card:hover .photo {
    -webkit-transform: rotate(5deg) scale(1.3);
        -ms-transform: rotate(5deg) scale(1.3);
            transform: rotate(5deg) scale(1.3);
  }
  .blog-card:hover.alt .photo {
    -webkit-transform: rotate(-5deg) scale(1.3);
        -ms-transform: rotate(-5deg) scale(1.3);
            transform: rotate(-5deg) scale(1.3);
  }
  .blog-card.alt .details {
    padding-left: 30px;
  }
  .blog-card.alt .description {
    float: right;
  }
  .blog-card.alt .description:before {
    -webkit-transform: skewX(5deg);
        -ms-transform: skewX(5deg);
            transform: skewX(5deg);
    right: -15px;
    left: inherit;
  }
  .blog-card.alt .photo {
    float: right;
  }
  .blog-card .photo {
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    float: left;
    height: 100%;
    width: 40%;
  }
  .blog-card .details {
    width: 40%;
  }
  .blog-card .description {
    float: left;
    width: 60%;
    z-index: 0;
  }
  .blog-card .description:before {
    -webkit-transform: skewX(-5deg);
        -ms-transform: skewX(-5deg);
            transform: skewX(-5deg);
    content: "";
    background: #F8F8F8;
    width: 100%;
    z-index: -1;
    /*POSITION*/
    position: absolute;
    left: -15px;
    top: 0;
    bottom: 0;
  }
}

.back-to-top {
	padding: 1rem;
	position: fixed;
	bottom: 8%;
	right: 2%;
	z-index: 2;
	opacity: 0.2;
	background-color: rgba(255, 255, 255, 0);
}

.back-to-top:hover {
	-webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
	background-color: rgba(255, 255, 255, 0.4);
	opacity: 1;
}
</style>
