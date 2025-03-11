"use client";
import React, { useEffect } from "react";

export default function Page() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://zwwo07xoj0uw0efi.public.blob.vercel-storage.com/bundle.iife-kM4h76m1tJomu696uD133g04qGV2VW.js"; // Đường dẫn đến script của bạn
        script.async = true;
        script.onload = () => {
            console.log("Script loaded!");
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Xóa script khi unmount
        };
    }, []);

    return <div className=" container bg-black p-10">
        <div id="hitaoproducts"></div>;
    </div>
}
