<template>
  <div>
  <h1>Register</h1>

  <v-text-field
          name="email"
          label="Email"
          v-model='email'
        ></v-text-field>
  <v-text-field
          name="password"
          label="Password"
          v-model='password'
        ></v-text-field>

  <br>
  <div class='myerror' v-html='error' />
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
      console.log(res)
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
.myerror {
  color: red
}
</style>
