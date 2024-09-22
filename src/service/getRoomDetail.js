import { http } from "./config";

export const getRoomById = async (id) => {
    return await http.get(`/phong-thue/${id}`);
};
