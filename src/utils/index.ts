import { ProductVariant } from "@/types/product";

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
export { convetNumberToPriceVND, findVariantMinPrice  , findVariantActiveOption}