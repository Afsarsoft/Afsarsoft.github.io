<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      name: "" as string,
    };
  },
  methods: {
    setName(event: Event, lastName: string) {
      // TODO: Volar issue
      // Note in TypeScript need to cast it for event types
      // const target = <HTMLInputElement>e.target;
      // this.name = `${target.value} ${lastName}`;

      // still getting error from volar, so we go like this ,,,
      // https://github.com/vuejs/babel-plugin-jsx/issues/234
      this.name = `${event.target.value} ${lastName}`;
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
        <!-- listening to input event on this input element  -->
        <!-- having argument with event -->
        <input type="text" v-on:input="setName($event, 'Cyrus')" />
        <p>Your Name: {{ name }}</p>
      </div>
    </main>
  </body>
</template>

<style scoped></style>
