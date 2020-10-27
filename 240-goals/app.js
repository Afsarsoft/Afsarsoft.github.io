// Let's Creating a new Vue app and assign it to a variable
const app = Vue.createApp({
  // Storing our app data
  // Data function must return always an object
  data() {
    return {
      goal1: 'Wake-up everyday at 5AM.',
      goal2: 'Learn Vue!',
      goal3: 'Exercise everyday at least one hour.',
      goal3: 'Go to bed by 9PM.',
    };
  }
});

// Connect Vue to HTML 
app.mount('#goal');

