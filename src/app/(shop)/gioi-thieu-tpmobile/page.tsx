import Link from '@/components/common/Link'
import { Button } from '@/components/ui/button'
import routes from '@/routes'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className=" text-secondary bg-primary">


      <section >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex  flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font   mb-4 font-bebas-neue uppercase   text-sm md:text-base xl:text-3xl font-black flex flex-col leading-none bg-gradient-to-r from-indigo-400  to-secondary  bg-clip-text text-transparent">
              Giới thiệu
              TP MOBILE STORE
            </h1>

            <p className="mb-8  text-sm">
              Chúng tôi là TP Mobile, được ra đời vào tháng 1/2018, cho đến nay cũng đã là 6 năm liên tục hoạt động, cải tiến để xây dựng nên một doanh nghiệp trẻ trung và rất đáng tin cậy. Năm 2023 đánh dấu sự chuyển mình từ một doanh nghiệp chuyên bán chính là các sản phẩm về điện thoại, phụ kiện, để bước đến một thị trường mới nhiều cơ rội nhưng cũng đầy thách thức đó là IPad.
              Dưới sự dẫn dắt của Fouder sinh năm 2001 Trần Phạm Toại, đã khiến cho TP Mobile là một trong những cái tên nhận được sự quan tâm và yêu mến của khách hàng.

            </p>
            <p className="mb-8  text-sm">
              Chúng tôi cam kết rằng sẽ mang đến những sản phẩm IPad chính hãng,  luôn luôn đồng hành cùng khách hàng trong quá trình tìm kiếm, lựa chọn, và sử dụng sản phẩm của TP Mobile.
              Không những thế chúng tôi cam kết sẽ liên tục đổi mới, mang lại những hình ảnh tích cực - đầy sáng tạo - nhiều giá trị hơn với cộng đồng.
              Một lần nữa, cảm ơn bạn đã lựa chọn TP Mobile !
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">

            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/420x300/edf2f7/a5afbd"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      <section >
        <div className="container px-5 py-10 mx-auto">
          {/* <div className="flex flex-col text-center w-full mb-20">
    
        <h2 className="sm:text-3xl text-2xl font-medium ">
          Master Cleanse Reliac Heirloom
        </h2>
      </div> */}
          <div className="flex flex-wrap -m-4">

            <div className="p-4 md:w-1/2">

              <div className="flex rounded-lg h-full  bg-secondary p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h2 className="text-lg   text-primary font-medium">
                    Tầm Nhìn
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className=" text-primary text-base">


                    Trở thành doanh nghiệp đứng đầu trong ngành Mobile chuyên về IPad chính hãng tại thị trường Việt Nam
                  </p>
                </div>
              </div>

            </div>
            <div className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full  bg-secondary p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </div>
                  <h2 className="text-primary text-lg title-font font-medium">
                    Sứ Mệnh
                  </h2>
                </div>
                <div className="flex-grow">
                  <ul className="text-primary text-base list-disc">
                    <li>
                      <b>Chất lượng:</b> Cam kết trọn đời về sản phẩm được bán ra là sản phẩm chính hãng, chất lượng tốt nhất

                    </li>
                    <li>
                      <b>Trẻ trung:</b> Đội ngũ trẻ, liên tục thay đổi - sáng tạo để mang đến cho khách hàng những dịch vụ tốt nhất


                    </li>
                    <li>
                      <b>Khách hàng:</b> Sẽ luôn là người đồng hành cùng khách hàng kể cả là trước và sau khi mua hàng, luôn là người chăm sóc, giải đáp và tư vấn những thắc mắc và lắng lo của khách hàng



                    </li>
                  </ul>


                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section >
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap w-full mb-4 flex-col items-center text-center">
            <h3 className="sm:text-3xl text-2xl font-medium title-font mb-2 ">
              Tại sao nên mua hàng tại TP Mobile
            </h3>
          </div>
          <div className=" grid grid-cols-2 gap-10">

            <div className="border border-gray-300 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h2 className="text-lg font-medium title-font mb-2">
                Miễn phí cường lực 1 năm
              </h2>
              <p className="leading-relaxed text-base">
                Độ cứng 10H, phủ nano chống bụi, chống trầy
              </p>
            </div>


            <div className="border border-gray-300 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
              <h2 className="text-lg  font-medium title-font mb-2">
                Củ sạc nhanh
              </h2>
              <p className="leading-relaxed text-base">
                Đầu vào type C, công nghệ <b>Power Delivery</b>
              </p>
            </div>


            <div className="border border-gray-300 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <h2 className="text-lg  font-medium title-font mb-2">
                Cáp sạc nhanh
              </h2>
              <p className="leading-relaxed text-base">
                Đầu vào type C, 20W, 1M
              </p>
            </div>


            <div className="border border-gray-300 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
                </svg>
              </div>
              <h2 className="text-lg font-medium title-font mb-2">
                Miễn phí vệ sinh trọn đời
              </h2>
              {/* <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway tile
                  poke farm.
                </p> */}
            </div>


          </div>
          <div className=' flex  justify-center mt-4'>
            <Link href={routes.products}>
              <Button variant="secondary" >
                Mua sắm ngay
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <iframe className=' w-full ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.372301069024!2d106.61812397405349!3d10.7827710893664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d5f330ea7c7%3A0x1e87e39b41c64ce2!2sTP%20MOBILE%20STORE!5e0!3m2!1svi!2s!4v1714924406248!5m2!1svi!2s" width="600" height="450" loading="lazy" ></iframe>
      </section>
    </div>
  )
}
