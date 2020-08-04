<template>
  <div class="admin-new-post">
    <section class="new-post">
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
    </section>
  </div>
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
  data() {
    return {
      editedPost: {
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
