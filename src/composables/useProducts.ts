import type {Ref} from "vue";
import {ref} from "vue";
import {useApiUrls} from "./useApiUrls.ts";

export function useProducts() {
    const error: Ref<string> = ref('Default');
    const products: Ref<void | object> = ref({});
    const product: Ref<void | object> = ref({});
    const { productsUrl, productsByCategory } = useApiUrls();

    const getProducts = async (): Promise<void> => {
        const response = await fetch( productsUrl )
            .catch(err => error.value = err);
        products.value = await response.json();
    }

    const getProductsByCategory = async (category): Promise<void> => {
        const response = await fetch( productsByCategory+`/${category}` )
            .catch(err => error.value = err);
        products.value = await response.json();
    }

    const getProduct = async (id: string): Promise<void> => {
        const response = await fetch( productsUrl + `/${id}`)
            .catch(err => error.value = err);
        product.value = await response.json();
    }

    const countProducts = async (): Promise<number>  =>{
        let total: number = 0;

        const response = await fetch( productsUrl )
            .catch(err => error.value = err);
       total = await response.json().length;

       return total;
    }

    return {
        error,
        products,
        product,
        getProducts,
        getProduct,
        countProducts,
    }
}