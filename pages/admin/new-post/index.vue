<template>
  <div class="admin-new-post">
    <section class="new-post">
      <AdminPostForm @submit="onSubmited" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
  name: 'NewPost',
  components: {
    AdminPostForm,
  },
  methods: {
    onSubmited(post) {
      this.$store
        .dispatch('addPost', post)
        .then((res) => {
          this.$router.push('/admin')
        })
        .catch((e) => console.error('ERROR***', e))
    },
  },
}
</script>

<style></style>
