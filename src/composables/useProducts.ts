import type {Ref} from "vue";
import {ref} from "vue";
import {useApiUrls} from "./useApiUrls.ts";

export function useProducts() {
    const itemsPerPage: number = 5;
    const error: Ref<string> = ref('Default');
    const products: Ref<void | object> = ref({});
    const product: Ref<void | object> = ref({});
    const { productsUrl, productsByCategory } = useApiUrls();

    const getProducts = async (page: number | null = null): Promise<void> => {
        let data = await getFetch(productsUrl);

        if(page === null)
            products.value = data;
        else
            products.value = getItemsByPage(data, page, itemsPerPage)
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

    const getItemsByPage = (data: object, page: number, itemsPerPage: number) => {
        const startIndex: number = (page - 1) * itemsPerPage;
        const endIndex: number = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
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