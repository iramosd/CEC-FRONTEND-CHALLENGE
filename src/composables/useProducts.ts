import type {Ref} from "vue";
import {ref} from "vue";
import {useApiUrls} from "./useApiUrls.ts";

export function useProducts() {
    const error: Ref<string> = ref('Default');
    const products: Ref<void | object> = ref({});
    const product: Ref<void | object> = ref({});
    const { productsUrl, productsByCategory } = useApiUrls();

    const getProducts = async (): Promise<void> => {
        products.value = await getFetch(productsUrl);
    }

    const getProductsByCategory = async (category): Promise<void> => {
        products.value = await getFetch( productsByCategory+`/${category}` );
    }

    const getProduct = async (id: string): Promise<void> => {
        product.value = await getFetch(productsUrl + `/${id}`);
    }

    const countProducts = async (): Promise<number>  =>{
        let response = await getFetch(productsUrl);
       return response.length;
    }

    const getFetch = async (url: string): Promise <object> => {
        const response = await fetch(url)
            .catch(err => error.value = err);
        const data = await response.json();

        return data;
    }

    return {
        error,
        products,
        product,
        getProducts,
        getProductsByCategory,
        getProduct,
        countProducts,
    }
}