import { http } from "./config";

export const getRoomByLocationId = {
    getAllRoom: async (id) => {
        return await http.get(
            `/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`
        );
    },
    getRoomById: async (id) => {
        return await http.get(`/phong-thue/${id}`);
    },
};
