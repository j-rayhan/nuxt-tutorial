<template>
  <div class="container">
    <h1>This is users index page</h1>
    <hr />
    <input v-model="userId" type="text" />
    <button @click="onLoadUser">Load user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
    }
  },
  methods: {
    onLoadUser() {
      console.log('---->', this.userId)
      this.$router.push('/users/' + this.userId)
    },
  },
}
</script>
<style></style>
