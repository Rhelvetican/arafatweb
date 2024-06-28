<template>
    <v-btn @click="router.push({ name: 'Catalog'})" color="primary" variant="elevated">Back to Catalog</v-btn>
    <div class="product">
        <div class="productImage">
            <img :scr="selectedProduct.thumbnail" alt="" />
        </div>
        <div class="productDetails">
            <p> Brand: {{ selectedProduct.brand }} </p>
            <p> Description: {{ selectedProduct.description }} </p>
            <h3> Price: ${{ selectedProduct.price }} </h3>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
import router from "@/router";
    
    export default defineComponent({
        name: 'ProductDetails'
    });
</script>

<script setup lang="ts"">
    import { prodStore } from "@/stores/data";
    import { computed } from "vue";
    import { useRoute } from "vue-router";

    const store = prodStore();
    const route = useRoute();

    const selectedProduct = computed(() => {
        return store.products.find((item) => item.id.toString() === route.params.id);
    })

</script>

<style scoped>
.product {
  display: flex;
  margin-top: 50px;
}

.product-image {
  margin-right: 24px;
}

</style>