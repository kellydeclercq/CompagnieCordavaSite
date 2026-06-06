import type { GeneralInfoData, NewsItem } from "../types";

export const overViewData: GeneralInfoData = {
    title: "Welkom bij Compagnie Cordava",
    description: "Deze pagina is gemaakt om een overzicht te geven van de belangrijkste informatie over Compagnie Cordava, inclusief welke voorstellingen er gepland staan, nieuws en algemene informatie over de repetities.",
}

export const newsList: NewsItem[] = [
    {
        id: "1",
        title: "First News Item",
        date: new Date("2026-06-05"),
        content: "Eerste update over de repetities en de planning van de voorstellingen.",
    },
    {
        id: "2",
        title: "Second News Item",
        date: new Date("2026-06-06"),
        content: "Tweede update over de repetities en de planning van de voorstellingen.",
    }
]