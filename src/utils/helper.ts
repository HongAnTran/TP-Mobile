import { ColSettings } from "@/types/Structure.type";

function generateGridClasses(col : ColSettings , base = "grid gap-2") {

  const lgClass = col.lg ? `lg:grid-cols-${col.lg}` : '';
  const mdClass = col.md ? `md:grid-cols-${col.md}` : '';
  const smClass = col.sm ? `sm:grid-cols-${col.sm}` : '';
  const xlClass = col.xl ? `xl:grid-cols-${col.xl}` : '';
  const xxlClass = col.xxl ? `2xl:grid-cols-${col.xxl}` : '';
  return `${base} ${lgClass} ${mdClass} ${smClass} ${xlClass} ${xxlClass}`.trim();
}
// Hàm để sắp xếp mảng sản phẩm theo thứ tự của mảng rows
function sortByRows<T>(datas:T[], key : keyof T , rows : number[]) {
  const productMap = new Map(datas.map(product => [product[key] as number, product]));

  // Sắp xếp sản phẩm theo thứ tự của mảng rows
  return rows.map(id => productMap.get(id)).filter(product => product) as T[]
}
export {generateGridClasses , sortByRows}