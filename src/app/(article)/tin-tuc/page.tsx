
import ArticeServiceApi from "@/services/articeService";
import Artice from "../_components/Artice";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default async function page() {
  const artices = await ArticeServiceApi.getList()

  return (
    <>
      <div className=' mb-8'>
        <Breadcrumbs breadcrumbsList={[{ label: "Tin tức", isActive: true }]} />
      </div>
      <Artice artices={artices}  />
    </>

  );
}
