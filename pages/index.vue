<template>
  <div>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <!-- If using vue-router -->
        ez a szöveg
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
    <!-- -->
    </v-footer>
  </div>
</template>

<script>

export default {
  // layout: 'secondLayout',

  head () {
    return {
      title: 'Home page',
      meta: [{ hid: 'description', name: 'description', content: 'I am a new meta tag' }]
    }
  }
}
</script>
