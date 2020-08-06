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
      .get(process.env.baseUrl + '/posts/' + context.params.postId + '.json')
      .then((res) => {
        return {
          post: { ...res.data, id: context.params.postId },
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
      this.$store
        .dispatch('editPost', post)
        .then((res) => {
          this.$router.push('/admin')
        })
        .catch((e) => console.error(e))
    },
  },
}
</script>

<style></style>
