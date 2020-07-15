new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack() {
      let damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      // log it
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage
      });

      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    specialAttack() {
      let damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      // log it
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster hard for ' + damage
      });
      if (this.checkWin()) {
        return
      }
      this.monsterAttacks();
    },
    heal() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      // log it
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10'
      });
      this.monsterAttacks();
    },
    giveUp() {
      this.gameIsRunning = false;
    },
    monsterAttacks() {
      let damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      // log it
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Player for ' + damage
      });

      this.checkWin();
    },
    // Getting random number
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin() {
      if (this.monsterHealth <= 0) {
        // JavaScript function
        if (confirm('You won! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        // JavaScript function
        if (confirm('You lost! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }

});