import { http } from "./config";

export const layViTri = () => {
    return http.get("/vi-tri");
};
