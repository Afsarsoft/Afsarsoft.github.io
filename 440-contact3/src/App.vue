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
        {
          id: "mark",
          name: "Mark Brown",
          phone: "0944 994421 33",
          email: "mark@localhost.com",
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
      <!-- Note: need to be Kebab case here -->
      <!-- To have boolean type, we need to use v-bind or just : -->
      <!-- Note that only string value can have without v-bind  -->
      <contact-info
        v-for="friend in friends"
        :key="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="true"
      ></contact-info>
    </ul>
  </body>
</template>

<style scoped></style>
