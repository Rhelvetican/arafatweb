import { defineStore } from "pinia";

export const prodStore = defineStore('products', {
    state: () => ({
        products: [] as Product[]
    }),
    actions: {
        fetchProducts() {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(json => {this.products = json.products});
        }
    }
});

export class Product {
    id!: number;
    thumbnail!: string;
    brand!: string;
    description!: string;
    price!: number;
}