<script lang="ts">
import { defineComponent } from "vue";

// COMMENT
// Not use the below for now, since only works with <script setup lang="ts">
// and with that bnot able to able to have "defineComponent"
// defineProps<{
//   // Need to be Camel case here
//   id: string;
//   name: string;
//   phoneNumber: string;
//   emailAddress: string;
// }>();

// https://vuejs.org/guide/typescript/overview.html
export default defineComponent({
  props: {
    id: {
      type: String,
      required: false,
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
      required: false,
      default: false,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite;
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
    <h2>{{ name }} {{ friendIsFavorite ? "(Favorite)" : "" }}</h2>
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
