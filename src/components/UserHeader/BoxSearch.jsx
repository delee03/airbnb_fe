import React from "react";

const BoxSearch = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    // Hàm lắng nghe sự kiện scroll
    const handleScroll = () => {
        if (window.scrollY > 100) {
            // Nếu scroll quá 100px thì hiển thị thanh search
            setShowSearchBar(true);
        } else {
            setShowSearchBar(false);
        }
    };
    return (
        <>
            <div className="sticky-search-bar fixed px-10 py-3">
                <input
                    className="w-full h-full"
                    type="text"
                    placeholder="Search dates..."
                />
            </div>
        </>
    );
};

export default BoxSearch;
