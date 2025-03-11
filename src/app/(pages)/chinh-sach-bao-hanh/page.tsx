import Link from '@/components/common/Link';
import CONFIG from '@/consts/config';
import routes from '@/routes';
import { convertHotlineToTel } from '@/utils';
import React from 'react';
export async function generateMetadata() {
    return {
        title: "CHÍNH SÁCH BẢO HÀNH TẠI TP MOBILE ",
        description: `Tại TP Mobile, chúng tôi cam kết mang đến chính sách bảo hành minh bạch – nhanh chóng – tiện lợi, giúp khách hàng yên tâm khi mua sắm và sử dụng sản phẩm.

`,
        keywords: ""
    }
}
export default async function Page() {
    return (
        <div className=' container mt-[-140px] p-10 pb-20 z-10 relative bg-white rounded-t-[40px] shadow-md'>
            <div className="content-pag  ">
                <h3 className={` p-2  text-center  text-3xl  font-semibold  relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-0.5 before:bg-primary before:rounded-md`}>CHÍNH SÁCH BẢO HÀNH TẠI TP MOBILE</h3>
                <p className=' m-2 text-center  text-[#EF6837]'>Tại TP Mobile, chúng tôi cam kết mang đến chính sách bảo hành minh bạch – nhanh chóng – tiện lợi, giúp khách hàng yên tâm khi mua sắm và sử dụng sản phẩm.</p>
                <p className=' mb-2 text-xl'><strong>1. QUYỀN LỢI BẢO HÀNH:</strong></p>
                <ul className='  list-disc pl-10 font-semibold  space-y-2 mb-4'>
                    <li>
                        Cường lực cao cấp – Độ cứng 10H, bảo vệ màn hình tối đa.

                    </li>
                    <li>``
                        Công nghệ phủ nano, hạn chế bám bụi, chống bám vân tay.

                    </li>
                    <li>
                        Chống trầy xước, giúp màn hình luôn như mới.

                    </li>
                </ul>

                <p className=' mb-2 text-xl'><strong>2. TẶNG CỦ SẠC NHANH CHÍNH HÃNG:</strong></p>
                <ul className='  list-disc pl-10 font-semibold space-y-2 mb-4 '>
                    <li>
                        Chuẩn Type-C, công suất 20W – Sạc nhanh, an toàn, bảo vệ thiết bị.
                    </li>
                    <li>
                        Công nghệ Power Delivery, giúp tối ưu tốc độ sạc và kéo dài tuổi thọ pin.
                    </li>
                </ul>

                <p className=' mb-2 text-xl'><strong>3. TẶNG CÁP SẠC NHANH 20W:</strong></p>
                <ul className='  list-disc pl-10 font-semibold space-y-2 mb-4 '>
                    <li>
                        Chuẩn Type-C – Đảm bảo sạc nhanh và ổn định.
                    </li>
                    <li>
                        Hỗ trợ công suất 20W, tương thích với nhiều thiết bị Apple.
                    </li>
                    <li>
                        Giá trị lên đến 1.000.000 VNĐ, tặng ngay khi mua máy tại TP Mobile.
                    </li>
                </ul>
                <p className=' mb-2 text-xl'><strong>4. MIỄN PHÍ VỆ SINH MÁY TRỌN ĐỜI:</strong></p>
                <ul className='  list-disc pl-10 font-semibold space-y-2 mb-4 '>
                    <li>
                        Vệ sinh bên trong & bên ngoài máy miễn phí – Giúp thiết bị luôn sạch sẽ, hoạt động bền bỉ.

                    </li>
                    <li>
                        Hỗ trợ kiểm tra & tối ưu hiệu năng định kỳ – Đảm bảo máy luôn chạy mượt mà.
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
                            034 790 7042
                        </Link>
                    </li>

                </ul>
            </div>
        </div>

    ); ``
}

