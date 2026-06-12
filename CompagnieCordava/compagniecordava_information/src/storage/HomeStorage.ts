import type { GeneralInfoData, NewsItem } from "../types";

export const overViewData: GeneralInfoData = {
    title: "Welkom! ",
    description: "Deze pagina is gemaakt om een overzicht te geven van de belangrijkste informatie over Compagnie Cordava, inclusief welke voorstellingen er gepland staan, nieuws en algemene informatie over de repetities.",
}

export const newsList: NewsItem[] = [
    {
        id: "1",
        title: "Eerste auditie 21/06",
        date: new Date("2026-06-12"),
        content: "De eerste auditie voor onze compagnie vindt plaats op 21/06 van 10-13u in Danshuis De Ingang.",
        EventLink: "/Rooster"
    },
    {
        id: "2",
        title: "Tweede auditie 30/08",
        date: new Date("2026-06-12"),
        content: "De eerste auditie voor onze compagnie vindt plaats op 30/08 van 10-13u in Danshuis De Ingang.",
        EventLink: "/Rooster"
    }
]