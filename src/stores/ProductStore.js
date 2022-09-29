import { defineStore } from "pinia";
import products from '@/data/products.json';

export const useProductStore = defineStore("ProductStore", {

  // used for defining data()
  state: () => {

    return {
      products: []
    }

  },

  // used like methods
  actions: {

    async fill(){

      // I prodotti dichiarati nello state diventano i prodotti importati dal json:
      this.products = (await import("@/data/products.json")).default; 

    }

  }

  // getter


})