<template>
  <v-container>
    <v-responsive>
      <h2 class="text-h5">New Poem</h2>
      <v-row class="formcont py-5" style="min-width: 380px; min-height: 600px">
        <v-form
          @submit.prevent="createPoem"
          style="min-width: 380px"
        >
          <v-col cols="12" class="">
            <v-text-field v-model="author" label="Poem Author"></v-text-field>

            <v-text-field
              v-model="title"
              label="Poem Title"
              required
            ></v-text-field>

            <v-select
              v-model="type"
              label="Poem Type"
              :items="[
                'Sonnet',
                'Villanelle',
                'Haiku',
                'Ekphrastic',
                'Concrete',
                'Elegy',
                'Epigram',
                'Limerick',
                'Ballad',
                'Epitaph',
                'Ode',
                'Free Verse',
              ]"
              required
            ></v-select>

            <v-text-field
              v-model="description"
              label="Describe this poem"
            ></v-text-field>

            <v-text-field
              v-model="body"
              label="Write the poem"
              required
            ></v-text-field>
          </v-col>
          <button class="btn btn-primary">Submit Poem</button>
        </v-form>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import poemsColRef from "../firebase";
import { addDoc } from "firebase/firestore";
export default {
  data() {
    return {
      author: null,
      title: null,
      description: null,
      type: null,
      body: null,
    };
  },

  methods: {
    async createPoem() {
      console.log("Creating Document");
      const addedDoc = await addDoc(poemsColRef, this.$data);
      alert("Poem submission successfully!");
      console.log(addedDoc);
    },
  },
};
</script>

<style></style>
