<template>
  <v-app :theme="theme">
    <v-container class="">
      <v-responsive aspect-ratio="16 / 9">
        <v-row class="bg-primary d-flex flex-row justify-content-around py-5">

          <v-col cols="2" class="bg-secondary border border-0 rounded-2" style="max-height:350px">  
            <div class="text-caption text-center"> Quick Information </div>
            <v-divider color="primary" thickness="5"> </v-divider>    
          </v-col>

          <v-col cols="6" class="bg-secondary border border-0 rounded-2" style="min-height: 500px">
            <v-main>
            <v-row name="contentTitle" class="border border-0 rounded-top py-3 justify-content-center"> 
                <span> Poems </span>
            </v-row>
            <v-divider thickness="5"> </v-divider>
            <v-card class="py-2 bg-tertiary">
              <v-container style="max-height:768px; overflow-y:scroll; overflow-x:hidden">
                <PoemsListVue/>
              </v-container>
              </v-card>
            </v-main>
          </v-col>

          <v-col cols="2" class=" bg-secondary border border-0 rounded-2 rounded-bottom text-white" style="max-height:200px"> 
            <div class="text-h6 text-center"> About us </div>
            <v-divider color="primary" thickness="5"> </v-divider>

            <div class="text-body-2 "> 
                <span class="font-weight-medium" style="color: #FFA500"> PoemHub </span> <br/>
                is built by a pair of students that want to share and discover
                poems.
            </div>
        </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </v-app>
</template>

<script setup>
import PoemsListVue from "@/components/PoemsList.vue"

</script>

<style>

.link {
    text-decoration: none;
    color: black;
    height:100%;
}

.link-cont {
    margin-top:0.4%;
}

</style>
