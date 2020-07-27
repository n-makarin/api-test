<template>
  <div class="index">
    <h1>Blog</h1>
    <PostList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PostList from '~/components/PostList.vue'

export default Vue.extend({
  components: {
    PostList
  }
})
</script>

<style scoped lang="scss">

</style>
