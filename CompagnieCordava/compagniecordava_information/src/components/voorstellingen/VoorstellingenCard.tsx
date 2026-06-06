import useDarkModeToggle from "../../hooks/useDarkModeToggle";
import type { VoorstellingenPageProps } from "../../types";

const VoorstellingenCard = ({
  Title,
  Description,
  StartDate,
  EndDate,
  ImageURL,
  TicketURL,
  Locatie,
  Voorwaarden
}: VoorstellingenPageProps) => {
  const { isDarkMode } = useDarkModeToggle();
  const googleMapsUrl = Locatie
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${Locatie.Adres}, ${Locatie.Stad}, ${Locatie.Land}`)}`
    : "";

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden transition-all duration-300 rounded-3xl
        ${
          isDarkMode
            ? "bg-[#201f1f]/60 backdrop-blur-[20px] border border-white/15  shadow-none"
            : "bg-[#ffffff] shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
        }
      `}
    >
      <div className="relative h-64 w-full shrink-0 overflow-hidden">
        <img
          src={ImageURL}
          alt={Title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent opacity-60"></div>
      </div>

      <div className="flex grow flex-col p-6">
        <div
          className={`mb-1 text-xs font-bold uppercase tracking-widest
            ${isDarkMode ? "text-[#dbfcff]" : "text-[#00F0FF]"}
          `}
        >
          {new Date(StartDate).toLocaleDateString("nl-BE")} -{" "}
          {new Date(EndDate).toLocaleDateString("nl-BE")}
        </div>

        {Locatie && (
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`mb-3 flex w-fit items-center gap-1.5 text-sm font-medium transition-colors hover:underline
              ${
                isDarkMode
                  ? "text-[#b9cacb] hover:text-[#dbfcff]"
                  : "text-[#6a7a7b] hover:text-[#006970]"
              }
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="truncate">
              {Locatie.Adres}, {Locatie.Stad}
            </span>
          </a>
        )}

        <h3
          className={`mb-3 text-2xl font-bold leading-tight tracking-tight
            ${isDarkMode ? "text-[#e5e2e1]" : "text-[#191c1d]"}
          `}
        >
          {Title}
        </h3>

        <p
          className={`line-clamp-3 text-base leading-relaxed
            ${isDarkMode ? "text-[#b9cacb]" : "text-[#3b494b]"}
          `}
        >
          {Description}
        </p>

    
        {Voorwaarden && (
          <p
            className={`mt-3 line-clamp-3 text-sm italic whitespace-pre-line
            ${isDarkMode ? "text-[#849495]" : "text-[#6a7a7b]"}
          `}
          >
            * {Voorwaarden}
          </p>
        )}

        {TicketURL && (
          <div className="mt-auto pt-6">
            <a
              href={TicketURL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block border-b-2 pb-1 text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer text-left
                  ${
                    isDarkMode
                      ? "border-[#dbfcff] text-[#e5e2e1] hover:text-[#dbfcff]"
                      : "border-[#00F0FF] text-[#191c1d] hover:text-[#006970]"
                  }
              `}
            >
              Details & Tickets
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default VoorstellingenCard;
