<template>
    <v-card>
      <v-list
        v-for="poem in poems"
        :key="poem.id"
        class=" bg-tertiary d-flex justify-content-center py-5"
      >
        <v-row class="bg-secondary p-3 border border-0 rounded-3" style="max-width: 530px">
          <v-col
            cols="12"
            md="12"
            class="d-flex justify-content-start gap-5 ps-1"
          >
            <div>
              <span class="text-subtitle-1 p-2 border rounded-3">
                Title: </span
              >{{ poem.title }}
            </div>
            <div>
              <span class="text-subtitle-1 p-2 border rounded-3">
                Author: </span
              >{{ poem.author }}
            </div>
            <div>
              <span class="text-subtitle-1 p-2 border rounded-3">
                Type: </span
              >{{ poem.type }}
            </div>
          </v-col>

          <v-col cols="12" class="text-subtitle-2">
            {{ poem.description }}
          </v-col>
          <v-divider> </v-divider>

          <v-col cols="12" class="text-body-1">
            {{ poem.body }}
          </v-col>

          <v-divider> </v-divider>

          <v-col cols="12" class="d-flex justify-content-end gap-4">
            <v-btn style="width:35px">
              <router-link
                :to="{ path: `/poems/${poem.id}` }"
                class="btn"
                style="width:100%"
                >Edit</router-link
              >
            </v-btn>

            <v-btn style="width:35px">
              <a href="#" class="btn btn-danger" 
              style="width:100%"
              @click="deletePoem(poem.id)"
                >Delete</a
              >
            </v-btn>
          </v-col>
        </v-row>
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
      alert("Poem deleted.");
    },
  },

  created() {
    this.fetchPoems();
  },
};
</script>
