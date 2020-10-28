const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      myStyle: {
        color: ""
      }
    };
  },
  // When we want to monitor and watch for a property, we use watchers
  // Use for no update cases 
  watch: {
    // we want to reset the counter when reach 50
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
  },
  methods: {
    resetCounter() {
      this.counter = 0;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
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
    }
  }
});

app.mount('#counter');


