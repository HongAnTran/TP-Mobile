import Link from "@/components/common/Link";
import { Article } from "@/types/Article.type";
import ArticleCardList from "@/components/common/article/ArticleCardList";
import {  TypographyH4 } from "@/components/ui/typography";

export default function Artice({ artices }: {  artices: Article[] }) {
  return (
    <>
      {artices && (
        <div >
          <div className="grid gap-10 md:grid-cols-3 lg:gap-10 ">
            <div className=" lg:col-span-2 col-span-3">
              {artices.slice(0, 1).map(article => (
                <ArticleCardList
                  key={article.id}
                  article={article}
                  aspect="landscape"
                  preloadImage={true}
                />
              ))}
            </div>
            <div className=" hidden lg:col-span-1 col-span-3 lg:flex lg:flex-col flex-warp justify-between">
              {artices.slice(1, 3).map(article => (
                <ArticleCardList
                  key={article.id}
                  article={article}
                  aspect="landscape"
                  preloadImage={true}
                />
              ))}
            </div>
          </div>
          {/* <div className="mt-10  h-4 bg-[data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M0,6c6,0,6,13,12,13S18,6,24,6'/%3E%3C/svg%3E]">


          </div> */}
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3  ">
            <div className=" col-span-2 grid grid-cols-2 gap-10">
              {artices.slice(2, 14).map(article => (
                <ArticleCardList key={article.id} article={article} aspect="square" />
              ))}
            </div>
            <div className=" col-span-1  relative">
              <div className=" sticky top-20 right-0" >
                <TypographyH4 className="  text-center font-semibold " >Bài viết gần đây</TypographyH4>
                <hr />
              </div>

            </div>

          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>Xem thêm</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
