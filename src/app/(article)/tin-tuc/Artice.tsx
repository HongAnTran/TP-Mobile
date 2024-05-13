import Link from "@/components/common/Link";
import { Article } from "@/types/article";
import ArticleCardList from "@/components/common/ArticleCardList";

export default function Artice({ artices } : { artices: Article[] }) {
  return (
    <>
      {artices && (
        <div className=" container">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {artices.slice(0, 2).map(article => (
              <ArticleCardList
                key={article.id}
                article={article}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {artices.slice(2, 14).map(article => (
              <ArticleCardList key={article.id} article={article} aspect="square" />
            ))}
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
