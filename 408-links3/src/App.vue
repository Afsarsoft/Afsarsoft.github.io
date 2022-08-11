<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      vueSite: "https://vuejs.org/",
      vueSchool: "https://vueschool.io/courses?filter=free-courses",
      vueMastery: "https://www.vuemastery.com/courses-path/beginner/",
      courseGoalA: "Learn Vue!",
      courseGoalB: "Master Vue!",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
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
      <h1>Vue, input event, v-on, this</h1>
    </header>
    <main id="link">
      <div class="user-info">
        <h2>Vue Links</h2>
        <p>{{ outputGoal() }}</p>
        <p>Vue <a v-bind:href="vueSite" target="_blank">main site</a>.</p>
        <p>Vue <a :href="vueSchool" target="_blank">school</a>.</p>
        <p>Vue <a :href="vueMastery" target="_blank">mastery</a>.</p>
      </div>
    </main>
  </body>
</template>

<style scoped></style>
