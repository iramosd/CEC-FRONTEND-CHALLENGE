import{ useApiUrls } from "../composables/useApiUrls.ts";
import { ref } from "vue";
import type { Ref } from "vue";
export function useCategories() {
    const error: Ref<string> = ref('Default');
    const categories: Ref<void | object> = ref({});
    const { productsCategoriesUrl } = useApiUrls();
    const getCategories = async () : Promise<void> => {
        const response = await fetch( productsCategoriesUrl )
            .catch(err => error.value = err);
        categories.value = await response.json();
    }

    return{
            error,
            categories,
            getCategories
    }
}