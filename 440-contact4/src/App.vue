<script lang="ts">
import { defineComponent } from "vue";

import ContactInfo from "@/components/ContactInfo.vue";

export default defineComponent({
  components: {
    ContactInfo,
  },
  data() {
    return {
      contacts: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFavorite: false,
        },
        {
          id: "mark",
          name: "Mark Brown",
          phone: "0944 994421 33",
          email: "mark@localhost.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(contactId: string) {
      // console.log("works!");
      const identifiedContact = this.contacts.find(
        (contact) => contact.id === contactId
      );
      // To avoid TypeScrip Error check for undefined
      // https://stackoverflow.com/questions/54738221/typescript-array-find-possibly-undefind
      if (identifiedContact === undefined) {
        throw new TypeError("The value was promised to always be there!");
      }
      identifiedContact.isFavorite = !identifiedContact.isFavorite;
    },
  },
});
</script>

<template>
  <header>
    <h1>Contacts</h1>
  </header>

  <body>
    <ul>
      <contact-info
        v-for="contact in contacts"
        :key="contact.id"
        :id="contact.id"
        :name="contact.name"
        :phone-number="contact.phone"
        :email-address="contact.email"
        :is-favorite="contact.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
      ></contact-info>
    </ul>
  </body>
</template>

<style scoped></style>
