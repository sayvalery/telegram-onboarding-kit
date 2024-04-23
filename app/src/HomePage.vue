<template>
    <div>
        <Sticker />
        <h1>{{ title }}</h1>
        <ProductList :products="products" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Sticker from './Sticker.vue';
import ProductList from './ProductList.vue';

export default defineComponent({
    name: 'HomePage',
    components: {
        Sticker,
        ProductList,
    },
    setup() {
        const title = ref('Your Title');
        const products = ref([]);

        // Здесь вы можете выполнить запросы для получения данных для продуктов
        // и обновить `products` когда данные придут

        return {
            title,
            products,
        };
    },
});
</script>