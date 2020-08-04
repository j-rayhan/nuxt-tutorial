<template>
  <div class="admin-new-post">
    <section class="new-post">
      <AdminPostForm />
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
}
</script>

<style></style>
