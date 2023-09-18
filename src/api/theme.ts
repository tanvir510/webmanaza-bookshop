import { http } from "@/plugins/axios";
import { apiEndpoints } from "./apiEndpoints";

export class ThemeApi {
  static getThemeInfo() {
    return http.get(apiEndpoints.THEME.GET_THEME_INFO);
  }
}
