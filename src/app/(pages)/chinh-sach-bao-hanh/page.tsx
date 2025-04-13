import Link from '@/components/common/Link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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
        <div className=' container mt-[-100px] lg:mt-[-140px] p-4 lg:p-10 pb-20 z-10 relative bg-white rounded-t-[40px] shadow-md'>
            <div className="content-pag  ">
                <h3 className={` p-2  text-center  text-xl lg:text-3xl  font-semibold  relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-0.5 before:bg-primary before:rounded-md`}>CHÍNH SÁCH BẢO HÀNH</h3>
                <p className=' m-2 text-center text-sm lg:text-base  text-[#EF6837]'>Tại TP Mobile, chúng tôi cam kết mang đến chính sách bảo hành minh bạch – nhanh chóng – tiện lợi, giúp khách hàng yên tâm khi mua sắm và sử dụng sản phẩm.</p>
                <p className=' mb-2 text-xl'><strong>1. QUYỀN LỢI BẢO HÀNH:</strong></p>
                <p className=' mb-2'>
                    Khách hàng không cần giữ phiếu bảo hành, chỉ cần cung cấp số điện thoại là có thể kiểm tra tình trạng bảo hành của sản phẩm.
                </p>
                <p>Chính sách bảo hành áp dụng:</p>
                <ul className='  list-disc pl-10 font-semibold  space-y-2 mb-4'>
                    <li>
                        1 ĐỔI 1 TRONG 30 NGÀY – Nếu sản phẩm gặp lỗi nhà sản xuất, đổi ngay sản phẩm mới trong vòng 30 ngày.

                    </li>
                    <li>
                        BẢO HÀNH 12 THÁNG – Áp dụng cho các lỗi phần cứng do nhà sản xuất.

                    </li>
                    <li>
                        PHỤ KIỆN 1 NĂM – Củ sạc, cáp sạc, kính cường lực bảo hành lên đến 12 tháng.


                    </li>
                    <li>
                        BẢO HÀNH PHẦN MỀM TRỌN ĐỜI – Hỗ trợ cập nhật, sửa lỗi phần mềm miễn phí trọn đời.


                    </li>
                </ul>

                <p className=' mb-3 text-xl'><strong>2. CHI TIẾT BẢO HÀNH THEO SẢN PHẨM:</strong></p>
                <Table className=' mb-4'>
                    <TableHeader className=' bg-primary '>
                        <TableRow >
                            <TableHead className='text-secondary'>Danh mục</TableHead>
                            <TableHead className='text-secondary'>iPhone</TableHead>
                            <TableHead className='text-secondary'>iPad</TableHead>
                            <TableHead className='text-secondary'>MacBook</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Phụ kiện (Củ sạc, cáp, kính cường lực)</TableCell>
                            <TableCell>1 năm</TableCell>
                            <TableCell>1 năm</TableCell>
                            <TableCell>1 năm</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Vệ sinh sản phẩm</TableCell>
                            <TableCell>Trọn đời</TableCell>
                            <TableCell>Trọn đời</TableCell>
                            <TableCell>Trọn đời</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Lỗi nhà sản xuất – 1 đổi 1</TableCell>
                            <TableCell>30 ngày

                            </TableCell>
                            <TableCell>30 ngày

                            </TableCell>
                            <TableCell>30 ngày

                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Bảo hành lỗi nhà sản xuất sau 30 ngày</TableCell>
                            <TableCell>6 tháng</TableCell>
                            <TableCell>12 tháng</TableCell>
                            <TableCell>6 tháng</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Bảo hành lỗi nhà sản xuất sau 30 ngày</TableCell>
                            <TableCell>Có</TableCell>
                            <TableCell>Không áp dụng</TableCell>
                            <TableCell>Không áp dụng</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <p className=' mb-2 text-xl'><strong>3. CÁC TRƯỜNG HỢP KHÔNG ĐƯỢC BẢO HÀNH:</strong></p>
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
                <p className=' mb-2 text-xl'><strong>4. DỊCH VỤ HỖ TRỢ KHÁCH HÀNG:</strong></p>
                <ul className='  list-disc pl-10 font-semibold space-y-2 mb-4 '>
                    <li>
                        Hỗ trợ kiểm tra & vệ sinh máy miễn phí trọn đời.

                    </li>
                    <li>
                        Bảo hành minh bạch, quy trình nhanh chóng, chuyên nghiệp.
                    </li>
                    <li>
                        Hotline tư vấn miễn phí – Liên hệ ngay để được hỗ trợ tốt nhất!
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

