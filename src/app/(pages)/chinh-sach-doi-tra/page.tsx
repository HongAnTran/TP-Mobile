import Link from '@/components/common/Link';
import CONFIG from '@/consts/config';
import routes from '@/routes';
import { convertHotlineToTel } from '@/utils';
import React from 'react';
export async function generateMetadata() {
    return {
        title: "CHÍNH SÁCH ĐỔI TRẢ TẠI TP MOBILE ",
        description: `TP Mobile cam kết mang đến trải nghiệm mua sắm an tâm với chính sách đổi trả linh hoạt, đảm bảo quyền lợi tốt nhất cho khách hàng.
`,
        keywords: ""
    }
}
export default async function Page() {
    return (
        <div className=' container mt-[-100px] lg:mt-[-140px] p-4 lg:p-10 pb-20 z-10 relative bg-white rounded-t-[40px] shadow-md'>
            <div className="content-pag  ">
                <h3 className={` p-2  text-center  text-xl lg:text-3xl  font-semibold  relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-0.5 before:bg-primary before:rounded-md`}>CHÍNH SÁCH ĐỔI TRẢ</h3>
                <p className=' m-2 text-center text-sm lg:text-base text-[#EF6837]'>TP Mobile cam kết mang đến trải nghiệm mua sắm an tâm với chính sách đổi trả linh hoạt, đảm bảo quyền lợi tốt nhất cho khách hàng.</p>
                <p className=' mb-2 text-xl'><strong>1. PHƯƠNG THỨC ĐỔI TRẢ – DÀNH CHO IPHONE & IPAD:</strong></p>
                <p className=' mb-2 text-xl'><strong>Điều kiện áp dụng:</strong></p>

                <ul className='  list-disc pl-10 font-semibold  space-y-2 mb-4'>
                    <li>
                        Khách hàng mang sản phẩm đến cửa hàng kèm hộp nguyên vẹn (nếu có) để thực hiện quy trình đổi trả.
                    </li>
                    <li>
                        Sản phẩm phải còn nguyên trạng, không bị hư hỏng do tác động bên ngoài.
                    </li>
                </ul>

                <p className=' mb-2 text-xl'><strong>Chính sách đổi hàng:</strong></p>
                <ul className='  list-disc pl-10 font-semibold space-y-2 mb-4 '>
                    <li>
                        Trong vòng 7 ngày: Giảm 10% giá trị sản phẩm khi đổi sang sản phẩm khác.
                    </li>
                    <li>
                        Trong vòng 30 ngày: Giảm 15% giá trị sản phẩm khi đổi sang sản phẩm khác.
                    </li>
                </ul>

                <p className=' mb-2 text-xl'><strong>2. TRƯỜNG HỢP KHÔNG ÁP DỤNG ĐỔI TRẢ:</strong></p>
                <ul className='  list-disc pl-10 font-semibold space-y-2 mb-4 '>
                    <li>
                        Linh kiện tiêu hao như pin (trừ lỗi vật liệu gia công).
                    </li>
                    <li>
                        Hư hại bề ngoài như vết trầy xước, móp méo (trừ lỗi vật liệu/gia công).
                    </li>
                    <li>
                        Hư hỏng do tai nạn, lạm dụng, thiên tai hoặc ngấm nước.
                    </li>

                    <li>
                        Hư hỏng màn hình, lỗi hiển thị, lỗi cảm ứng.
                    </li>

                    <li>
                        Hư hỏng do dùng với sản phẩm không đạt tiêu chuẩn của Apple.
                    </li>

                    <li>
                        Hư hỏng do không tuân thủ chỉ dẫn sử dụng của Apple.
                    </li>

                    <li>
                        Bảo dưỡng hoặc sửa chữa bởi bên thứ ba không được ủy quyền.
                    </li>

                    <li>
                        Sản phẩm đã sửa đổi mà không có sự cho phép bằng văn bản của Apple.
                    </li>

                    <li>
                        Cài đặt phần mềm không rõ nguồn gốc.
                    </li>
                    <li>
                        Số sê-ri bị loại bỏ hoặc xóa khỏi sản phẩm.
                    </li>
                </ul>


                <p><Link className=' text-blue-500 font-semibold' href={routes.stores}>Đến ngay TP Mobile</Link> hoặc liên hệ Hotline để được tư vấn chi tiết!
                </p>
                <ul className='  list-disc pl-10 font-semibold space-y-2 mb-4 '>
                    <li>
                        Địa chỉ cửa hàng:<br />
                        CN1: 05 Văn Cao, Phú Thạnh, Tân Phú, TP. HCM<br />
                        CN2: 86A Đường số 17, Linh Chiểu, TP. Thủ Đức

                    </li>
                    <li>
                        Hotline: <Link className=' text-blue-500 font-semibold' href={`tel:${convertHotlineToTel(CONFIG.HOTLINE)}`}>
                        {CONFIG.HOTLINE}

                        </Link>
                    </li>

                </ul>
            </div>
        </div>

    ); ``
}

