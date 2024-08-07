"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({
    vision: false,
    mission: false,
    about: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const vision = document.getElementById('vision');
      const mission = document.getElementById('mission');
      const about = document.getElementById('about');

      setIsVisible({
        vision: isElementInViewport(vision),
        mission: isElementInViewport(mission),
        about: isElementInViewport(about),
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isElementInViewport = (el : any) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
  

      <main className="container mx-auto px-4 py-8">
        <motion.section
          id="vision"
          className="mb-12"
           initial="hidden"
          animate={isVisible.vision ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Tầm Nhìn</h2>
          <p className="text-lg">
            Trở thành doanh nghiệp đứng đầu trong ngành Mobile chuyên về IPad chính hãng tại thị trường Việt Nam
          </p>
          <Image width={400} height={400} src="/api/placeholder/600/400" alt="Vision" className="mt-4 rounded-lg shadow-md" />
        </motion.section>

        <motion.section
          id="mission"
          className="mb-12"
          initial="hidden"
          animate={isVisible.vision ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Sứ Mệnh</h2>
          <ul className="list-disc list-inside text-lg">
            <li className="mb-2">
              <strong>Chất lượng:</strong> Cam kết trọn đời về sản phẩm được bán ra là sản phẩm chính hãng, chất lượng tốt nhất
            </li>
            <li className="mb-2">
              <strong>Trẻ trung:</strong> Đội ngũ trẻ, liên tục thay đổi - sáng tạo để mang đến cho khách hàng những dịch vụ tốt nhất
            </li>
            <li className="mb-2">
              <strong>Khách hàng:</strong> Sẽ luôn là người đồng hành cùng khách hàng kể cả là trước và sau khi mua hàng, luôn là người chăm sóc, giải đáp và tư vấn những thắc mắc và lắng lo của khách hàng
            </li>
          </ul>
          <Image width={400} height={400} src="/api/placeholder/600/400" alt="Mission" className="mt-4 rounded-lg shadow-md" />
        </motion.section>

        <motion.section
          id="about"
          className="mb-12"
          initial="hidden"
          animate={isVisible.vision ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Về chúng tôi</h2>
          <p className="text-lg mb-4">
            Chúng tôi là TP Mobile, được ra đời vào tháng 1/2018, cho đến nay cũng đã là 6 năm liên tục hoạt động, cải tiến để xây dựng nên một doanh nghiệp trẻ trung và rất đáng tin cậy. Năm 2023 đánh dấu sự chuyển mình từ một doanh nghiệp chuyên bán chính là các sản phẩm về điện thoại, phụ kiện, để bước đến một thị trường mới nhiều cơ rội nhưng cũng đầy thách thức đó là IPad.
          </p>
          <p className="text-lg mb-4">
            Dưới sự dẫn dắt của Fouder sinh năm 2001 Trần Phạm Toại, đã khiến cho TP Mobile là một trong những cái tên nhận được sự quan tâm và yêu mến của khách hàng. Chúng tôi cam kết rằng sẽ mang đến những sản phẩm IPad chính hãng, luôn luôn đồng hành cùng khách hàng trong quá trình tìm kiếm, lựa chọn, và sử dụng sản phẩm của TP Mobile.
          </p>
          <p className="text-lg mb-4">
            Không những thế chúng tôi cam kết sẽ liên tục đổi mới, mang lại những hình ảnh tích cực - đầy sáng tạo - nhiều giá trị hơn với cộng đồng. Một lần nữa, cảm ơn bạn đã lựa chọn TP Mobile!
          </p>
          <Image width={400} height={400} src="/api/placeholder/600/400" alt="About Us" className="mt-4 rounded-lg shadow-md" />
        </motion.section>
      </main>
 
  );
};

export default LandingPage;