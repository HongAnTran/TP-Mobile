import Link from "@/components/common/Link";
import { Article } from "@/types/Article.type";
import ArticleCardList from "@/components/common/article/ArticleCardList";
import { TypographyH4 } from "@/components/ui/typography";
import routes from "@/routes";

export default function Artice({ artices }: { artices: Article[] }) {
  return (
    <>
      {artices && (
        <div >
          <TypographyH4 className=" mb-10  text-center font-semibold " >Bài viết gần đây</TypographyH4>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {artices.slice(0, 4).map(article => (
              <div className=" col-span-1" key={article.id}>
                <ArticleCardList
                  article={article}
                  aspect="landscape"
                  preloadImage={true}
                />
              </div>
            ))}
          </div>
          {/* <div className="mt-10  h-4 bg-[data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M0,6c6,0,6,13,12,13S18,6,24,6'/%3E%3C/svg%3E]">


          </div> */}
          <TypographyH4 className=" mt-10  text-center font-semibold " >Tất cả bài viết</TypographyH4>
          <div className="mt-10 grid gap-10 md:grid-cols-3 lg:gap-10 xl:grid-cols-3  ">
            {artices.slice(4).map(article => (
              <div className=" col-span-1" key={article.id}>
                <ArticleCardList article={article} aspect="square" />
              </div>
            ))}
            {/* <div className=" col-span-1  relative">
              <div className=" sticky top-20 right-0" >
                <hr />
              </div>

            </div> */}

          </div>
          {/* <div className="mt-10 flex justify-center">
            <Link
              href={routes.articeCategory}
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>Xem thêm</span>
            </Link>
          </div> */}
        </div>
      )}
    </>
  );
}
