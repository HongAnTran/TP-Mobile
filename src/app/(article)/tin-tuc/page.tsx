
import ArticeServiceApi from "@/services/articeService";
import Artice from "../_components/Artice";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default async function page() {
  const { datas } = await ArticeServiceApi.getList({
    sort_by: 'created_at',
    sort_type: 'desc'
  })

  return (
    <>
      <div className=' mb-8'>
        <Breadcrumbs breadcrumbsList={[{ label: "Tin tức", isActive: true }]} />
      </div>
      <Artice artices={datas} />
    </>

  );
}
