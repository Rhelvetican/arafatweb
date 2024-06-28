<template>
    <div class="productsList">
        <div class="product" v-for="product in prodStorage.products" :key="product.id" @click="goToProductPage(product.id)">
            <img :src="product.thumbnail" alt="">
            <h2>Brand: {{ product.brand }}</h2>
            <p> Description: {{ product.description }}</p>
            <p> Price: ${{ product.price }}</p>
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
    import { useRouter } from "vue-router";

    const prodStorage = prodStore()
    const router = useRouter()

    const goToProductPage = (id: number) => {
        router.push({ name: 'ProductView', params: { id } })
    }

    onMounted(async () => {
        await prodStorage.fetchProducts();
    });
</script>

<style scoped>
    .productsList {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .product {
        flex-basis: 28%;
        margin: 8px;
        padding: 24px;
        border-radius: 4px;
        box-shadow: 0px 0px 14px 16px #5e5e5e;
        cursor: pointer;
    }

    .product img {
        width: 70%;
    }
</style>