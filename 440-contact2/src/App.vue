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
    return {};
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
      <!-- Note: need to be Kebab case here -->
      <!-- To have boolean type, we need to use v-bind or just : -->
      <!-- Note that only string value can have without v-bind  -->
      <contact-info
        id="Manuel"
        name="Manuel Lorenz"
        phone-number="0123 45678 90"
        email-address="manuel@localhost.com"
        v-bind:is-favorite="true"
      ></contact-info>
      <contact-info
        id="julie"
        name="Julie Jones"
        phone-number="0987 654421 21"
        email-address="julie@localhost.com"
      ></contact-info>
    </ul>
  </body>
</template>

<style scoped></style>
