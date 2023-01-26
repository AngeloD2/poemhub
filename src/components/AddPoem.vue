<template>
  <v-form ref="form"
    v-model="valid"
    @submit.prevent="validate" 
    lazy-validation:true
  class="bg-primary border rounded"
  style="width: 300px">
    <h2 class="text-h5 text-center">New Poem</h2>
    <v-col cols="12">
      <v-text-field
        append-inner-icon="fas fa-at"
        variant="underlined"
        density="comfortable"
        v-model="poem.author"
        label="Poem Author"
      >
      </v-text-field>

      <v-text-field
      append-inner-icon="fas fa-t"
        variant="underlined"
        density="comfortable"
        v-model="poem.title"
        :rules="[v => !!v || 'Item is required']"
        label="Poem Title"
        required
      ></v-text-field>

      <v-select
        variant="underlined"
        v-model="poem.type"
        :items="poemtypes"
        multiple
        label="Poem Type"
      ></v-select>

      <v-text-field
      append-inner-icon="fas fa-info"
        variant="underlined"
        density="comfortable"
        v-model="poem.description"
        label="Describe this poem"
      ></v-text-field>

      <v-text-field
      append-inner-icon="fas fa-pen-nib"
        variant="underlined"
        density="comfortable"
        v-model="poem.body"
        :rules="[v => !!v || 'Item is required']"
        label="Write the poem"
        required
      ></v-text-field>

    </v-col>
    <v-col cols="12" class="d-flex justify-content-center">
    <v-btn
    append-icon="fas fa-check"
    variant="elevated" color="blue"
    type="submit">
      Submit Poem
    </v-btn>
  </v-col>
  </v-form>

</template>

<script>
import poemsColRef from "../firebase";
import { addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      poem: {
        author: null,
        title: null,
        description: null,
        type: null,
        body: null,
      },
      poemtypes: [
        "Sonnet",
        "Villanelle",
        "Haiku",
        "Ekphrastic",
        "Concrete",
        "Elegy",
        "Epigram",
        "Limerick",
        "Ballad",
        "Epitaph",
        "Ode",
        "Free Verse",
      ],
      valid: false,
      showAddDialog: false,
      poemAdded: false,
    };
  },
  methods: {
    async createPoem() {
      this.poem.type = JSON.stringify(this.poem.type);
        await addDoc(poemsColRef, this.poem);
        this.$router.go({ path: `/add-poem` });
    },

    async validate () {
      if (this.poem.title || this.poem.body) {
            return
        }
        const { valid } = await this.$refs.form.validate()

        if (valid) {
          this.createPoem()
        }
      },

  },
};
</script>

<style></style>
