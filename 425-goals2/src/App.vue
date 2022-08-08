<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      enteredGoalValue: "" as string,
      goals: [] as string[],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx: number) {
      this.goals.splice(idx, 1);
    },
  },
});
</script>

<template>
  <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <header>
      <h1>Vue, Goals, v-if, v-for</h1>
    </header>
    <main id="goals">
      <section class="user-info">
        <h2>Goals</h2>
        <input type="text" v-model="enteredGoalValue" />
        <button @click="addGoal">Add Goal</button>
        <!-- v-if remove and adds elements from and to DOM -->
        <!-- v-show shows and hides the elements via CSS -->
        <!-- we should always use v-if and only use v-show if elements status changes a lot  -->
        <!-- Do not show below if we have goals -->
        <!-- can have any truthy value  -->
        <p v-if="goals.length === 0">
          No goals have been added yet - please start adding some!
        </p>
        <ul v-else>
          <!-- removing goal -->
          <li v-for="(goal, index) in goals" @click="removeGoal(index)">
            {{ index + 1 }} - {{ goal }}
          </li>
        </ul>
        <!-- some examples for v-for -->
        <!-- <ul> -->
        <!-- range of numbers  -->
        <!-- <li v-for="num in 10">{{ num }}</li> -->
        <!-- </ul> -->
        <!-- <ul> -->
        <!-- Looping through object -->
        <!-- <li v-for="value in {name: 'Jim', age: 30}">{{ value }}</li> -->
        <!-- Getting key and index as well -->
        <!-- <li v-for="(value, key, index) in {name: 'Jim', age: 30}">{{ key }} : {{ value }} - {{ index }}</li> -->
        <!-- </ul> -->
      </section>
    </main>
  </body>
</template>

<style scoped></style>
