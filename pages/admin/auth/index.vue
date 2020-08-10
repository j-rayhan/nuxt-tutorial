<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppInput v-model="email" type="email">E-Mail Address</AppInput>
        <AppInput v-model="password" type="password">Password</AppInput>
        <AppButton type="submit" :btn-style="newClass">{{
          isLogin ? 'Signin' : 'Sign Up'
        }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px;"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? 'Signup' : 'Signin' }}</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/UI/AppInput'
import AppButton from '@/components/UI/AppButton'

export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  components: {
    AppInput,
    AppButton
  },
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  computed: {
    newClass() {
      return this.isLogin ? 'signin' : 'signup'
    }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('authenticateUser', {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password
        })
        .then((res) => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 450px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
