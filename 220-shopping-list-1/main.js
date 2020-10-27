
const app = Vue.createApp({
  data() {
    return {
      state: 'default',
      header: 'shopping list app',
      newItem: '',
      items: [
        {
          label: '10 party hats',
          purchased: false,
        },
        {
          label: '2 boards games',
          purchased: true,
        },
        {
          label: '20 cups',
          purchased: false,
        }
      ]
    };
  },
  // when we need to change the data, we use method
  // When we need to change the presentation of existing data, we use computed properties
  computed: {
    characterCount() {
      return this.newItem.length;
    },
    reversedItems() {
      return this.items.slice(0).reverse();
    }
  },
  methods: {
    saveItem() {
      this.items.push({
        label: this.newItem,
        purchased: false
      });
      this.newItem = '';
    },
    changeState(newState) {
      this.state = newState;
      this.newItem = '';
    },
    togglePurchased(item) {
      item.purchased = !item.purchased;
    }
  }
});

app.mount('#shopping');
