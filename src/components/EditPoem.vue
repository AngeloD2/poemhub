<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2>Edit Poem</h2>
            <form @submit.prevent="updateCity">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control mb-2"
                  placeholder="Author"
                  v-model="poemInfo.author"
                />
              </div>
  
              <div class="form-group">
                <input
                  type="text"
                  class="form-control mb-2"
                  placeholder="Title"
                  v-model="poemInfo.title"
                />
              </div>
  
              <div class="form-group">
                <input
                  type="text"
                  class="form-control mb-2"
                  placeholder="Description"
                  v-model="poemInfo.description"
                />
              </div>
  
              <div class="form-group">
                <input
                  type="text"
                  class="form-control mb-2"
                  placeholder="Type"
                  v-model="poemInfo.type"
                />
              </div>
  
              <div class="form-group">
                <input
                  type="text"
                  class="form-control mb-2"
                  placeholder="Body"
                  v-model="poemInfo.body"
                />
              </div>
  
              <button class="btn btn-primary">Update Poem</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import poemsColRef from "../firebase";
  import { getDoc, doc, setDoc } from "firebase/firestore";
  export default {
    data() {
      return {
        selectedPoem: {},
        poemId: null,
        docRef: null,
        poemInfo: {
          author: null,
          title: null,
          description: null,
          type: null,
          body: null,
        },
      };
    },
  
    methods: {
      async getPoem() {
        let poemRef = doc(poemsColRef, this.poemId);
        this.docRef = poemRef;
        let poem = await getDoc(this.docRef);
        let poemData = poem.data();
        this.poemInfo.author = poemData.author;
        this.poemInfo.title = poemData.title;
        this.poemInfo.description = poemData.description;
        this.poemInfo.type = poemData.type;
        this.poemInfo.body = poemData.body;
      },
      async updatePoem() {
        await setDoc(this.docRef, this.poemInfo);
        alert(
          `Poem with ID of ${this.poemId} has been updated successfully!`
        );
        this.$router.push("/");
      },
    },
  
    created() {
      let poemId = this.$route.params.poemId;
      this.poemId = poemId;
      this.getPoem();
    },
  };
  </script>
  
  <style></style>
  