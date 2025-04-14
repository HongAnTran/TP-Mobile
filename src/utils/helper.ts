import { ColSettings } from "@/types/Structure.type";

function generateGridClasses(col: ColSettings, base = "grid gap-2") {
  const xsClass = col.xs ? `grid-cols-${col.xs}` : col.xs === 0 ? 'hidden' : '';
  const smClass = col.sm ? `sm:grid-cols-${col.sm}` : col.sm === 0 ? 'hidden' : '';
  const mdClass = col.md ? `md:grid-cols-${col.md}` : col.md === 0 ? 'hidden' : '';
  const lgClass = col.lg ? `lg:grid-cols-${col.lg}` : col.lg === 0 ? 'hidden' : '';
  const xlClass = col.xl ? `xl:grid-cols-${col.xl}` : col.xl === 0 ? 'hidden' : '';
  const xxlClass = col.xxl ? `2xl:grid-cols-${col.xxl}` : col.xxl === 0 ? 'hidden' : '';
  return `${base} ${xsClass} ${smClass} ${mdClass}  ${lgClass}   ${xlClass} ${xxlClass}`.trim();
}
// Hàm để sắp xếp mảng sản phẩm theo thứ tự của mảng rows
function sortByRows<T>(datas: T[], key: keyof T, rows: number[]) {
  const productMap = new Map(datas.map(product => [product[key] as number, product]));

  // Sắp xếp sản phẩm theo thứ tự của mảng rows
  return rows.map(id => productMap.get(id)).filter(product => product) as T[]
}
export { generateGridClasses, sortByRows }