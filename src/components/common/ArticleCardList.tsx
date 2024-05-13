import { cn } from "@/lib/utils";
import routes from "@/routes";
import { Article } from "@/types/article";
import Image from "next/image";
import Link from "next/link";
import { PhotoIcon } from "../icons";
import { formatDate } from "@/utils";
// import { parseISO, format } from "date-fns";
// import { PhotoIcon } from "@heroicons/react/24/outline";
// import CategoryLabel from "@/components/blog/category";


interface Props {
  article: Article;
  aspect?: "square" | "portrait" | "landscape" | "custom";
  minimal?: boolean;
  preloadImage?: boolean;
  fontSize?: string;
  fontWeight?: string
}
export default function ArticleCardList({
  article,
  aspect,
  minimal,
  preloadImage,
  fontSize,
  fontWeight
}: Props) {

  return (
    <>
      <div
        className={cn(
          "group cursor-pointer",
          minimal && "grid gap-10 md:grid-cols-2"
        )}>
        <div
          className={cn(
            " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
          )}>
          <Link
            className={cn(
              "relative block",
              aspect === "landscape"
                ? "aspect-video"
                : aspect === "custom"
                  ? "aspect-[5/4]"
                  : "aspect-square"
            )}
            href={`${routes.artice}/${article.slug}`}>
            {article.thumnal_url ? (
              <Image
                src={article.thumnal_url}

                alt={article.title || "Thumbnail"}
                priority={preloadImage ? true : false}
                className="object-cover transition-all"
                fill
                sizes="(max-width: 768px) 30vw, 33vw"
              />
            ) : (
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                <PhotoIcon />
              </span>
            )}
          </Link>
        </div>

        <div className={cn(minimal && "flex items-center")}>
          <div>
            {/* <CategoryLabel
              categories={article.categories}
              nomargin={minimal}
            /> */}
            <h2
              className={cn(
                fontSize === "large"
                  ? "text-2xl"
                  : minimal
                    ? "text-3xl"
                    : "text-lg",
                fontWeight === "normal"
                  ? "line-clamp-2 font-medium  tracking-normal text-black"
                  : "font-semibold leading-snug tracking-tight",
                "mt-2    dark:text-white"
              )}>
              <Link
                href={`${routes.artice}/${article.slug}`}>

                <span
                  className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-purple-800 dark:to-purple-900">
                  {article.title}
                </span>
              </Link>
            </h2>



            <div className="mt-3 ">
              <time
                className="truncate text-sm"
                dateTime={formatDate(article.published_date || article.created_at)}>

                {formatDate(article.published_date || article.created_at)}
              </time>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
