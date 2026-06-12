import { voorstellingen } from "../storage/VoorstellingenStorage";
import type { VoorstellingenPageProps } from "../types";


const OrderByDescending = (data: VoorstellingenPageProps[]) => {
     return [...data].sort((a, b) => {   
    const dateA = new Date(a.StartDate).getTime();
    const dateB = new Date(b.StartDate).getTime();

   return dateA - dateB;
  });
};

export const getVoorstellingen = () => {
  const sortedData = OrderByDescending(voorstellingen);
  return { data: sortedData };
};