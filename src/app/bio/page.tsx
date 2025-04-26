import React from 'react'
import './style.css'
import SocialList from '@/components/feature/SocialList'
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import CONFIG from '@/consts/config'
import { convertHotlineToTel } from '@/utils'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Metadata } from 'next';
import routes from '@/routes';
import StoreServiceApi from '@/services/StoreService';
import { MapPinFilledIcon } from '@/components/icons';
import { TypographyP } from '@/components/ui/typography';

export const metadata: Metadata = {
    title: "Bio - TP Mobile Store"
}
export default async function page() {
    const storeList = await StoreServiceApi.getList()

    const datas = [
        {
            label: `Xem bảng giá`,
            url: routes.category,
            icon: <ShoppingCartOutlinedIcon color="inherit" fontSize="large" />

        },
        {
            label: `Đăng ký nhận tư vấn`,
            icon: <ContactPhoneOutlinedIcon color="inherit" fontSize="large" />,
            url: routes.registerConsultation,
        },
        {
            label: `Hotline: ${CONFIG.HOTLINE}`,
            url: `tel:${convertHotlineToTel(CONFIG.HOTLINE)}`,
            icon: <LocalPhoneOutlinedIcon color="inherit" fontSize="large" />

        }
    ]

    return (
        <div className=' container px-0'>
            <div data-testid="profile-background" className="sc-bdfBwQ sc-eggNIi cqmYGV kglmdB @container/profile-background-container"></div>
            <div className="flex min-h-dvh  w-full flex-col overflow-x-hidden @container/profile-container relative">
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "html {\n        /* Colors */\n        --bodyText: #ffffff;\n        --linkBackground: #f8f8d9;\n        --linkText: #333;\n        --linkHoverBackground: #f8f8d9;\n        --linkHoverText: #333;\n        --profileBackground: #0e2038;\n        --heroBackground: #062c53;\n        --defaultAvatarBackground: #000000;\n        --defaultAvatarText: #FFFFFF;\n        --profileTitleText: #ffffff;\n        --profileDescriptionText: #ffffff;\n        --socialLinkFill: #ffffff;\n        --bannerBackground: #f8f8d9;\n        --bannerText: #333;\n\n        /* Border Radius */\n        --linkRadius: 0;\n\n        /* Font Family */\n        --profileFontFamilyPrimary: space mono;\n        --profileFontFamilySecondary: inter;\n\n        /* Font Weight */\n        --profileFontWeightNormal: 400;\n        --profileFontWeightBold: 700;\n        --profileDescriptionFontWeight: 500;\n        --linkTextFontWeight: 500;\n        --headerFontWeight: 700;\n        --embedLinkTextFontWeight: 500;\n        --signupSubmitTextFontWeight: 700;\n        --bannerFontWeight: 700;\n  \n        /* Font Size */\n        --profileDescriptionFontSize: 14px;\n        --linkTextFontSize: 14px;\n        --headerFontSize: 20px;\n        --embedLinkTextFontSize: 14px;\n        --signupSubmitTextFontSize: 14px;\n        --linkHeaderFontSize: 14px;\n        --bannerFontSize: 14px;\n\n        /* Line Height */\n        --profileDescriptionLineHeight: 1.5;\n        --headerLineHeight: 1.5;\n      }\n      \n      @media screen and (min-width: 768px) {\n        html {\n          /* Font Size */\n          --profileDescriptionFontSize: 16px;\n          --linkTextFontSize: 16px;\n          --headerFontSize: 20px;\n          --embedLinkTextFontSize: 16px;\n          --signupSubmitTextFontSize: 16px;\n          --linkHeaderFontSize: 16px;\n          --bannerFontSize: 16px;\n        }\n      }\n      "
                    }}
                />
                <div className="flex h-full w-full flex-1 flex-col justify-between px-4 pb-8 pt-16      sm:pb-16">
                    {/* <div className="mx-auto h-full w-full  "> */}
                    <div className="flex flex-col items-center">
                        <div className="h-[10rem] sm:h-[16rem]" id="profile-picture">
                            <div
                                style={{
                                    backgroundColor: "#062c53",
                                    backgroundImage:
                                        "url(https://cdn.tpmobile.com.vn/image/upload/v1745683419/tpmobile-images-public/avt1.webp)",
                                    mask:
                                        "radial-gradient(100% 100% at center top, #000 60%, transparent 100%)"
                                }}
                                className="absolute left-0 top-0 z-[-1] h-[14rem] w-screen overflow-x-clip bg-cover bg-center bg-no-repeat sm:left-1/2 sm:top-5 sm:h-[28rem] sm:w-[580px] sm:-translate-x-1/2 sm:rounded-lg "
                            >
                                <div
                                    className="h-full backdrop-blur-[30px]"
                                    style={{
                                        mask:
                                            "radial-gradient(100% 100% at center top, transparent 60%, #000 100%)",
                                        WebkitMask:
                                            "radial-gradient(100% 100% at center top, transparent 60%, #000 100%)"
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mx-3 max-w-full items-center" id="profile-title">
                            <h1 className="mb-1 text-white text-ellipsis text-balance text-center text-lg font-[700] leading-[1.5] text-bodyText">
                                Bán iPad có tâm &quot;Nhứt&quot; Sài Gòn 😎
                            </h1>
                            <p className='text-gray-200  text-center'>
                                Bảo hành iPad 12 tháng - Bảo hành lâu nhất HCM
                                Hỗ trợ Trả góp 0% - Trả trước 0đ
                            </p>
                        </div>
                        <div className=' mb-6 mt-6'>

                            <SocialList />
                        </div>
                        <div className='mt-2  mb-2 flex flex-col gap-3  '>
                            {storeList.map((store, index) => (
                                <div
                                    key={store.id}
                                    className={`flex items-center gap-2 p-2 rounded-lg `}
                                >
                                    <div className='flex-shrink-0'>
                                        <MapPinFilledIcon />
                                    </div>
                                    <div>
                                        <TypographyP className=' text-white text-base'>CN{index + 1}: {store.detail_address}</TypographyP>
                                    </div>
                                </div>
                            ))}

                        </div>


                    </div>
                    <div
                        className="flex flex-col  items-center   gap-4  mt-auto"
                        id="links-container"
                    >
                        {datas.map(data => {
                            return (
                                <div className="h-full w-full sm:w-[580px]" key={data.label}>
                                    <div className="relative h-full" data-id={"109874977"}>
                                        {/* <div
                                            className="-top[92px] invisible relative block"
                                            id={"109874977"}
                                        /> */}
                                        <div
                                            data-testid="StyledContainer"
                                            data-linktype="CLASSIC"
                                            className="sc-bdfBwQ  rounded-lg    overflow-hidden sc-bkzZxe iptHnH hHvFJ group  block"
                                        >
                                            <div className=' text-gray-600 absolute left-4 top-0 bottom-0 flex items-center justify-center'>
                                                {data.icon}
                                            </div>
                                            <a
                                                href={data.url}
                                                target="_blank"
                                                rel="noopener"
                                                data-testid="LinkButton"
                                                className="sc-pFZIQ  sc-fFubgz ldGKnQ cAGRTc group text-center flex-1 col-span-9"
                                                style={{
                                                    height: "auto"
                                                }}
                                            >
                                                <div className="h-full w-full pl-4">

                                                    <p className="sc-hKgILt uppercase text-gray-600 sc-bYEvPH gXKGT bMzUWC text-lg font-bold">{
                                                        data.label
                                                    }</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    {/* </div> */}

                </div>
            </div>
        </div>

    )
}
