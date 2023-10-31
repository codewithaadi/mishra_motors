import { CarProps, FilterProps } from '@/types';

export const calculateCarCost = (city_mpg: number, year: number) => {
  const basePrice = 600000;
  const mileageFactor = 0.002;
  const ageFactor = 0.04;

  const mileageReduction = city_mpg * mileageFactor;
  const ageReduction = (2023 - year) * ageFactor;

  const finalPrice = basePrice - (mileageReduction + ageReduction) * basePrice;

  return finalPrice.toFixed(2);
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  const newSearchParams = new URLSearchParams(window.location.search);
  newSearchParams.delete(type.toLocaleLowerCase());
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers: HeadersInit = {
    'X-RapidAPI-Key': '49fa36c694mshc6e4166eb26e681p1a8040jsn04c3fc7ed1b6',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    },
  );

  const result = await response.json();
  return result;
}
