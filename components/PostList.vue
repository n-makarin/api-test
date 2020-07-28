<template>
  <div class="post-list">
    <div
      v-for="post in data"
      :key="post.id"
      class="post-list__wrapper"
    >
      <Post
        :data="post"
        brief
        class="post-list__item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IPost } from '~/types/post'
import Post from '~/components/Post.vue'

export default Vue.extend({
  components: {
    Post
  },

  props: {
    data: {
      type: Array,
      default: (): IPost[] => []
    }
  }
})
</script>

<style scoped lang="scss">

</style>
