import { cn } from "@/lib/utils";
import routes from "@/routes";
import { Article } from "@/types/Article.type";
import Image from "next/image";
import Link from "@/components/common/Link";
import { PhotoIcon } from "../../icons";
import { formatDate } from "@/utils";
// import { parseISO, format } from "date-fns";
// import { PhotoIcon } from "@heroicons/react/24/outline";
// import CategoryLabel from "@/components/blog/category";
import { Badge } from "@/components/ui/badge"
import { TypographyP } from "@/components/ui/typography";


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
          "group cursor-pointer relative h-full  overflow-hidden rounded-lg shadow-lg bg-white",
          minimal && "grid gap-10 md:grid-cols-2"
        )}>
        <div
          className={cn(
            " rounded-md bg-white transition-all hover:scale-105   dark:bg-gray-800"
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
                className=" object-contain transition-all"
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

        <div className={cn(minimal && "flex items-center", " p-4")}>
          <div>
            <div className=" flex  justify-between items-center">

              {article?.category && <Link href={`${routes.articeCategory}/${article?.category?.slug}`}>
                <Badge >{article?.category?.title}</Badge>
              </Link>}
              <TypographyP>{formatDate(article.created_at)}</TypographyP>
            </div>

            <h2
              className={cn(
                fontSize === "large"
                  ? "text-2xl"
                  : minimal
                    ? "text-3xl"
                    : "text-lg",
                fontWeight === "normal"
                  ? "line-clamp-2 font-medium  tracking-normal text-primary"
                  : "font-semibold line-clamp-2  leading-snug tracking-tight",
                "mt-2    dark:text-primary"
              )}>
              <Link
                href={`${routes.artice}/${article.slug}`}>

                <span
                  className="text-primary bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
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



            {/* <div className="mt-3 ">
              <time
                className="truncate text-sm text-white"
                dateTime={formatDate(article.published_date || article.created_at)}>

                {formatDate(article.published_date || article.created_at)}
              </time>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
