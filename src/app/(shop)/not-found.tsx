import Link from "@/components/common/Link";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function NotFound() {
  return (
    <div className=' flex  flex-col justify-center items-center py-24'>
      <h2>Không tìm thấy trang</h2>
      <Image src={"/404.png"} alt="404" width={500} height={500} />
      <div>
        <Link href="/">
          <Button >Quay về trang chủ</Button>
        </Link>
      </div>
    </div>
  )
}