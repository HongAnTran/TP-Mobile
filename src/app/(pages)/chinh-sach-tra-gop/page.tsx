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
                <p className=' mb-2 text-xl'><strong>1. QUY ĐỊNH VỀ TRẢ TRƯỚC:</strong></p>


                <ul className='  list-disc pl-10 font-semibold  space-y-2 mb-4'>
                    <li>
                        Chỉ cần trả trước từ 10% giá trị sản phẩm.
                    </li>
                    <li>
                        Đối với khách hàng thân thiết của ngân hàng, không cần trả trước.
                    </li>
                </ul>



                <p className=' mb-2 text-xl'><strong>2. ĐIỀU KIỆN ÁP DỤNG:</strong></p>
                <ul className='  list-disc pl-10 font-semibold space-y-2 mb-4 '>
                    <li>
                        Độ tuổi từ 18 trở lên.
                    </li>
                    <li>
                        Hồ sơ sạch.
                    </li>
                    <li>
                        Không yêu cầu chứng minh thu nhập.
                    </li>
                </ul>
                <p className=' mb-2 text-xl'><strong>3. THỦ TỤC ĐƠN GIẢN
                    :</strong></p>
                <ul className='  list-disc pl-10 font-semibold space-y-2 mb-4 '>
                    <li>
                        Chỉ cần CCCD có gắn chip.
                    </li>
                </ul>
                <p className=' mb-2 text-xl'><strong>4. KỲ HẠN GÓP LINH HOẠT:</strong></p>
                <p>Bạn có thể lựa chọn kỳ hạn trả góp phù hợp, kéo dài từ 7/9/12.../18 tháng.</p>

                <p><Link className=' text-blue-500 font-semibold' href={routes.stores}>Đến ngay TP Mobile</Link> hoặc liên hệ Hotline để được tư vấn chi tiết. TP Mobile đảm bảo hỗ trợ tư vấn tận tình, giúp bạn chọn được phương án trả góp hợp lý, tiết kiệm nhất.
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

