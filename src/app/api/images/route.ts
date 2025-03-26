import fs from "fs";
import path from "path";
import { imageSize } from "image-size";
import { NextRequest } from "next/server";

function downsize(size: number) {
  if (typeof size !== "number") return 0;
  if (size > 1000) {
    return size / 3;
  }
  return size;
}
export async function GET(request: NextRequest) {
  const folderAllow = ["feedback", "thuduc", "tanphu"];
  const searchParams = request.nextUrl.searchParams;
  const folderName = searchParams.get("folderName") || "";
  if (!folderAllow.includes(folderName)) {
    return Response.error();
  }
  const imagesDirectory = path.join(process.cwd(), `public/${folderName}`);
  const filenames = fs.readdirSync(imagesDirectory);
  const images = filenames.map((name) => {
    const filePath = path.join(imagesDirectory, name);
    try {
      const buffer = fs.readFileSync(filePath);
      const dimensions = imageSize(buffer as any);
      return {
        url: `/${folderName}/` + name,
        width: downsize(dimensions.width) || 0,
        height: downsize(dimensions.height) || 0,
      };
    } catch (error) {
      return {
        url: `/${folderName}/` + name,
        width: 0,
        height: 0,
      };
    }
  });

  return Response.json(images);
}
