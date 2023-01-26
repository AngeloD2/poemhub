<template>
    <v-card>
      <v-list
        v-for="poem in poems"
        :key="poem.id"
        class=" bg-tertiary d-flex justify-content-center py-5"
      >
        <v-row class="bg-secondary p-2 border border-0 rounded-3" style="max-width: 530px">
          <v-col
            cols="12"
            md="12"
            class="d-flex justify-content-around ps-1"
          >
          <v-row dense="true" no-gutters="true">
            <v-col cols="12" md="6">
              <span class="text-subtitle-2 p-2 border border-0 rounded-3">
                Title: <span class="font-weight-light"> {{ poem.title }} </span></span> 
            </v-col>
            <v-col cols="12" md="6">
              <span class="text-subtitle-2 p-2 border border-0 rounded-3">
                Author: <span class="font-weight-light"> {{ poem.author }} </span></span> 
            </v-col>
            <v-col cols="12" md="6">
              <span class="text-subtitle-2 p-2 border border-0 rounded-3">
                Type: <span class="font-weight-light"> {{ poem.type }} </span></span> 
            </v-col>
            <v-col cols="12" md="6">
              <span class="text-subtitle-2 p-2 border border-0 rounded-3">
                Description: <span class="font-weight-light"> {{ poem.description }} </span></span> 
            </v-col>
            
          </v-row>
          </v-col>

          <v-divider> </v-divider>

          <v-col cols="12" class="text-body-1 font-weight-normal">
            {{ poem.body }}
          </v-col>

          <v-divider> </v-divider>

          <v-col cols="12" class="d-flex justify-content-end gap-4">

            <v-btn variant="outlined" density="comfortable"
            color="purple"
            @click="updatePoem(poem.id)">
            <i class="fas fa-pen-to-square"> </i>
            </v-btn>
          
            <v-btn variant="outlined" density="comfortable"
            color="red"
            @click="showDeleteDialog = true">
            <i class="fas fa-x"> </i>
            </v-btn>

          </v-col>
        </v-row>


    <!-- This part is a popup that will show when clicking the delete button. -->
    <v-dialog v-model="showDeleteDialog">
      <v-card>
        <v-card-title class="headline">Delete Poem</v-card-title>
        <v-card-text>Are you sure you want to delete this poem?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="deletePoem(poem.id)">Delete</v-btn>
          <v-btn color="blue-grey darken-1" text @click="showDeleteDialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-list>
    </v-card>
</template>

<script>
import poemsColRef from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
export default {
  name: "PoemsList",
  components: {},
  data() {
    return {
      poems: [],
      selectedDoc: null,
      showDeleteDialog: false,
    };
  },
  methods: {
    async fetchPoems() {
      let poemsSnapShot = await getDocs(poemsColRef);
      let poems = [];
      poemsSnapShot.forEach((poem) => {
        let poemData = poem.data();
        poemData.id = poem.id;
        poems.push(poemData);
      });
      console.log(poems);
      this.poems = poems;
    },
    async deletePoem(poemId) {
      let poemRef = doc(poemsColRef, poemId);
      await deleteDoc(poemRef);
      this.showDeleteDialog = false;
      this.$router.replace({ path: `/` });
    },
    updatePoem(poemId) {
    this.$router.go({ path: `/poems/${poemId}` });
}
  },

  created() {
    this.fetchPoems();
  },
};
</script>
