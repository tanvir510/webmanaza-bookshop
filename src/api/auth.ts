import { http } from "@/plugins/axios";
import { apiEndpoints } from "./apiEndpoints";

export class AuthApi {
  static getToken() {
    return http.post(apiEndpoints.AUTH.GET_TOKEN);
  }
}
