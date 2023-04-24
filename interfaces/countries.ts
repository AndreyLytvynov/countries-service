export interface ICountry {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };

  area?: number | string;
  capital?: string[];

  continents?: string[];
  flag?: string;
  flags?: {
    png?: string;
    svg?: string;
    alt?: string;
  };
  languages?: {
    [key: string]: string;
  };
  maps?: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population?: number | string;
  region?: string;
  subregion?: string;
  [propName: string]: any;
}
