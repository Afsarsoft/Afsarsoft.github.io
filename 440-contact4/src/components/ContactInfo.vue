<script lang="ts">
import { defineComponent } from "vue";

// https://vuejs.org/guide/typescript/overview.html
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  // Optional minimum, best practices
  // emits: ["toggleFavorite"],

  // Optional best practices
  emits: {
    toggleFavorite: function (id: string) {
      if (id) {
        return true;
      } else {
        console.warn("Id is missing!");
        return false;
      }
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // https://vuejs.org/guide/components/events.html#event-names
      this.$emit("toggleFavorite", this.id);
      // this.contactIsFavorite = !this.contactIsFavorite;
    },
  },
  mounted() {
    this.id;
    this.name;
    this.phoneNumber;
    this.emailAddress;
  },
});
</script>

<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>
