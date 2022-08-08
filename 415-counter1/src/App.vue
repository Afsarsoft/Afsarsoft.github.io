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
  methods: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
    resetCounter() {
      this.counter = 0;
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

        <div :style="myStyle">
          <span id="value">{{ displayCounter() }}</span>
          <!-- <span id="value">{{counter}}</span> -->
        </div>

        <div class="button-container">
          <button @click="decreaseCounter" class="btn decrease">
            decrease
          </button>
          <button @click="resetCounter" class="btn reset">reset</button>
          <button @click="increaseCounter" class="btn increase">
            increase
          </button>
        </div>
      </div>
    </main>
  </body>
</template>

<style scoped></style>
