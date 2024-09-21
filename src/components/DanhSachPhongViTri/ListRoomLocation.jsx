import React from "react";
import { useSearchParams } from "react-router-dom";

const ListRoomLocation = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    let idLocation = searchParam.get("idLocation");
    //console.log(searchParam.get("idLocation"));
    return (
        <div>
            <h1>Đây là trang danh sách phòng theo vị trí</h1>
            <h2>Id của vị trí: {idLocation}</h2>
        </div>
    );
};

export default ListRoomLocation;
