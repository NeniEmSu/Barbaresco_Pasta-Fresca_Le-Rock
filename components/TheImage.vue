<template lang="html">
  <div
    v-lazy-container="{ selector: 'img' }"
    :class="`image-placeholder ${isRounded}`"
  >
    <img
      :data-src="imageRequired"
      :data-loading="imageRequired.placeholder"
      :width="width"
      :height="height"
      :class="classes"
      :alt="alt"
    >

    <!--        How to use in template
       <ImageResponsive
            :imageURL="`${product.image + '.png'}`"
            :classes="' '"
            :width="'150'"
            :height="'150'"
            :alt="product.name"
            class=" card-img-top mx-auto"
          /> -->
  </div>
</template>

<script>
export default {
  props: {
    imageURL: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imageRequired () {
      return require(`../assets/img/${this.imageURL}`)
    },
    isRounded () {
      return this.rounded ? 'image-placeholder--rounded' : ''
    }
  }
}
</script>

<style scoped lang="scss">
.image-placeholder {
  overflow: hidden;
  line-height: 0;
  border-radius: 50%;
  &--rounded {
    border-radius: 50%;
  }
}
img {
  transition: all ease 0.3s;
  opacity: 0;
  border-radius: 50%;
  object-fit: cover;
  border: 0;
  &[lazy="loading"] {
    opacity: 1;
    filter: blur(15px);
    border-radius: 50%;
  }
  &[lazy="loaded"] {
    opacity: 1;
    border-radius: 50%;
  }
}
</style>
