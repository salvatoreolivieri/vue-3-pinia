import { defineStore } from "pinia";
import products from '@/data/products.json';

export const useProductStore = defineStore("ProductStore", {

  // used for defining data()
  state: () => {

    return {
      products
    }

  }

  // action

  // getter


})