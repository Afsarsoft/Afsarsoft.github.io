<script lang="ts">
export default {
  data() {
    return {
      goal1: "Wake-up everyday at 5AM.",
      goal2: "Learn Vite + Vue + TS!",
      goal3: "Exercise everyday at least one hour.",
      goal4: "Go to bed by 9PM.",
    };
  },
};
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
      <h1>Goals</h1>
    </header>
    <main id="goal">
      <section id="user-goal">
        <h2>Daily Goals</h2>
        <!--{{}} called Interpolation,Vue looks in data object for it-->
        <p>{{ goal1 }}</p>
        <p>{{ goal2 }}</p>
        <p>{{ goal3 }}</p>
        <p>{{ goal4 }}</p>
      </section>
    </main>
  </body>
</template>

<style scoped></style>
