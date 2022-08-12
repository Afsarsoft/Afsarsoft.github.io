<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      name: "",
    };
  },
  // For most calculations based on other data we should use Computed
  // They basically behave as data properties to avoid getting call each time
  // Only use with data that depends on other data
  computed: {
    fullName() {
      console.log("Running agin ...");
      if (this.name === "") {
        return "";
      }
      return `${this.name} Cyrus`;
    },
  },
  methods: {
    resetInput() {
      this.name = "";
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
      <h1>Vue, 2 Ways Binding, v-model</h1>
    </header>
    <main id="bind2">
      <section class="user-info">
        <!-- We want to reset the input -->
        <!-- The best way is to use v-model to give us 2 way binding -->
        <!-- v-model gets the value and sets the value  -->
        <input type="text" v-model="name" />
        <button v-on:click="resetInput">Reset Input</button>
        <p>Your Name: {{ fullName }}</p>
      </section>
    </main>
  </body>
</template>

<style scoped></style>
