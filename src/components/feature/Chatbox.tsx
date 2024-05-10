"use client"
import  { useEffect } from 'react';

export default function Chatbox() {
  useEffect(() => {
    // Tải mã JavaScript của Tawk.to
    var s1 = document.createElement("script");
    var s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/663e515707f59932ab3e46df/1hthmrfjn';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode?.insertBefore(s1, s0);

    // Clean up by removing the script when component unmounts
    return () => {
      s1.parentNode?.removeChild(s1);
    };
  }, []);

  return null; // Tawk.to sẽ tự hiển thị nên không cần phải render bất kỳ gì
};


