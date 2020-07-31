new Vue({
  el: '#app',
  data: {
    counter: 0,
    myStyle: {
      color: ""
    }
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
    }
  }
});