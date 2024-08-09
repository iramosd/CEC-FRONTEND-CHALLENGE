export function useApiUrls () {
    const baseUrl: string = 'https://fakestoreapi.com';
    const productsUrl: string = baseUrl+'/products';
    const productsCategoriesUrl: string = baseUrl+'/products/categories';
    const productsByCategory: string = baseUrl+'/products/category'
    const cartsUrl: string = baseUrl+'/carts';

    return{
        baseUrl,
        productsUrl,
        productsCategoriesUrl,
        productsByCategory,
        cartsUrl
    }
}