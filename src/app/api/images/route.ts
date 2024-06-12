import fs from 'fs';
import path from 'path';



export async function GET(request: Request) {
  const imagesDirectory = path.join(process.cwd(), 'public/feedback'); // Đường dẫn tới thư mục chứa hình ảnh
  const filenames = fs.readdirSync(imagesDirectory);
  const images = filenames.map(name => "/feedback/" + name );
  return Response.json(images)
}