import Link from '@/components/common/Link';
import ConsultationForm from '@/components/feature/consultation/ConsultationForm';
import { MessengerIcon, PhoneIcon, ZaloIcon } from '@/components/icons';
import CONFIG from '@/consts/config';
import routes from '@/routes';
import { convertHotlineToTel } from '@/utils';
import React from 'react';
import RegisterConsultationPage from './RegisterConsultationPage';
export async function generateMetadata() {
    return {
        title: "Đăng ký nhận tư vấn - TP Mobile Store",
        description: `Đăng ký nhận tư vấn TẠI TP MOBILE 
                Mua sắm tại TP Mobile, nhận ngay bộ quà tặng hấp dẫn với tổng giá trị lên đến 4.000.000 VNĐ!
`,
    }
}
export default async function Page() {


    return (
        <div className=' container mt-[-100px] lg:mt-[-140px] p-4 lg:p-10 pb-20 z-10 relative bg-white rounded-t-[40px] shadow-md'>
            <div className="content-pag  ">
                <h3 className={` p-2  text-center  text-xl lg:text-3xl  font-semibold  relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-0.5 before:bg-primary before:rounded-md`}>Đăng ký nhận tư vấn</h3>
                <div className=' mb-4 mt-2'>
                    <p className=' text-sm text-center text-muted-foreground'>Để lại thông tin, nhân viên sẽ liên hệ tư vấn cho bạn trong thời gian sớm nhất (trả lời trong 1 giờ sau 22h, phản hồi vào sáng hôm sau)</p>


                    {/* <div className=' flex gap-2 mt-4'>
                        <Image className=' w-10 h-10 rounded-md' alt={product.title} src={product.images[0]?.url || ""} width={60} height={60} />

                        <p className='  text-sm mt-2 '><b>{product.title}</b></p>
                    </div> */}
                    <RegisterConsultationPage />
                </div>

            </div>
        </div>

    ); ``
}

