import { StarFilledIcon } from '@radix-ui/react-icons';
import React from 'react';
import { TypographyP } from '../ui/typography';

interface RatingProps {
  rate: number;
  count: number;
  showCount?: boolean
}

export default function Rating({ count, rate, showCount }: RatingProps) {
  const starCount = Math.floor(rate); // Số nguyên phần của rate
  const hasHalfStar = rate - starCount !== 0; // Kiểm tra xem có phải là 0.5 hay không
  const totalStars = 5; // Tổng số sao

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

  return <div className='flex gap-2 items-center'>
    <div className=' flex gap-1'>{renderStars()}</div>
    {showCount && <TypographyP>{count} đánh giá</TypographyP>}

  </div>;
}
