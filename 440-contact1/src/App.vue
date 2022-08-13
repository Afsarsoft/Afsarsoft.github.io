<script lang="ts">
import { defineComponent } from "vue";

import ContactInfo from "@/components/ContactInfo.vue";
// Easier way to do it by changing the vite.config.ts
// import ContactInfo from "./components/ContactInfo.vue";

export default defineComponent({
  components: {
    ContactInfo,
  },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {},
});
</script>

<template>
  <header>
    <h1>Contacts</h1>
  </header>

  <body>
    <ul>
      <contact-info></contact-info>
      <contact-info></contact-info>
    </ul>
  </body>
</template>

<style scoped></style>
