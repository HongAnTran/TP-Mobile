import { StarFilledIcon } from '@radix-ui/react-icons';
import React from 'react';
import { TypographyP } from '../ui/typography';

interface RatingProps {
  rate: number;
  count: number;
}

export default function Rating({  rate ,count }: RatingProps) {
  const starCount = Math.floor(rate); // Số nguyên phần của rate
  const hasHalfStar = rate - starCount !== 0; // Kiểm tra xem có phải là 0.5 hay không
  const totalStars = 5; // Tổng số sao

  // 5 => 5.0
  const ratingString = rate.toString();
  const ratingParts = ratingString.split('.');
  const integerPart = ratingParts[0]; // Phần nguyên
  const decimalPart = ratingParts[1] ? ratingParts[1].charAt(0) : '0'; // Phần thập phân (nếu có)
  const formattedRate = `${integerPart}.${decimalPart}`; // Định dạng lại thành 5.0

  // Hàm để tạo mảng chứa JSX của các sao
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(<StarFilledIcon key={i} className='text-yellow-500' />);
    }
    if (hasHalfStar) {
      stars.push(<StarFilledIcon key="half" className='text-yellow-500' style={{ transform: 'scaleX(0.5)' }} />);
    }
    const remainingStars = totalStars - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<StarFilledIcon key={`empty${i}`} className='text-gray-400' />);
    }
    return stars;
  };

  return <div className='flex gap-2 items-center flex-1'>
    {rate >0  ? <div className=' flex gap-1 '>{renderStars()}</div> : null} 
   {count >0  ?  <TypographyP>({count})</TypographyP> : null} 

  </div>;
}
