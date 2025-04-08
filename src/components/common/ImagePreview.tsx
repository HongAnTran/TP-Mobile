"use client"; // Vì component này sử dụng state nên cần là Client Component

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"; // Đường dẫn có thể khác tùy vào cấu trúc project của bạn

export default function ImagePreview({ src, alt = "", width, height ,zoom = 3 , className}:{
    src: string;
    alt?: string;
    width: number;
    height: number;
    zoom?: number;
    className?: string;
}) {
  // State để kiểm soát việc mở Dialog
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Phần xem trước hình ảnh */}
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            onClick={() => setIsOpen(true)}
          />
        </div>
      </DialogTrigger>

      {/* Phần phóng to hình ảnh */}
      <DialogContent className="max-w-4xl   p-0">
        <Image
        quality={100}
          src={src}
          alt={alt}
          width={width * zoom} 
          height={height * zoom}
          className="w-full h-auto max-h-[600px] object-contain"
        />
      </DialogContent>
    </Dialog>
  );
}