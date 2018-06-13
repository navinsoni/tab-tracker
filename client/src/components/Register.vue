<template>
  <div>
  <h1>Register</h1>
  <input
    type='email'
    name='email'
    placeholder='email'
    v-model='email'
  />
  <br>
  <input
      type='password'
      name='password'
      placeholder='password'
      v-model='password'
  />
  <br>
  <div class='error' v-html='error' />
  <br>
  <button @click=register>
  Register
  </button>
  </div>
</template>


<script>
import authenticationService from '@/services/AuthenticationService'
export default {
data() {
  return {email: '',
    password: '',
    error: null}
},
methods:{
    async register(){
    try {
      const res = await authenticationService.register({
        'email':this.email,
        'password':this.password
      })
    }
    catch (error) {
      this.error = error.response.data.error
    }
  }
}
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red
}
</style>
