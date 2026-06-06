import { newsList, overViewData } from "../storage/HomeStorage";


export const GetOverviewData = () =>
{
  return {overViewData};
}

export const GetNewsData = () =>
{
  return {newsList};
}