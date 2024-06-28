import { defineStore } from "pinia";

export const prodStore = defineStore('products', {
    state: () => ({
        products: []
    }),
    actions: {
        fetchProducts() {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(json => {this.products = json.products});
        }
    }
});
