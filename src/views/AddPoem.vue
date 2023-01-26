<template>
  <v-container class="bg-primary" style="overflow:hidden">
    <v-row style="height:500px">
      <v-col class="bg-secondary border rounded" 
      style="max-width:fit-content; max-height: fit-content;">
        <AddPoemVue />
      </v-col>
      <v-col class="my-auto mx-auto" style="width:500px; width:500px">
        <v-card class="text-center my-auto mx-auto" style="width:500px; width:500px">
        Submit your poems here
      </v-card>
    </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import AddPoemVue from "@/components/AddPoem.vue";
</script>
