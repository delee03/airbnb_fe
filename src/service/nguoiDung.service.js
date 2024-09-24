import { http } from "./config";

export const nguoiDungService = {
  getListUser: async () => {
    return await http.get("/users");
  },
};
