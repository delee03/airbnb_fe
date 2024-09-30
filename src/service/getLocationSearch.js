import { http } from "./config";

export const layViTri = async () => {
  return await http.get(`/vi-tri`);
};
