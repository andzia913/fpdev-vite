import { getDocs, collection } from 'firebase/firestore';
import { db } from '../config/firebase'; 

export const fetchFlatsData = async () => {
  try {
    const data = await getDocs(collection(db, 'mieszkania'));
    const filteredData = data.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const sortedData = filteredData.sort((a: any, b: any) => {
      const flatA = parseInt(a.numberOfFlat.slice(1), 10);
      const flatB = parseInt(b.numberOfFlat.slice(1), 10);
      return flatA - flatB;
    });
    return sortedData;
  } catch (err) {
    console.error('Błąd podczas pobierania danych z Firebase:', err);
    throw err; 
  }
};


export const fetchEndDate = async () => {
  try {
    const data = await getDocs(collection(db, 'dates'));
    const endDate = data.docs[0].data().selectedDate;
    return endDate;
  } catch (err) {
    console.error('Błąd podczas pobierania danych z Firebase:', err);
    throw err; 
  }
};

export const fetchDiaryData = async () => {
  try {
    const data = await getDocs(collection(db, 'diary'));
    const filteredData = data.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));
    const sortedData = filteredData.sort((a: any, b: any) => {
      const flatA = a.date;
      const flatB = b.date;
      return flatA - flatB;
    });
    return sortedData;
  } catch (err) {
    console.error('Błąd podczas pobierania danych z Firebase:', err);
  }
};


export default ({fetchEndDate, fetchFlatsData, fetchDiaryData});

