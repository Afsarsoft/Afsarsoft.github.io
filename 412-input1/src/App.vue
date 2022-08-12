<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      name: "" as string,
    };
  },
  methods: {
    setName() {
      // TODO: Volar bug
      // https://github.com/vuejs/babel-plugin-jsx/issues/234
      this.name = event.target.value;
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
      <h1>Vue, input event, v-on</h1>
    </header>
    <main id="input">
      <div class="user-info">
        <input type="text" v-on:input="setName()" />
        <p>Your Name: {{ name }}</p>
      </div>
    </main>
  </body>
</template>

<style scoped></style>
