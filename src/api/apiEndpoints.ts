export const apiEndpoints = Object.freeze({
  AUTH: {
    GET_TOKEN: "/auth/v2/get-access-token",
  },
  THEME: {
    GET_THEME_INFO: `/general/v2/store-info`,
  },
  PRODUCT: {
    GET_PRODUCTS: (categoryId: number) =>
      `/product/v2/list/by/category/${categoryId}/`,
    GET_PRODUCT: (productSlug: string | number) =>
      `/product/v2/detail/${productSlug}/`,
  },
});
