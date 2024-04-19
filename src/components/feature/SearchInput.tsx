"use client"
import React, { useEffect, useState } from 'react'
import InputController from "@/components/common/inputs/InputController"
import { useForm } from 'react-hook-form'

const placeholders = ["Bạn đang muốn tìm gì...?","Nhập tên sản phẩm...","Ipad giá rẻ..."]; // Các placeholder bạn muốn sử dụng

export default function SearchInput() {


  const { control, handleSubmit } = useForm<{ keyword: string }>({
    defaultValues: {
      keyword: ""
    }
  })

  const [placeholder, setPlaceholder] = useState('');
  const [typingForward, setTypingForward] = useState(true);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const currentPlaceholder = placeholders[placeholderIndex];
    let timeout : NodeJS.Timeout | undefined
    const interval = setInterval(() => {
      if (typingForward) {
        if (placeholder.length < currentPlaceholder.length) {
          setPlaceholder(currentPlaceholder.slice(0, placeholder.length + 1));
        } else {
          timeout = setTimeout(() => {
            setTypingForward(false);
            // setTypingForward(true);
          }, 1000); // Dừng 0.5 giây trước khi bắt đầu chạy ngược lại
        }
      } else {
        if (placeholder.length > 0) {
          setPlaceholder(currentPlaceholder.slice(0, placeholder.length - 1));
        } else {
          setTypingForward(true);
          setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        }
      }
    }, 60); // Thay đổi placeholder mỗi 0.1 giây

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    }
  }, [placeholder, typingForward, placeholderIndex]);



  return (
    <form onChange={handleSubmit((data) => {
      console.log(data)
    })}>
      <InputController inputProps={{
        placeholder: placeholder,
        className: " text-white placeholder:text-white",
      }}
        name="keyword" control={control} />
    </form>
  )
}
