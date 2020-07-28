<template>
  <div class="index">
    <h1>Blog</h1>
    <PostList :data="data" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PostList from '~/components/PostList.vue'
import { IPost } from '~/types/post'

export default Vue.extend({
  components: {
    PostList
  },

  async fetch () {
    await this.$store.dispatch('post-list/fetchData')

    this.data = this.$store.getters['post-list/data']
  },

  data (): {
    data: IPost[]
    } {
    return {
      data: []
    }
  }
})
</script>

<style scoped lang="scss">

</style>
