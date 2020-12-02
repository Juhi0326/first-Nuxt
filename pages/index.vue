<template>
  <v-app>
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />
    </v-navigation-drawer>

    <v-app-bar app>
    <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
    <!-- -->
    </v-footer>
  </v-app>
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
