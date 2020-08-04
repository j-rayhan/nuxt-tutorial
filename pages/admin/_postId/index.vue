<template>
  <div class="admin-post-page">
    <section class="update-post">
      <AdminPostForm :post="post" />
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
  data() {
    return {
      post: {
        author: 'Johir',
        title: 'This is my first post',
        thumbnail:
          'https://c4.wallpaperflare.com/wallpaper/286/1013/130/simple-background-blue-gradient-wallpaper-preview.jpg',
        content: 'Super amazing, thanks for that!',
      },
    }
  },
}
</script>

<style></style>
