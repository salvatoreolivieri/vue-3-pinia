import { defineStore } from "pinia";
import { groupBy } from "lodash";

export const useCartStore = defineStore('CartStore', {
  
  state: () => {

    return {
      items: []
    };

  },

  // used like computed properties
  getters: {
  
    count() {
      return this.items.length
    },

    isEmpty: (state) => state.count === 0,

    grouped: state => {

      const grouped = groupBy(state.items, (item) => item.name);

      const sorted = Object.keys(grouped).sort();
      let inOrder = {};

      sorted.forEach((key) => (inOrder[key] = grouped[key]));

      return inOrder;
    },

    groupCount: state => (name) => state.grouped[name].length,

    total: state => state.items.reduce((previous, current) => previous + current.price, 0)

  },

  actions: {

    addItemToCart(count, item){

      count = parseInt(count);

      for (let x = 0; x < count; x++) {

        this.items.push({...item});

      }

    },

    clearItem(itemName){
      this.items = this.items.filter((item) => item.name !== itemName)
    },

    setItemCount(item, count){

      this.clearItem(item.name);
      this.addItemToCart(count, item);

    }

  },





})