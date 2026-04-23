const getStatusStyle = (status: string) => {
  switch (status) {
    case "dostępne":
      return "bg-green-100 text-green-700";
    case "niedostepne":
      return "bg-gray-100 text-gray-700";
    case "rezerwacja":
      return "bg-yellow-100 text-yellow-700";
    case "sprzedane":
      return "bg-gray-200 text-gray-500";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export default getStatusStyle;