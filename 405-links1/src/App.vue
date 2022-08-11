<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      goal: "Learn Vue!",
      vueSite: "https://vuejs.org/",
      vueSchool: "https://vueschool.io/courses?filter=free-courses",
      vueMastery: "https://www.vuemastery.com/courses-path/beginner/",
    };
  },
});
</script>

<template>
  <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <header>
      <h1>Vue, input event, v-on</h1>
    </header>
    <main id="link">
      <div class="user-info">
        <h2>Vue Links</h2>
        <p>{{ goal }}</p>
        <!-- We can hard code the link but let's get it dynamically. -->
        <!-- Here we need directive v-bind, to bind an set the element -->
        <!-- Basically, V-bind sets the value of an attribute. -->
        <p>Vue <a v-bind:href="vueSite" target="_blank">main site</a>.</p>
        <!-- Short cut for V-bind is : -->
        <p>Vue <a :href="vueSchool" target="_blank">school</a>.</p>
        <p>Vue <a :href="vueMastery" target="_blank">mastery</a>.</p>
      </div>
    </main>
  </body>
</template>

<style scoped></style>
