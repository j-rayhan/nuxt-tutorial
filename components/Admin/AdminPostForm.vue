<template>
  <form @submit.prevent="onSave">
    <AppInput v-model="editedPost.author">Author Name</AppInput>
    <AppInput v-model="editedPost.title">Title</AppInput>
    <AppInput v-model="editedPost.thumbnail">Thumbnail Link</AppInput>
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
import AppButton from '@/components/UI/AppButton'
import AppInput from '@/components/UI/AppInput'
export default {
  name: 'NewPost',
  components: {
    AppInput,
    AppButton,
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
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
          },
    }
  },
  methods: {
    onSave() {
      // Save Post
      console.log('PRINT IN %s=====>', 'save post', this.editedPost)
    },
    onCancel() {
      // Navigate back
      this.$router.push('/admin')
    },
  },
}
</script>

<style></style>
