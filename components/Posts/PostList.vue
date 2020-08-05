<template>
  <section class="post-list">
    <PostPreview
      v-for="v in loadedPosts"
      :id="v.id"
      :key="v.id"
      :is-admin="isAdmin"
      :title="v.title"
      :preview-text="v.previewText"
      :thumbnail="v.thumbnail"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {
    loadedPosts() {
      // eslint-disable-next-line
      // console.log('PRINT IN %s=====>', 'store', this.$store)
      return this.$store.getters.loadedPosts
    },
  },
}
</script>

<style>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
