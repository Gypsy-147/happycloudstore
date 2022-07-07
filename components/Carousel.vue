<!-- Please remove this file from your project -->
<template>
  <div class="flex justify-center">
    <div class="flex items-end w-full overflow-hidden abolute rounded-box" @mouseout="ishover = !ishover" @mouseover="ishover = !ishover">
      <div
        class="h-56 transition duration-1000 ease-in-out bg-center bg-no-repeat bg-cover max-w-full"
        :class="ishover ? 'scale-105' : 'scale-100'"
        :style="{
          backgroundImage: `url(${imgurl})`,
          // position: 'absolute',
          width: 'inherit'
        }"
      />
      <div class="absolute p-6">
        <div v-if="showtitle" class="mb-1 text-xl font-bold" :class="ishover === true ? 'text-white' : 'text-black'">
          {{ title }}<br>
          <span v-if="subtitle">{{ subtitle }}</span>
        </div>
        <div v-if="showcontent" class="mb-3" :class="ishover === true ? 'text-white' : 'text-black'">
          {{ content }}
        </div>
        <button v-if="showbt">
          <span class="text-xs font-bold uppercase text-base-content btn btn-outline btn-secondary">{{ btname }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselComponent',
  props: {
    heightClass: {
      type: String,
      default: 'h-96'
    },
    showbt: {
      type: Boolean,
      default: true
    },
    showtitle: {
      type: Boolean,
      default: true
    },
    showcontent: {
      type: Boolean,
      default: true
    },
    imgurl: {
      type: String,
      default: '/images/banners/banner_01.png'
    },
    btname: {
      type: String,
      default: 'Read more..'
    },
    title: {
      type: String,
      default: 'Card Title'
    },
    subtitle: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: 'Card Content'
    },
    widthClass: {
      type: String,
      default: 'w-full'
    }
  },
  data () {
    return {
      ishover: false
    }
  }
}
</script>
