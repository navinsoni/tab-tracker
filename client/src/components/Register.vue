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
      v-model=password
  />
  <br>
  <button @click=register>
  Register
  </button>
  </div>
</template>


<script>
import authenticationService from '@/services/AuthenticationService'
export default {
methods:{
    async register(){
      const res = await authenticationService.register({
        'email':this.email,
        'password':this.password
      })
      console.log('clicked on register', this.email, this.password)
      console.log(res) 
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
