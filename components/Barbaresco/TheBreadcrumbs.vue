<template>
  <div>
    <b-breadcrumb :items="items" />
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    items: {
      type: Object
    }
  }
}
</script>
