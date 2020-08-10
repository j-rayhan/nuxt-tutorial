<template>
  <div class="admin-page">
    <section class="post">
      <AppButton @click="$router.push('/admin/new-post/')">
        Create New Post
      </AppButton>
      <AppButton btn-style="log-out-btn" @click="onLogout">
        Log Out
      </AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Post</h1>
      <PostList is-admin />
    </section>
  </div>
</template>

<script>
export default {
  middleware: ['check-auth', 'auth'],
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    }
  }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}
.post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}
.existing-posts h1 {
  text-align: center;
}
</style>
