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


export interface GeneralInfoData {
  title: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: Date;
  content: string;
  EventLink?: string;
}

export interface ThemeContextType {
  isDarkMode: boolean;
}


export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string ;
  EventLink?: string
}
