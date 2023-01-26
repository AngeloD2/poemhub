<template>
  <v-app :theme="theme">
    <v-container class="">
      <v-app-bar>
        <v-row justify="space-around">
          <v-col cols="2">
            <div class="text-h4 text-center border border-0 rounded-3">
              PoemHub
            </div>
          </v-col>

          <v-col cols="6" class="link-cont d-flex justify-content-around">
            <RouterLink to="/">
              <v-btn class="link">
                <i class="fas fa-home" aria-hidden="true"></i>
                Feed
              </v-btn>
            </RouterLink>

              <v-btn disabled class="link">
                <i class="fas fa-book" aria-hidden="true"></i> Your Poems
              </v-btn>

            <RouterLink to="/add-poem">
              <v-btn class="link">
                <i class="fas fa-pen-nib" aria-hidden="true"></i> New Poem
              </v-btn>
            </RouterLink>
          </v-col>



          <v-col cols="2">
            <v-btn
              :prepend-icon="
                theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
              "
              @click="onClick"
              >Toggle Theme</v-btn
            >
          </v-col>

          <v-col cols="2">
            <RouterLink to="/register">
            <v-btn>
              Register
              </v-btn>
              </RouterLink>

              <RouterLink to="/login">
            <v-btn>
              Login
              </v-btn>
              </RouterLink>
            <v-btn @click="logoutUser">
              Logout
              </v-btn>
          </v-col>
        </v-row>
      </v-app-bar>

      <router-view class="mt-5" />
    </v-container>
  </v-app>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { auth, signOut, onAuthStateChanged } from './firebase'
import { async } from "@firebase/util";
const theme = ref("light");

// async function state() {
//   onAuthStateChanged(auth, (user) => {
//     console.log('user status:', user)
//   })
// }

async function logoutUser() {
  signOut(auth).then(() => {

  })
  .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
}

function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>
