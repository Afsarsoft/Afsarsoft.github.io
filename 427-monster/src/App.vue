<script lang="ts">
// If we do not directly use any Vue data and methods inside our HTML,
//  we can simply use typical JavaScript code.
const getRandomValue = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

// Define Interface best for TypeScript
// https://stackoverflow.com/questions/47810218/set-data-type-in-vue-data-object-with-typescript

// No difference declare interface or interface
//  https://stackoverflow.com/questions/38683155/difference-between-interface-and-declare-interface
// declare interface Log {
//   actionBy: string;
//   actionType: string;
//   actionValue: number;
// }

interface Log {
  actionBy: string;
  actionType: string;
  actionValue: number;
}

import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0, // keep track of game rounds
      winner: "" as string,
      logMessages: [] as Log[],
    };
  },
  computed: {
    monsterBarStyles() {
      // make it 0 percent if the game is over.
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      // Only use special attack every 3 rounds
      return this.currentRound % 3 !== 0;
    },
  },
  // Using watcher to see who won the game
  watch: {
    // name needs to be same as property to watch
    playerHealth(value: number) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value: number) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = "" as string;
      this.logMessages = [] as Log[];
    },
    attackMonster() {
      this.currentRound++;
      // we want minimum 5 and maximum 12 points of damage.
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "attack", attackValue);
      // When we attack the monster, monster attack back at us
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage("monster", "attack", attackValue);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "special-attack", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      // making sure to not go beyond the initial value
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage("player", "heal", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    // Adding logs
    addLogMessage(who: string, what: string, value: number) {
      // Adding to beginning of the array
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
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
      <h1>Monster Slayer</h1>
    </header>
    <div id="game">
      <section id="monster" class="container">
        <h2>Monster Health</h2>
        <div class="healthbar">
          <div class="healthbar__value" :style="monsterBarStyles"></div>
        </div>
      </section>
      <section id="player" class="container">
        <h2>Your Health</h2>
        <div class="healthbar">
          <div class="healthbar__value" :style="playerBarStyles"></div>
        </div>
      </section>
      <!-- checks for truthy -->
      <section class="container" v-if="winner">
        <h2>Game Over!</h2>
        <h3 v-if="winner === 'monster'">You Lost!</h3>
        <h3 v-else-if="winner === 'player'">You Won!</h3>
        <h3 v-else>It's a draw!</h3>
        <button @click="startGame">Start New Game</button>
      </section>
      <!-- removing the game controls if we have a winner -->
      <!-- <section id="controls" v-if="!winner"> -->
      <!-- since it is a direct neighbor we can have v-else-->
      <section id="controls" v-else>
        <button @click="attackMonster">ATTACK</button>
        <button :disabled="mayUseSpecialAttack" @click="specialAttackMonster">
          SPECIAL ATTACK
        </button>
        <button @click="healPlayer">HEAL</button>
        <button @click="surrender">SURRENDER</button>
      </section>
      <section id="log" class="container">
        <h2>Battle Log</h2>
        <!-- Adding the logs -->
        <ul>
          <li v-for="logMessage in logMessages">
            <!-- simply display them -->
            <!-- {{ logMessage.actionBy }} - {{ logMessage.actionType }} - {{ logMessage.actionValue }} -->
            <span
              :class="{
                'log--player': logMessage.actionBy == 'player',
                'log--monster': logMessage.actionBy === 'monster',
              }"
            >
              {{ logMessage.actionBy === "player" ? "Player" : "Monster" }}
            </span>
            <span v-if="logMessage.actionType === 'heal'">
              heals player for
              <span class="log--heal">{{ logMessage.actionValue }}</span>
            </span>
            <span v-else>
              attacks and deals
              <span class="log--damage">{{ logMessage.actionValue }}</span>
            </span>
          </li>
        </ul>
      </section>
    </div>
  </body>
</template>

<style scoped></style>
