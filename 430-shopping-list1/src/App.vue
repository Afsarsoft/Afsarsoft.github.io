<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      state: "default",
      header: "shopping list",
      newItem: "",
      items: [
        {
          label: "Banana",
          purchased: false,
        },
        {
          label: "Carrot",
          purchased: false,
        },
        {
          label: "Oatmeal",
          purchased: true,
        },
        {
          label: "Apple",
          purchased: false,
        },
        {
          label: "Avacado",
          purchased: false,
        },
        {
          label: "Bread",
          purchased: false,
        },
      ],
    };
  },
  // when we need to change the data, we use method
  // When we need to change the presentation of existing data, we use computed properties
  computed: {
    characterCount() {
      return this.newItem.length;
    },
    reversedItems() {
      return this.items.slice(0).reverse();
    },
  },
  methods: {
    saveItem() {
      this.items.push({
        label: this.newItem,
        purchased: false,
      });
      this.newItem = "";
    },
    changeState(newState: string) {
      this.state = newState;
      this.newItem = "";
    },
    togglePurchased(item: { label: string; purchased: boolean }) {
      item.purchased = !item.purchased;
    },
  },
});
</script>

<template>
  <body>
    <main id="shopping">
      <div id="shopping-list">
        <div class="header">
          <h1>{{ header.toLocaleUpperCase() }}</h1>
          <button
            v-if="state === 'default'"
            class="btn btn-primary"
            @click="changeState('edit')"
          >
            Add Item
          </button>
          <button v-else class="btn btn-cancel" @click="changeState('default')">
            Cancel
          </button>
        </div>
        <div v-if="state === 'edit'" class="add-item-form">
          <input
            v-model="newItem"
            type="text"
            placeholder="Add an item"
            @keyup.enter="saveItem"
          />
          <p>{{ characterCount }}/200</p>
          <button
            class="btn btn-primary"
            :disabled="newItem.length === 0"
            @click="saveItem"
          >
            Save Item
          </button>
        </div>
        <ul>
          <li
            v-for="item in reversedItems"
            :class="{ strikeout: item.purchased }"
            @click="togglePurchased(item)"
          >
            {{ item.label }}
          </li>
        </ul>
        <p v-if="items.length === 0">
          Nice job! You have bought all your items.
        </p>
      </div>
    </main>
  </body>
</template>

<style scoped></style>
