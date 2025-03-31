import RegisterForm from "@/components/feature/register/RegisterForm";
import Image from "next/image";

export default async function RegisterPage() {
  return (
    <div className="grid grid-cols-12 gap-4 py-8">
      <div className=" hidden lg:flex col-span-6  justify-center">
        <Image alt="login" src="/register.svg" width={400} height={400} />
      </div>
      <div className=" lg:col-span-6 col-span-12">
        <RegisterForm />
      </div>
    </div>
  )
};

