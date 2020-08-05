<template>
  <div class="admin-post-page">
    <section class="update-post">
      <AdminPostForm :post="post" @submit="onSubmited" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
  name: 'NewPost',
  components: {
    AdminPostForm,
  },
  asyncData(context) {
    return axios
      .get(
        'https://nuxt-blog-85400.firebaseio.com/posts/' +
          context.params.postId +
          '.json'
      )
      .then((res) => {
        return {
          post: res.data,
        }
      })
      .catch((e) => context.error(e))
  },
  data() {
    return {
      post: {},
    }
  },
  methods: {
    onSubmited(post) {
      axios
        .put(
          'https://nuxt-blog-85400.firebaseio.com/posts/' +
            this.$route.params.postId +
            '.json',
          post
        )
        .then((res) => {
          this.$router.push('/admin')
        })
        .catch((e) => console.error(e))
    },
  },
}
</script>

<style></style>
