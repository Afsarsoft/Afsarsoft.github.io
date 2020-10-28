
const app = Vue.createApp({
  data() {
    return {
      state: 'default',
      header: 'shopping list',
      newItem: '',
      items: [
        {
          label: 'Banana',
          purchased: false,
        },
        {
          label: 'Carrot',
          purchased: false,
        },
        {
          label: 'Oatmeal',
          purchased: true,
        },
        {
          label: 'Apple',
          purchased: false,
        },
        {
          label: 'Avacado',
          purchased: false,
        },
        {
          label: 'Bread',
          purchased: false,
        },
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
