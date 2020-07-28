<template>
  <div class="post">
    <div class="post__title">
      {{ data.title }}
    </div>
    <div
      v-if="brief"
      class="post__description"
    >
      {{ data.description }}
    </div>
    <div
      v-else
      class="post__text"
    >
      {{ data.text }}
    </div>
    <div class="post__date">
      {{ data.date_of_creation }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    brief: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped lang="scss">

</style>
