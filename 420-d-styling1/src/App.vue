<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
    boxBClasses() {
      return { active: this.boxBSelected };
    },
    boxCClasses() {
      return { active: this.boxCSelected };
    },
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (box == "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (box == "C") {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});
</script>

<template>
  <header>
    <h1>Vue, Dynamic Styling</h1>
  </header>
  <main id="style">
    <section class="styling">
      <div class="demo" :class="boxAClasses" @click="boxSelected('A')"></div>
      <div class="demo" :class="boxBClasses" @click="boxSelected('B')"></div>
      <div class="demo" :class="boxCClasses" @click="boxSelected('C')"></div>
    </section>
  </main>
</template>

<style scoped></style>
