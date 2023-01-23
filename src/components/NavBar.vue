<template>

<v-app-bar>
    <v-row justify="space-around"> 

    <v-col cols="2">
        <div class="text-h4" style="color: #FFA500"> PoemHub </div>
    </v-col>

    <v-col cols="6" class="link-cont d-flex justify-content-around">
        <v-btn href="/" class="link">  
            <i class="fas fa-home fa-beat-fade" aria-hidden="true"></i> Feed 
        </v-btn>
        <v-btn href="/yourpoems" class="link"> 
            <i class="fas fa-book" aria-hidden="true"></i> Your Poems 
        </v-btn>
        <v-btn href="/add-poem" class="link"> 
            <i class="fas fa-pen-nib" aria-hidden="true"></i> New Poem 
        </v-btn>
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
</v-row>
  </v-app-bar>

  </template>

  <script>

</script>