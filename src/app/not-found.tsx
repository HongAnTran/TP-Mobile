import Link from "@/components/common/Link";

 
export default function NotFound() {
  return (
    <div className=' flex  flex-col justify-center items-center'>
      <h2>Not Found 404</h2>
      <p>Không tìm thấy</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}