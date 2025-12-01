export function mapPrices(array){
    const ordered = [...array].map((el) =>
        Number(el.innerText.replace(/[^0-9,-]+/g, "").replace(",", "."))
      );
      return ordered;
}