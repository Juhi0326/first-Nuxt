<template>
  <v-app>
    <div>
      <v-card class="overflow-hidden">
        <v-app-bar
          absolute
          color="green"
          shrink-on-scroll
          prominent
          src="https://pixabay.com/get/50e9d5444856b108feda8460da29317e1336dce7565079_1920.jpg"
          fade-img-on-scroll
          scroll-target="#scrolling-techniques-3"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
            />
          </template>

          <v-app-bar-nav-icon />

          <v-toolbar-title>JuhiLand</v-toolbar-title>

          <v-spacer />

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>

          <template v-slot:extension>
            <v-tabs align-with-title>
              <v-tab to="/">
                Home
              </v-tab>
              <v-tab to="/weather-app">
                Weather-app
              </v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
        <v-sheet
          id="scrolling-techniques-3"
          class="overflow-y-auto"
          max-height="600"
        >
          <v-container style="height: 300px;" />
        </v-sheet>
      </v-card>
      <nuxt />
    </div>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
.v-tab.v-tab {
  text-decoration: false;
  color: rgb(255, 248, 240);
}
</style>
