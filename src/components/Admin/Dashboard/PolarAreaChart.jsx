import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

// Đăng ký các thành phần cần thiết với Chart.js
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

// Dữ liệu số liệu cho biểu đồ
const data = {
    labels: [
        "Người dùng",
        "Đơn đã đặt",
        "Đánh giá",
        "Tổng địa điểm",
        "Tổng phòng",
    ],
    datasets: [
        {
            label: "Thống kê",
            data: [1200, 800, 150, 300, 300], // Số liệu thực tế của bạn
            backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(75, 0, 192, 0.5)",
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
    },
};

const PolarAreaChart = () => {
    return (
        <div style={{ width: "60%", margin: "0 auto" }}>
            <h2 className="text-center font-bold text-3xl text-main my-5">
                Thống kê Số liệu - Bảng điều khiển Admin
            </h2>
            <PolarArea data={data} options={options} />
        </div>
    );
};

export default PolarAreaChart;
