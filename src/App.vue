<script setup>

// Component Import:
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";


// Store import:
import { useProductStore } from '@/stores/ProductStore';
import { useCartStore } from "@/stores/CartStore";

// Store declaration:
const productStore = useProductStore();
const cartStore = useCartStore();


// We use the methods of Pinia's Product Store to fill the product in the page:
productStore.fill();



</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @addToCart = "cartStore.addItemToCart($event, product)"
      />
    </ul>
  </div>
</template>
