<template>
  <div class="admin-page">
    <h1>Admin pages</h1>
    <section class="new-post">
      <button @click="$router.push('/admin/new-post/')">Create New Post</button>
    </section>
    <section class="existing-posts">
      <h1>Existing Post</h1>
      <PostList is-admin />
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: {
    PostList,
  },
}
</script>

<style>
.admin-page {
  padding: 20px;
}
.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}
.existing-posts h1 {
  text-align: center;
}
</style>
