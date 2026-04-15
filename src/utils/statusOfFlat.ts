import { fetchFlatsData } from './firebaseService';

let cachedFlatsStatuteInfo: any = null;

const avabilityOfFlatsData = async () => {
  if (cachedFlatsStatuteInfo !== null) {
    return cachedFlatsStatuteInfo;
  }

  try {
    const data = await fetchFlatsData();

    const flatsStatuteInfo = data.map((flat) => ({
      numberOfFlat: flat.numberOfFlat,
      statute: flat.statute,
    }));

    cachedFlatsStatuteInfo = flatsStatuteInfo;
    return flatsStatuteInfo;
  } catch (error) {
    console.error('Błąd pobierania danych:', error);
    return [];
  }
};

const checkStatuteOfFlat = async (currFlatNum: string) => {
  const flatsStatuteInfo = await avabilityOfFlatsData();

  const currFlat = flatsStatuteInfo.find(
    (flat: any) => flat.numberOfFlat === currFlatNum
  );

  return currFlat?.statute || "dostepne";
};


// 🔥 NORMALIZACJA STATUSÓW (KLUCZ)
export const normalizeStatus = (status: string) => {
  switch (status) {
    case "dostepne":
      return "available";
    case "rezerwacja":
      return "reserved";
    case "sprzedane":
      return "sold";
    default:
      return "available";
  }
};

export const STATUS_CONFIG = {
  available: {
    label: "Dostępne",
    mapColor: "rgba(34,197,94,0.4)",
    badge: "bg-green-100 text-green-700",
  },
  reserved: {
    label: "Rezerwacja",
    mapColor: "rgba(250,204,21,0.4)",
    badge: "bg-yellow-100 text-yellow-700",
  },
  sold: {
    label: "Sprzedane",
    mapColor: "rgba(239,68,68,0.4)",
    badge: "bg-red-100 text-red-700",
  },
};

const generateAreaProperties = async (flatId: string) => {
  const rawStatus = await checkStatuteOfFlat(flatId);
  const status = normalizeStatus(rawStatus);

  return {
    status,
    fillColor: STATUS_CONFIG[status as keyof typeof STATUS_CONFIG].mapColor,
    disabled: status === "sold",
  };
};

export default generateAreaProperties;