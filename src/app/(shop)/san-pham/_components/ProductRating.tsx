import { StarFilledIcon } from "@/components/icons";


const ProductRating = ({ averageRating, ratingCount } :{
    averageRating: number;
    ratingCount: number;
}) => {
  // Hàm để tạo mảng 5 sao và tô màu dựa trên averageRating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarFilledIcon
          key={i}
          className={`w-5 h-5 ${
            i <= Math.floor(averageRating) 
              ? 'fill-yellow-400 text-yellow-400' 
              : 'text-gray-300'
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-[1px]">
        {renderStars()}
      </div>
      <div className="flex items-center gap-1">
        <span className="text-lg font-semibold text-primary">
          {averageRating.toFixed(1)}
        </span>
        <span className="text-sm text-gray-600">
          ({ratingCount} {ratingCount === 1 ? 'đánh giá' : 'đánh giá'})
        </span>
      </div>
    </div>
  );
};

export default ProductRating;