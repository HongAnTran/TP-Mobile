import React from 'react'
import './style.css'
export default function page() {
    return (
        <>
            <div data-testid="profile-background" class="sc-bdfBwQ sc-eggNIi cqmYGV kglmdB @container/profile-background-container"></div>
            <div className="flex min-h-dvh  w-full flex-col overflow-x-hidden @container/profile-container relative">
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "html {\n        /* Colors */\n        --bodyText: #ffffff;\n        --linkBackground: #f8f8d9;\n        --linkText: #333;\n        --linkHoverBackground: #f8f8d9;\n        --linkHoverText: #333;\n        --profileBackground: #0e2038;\n        --heroBackground: #062c53;\n        --defaultAvatarBackground: #000000;\n        --defaultAvatarText: #FFFFFF;\n        --profileTitleText: #ffffff;\n        --profileDescriptionText: #ffffff;\n        --socialLinkFill: #ffffff;\n        --bannerBackground: #f8f8d9;\n        --bannerText: #333;\n\n        /* Border Radius */\n        --linkRadius: 0;\n\n        /* Font Family */\n        --profileFontFamilyPrimary: space mono;\n        --profileFontFamilySecondary: inter;\n\n        /* Font Weight */\n        --profileFontWeightNormal: 400;\n        --profileFontWeightBold: 700;\n        --profileDescriptionFontWeight: 500;\n        --linkTextFontWeight: 500;\n        --headerFontWeight: 700;\n        --embedLinkTextFontWeight: 500;\n        --signupSubmitTextFontWeight: 700;\n        --bannerFontWeight: 700;\n  \n        /* Font Size */\n        --profileDescriptionFontSize: 14px;\n        --linkTextFontSize: 14px;\n        --headerFontSize: 20px;\n        --embedLinkTextFontSize: 14px;\n        --signupSubmitTextFontSize: 14px;\n        --linkHeaderFontSize: 14px;\n        --bannerFontSize: 14px;\n\n        /* Line Height */\n        --profileDescriptionLineHeight: 1.5;\n        --headerLineHeight: 1.5;\n      }\n      \n      @media screen and (min-width: 768px) {\n        html {\n          /* Font Size */\n          --profileDescriptionFontSize: 16px;\n          --linkTextFontSize: 16px;\n          --headerFontSize: 20px;\n          --embedLinkTextFontSize: 16px;\n          --signupSubmitTextFontSize: 16px;\n          --linkHeaderFontSize: 16px;\n          --bannerFontSize: 16px;\n        }\n      }\n      "
                    }}
                />
                <div className="flex h-full w-full flex-1 flex-col justify-between px-4 pb-8 pt-16 sm:pb-16">
                    <div className="mx-auto h-full w-full max-w-profileContainer">
                        <div className="flex flex-col items-center">
                            <div className="h-[10rem] sm:h-[16rem]" id="profile-picture">
                                <div
                                    style={{
                                        backgroundColor: "#062c53",
                                        backgroundImage:
                                            "url(https://ugc.production.linktr.ee/f9a1208c-cf5d-43d7-a9bd-80caa9887c50_chqwmqybyrjm6ego88k3.jpeg?io=true&size=avatar-hero-v1_0)",
                                        mask:
                                            "radial-gradient(100% 100% at center top, #000 60%, transparent 100%)"
                                    }}
                                    className="absolute left-0 top-0 z-[-1] h-[21rem] w-screen overflow-x-clip bg-cover bg-center bg-no-repeat sm:left-1/2 sm:top-5 sm:h-[28rem] sm:w-[580px] sm:-translate-x-1/2 sm:rounded-lg"
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
                            <div className="mx-3 flex max-w-full items-center" id="profile-title">
                                <h1 className=" text-white text-ellipsis text-balance text-center text-lg font-[700] leading-[1.5] text-bodyText">
                                    Bán iPad có tâm &quot;Nhứt&quot; Sài Gòn
                                </h1>
                            </div>
                        </div>
                        <div
                            className="flex flex-col gap-4 @container/links-container mt-xl"
                            id="links-container"
                        >
                            <div className="h-full">
                                <div className="relative h-full" data-id={"109874977"}>
                                    <div
                                        className="-top[92px] invisible relative block"
                                        id={"109874977"}
                                    />
                                    <div
                                        data-testid="StyledContainer"
                                        data-linktype="CLASSIC"
                                        className="sc-bdfBwQ sc-bkzZxe iptHnH hHvFJ group"

                                    >
                                        <a
                                            href="https://www.facebook.com/anhong0175/"
                                            target="_blank"
                                            rel="noopener"
                                            data-testid="LinkButton"
                                            className="sc-pFZIQ sc-fFubgz ldGKnQ cAGRTc group"
                                            style={{
                                                height: "auto"
                                            }}
                                        >
                                            <div className="h-full w-full">
                                                <div
                                                    data-testid="LinkThumbnail"

                                                    className="sc-bdfBwQ sc-gsTCUz sc-kstrdz bAqGfC bhdLno dxfweG"
                                                />
                                                <p className="sc-hKgILt sc-bYEvPH gXKGT bMzUWC">Facebook</p>
                                            </div>
                                        </a>
                                        <button
                                            aria-label="Share link"
                                            data-testid="ShareLink"
                                            className="absolute z-[1] flex h-6 w-6 items-center justify-center rounded-full opacity-50 transition hover:bg-white/10 hover:opacity-100 lg:group-hover:flex bottom-0 right-[6px] top-0 mx-0 my-auto sm:right-xs"
                                        >
                                            <svg
                                                width={3}
                                                height={12}
                                                viewBox="0 0 3 12"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className=""
                                            >
                                                <path
                                                    d="M1.5 12.0122C1.0875 12.0122 0.734375 11.8653 0.440625 11.5716C0.146875 11.2778 0 10.9247 0 10.5122C0 10.0997 0.146875 9.74658 0.440625 9.45283C0.734375 9.15908 1.0875 9.01221 1.5 9.01221C1.9125 9.01221 2.26562 9.15908 2.55938 9.45283C2.85313 9.74658 3 10.0997 3 10.5122C3 10.9247 2.85313 11.2778 2.55938 11.5716C2.26562 11.8653 1.9125 12.0122 1.5 12.0122ZM1.5 7.51221C1.0875 7.51221 0.734375 7.36533 0.440625 7.07158C0.146875 6.77783 0 6.42471 0 6.01221C0 5.59971 0.146875 5.24658 0.440625 4.95283C0.734375 4.65908 1.0875 4.51221 1.5 4.51221C1.9125 4.51221 2.26562 4.65908 2.55938 4.95283C2.85313 5.24658 3 5.59971 3 6.01221C3 6.42471 2.85313 6.77783 2.55938 7.07158C2.26562 7.36533 1.9125 7.51221 1.5 7.51221ZM1.5 3.01221C1.0875 3.01221 0.734375 2.86533 0.440625 2.57158C0.146875 2.27783 0 1.92471 0 1.51221C0 1.09971 0.146875 0.746582 0.440625 0.452832C0.734375 0.159082 1.0875 0.012207 1.5 0.012207C1.9125 0.012207 2.26562 0.159082 2.55938 0.452832C2.85313 0.746582 3 1.09971 3 1.51221C3 1.92471 2.85313 2.27783 2.55938 2.57158C2.26562 2.86533 1.9125 3.01221 1.5 3.01221Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full">
                                <div className="relative h-full" data-id={"109875964"}>
                                    <div
                                        className="-top[92px] invisible relative block"
                                        id={"109875964"}
                                    />
                                    <div
                                        data-testid="StyledContainer"
                                        data-linktype="CLASSIC"
                                        className="sc-bdfBwQ sc-bkzZxe iptHnH hHvFJ group"

                                    >
                                        <a
                                            href="https://github.com/HongAnTran"
                                            target="_blank"
                                            rel="noopener"
                                            data-testid="LinkButton"
                                            className="sc-pFZIQ sc-fFubgz ldGKnQ cAGRTc group"
                                            style={{
                                                height: "auto"
                                            }}
                                        >
                                            <div className="h-full w-full">
                                                <div
                                                    data-testid="LinkThumbnail"

                                                    className="sc-bdfBwQ sc-gsTCUz sc-kstrdz bAqGfC bhdLno efhdnP"
                                                />
                                                <p className="sc-hKgILt sc-bYEvPH gXKGT bMzUWC">Git Hub</p>
                                            </div>
                                        </a>
                                        <button
                                            aria-label="Share link"
                                            data-testid="ShareLink"
                                            className="absolute z-[1] flex h-6 w-6 items-center justify-center rounded-full opacity-50 transition hover:bg-white/10 hover:opacity-100 lg:group-hover:flex bottom-0 right-[6px] top-0 mx-0 my-auto sm:right-xs"
                                        >
                                            <svg
                                                width={3}
                                                height={12}
                                                viewBox="0 0 3 12"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className=""
                                            >
                                                <path
                                                    d="M1.5 12.0122C1.0875 12.0122 0.734375 11.8653 0.440625 11.5716C0.146875 11.2778 0 10.9247 0 10.5122C0 10.0997 0.146875 9.74658 0.440625 9.45283C0.734375 9.15908 1.0875 9.01221 1.5 9.01221C1.9125 9.01221 2.26562 9.15908 2.55938 9.45283C2.85313 9.74658 3 10.0997 3 10.5122C3 10.9247 2.85313 11.2778 2.55938 11.5716C2.26562 11.8653 1.9125 12.0122 1.5 12.0122ZM1.5 7.51221C1.0875 7.51221 0.734375 7.36533 0.440625 7.07158C0.146875 6.77783 0 6.42471 0 6.01221C0 5.59971 0.146875 5.24658 0.440625 4.95283C0.734375 4.65908 1.0875 4.51221 1.5 4.51221C1.9125 4.51221 2.26562 4.65908 2.55938 4.95283C2.85313 5.24658 3 5.59971 3 6.01221C3 6.42471 2.85313 6.77783 2.55938 7.07158C2.26562 7.36533 1.9125 7.51221 1.5 7.51221ZM1.5 3.01221C1.0875 3.01221 0.734375 2.86533 0.440625 2.57158C0.146875 2.27783 0 1.92471 0 1.51221C0 1.09971 0.146875 0.746582 0.440625 0.452832C0.734375 0.159082 1.0875 0.012207 1.5 0.012207C1.9125 0.012207 2.26562 0.159082 2.55938 0.452832C2.85313 0.746582 3 1.09971 3 1.51221C3 1.92471 2.85313 2.27783 2.55938 2.57158C2.26562 2.86533 1.9125 3.01221 1.5 3.01221Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full">
                                <div className="relative h-full" data-id={"109875588"}>
                                    <div
                                        className="-top[92px] invisible relative block"
                                        id={"109875588"}
                                    />
                                    <div
                                        data-testid="StyledContainer"
                                        data-linktype="CLASSIC"
                                        className="sc-bdfBwQ sc-bkzZxe iptHnH hHvFJ group"

                                    >
                                        <a
                                            href="https://www.instagram.com/tran_hongan_30/"
                                            target="_blank"
                                            rel="noopener"
                                            data-testid="LinkButton"
                                            className="sc-pFZIQ sc-fFubgz ldGKnQ cAGRTc group"
                                            style={{
                                                height: "auto"
                                            }}
                                        >
                                            <div className="h-full w-full">
                                                <div
                                                    data-testid="LinkThumbnail"

                                                    className="sc-bdfBwQ sc-gsTCUz sc-kstrdz bAqGfC bhdLno cyhXVK"
                                                />
                                                <p className="sc-hKgILt sc-bYEvPH gXKGT bMzUWC">Instagram</p>
                                            </div>
                                        </a>
                                        <button
                                            aria-label="Share link"
                                            data-testid="ShareLink"
                                            className="absolute z-[1] flex h-6 w-6 items-center justify-center rounded-full opacity-50 transition hover:bg-white/10 hover:opacity-100 lg:group-hover:flex bottom-0 right-[6px] top-0 mx-0 my-auto sm:right-xs"
                                        >
                                            <svg
                                                width={3}
                                                height={12}
                                                viewBox="0 0 3 12"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className=""
                                            >
                                                <path
                                                    d="M1.5 12.0122C1.0875 12.0122 0.734375 11.8653 0.440625 11.5716C0.146875 11.2778 0 10.9247 0 10.5122C0 10.0997 0.146875 9.74658 0.440625 9.45283C0.734375 9.15908 1.0875 9.01221 1.5 9.01221C1.9125 9.01221 2.26562 9.15908 2.55938 9.45283C2.85313 9.74658 3 10.0997 3 10.5122C3 10.9247 2.85313 11.2778 2.55938 11.5716C2.26562 11.8653 1.9125 12.0122 1.5 12.0122ZM1.5 7.51221C1.0875 7.51221 0.734375 7.36533 0.440625 7.07158C0.146875 6.77783 0 6.42471 0 6.01221C0 5.59971 0.146875 5.24658 0.440625 4.95283C0.734375 4.65908 1.0875 4.51221 1.5 4.51221C1.9125 4.51221 2.26562 4.65908 2.55938 4.95283C2.85313 5.24658 3 5.59971 3 6.01221C3 6.42471 2.85313 6.77783 2.55938 7.07158C2.26562 7.36533 1.9125 7.51221 1.5 7.51221ZM1.5 3.01221C1.0875 3.01221 0.734375 2.86533 0.440625 2.57158C0.146875 2.27783 0 1.92471 0 1.51221C0 1.09971 0.146875 0.746582 0.440625 0.452832C0.734375 0.159082 1.0875 0.012207 1.5 0.012207C1.9125 0.012207 2.26562 0.159082 2.55938 0.452832C2.85313 0.746582 3 1.09971 3 1.51221C3 1.92471 2.85313 2.27783 2.55938 2.57158C2.26562 2.86533 1.9125 3.01221 1.5 3.01221Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}
