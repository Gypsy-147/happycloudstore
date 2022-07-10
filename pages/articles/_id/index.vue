<template>
  <section id="article">
    <div class="container">
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure><img :src="articleData.data.attributes.image.data.attributes.url" alt="Album"></figure>
        <div class="card-body">
          <h2 class="card-title">
            {{ articleData.data.attributes.title }}
          </h2>
          <div v-html="articleData.data.attributes.content" />
          <div class="card-actions justify-end">
            <a href="/" class="btn btn-primary">
              Back
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ArticlePage',
  async asyncData ({ $axios, route, params }) {
    let articleData
    let paramID
    try {
      if (process.server) {
        paramID = params.id || route.params.id
      }
      articleData = await $axios.$get(`/articles/${paramID}?populate[image][fields][0]=url`)
      // https://strapi-gypsy-store.herokuapp.com/api/products/2?populate[image][fields][0]=url&populate[categories]=%2A&populate[custom_field]=%2A
    } catch (error) {
    //   console.log(error)
    }
    return { articleData }
  },
  data () {
    return {
      // product: null,
      storeUrl: process.env.storeUrl
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style>
#article {
	width: 100%;
	display: block;
	margin: 3rem 0rem;
	/*  background-color:  #f5f2f1;*/
	padding: 1.4rem 0rem;
}

#article .container {
	margin: 0 auto;
	width: 80%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
}
</style>
