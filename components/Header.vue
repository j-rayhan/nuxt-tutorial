<template>
  <header class="header">
    <ul class="nav-items">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/users">Users</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/users/1">One User</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(185, 166, 166);
}
.nav-items {
  list-style: none;
  width: 80%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav-items li {
  margin: 5px;
  padding: 10px;
  background: #fff;
}
</style>
