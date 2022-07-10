<template>
  <div class="flex justify-center my-12">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div v-for="(item, index) in howtousedata" :key="index" class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img :src="item.image" alt="howto" class="rounded-xl">
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">
            {{ item.title }}
          </h2>
          <p>{{ item.description }}</p>
          <div class="card-actions">
            <button class="btn btn-primary">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HowtousePage',
  data () {
    return {
      howtousedata: [
        {
          id: 0,
          title: 'Stretch your Herb',
          description: 'Stretch your herb (and money) - get 75% more from your material. DynaVap devices use a lot less of your material, all while producing high level results.',
          image: 'https://happycloud.sgp1.digitaloceanspaces.com/strapi/b66f56da2054a13b137a1c45fb442674.webp?updated_at=2022-07-10T18:39:19.765Z'
        },
        {
          id: 1,
          title: 'Flavor Explosion',
          description: "Take your terpenes to a new high. Enjoy flavor like you've never tasted before in your herb of choice.",
          image: 'https://happycloud.sgp1.digitaloceanspaces.com/strapi/f7db73f6dbe5b5f29b46e24dc4e4817e.webp?updated_at=2022-07-10T18:39:20.556Z'
        },
        {
          id: 2,
          title: 'Eliminate Combustion',
          description: 'Go smoke free. Once you try a DynaVap device, you enter a world of possibility.',
          image: 'https://happycloud.sgp1.digitaloceanspaces.com/strapi/fa1de77097fc8f58019fcaaaae3d56f9.webp?updated_at=2022-07-10T03:02:04.157Z'
        },
        {
          id: 3,
          title: 'Discreet & Portable Design',
          description: 'Get out and enjoy your herb anywhere with DynaVap. Our devices fit right in your pocket and can be enjoyed while doing most any activity.',
          image: 'https://happycloud.sgp1.digitaloceanspaces.com/strapi/af7d70b19db7920e1b1a4d56a4bc8a70.webp?updated_at=2022-07-10T18:39:20.675Z'
        },
        {
          id: 4,
          title: 'Battery Free',
          description: 'There is no battery on our devices. All you need is a heat source, such as a torch or lighter, and you are all set.',
          image: 'https://happycloud.sgp1.digitaloceanspaces.com/strapi/679f7bfa3c8320a19cc317b3f0eb1184.webp?updated_at=2022-07-09T21:44:20.697Z'
        },
        {
          id: 5,
          title: 'Made in the USA',
          description: 'DynaVap devices are proudly made in the USA - Wisconsin to be exact.',
          image: 'https://happycloud.sgp1.digitaloceanspaces.com/strapi/733413d286089362dcedca4f861baf75.webp?updated_at=2022-07-10T18:39:19.807Z'
        }
      ]
    }
  }
}
</script>
<style>
#howtouse {
	/* width: 100%;
  display: block;
	margin: 2rem 0rem; */
	/*  background-color:  #f5f2f1;*/
	/* padding: 1.4rem 0rem; */
}

#howtouse .container {
	/* display: block;
	width: 80%;
	margin: 0 auto;
	font-size: 0; */
}
</style>
