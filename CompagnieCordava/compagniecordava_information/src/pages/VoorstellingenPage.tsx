import VoorstellingenCard from "../components/voorstellingen/VoorstellingenCard";
import { getVoorstellingen } from "../hooks/useVoorstellingen";
import type { VoorstellingenPageProps } from "../types";

const VoorstellingenPage = () => {
  const { voorstellingen: data } = getVoorstellingen();

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((v: VoorstellingenPageProps) => (
            <VoorstellingenCard
              key={v.Title}
              Title={v.Title}
              Description={v.Description}
              StartDate={v.StartDate}
              EndDate={v.EndDate}
              ImageURL={v.ImageURL}
              TicketURL={v.TicketURL}
              Locatie={v.Locatie}
              Voorwaarden={v.Voorwaarden}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default VoorstellingenPage;