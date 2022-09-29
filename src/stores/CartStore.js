import { defineStore } from "pinia";

export const useCartStore = defineStore('CartStore', {
  
  state: () => {

    return {
      items: []
    };

  },

  // used like computed properties
  getters: {
    
  },

  actions: {

    addItemToCart(count, item){

      count = parseInt(count);

      for (let x = 0; x < count; x++) {

        this.items.push({...item});

      }

    },

  },





})