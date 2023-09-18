import { http } from "@/plugins/axios";
import { apiEndpoints } from "./apiEndpoints";

export class ProductApi {
  static getProducts(payload: any) {
    return http.get(
      apiEndpoints.PRODUCT.GET_PRODUCTS(payload?.categoryId),
      payload?.params
    );
  }

  static getProduct(payload: any) {
    return http.get(
      apiEndpoints.PRODUCT.GET_PRODUCT(payload?.productSlug),
      payload?.params
    );
  }
}
