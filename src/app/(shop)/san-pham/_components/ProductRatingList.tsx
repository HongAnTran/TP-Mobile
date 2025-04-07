// components/ProductRatingList.tsx
import Image from "next/image";
import { format } from "date-fns"; // Để định dạng ngày tháng
import { vi } from "date-fns/locale"; // Locale tiếng Việt cho date-fns
import { StarFilledIcon } from "@/components/icons";
import { Rating } from "@/types/Rating.type";

interface ProductRatingListProps {
  ratings: Rating[];
  averageRating: number;
  countRating: number;
}

const ProductRatingList: React.FC<ProductRatingListProps> = ({ ratings ,averageRating}) => {
    const renderStars = (rate : number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          stars.push(
            <StarFilledIcon
              key={i}
              className={`w-5 h-5 ${
                i <= Math.floor(rate) 
                  ? 'fill-yellow-400 text-yellow-400' 
                  : 'text-gray-300'
              }`}
            />
          );
        }
        return stars;
      };

  // Hàm định dạng ngày tháng
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "dd/MM/yyyy HH:mm", { locale: vi });
  };

  return (
    <div className="space-y-4">
      {ratings.map((rating) => (
        <div
          key={rating.id}
          className="border border-gray-200 pb-4 bg-white shadow-sm rounded-md p-4"
        >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                {rating.customer?.avatar ? (
                  <Image
                    src={rating.customer.avatar}
                    alt={rating.customer.full_name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <span className="text-white font-semibold">
                    {rating.customer?.full_name?.charAt(0) ||
                      rating.customer_seed?.name?.charAt(0) ||
                      "A"}
                  </span>
                )}
              </div>
              {/* Tên khách hàng */}
              <div>
                <p className="text-sm font-semibold">
                  {rating.customer?.full_name || rating.customer_seed?.name || "Ẩn danh"}
                </p>
                <p className="text-xs text-green-600">Đã mua tại TP Mobile</p>
            <p className="text-xs text-gray-500">{formatDate(rating.created_at)}</p>
              </div>
            </div>
          {/* Đánh giá: Số sao và nội dung */}
          <div className="mt-2">
            <div className="flex items-center space-x-1">
              {renderStars(rating.rate)}
            </div>
            <p className="text-sm text-gray-700 mt-1">{rating.content}</p>
          </div>

          {/* Hình ảnh (nếu có) */}
          {rating.images && rating.images.length > 0 && (
            <div className="mt-2 flex space-x-2">
              {rating.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Hình ảnh đánh giá ${index + 1}`}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
              ))}
            </div>
          )}

          <div className="mt-2 flex space-x-2">
            {rating.tags.map(tag=>{
              return (
                <span key={tag.id} className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  {tag.title}
                </span>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductRatingList;