
const app = Vue.createApp({
  data() {
    return {
      name: ''
    };
  },
  // For most calculations based on other data we should use Computed 
  // They basically behave as data properties to avoid getting call each time
  // Only use with data that depends on other data 
  computed: {
    fullname() {
      console.log('Running agin ...');
      if (this.name === '') {
        return '';
      }
      return `${this.name} Cyrus`;
    },
  },
  methods: {
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#bind2');
