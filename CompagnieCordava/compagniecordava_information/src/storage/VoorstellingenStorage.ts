import type { VoorstellingenPageProps } from "../types"

export const voorstellingen : VoorstellingenPageProps[] = [
    {
    Title: "Elements VZW",
    ImageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-_0l8iDxg6QvZBW2xZ3uqwxtxnawqqN-TA&s",
    Description: "Dansvoorstelling Elements VZW",
    StartDate: new Date("2027-04-01"),
    EndDate: new Date("2024-04-02"),
    TicketURL: "https://www.vzwelements.be/ticketverkoop",
    Locatie: {
        Adres: " Driekoningenplein 15",
        Stad: "Merelbeke-Melle",
        Land: "België"
        },
     Voorwaarden: "Verplicht verkopen van twee tickets per deelnemer"
    },
    {
    Title: "Elements Genesis",
    ImageURL: "https://static.wixstatic.com/media/a448d6_a021cf093e914cedaba6818c0a420036~mv2.png/v1/fill/w_2056,h_2570,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/affiche.png",
    Description: "Dansvoorstelling Elements Genesis",
    StartDate: new Date("2026-04-18"),
    EndDate: new Date("2026-04-18"),
    TicketURL: "https://www.vzwelements.be/ticketverkoop",
    Locatie: {
        Adres: "Sportstraat 3",
        Stad: "Oosterzele",
        Land: "België"
    },
    Voorwaarden: "Verplicht verkopen van twee tickets per deelnemer"  
    },
    {
    Title: "Spotlight",
    ImageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZo_vqdQqJEjqoUhUrO6vB9aJYMiX7LagtHA&s",
    Description: "Een semi-professionele dansvoorstelling in Brugge",
    StartDate: new Date("2026-11-8"),
    EndDate: new Date("2026-11-9"),
    TicketURL: "https://spotlightevents.be/collections/all",
    Locatie: {
        Adres: "Vlamingstraat 29",
        Stad: "Brugge",
        Land: "België"
    },
    Voorwaarden: `Inschrijving van 25 euro per deelnemer. \n Tickets apart aan te kopen via de website van Spotlight`
    }
,  
];

