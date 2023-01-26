<template>
  <v-form ref="form"
    v-model="valid"
    @submit.prevent="register" 
    lazy-validation:true
  class="bg-primary border rounded"
  style="width: 300px">
    <h2 class="text-h5 text-center">New User</h2>
    <v-col cols="12">
      <v-text-field
        append-inner-icon="fas fa-envelope"
        variant="underlined"
        density="comfortable"
        :rules="emailRules"
        v-model="user.email"
        label="Email"
      >
      </v-text-field>

      <v-text-field
      append-inner-icon="fas fa-t"
        variant="underlined"
        density="comfortable"
        type="password"
        v-model="user.password"
        :rules="passwordRules"
        label="Password"
        required
      ></v-text-field>

    </v-col>
    <v-col cols="12" class="d-flex justify-content-center">
    <v-btn
    append-icon="fas fa-check"
    variant="elevated" color="blue"
    type="submit">
      Register
    </v-btn>
  </v-col>
  </v-form>

</template>

<script>
import usersColRef from '../firebase'

import { auth, createUserWithEmailAndPassword } from "../firebase";
  
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => /^(?=.*\d)[a-zA-Z\d]{8,}$/.test(v) || 'Passwords should be 8 characters long and have at least 1 number',
      ],
      valid: false,
    };
  },
  methods: {
    register() {
        const email = this.user.email
        const password = this.user.password

        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('Eyyy you did it', user);
            // this.$router.push({ path: `/` });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // ..
          });
    },

    async validate () {
      if (this.user.email || this.user.password) {
            return
        }
        
        const { valid } = await this.$refs.form.validate()

        if (valid) {
          this.register(email, password)
        }
      }
  }
}



</script>

<style></style>
