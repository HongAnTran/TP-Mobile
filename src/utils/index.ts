import { ProductVariant } from "@/types/Product.types";

function convetNumberToPriceVND(priceNumber: ProductVariant["price"]) {
  let output = "";

  //languagecode-countrycode:
  //languagecode: full list @ https://www.w3schools.com/tags/ref_language_codes.asp
  //countrycode: full list @ https://www.w3schools.com/tags/ref_country_codes.asp
  const locale = "vi-VN";

  //full currencylist at https://www.currency-iso.org/en/home/tables/table-a1.html
  const currency = "VND";

  const formatter = new Intl.NumberFormat(locale, {
    currency,
  });

  //formating data
  output = formatter.format(Math.round(priceNumber)).replace(/\./g, ",");

  return output + "₫"
}

function findVariantMinPrice(variants: ProductVariant[]) {
  let minPriceVariant = variants[0];
  let minPrice = Infinity;

  variants.forEach(variant => {
    const price = variant.price;
    if (price < minPrice) {
      minPrice = price;
      minPriceVariant = variant;
    }
  });

  return minPriceVariant;
}

function findVariantActiveOption(variants: ProductVariant[], optionActive: string[]) {
  return variants.find(pro => optionActive.includes(pro.option1) && optionActive.includes(pro.option2) && optionActive.includes(pro.option3))

}

function fillArrayToLength(arr: any[], length: number, data: any = null) {
  while (arr.length < length) {
    arr.push(data);
  }
  return arr;
}

export function fillArray(length: number) {
  return Array.from({ length }, () => "");
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}


interface ObjectWithArrayValues {
  [key: string]: string | string[] | number[];
}
function objectToSearchParamsValue(obj: ObjectWithArrayValues): { [key: string]: string;} {
  const processedObj: { [key: string]: string } = {};
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      processedObj[key] = (obj[key] as (string | number)[]).join(',');
    } else {
      processedObj[key] = obj[key] ? obj[key].toString() : ""
    }
  }
  return processedObj
}

function objectToSearchParams(obj: any): string {
  return Object.keys(obj)
    .filter(key => obj[key] !== undefined && obj[key] !== null && obj[key] !== '')
    .map(key => `${encodeURIComponent(key)}=${obj[key]}`)
    .join('&');
}

function formatDate(date: string): string {
  const dateObj = new Date(date);
  const day = dateObj.getDate();  // Lấy ngày từ 1-31
  const month = dateObj.getMonth() + 1;  // Lấy tháng từ 0-11, cộng thêm 1 để phù hợp với tháng thực tế từ 1-12
  const year = dateObj.getFullYear();  // Lấy năm đầy đủ

  // Chuyển ngày và tháng thành chuỗi và thêm '0' phía trước nếu chỉ có một chữ số
  const dayFormatted = day < 10 ? `0${day}` : day.toString();
  const monthFormatted = month < 10 ? `0${month}` : month.toString();

  // Trả về chuỗi định dạng DD/MM/YYYY
  return `${dayFormatted}/${monthFormatted}/${year}`;
}


function checkIsClient() {
  return typeof window !== "undefined"
}

function generateUniqueId() {
  return 'id-' + crypto.randomUUID();
}

function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null;

  return function (...args: Parameters<T>): void {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      timeout = null;
      func(...args);
    }, wait);
  };
}


export { debounce, convetNumberToPriceVND, findVariantMinPrice, generateUniqueId, findVariantActiveOption, fillArrayToLength, sleep, objectToSearchParamsValue, objectToSearchParams, formatDate, checkIsClient }