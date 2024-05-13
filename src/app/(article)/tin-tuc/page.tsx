import Link from "next/link";
import PostList from "@/components/common/ArticleCardList";
import { Article } from "@/types/article";
import ArticeServiceApi from "@/services/articeService";
import Artice from "./Artice";

export default async function page() {
  const artices = await ArticeServiceApi.getList()

  return (
    <div className=" py-8">
      <Artice artices={artices}  />
    </div>
  );
}
