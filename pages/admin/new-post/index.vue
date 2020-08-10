<template>
  <div class="admin-post-page">
    <section class="post">
      <AdminPostForm @submit="onSubmited" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
  name: 'NewPost',
  middleware: ['check-auth', 'auth'],
  components: {
    AdminPostForm
  },
  methods: {
    onSubmited(post) {
      this.$store
        .dispatch('addPost', post)
        .then((res) => {
          this.$router.push('/admin')
        })
        .catch((e) => {
          // eslint-disable-next-line
            console.error('ERROR***', e)
        })
    }
  }
}
</script>

<style></style>
