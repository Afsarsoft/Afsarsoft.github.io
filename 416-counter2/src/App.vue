<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      counter: 0 as number,
      myStyle: {
        color: "" as string,
      },
    };
  },
  // When we want to monitor and watch for a property, we use watchers
  // Use for no update cases
  watch: {
    // we want to reset the counter when reach 50
    counter(value: number) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  methods: {
    resetCounter() {
      this.counter = 0;
    },
    add(num: number) {
      this.counter = this.counter + num;
    },
    reduce(num: number) {
      this.counter = this.counter - num;
    },

    changeColor() {
      if (this.counter > 0) {
        this.myStyle.color = "green";
      }
      if (this.counter < 0) {
        this.myStyle.color = "red";
      }
      if (this.counter === 0) {
        this.myStyle.color = "#222";
      }
    },
    displayCounter() {
      this.changeColor();
      return this.counter;
    },
  },
});
</script>

<template>
  <body>
    <main>
      <div id="counter" class="container">
        <h1>counter</h1>
        <h2>Reset counter if > 50</h2>

        <div :style="myStyle">
          <span id="value">{{ displayCounter() }}</span>
          <!-- <span id="value">{{counter}}</span> -->
        </div>

        <div class="button-container">
          <button @click="reduce(1)" class="btn decrease">decrease</button>
          <button @click="reduce(5)" class="btn decrease">decrease 5</button>
          <button @click="resetCounter" class="btn reset">reset</button>
          <button @click="add(1)" class="btn increase">increase</button>
          <button @click="add(10)" class="btn increase">increase 10</button>
        </div>
      </div>
    </main>
  </body>
</template>

<style scoped></style>
