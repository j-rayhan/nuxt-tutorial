<template>
  <div class="admin-post-page">
    <section class="post">
      <AdminPostForm :post="post" @submit="onSubmited" />
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
  asyncData(context) {
    return context.app.$axios
      .$get('/posts/' + context.params.postId + '.json')
      .then((res) => {
        return {
          post: { ...res, id: context.params.postId }
        }
      })
      .catch((e) => context.error(e))
  },
  data() {
    return {
      post: {}
    }
  },
  methods: {
    onSubmited(post) {
      this.$store
        .dispatch('editPost', post)
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
