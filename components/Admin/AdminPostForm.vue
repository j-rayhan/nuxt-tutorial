<template>
  <form @submit.prevent="onSave">
    <AppInput v-model="editedPost.author">Author Name</AppInput>
    <AppInput v-model="editedPost.title">Title</AppInput>
    <AppInput v-model="editedPost.thumbnail">Thumbnail Link</AppInput>
    <AppInput v-model="editedPost.previewText" control-type="textarea"
      >Preview Text</AppInput
    >
    <AppInput v-model="editedPost.content" control-type="textarea"
      >Content</AppInput
    >
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px;"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</AppButton
    >
  </form>
</template>

<script>
export default {
  name: 'NewPost',
  props: {
    post: {
      type: Object,
      default: () => {},
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: '',
            previewText: '',
            updated: new Date()
          }
    }
  },
  methods: {
    onSave() {
      // Save Post
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      // Navigate back
      this.$router.push('/admin')
    }
  }
}
</script>

<style></style>
