export interface DataCountry {
  name: NameCountry;
  currencies: Currency;
  capital: string[];
  region: string;
  languages: {};
  maps: Maps;
  population: number;
  flags: Flags;
}

interface NameCountry {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
}

interface Currency {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}
