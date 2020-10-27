
const app = Vue.createApp({
  data() {
    return {
      goal: 'Learn Vue!',
      vueSite: 'https://vuejs.org/',
      vueSchool: 'https://vueschool.io/courses?filter=free-courses',
      vueMastery: 'https://www.vuemastery.com/courses-path/beginner/',
    };
  }
});

app.mount('#link');

