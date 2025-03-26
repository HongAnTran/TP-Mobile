import React from "react";
import Image from "next/image";
import CONFIG from "@/consts/config";

export default function MaintenancePage() {
    return (
        <div className="flex flex-col justify-center items-center py-10 text-center">
            <h2 className="text-2xl font-bold text-gray-800 uppercase">WEBSITE đang bảo trì!</h2>
            <h4 className="text-gray-600 mt-2">
                Trang web hiện đang được bảo trì để cải thiện trải nghiệm của bạn.<br />  Vui lòng quay lại sau hoặc liên hệ hotline <b>{CONFIG.HOTLINE}</b><br /> rất xin lỗi về sự bất tiện này.
            </h4>
            <Image
                src="/mantain.jpg"
                alt="Bảo trì"
                width={500}
                height={500}
                className="mt-5"
            />
        </div>
    );
}
