<template>
  <div class="container">
    <h1>This is users index page</h1>
    <hr />
    <input v-model="userId" type="text" />
    <button @click="onLoadUser">Load user</button>
    <nuxt-child />
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
  layout: 'users',
}
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
