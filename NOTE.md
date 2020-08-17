# nuxt-TUTORIAL

## Introduction
 ### What is Nuxt ?  
    Ans:  
     *. Builds up on Vue.js  
     *. Allows creation of universal vue apps (server side rendering)  
     *. Configuration via file and folder structure  
     *. Simplifies Development of Vue Apps (vuex, vue-route)

 ### What ... server side rendrernig ? [more...](https://nuxtjs.org/guides/concepts/server-side-rendering/)  
     Ans: Nuxt.js is NOT a server-side framework! (User browser page can rendered on the server => Nuxt creates and optionally renders the vue app) 

 ### Creating Nuxt [app](https://github.com/nuxt/create-nuxt-app) and [commands](https://github.com/nuxt/cli)

 ### What can we Build with Nuxt


## Pages, Routing, Views

 ### Creating a Route with a [Dynamic](https://github.com/j-rayhan/nuxt-tutorial/commit/a0e9ed09b34cfaa5ce8c2578f906527ebe2aac03) Path

```
// pages/users/_id/index.vue
<template>
  <h1>A single user with id: {{ $route.params.id }}</h1>
</template>
```

```
// pages/users/_id/more-details.vue
<template>
  <h1>User details.....</h1>
</template>
```

### Adding Links & Navigating [Around](https://github.com/j-rayhan/nuxt-tutorial/commit/c69b9a637f4e657a26c89d61cf561cf1337c3af0)

```
// pages/index.vue
<template>
  <div class="container">
    <div>
      <nuxt-link to="/users">users</nuxt-link>
    </div>
  </div>
</template>
```

```
// pages/users/index.vue
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
```
## Handling Data
## Connecting ... app to the backend
## Config, Plugings, Modules
## Middleware, Authentication
## Server side
## Building a nuxt app

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
