<template>
    <div class="productsList">
        <div class="product" v-for="product in prodStorage.products" :key="product.id">
            <img :src="product.thumbnail" alt="">
            <h2>Brand: {{ product.brand }}</h2>
            <p> Description: {{ product.description }}</p>
            <p> Price: {{ product.price }}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        'CatalogueView': ''
    });
</script>

<script setup lang="ts">
    import { onMounted } from "vue";
    import { prodStore } from "@/stores/data";

    const prodStorage = prodStore()

    onMounted(() => {
        prodStorage.fetchProducts();
    });
</script>