import { ICountry } from "@/interfaces/countries";

const orderBy = (countries: ICountry[], value: string, direction: string) => {
  const sortedCountries = [...countries].sort((a, b) => {
    if (value === "name") {
      return direction === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    } else {
      return direction === "asc" ? a[value] - b[value] : b[value] - a[value];
    }
  });
  return sortedCountries;
};

export default orderBy;
