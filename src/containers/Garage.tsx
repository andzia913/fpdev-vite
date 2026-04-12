import GarageTable from "../components/offerGarages/offerTable/GarageTable";
import type { Garage } from "../types/garages";

const garages: Garage[] = [
  { id: "G1", type: "podziemne", status: "dostępne", price: 50000 },
  { id: "G2", type: "zewnetrzne", status: "sprzedane", price: 30000 },
];

const Garage = () => {

    return (
        <section id="garaze" className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

            {/* HEADER */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold">
                Miejsca parkingowe
                </h2>
                <p className="text-gray-600 mt-4">
                Sprawdź dostępność miejsc parkingowych podziemnych i zewnętrznych
                </p>
            </div>

            {/* SWITCH */}
            <div className="flex justify-center gap-4 mb-10">
                <button className="px-5 py-2 rounded-lg bg-black text-white">
                Podziemne
                </button>
                <button className="px-5 py-2 rounded-lg border">
                Zewnętrzne
                </button>
            </div>

            {/* CONTENT */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">

                {/* OBRAZ */}
                <div>
                <img
                    src="/garage-underground.png"
                    alt="Garaże podziemne"
                    className="w-full rounded-xl shadow"
                />
                </div>

                {/* TABELA */}
                <div>
                    <GarageTable data={garages} />
                </div>

            </div>

        </section>
    )
}
export default Garage;