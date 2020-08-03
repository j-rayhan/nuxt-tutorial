<template>
  <div>
    <Header @sidenavToggle="displaySidenav = !displaySidenav" />
    <Sidenav :show="displaySidenav" @close="displaySidenav = false" />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/Navigation/Header'
import Sidenav from '@/components/Navigation/Sidenav'
export default {
  components: {
    Header,
    Sidenav,
  },
  data() {
    return {
      displaySidenav: false,
    }
  },
}
</script>
<style></style>
