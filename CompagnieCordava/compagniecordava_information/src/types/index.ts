export interface VoorstellingenPageProps {
ImageURL: string,
Title: string,
Description: string,
StartDate: Date,
EndDate: Date,
TicketURL?: string,
  Locatie: {
    Adres: string,
    Stad: string,
    Land: string
  },
  Voorwaarden?: string
}

export interface HeaderButtonsProps {
  item: string;
  to: string; 
}



