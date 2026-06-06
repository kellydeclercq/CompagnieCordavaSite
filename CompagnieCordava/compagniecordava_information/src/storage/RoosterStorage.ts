import type { CalendarEvent } from "../types";

export const events: CalendarEvent[] = [
    {
      id: "1",
      title: "Dansrepetitie",
      start: new Date("2026-06-08T18:00:00"),
      end: new Date("2026-06-08T20:30:00"),
      description: "Test extra info"
    },
    {
      id: "2",
      title: "Dansrepetitie",
      start: new Date("2026-06-10T19:00:00"),
      end: new Date("2026-06-10T21:00:00"),
    },
    {
      id: "3",
      title: "Auditie 1",
      start: new Date("2026-06-21T10:00:00"),
      end: new Date("2026-06-21T13:00:00"),
    },
    {
      id: "3",
      title: "Auditie 2",
      start: new Date("2026-08-30T10:00:00"),
      end: new Date("2026-08-30T13:00:00"),
    },
  ];