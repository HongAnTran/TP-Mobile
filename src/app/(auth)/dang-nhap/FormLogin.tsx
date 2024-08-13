// "use client"
import React from 'react'
import { signIn } from "@/auth"
import Link from "@/components/common/Link";
import { FacebookIcon, GoogleFilledIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographySpan } from "@/components/ui/typography";
import routes from "@/routes";
import Image from "next/image";
import { ButtonSignIn } from '@/components/feature/buttons/ButtonSignIn';
export default function FormLogin() {
  return (
    <section className=" py-10 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <Image
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
          width={500}
          height={500}
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <TypographyH2 className=" text-center mb-4 uppercase text-primary">Đăng nhập</TypographyH2>

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Địa chỉ email"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Mật khẩu"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          {/* <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label> */}
          {/* <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Quên mật khẩu?
          </a> */}
        </div>
        <div className="text-center md:text-right lg:mt-2">
          <Button
            className=""
            type="submit"
          >
            Đăng nhập
          </Button>
        </div>
        {/* <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Bạn chưa có tài khoản?
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4 ml-2"
            href={routes.register}
          >
            Đăng ký
          </Link>
        </div> */}
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Hoặc
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          {/* <Button
            type="button"
            variant="ghost"
            className="mx-1 h-9 w-full  uppercase shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <FacebookIcon className=" w-5 h-5 mr-3" />
            <TypographySpan >Facebook</TypographySpan>
          </Button> */}
          <ButtonSignIn type="google">
            <Button
              type="submit"
              className=" h-9 w-full  uppercase  shadow-[0_4px_9px_-4px_#3b71ca]">
              <GoogleFilledIcon className=" w-5 h-5 mr-3" />
              <TypographySpan >Google</TypographySpan>
            </Button>
          </ButtonSignIn>
        </div>
      </div>
    </section>
  );
}
