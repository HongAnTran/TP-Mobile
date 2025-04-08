import { StarFilledIcon } from "@/components/icons";
import { Progress } from "@/components/ui/progress"; // Sử dụng Progress từ Shadcn/UI
import { Rating } from "@/types/Rating.type";
interface ProductRatingSummaryProps {
  ratings: Rating[];
  productName: string;
  averageRating: number;
}

const ProductRatingSummary: React.FC<ProductRatingSummaryProps> = ({ ratings, productName,averageRating }) => {
  // Tính điểm trung bình
  const totalRatings = ratings.length;
  // Tính số lượng đánh giá cho từng mức sao
  const ratingDistribution = Array(5)
    .fill(0)
    .map((_, index) => {
      const star = 5 - index; // Từ 5 sao đến 1 sao
      return ratings.filter((rating) => rating.rate === star).length;
    });

  // Hàm hiển thị số sao
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

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">
        Đánh giá {productName}
      </h2>
      {/* Điểm trung bình và tổng số đánh giá */}
      <div className="lg:grid  grid-cols-12  gap-10">
        <div className=" col-span-12 lg:col-span-4">

        <div className="flex items-center flex-col justify-center  h-full  lg:border-r border-gray-200 ">
          <p className="text-3xl font-bold">{averageRating}/5</p>
          <div className="flex justify-center mt-1">{renderStars(Math.round(Number(averageRating)))}</div>
          <p className="text-sm text-blue-600 mt-1">{totalRatings} đánh giá</p>
        </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          {ratingDistribution.map((count, index) => {
            const star = 5 - index;
            const percentage = totalRatings > 0 ? (count / totalRatings) * 100 : 0;
            return (
              <div key={star} className="flex gap-2 items-center  mb-2">
                <span className="text-sm min-w-8">{star}.0 <StarFilledIcon className="w-4 h-4  text-yellow-400 fill-yellow-400" /></span>
                <Progress value={percentage} className=" flex-1 h-3" />
                <span className="text-sm text-gray-600">{count} đánh giá</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductRatingSummary;