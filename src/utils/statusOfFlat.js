import { fetchFlatsData } from './firebaseService';

let cachedFlatsStatuteInfo = null;

const avabilityOfFlatsData = async () => {
  if(cachedFlatsStatuteInfo !== null){
    return cachedFlatsStatuteInfo
  }
  try {
    const data = await fetchFlatsData(); 
    const flatsStatuteInfo = data.map((flat) => ({
      numberOfFlat: flat.numberOfFlat,
      statute: flat.statute,
    }));
    cachedFlatsStatuteInfo = flatsStatuteInfo
    return flatsStatuteInfo;
  } catch (error) {
    console.error('Wystąpił błąd podczas pobierania danych:', error);
  }
};

const checkStatuteOfFlat = async (currFlatNum) => {
  const flatsStatuteInfo = await avabilityOfFlatsData();
  const currFlat = flatsStatuteInfo.find((flat) => flat.numberOfFlat === currFlatNum);
  if (currFlat) {
    const currStatute = currFlat.statute;
    if (currStatute === 'dostępne') {
      return true;
    } if (currStatute === 'rezerwacja' || currStatute === 'sprzedane') {
      return false;
    }
  }

  return null;
};

const generateAreaProperties = async (flatId) => {
  const isFlatAvailable = await checkStatuteOfFlat(flatId);
  return {
    disabled: !isFlatAvailable,
    preFillColor: isFlatAvailable ? undefined : 'rgba(12, 12, 12, 0.5)',
    fillColor: isFlatAvailable ? 'rgba(99, 250, 11, 0.5)' : undefined,
  };
};

export default generateAreaProperties;
