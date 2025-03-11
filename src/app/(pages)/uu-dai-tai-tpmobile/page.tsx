import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageServiceApi from '@/services/pageService';
import { notFound } from 'next/navigation';
import React from 'react';





export async function generateMetadata() {


    return {
        title: "Ưu đãi tại TP Mobile - TP Mobile",
        description: `ƯU ĐÃI ĐẶC BIỆT DÀNH CHO KHÁCH HÀNG TẠI TP MOBILE 
                Mua sắm tại TP Mobile, nhận ngay bộ quà tặng hấp dẫn với tổng giá trị lên đến 4.000.000 VNĐ!
`,
        keywords: ""
    }
}

const menuItems = [
    { id: 1, label: "MIỄN PHÍ DÁN CƯỜNG LỰC 1 NĂM", link: "#cuongluc", },
    { id: 2, label: "TẶNG CỦ SẠC NHANH CHÍNH HÃNG", link: "#sac" },
    { id: 3, label: "TẶNG CÁP SẠC NHANH 20W", link: "#capsac", },
    { id: 4, label: "MIỄN PHÍ VỆ SINH MÁY TRỌN ĐỜI", link: "#vesinh", },
];

export default async function Page() {
    return (
        <div className=' container my-8'>
            <Breadcrumbs breadcrumbsList={[{ label: "Ưu đãi tại TP Mobile", isActive: true }]} />
            <div className=' mt-4 grid grid-cols-12'>
                <section className=' col-span-3'>
                    <div className="h-full w-full bg-primary rounded-lg py-4 px-3">
                        <ul className="flex  flex-col gap-6">
                            {menuItems.map((item, index) => (
                                <li key={item.id}>
                                    <a
                                        href={item.link}
                                        className="flex items-center gap-3  text-sm rounded-lg transition-colors  text-white"
                                    >
                                        {index + 1}. {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className=' col-span-8'>
                    <div className="content-page  p-2 px-6 rounded-lg">
                        <h1 className=' bg-primary text-secondary p-2  text-center font-semibold rounded-lg'>ƯU ĐÃI ĐẶC BIỆT DÀNH CHO KHÁCH HÀNG TẠI TP MOBILE </h1>
                        <p className=' my-2 '>Mua sắm tại TP Mobile, nhận ngay bộ quà tặng hấp dẫn với tổng giá trị lên đến 4.000.000 VNĐ!</p>
                        <p className=' mb-2'><strong>1. MIỄN PHÍ DÁN CƯỜNG LỰC 1 NĂM:</strong></p>
                        <ul className='  list-disc pl-10 font-bold'>
                            <li>
                                Cường lực cao cấp – Độ cứng 10H, bảo vệ màn hình tối đa.

                            </li>
                            <li>
                                Công nghệ phủ nano, hạn chế bám bụi, chống bám vân tay.

                            </li>
                            <li>
                                Chống trầy xước, giúp màn hình luôn như mới.

                            </li>
                        </ul>

                        <p className=' mb-2'><strong>2. TẶNG CỦ SẠC NHANH CHÍNH HÃNG:</strong></p>
                        <ul className='  list-disc pl-10 font-bold'>
                            <li>
                                Chuẩn Type-C, công suất 20W – Sạc nhanh, an toàn, bảo vệ thiết bị.


                            </li>
                            <li>
                                Công nghệ Power Delivery, giúp tối ưu tốc độ sạc và kéo dài tuổi thọ pin.


                            </li>

                        </ul>
                        <p className=' mb-2'><strong>3. Thời gian lưu trữ thông tin:</strong></p>
                        <p className=' mb-2'>Ngoại trừ các trường hợp về sử dụng thông tin cá nhân như đã nêu trong chính sách này, chúng tôi cam kết sẽ không tiết lộ thông tin cá nhân bạn ra ngoài.</p>
                        <p className=' mb-2'>Thông tin sẽ được lưu trữ vĩnh viễn cho đến kh quý khách không sử dụng dịch vụ của chúng tôi nữa.</p>
                        <p className=' mb-2'><strong>4. Địa chỉ&nbsp;của đơn vị thu thập và quản lý thông tin cá nhân</strong></p>
                        <p className=' mb-2'>MIMALL VIETNAM<br />
                            Địa chỉ :&nbsp; 1007/33 Lạc Long Quân,P11, Tân Bình,&nbsp;Hồ Chí Minh</p>
                        <p className=' mb-2'><strong>5.&nbsp;Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình</strong></p>
                        <p className=' mb-2'>Bất cứ thời điểm nào bạn cũng có thể truy cập và chỉnh sửa những thông tin cá nhân của mình theo các links thích hợp mà chúng tôi cung cấp.</p>
                        <p className=' mb-2'><strong>6. Cam kết bảo mật thông tin cá nhân khách hàng:</strong></p>
                        <p className=' mb-2'>Chúng tôi cam kết bảo mật thông tin cá nhân của bạn bằng mọi cách thức có thể. Chúng tôi sẽ sử dụng nhiều công nghệ bảo mật thông tin khác nhau nhằm bảo vệ thông tin này không bị truy lục, sử dụng hoặc tiết lộ ngoài ý muốn.</p>
                        <p className=' mb-2'>Chúng tôi khuyến cáo bạn nên bảo mật các thông tin liên quan đến mật khẩu truy xuất của bạn và không nên chia sẻ với bất kỳ người nào khác. Nếu sử dụng máy tính chung nhiều người, bạn nên đăng xuất, hoặc thoát hết tất cả cửa sổ Website đang mở.</p>
                    </div>

                </section>
            </div>
        </div>
    );
}
