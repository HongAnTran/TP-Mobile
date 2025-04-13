import Link from '@/components/common/Link';
import CONFIG from '@/consts/config';
import routes from '@/routes';
import { convertHotlineToTel } from '@/utils';
import React from 'react';
export async function generateMetadata() {
    return {
        title: "CHÍNH SÁCH TRẢ GÓP TẠI TP MOBILE",
        description: `TP Mobile cam kết mang đến cho khách hàng trải nghiệm mua sắm tiện lợi, linh hoạt với các chương trình trả góp hấp dẫn. Chúng tôi hợp tác với nhiều tổ chức tài chính, giúp khách hàng dễ dàng sở hữu sản phẩm mong muốn mà không cần lo lắng về tài chính.

`,
        keywords: ""
    }
}
export default async function Page() {
    return (
        <div className=' container mt-[-100px] lg:mt-[-140px] p-4 lg:p-10 pb-20 z-10 relative bg-white rounded-t-[40px] shadow-md'>
            <div className="content-pag  ">
                <h3 className={` p-2  text-center  text-xl lg:text-3xl  font-semibold  relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-0.5 before:bg-primary before:rounded-md`}>CHÍNH SÁCH TRẢ GÓP </h3>
                <p className=' m-2 text-center text-sm lg:text-base text-[#EF6837]'>TP Mobile cam kết mang đến cho khách hàng trải nghiệm mua sắm tiện lợi, linh hoạt với các chương trình trả góp hấp dẫn. Chúng tôi hợp tác với nhiều tổ chức tài chính, giúp khách hàng dễ dàng sở hữu sản phẩm mong muốn mà không cần lo lắng về tài chính.</p>
                <p className=' mb-2 text-xl'><strong>1. MỨC TRẢ TRƯỚC:</strong></p>


                <ul className='  list-disc pl-10 font-semibold  space-y-2 mb-4'>
                    <li>
                        Khách hàng cần thanh toán trước tối thiểu 10% giá trị sản phẩm.
                    </li>
                    <li>
                        Khách hàng thân thiết của ngân hàng tài chính có thể được hỗ trợ trả trước 0 đồng.
                    </li>
                </ul>



                <p className=' mb-2 text-xl'><strong>2. ĐIỀU KIỆN ÁP DỤNG:</strong></p>
                <ul className='  list-disc pl-10 font-semibold space-y-2 mb-4 '>
                    <li>
                        Độ tuổi từ 18 trở lên.
                    </li>
                    <li>
                        Không có nợ xấu, hồ sơ tài chính rõ ràng.
                    </li>
                    <li>
                        Không yêu cầu chứng minh thu nhập.
                    </li>
                </ul>
                <p className=' mb-2 text-xl'><strong>3. THỦ TỤC ĐƠN GIẢN, NHANH CHÓNG
                    :</strong></p>
                <p>Khách hàng chỉ cần chuẩn bị một trong các bộ hồ sơ sau:</p>
                <ul className='  list-disc pl-10 font-semibold space-y-2 mb-4 '>
                    <li>
                        CCCD gắn chip.
                    </li>
                    <li>
                        CMND + Bằng lái xe hoặc CMND + Sổ hộ khẩu.
                    </li>
                </ul>
                <p className=' mb-2 text-xl'><strong>3. KỲ HẠN GÓP LINH HOẠT:</strong></p>
                <p>Khách hàng có thể lựa chọn kỳ hạn trả góp phù hợp, kéo dài từ 7, 9, 12, 15, 18, 24 tháng, giúp tối ưu hóa tài chính cá nhân.</p>
                <p>Tại TP Mobile, chúng tôi không chỉ mang đến sản phẩm chất lượng mà còn cung cấp giải pháp tài chính linh hoạt, giúp bạn dễ dàng sở hữu thiết bị yêu thích mà không áp lực chi tiêu.
                </p>
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

