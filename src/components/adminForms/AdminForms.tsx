import React, { useEffect, useRef, useState } from 'react';
import { updateDoc, doc, addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import AdminConfirmation from '../adminConfirmation/AdminConfirmation';
import './adminForms.css';
import { InfoPopup } from '../index';
import useFlatsData from '../../utils/dataService';
import useDiaryData from '../../utils/dataServiceDiaryData';

const AdminForms = ({ handleLogOut }) => {
  const { flatsData } = useFlatsData();
  const [currFlatNum, setCurrFlatNum] = useState('');
  const [currFlat, setCurrFlat] = useState({});
  const [newPriceOfMeter, setNewPriceOfMeter] = useState('');
  const [newPriceOfFlat, setNewPriceOfFlat] = useState('');
  const [newStatute, setNewStatute] = useState('');
  const [showPopupConfirmation, setShowPopupConfirmation] = useState(false);
  const [showInfoPopup, setShowInfoPopup] = useState({ show: false, isPositive: true, text: '' });
  const selectFlatRef = useRef(null);
  const inputPriceOfMeterRef = useRef(null);
  const inputPriceOfFlatRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState('');

  const {diaryData} = useDiaryData();
  const [selectedObjDiary, setSelectedObjDiary] = useState({ id: '', date: '', title: '' });
  const [isOpenDiary, setIsOpenDiary] = useState(false)
  
  const findFlat = (numOfFlat) => flatsData.filter((flat) => flat.numberOfFlat === numOfFlat);

  useEffect(() => {
    setCurrFlat(...findFlat(currFlatNum));
  }, [currFlatNum]);

  const clearAfterUpdate = () => {
    setShowPopupConfirmation(false);
    selectFlatRef.current.value = '';
    inputPriceOfFlatRef.current.value = '';
    inputPriceOfMeterRef.current.value = '';
    setCurrFlat('');
    setNewStatute('');
    setNewPriceOfMeter('');
    setNewPriceOfFlat('');
  };

  const recordUpdate = async () => {
    const flatRecord = doc(db, 'mieszkania', currFlatNum);
    try {
      await updateDoc(flatRecord, {
        priceOfMeter: newPriceOfMeter !== '' ? newPriceOfMeter : currFlat.priceOfMeter,
        priceOfFlat: newPriceOfFlat !== '' ? newPriceOfFlat : currFlat.priceOfFlat,
        statute: newStatute !== '' ? newStatute : currFlat.statute,
      });
    } catch (e) {
      console.error(e);
    }
    setShowInfoPopup({ show: true, isPositive: true, text: 'Zmiany zostały zapisane' });
    // await getFlatsList();
    clearAfterUpdate();
  };
  const dataValidation = () => {
    setNewPriceOfFlat(newPriceOfFlat === '' ? currFlat.priceOfFlat : newPriceOfFlat);
    setNewPriceOfMeter(newPriceOfMeter === '' ? currFlat.priceOfMeter : newPriceOfMeter);
    const numberPriceOfMeter = parseFloat(newPriceOfMeter.replace(/[.,]/g, ''));
    const numberPriceOfFlat = parseFloat(newPriceOfFlat.replace(/[.,]/g, ''));
    if (isNaN(numberPriceOfMeter) || isNaN(numberPriceOfFlat) || numberPriceOfMeter < 5000 || numberPriceOfMeter > 15000 || numberPriceOfFlat < 200000 || numberPriceOfFlat > 2000000) {
      setShowInfoPopup({ show: true, isPositive: false, text: 'Wprowadzono blędne dane, spróbuj jeszcze raz' });
      setShowPopupConfirmation(false);
      return null;
    }
    const formattedNumberPriceOfMeter = numberPriceOfMeter.toLocaleString('en-US', { useGrouping: true }).replace(/[,]/g, '.');
    const formattedNumberPriceOfFlat = numberPriceOfFlat.toLocaleString('en-US', { useGrouping: true }).replace(/[,]/g, '.');
    setNewPriceOfMeter(formattedNumberPriceOfMeter);
    setNewPriceOfFlat(formattedNumberPriceOfFlat);
    setShowPopupConfirmation(true);
  };

  const handleUpdateClick = () => dataValidation();
  const handlePopupClose = () => setShowPopupConfirmation(false);
  const handleInfoPopupClose = () => setShowInfoPopup({ show: false, isPositive: true, text: '' });

  const handleDataSubmit = async (e) => {
    e.preventDefault();
    try {
      const dateDocRef = doc(db, 'dates', 'end-date'); 
      await updateDoc(dateDocRef, { selectedDate });
      setShowInfoPopup({ show: true, isPositive: true, text: 'Data została zapisana' });
    } catch (error) {
      console.error('Błąd podczas aktualizowania daty w bazie danych:', error);
      setShowInfoPopup({ show: true, isPositive: false, text: 'Zmiany nie zostały zapisane, spróbuj jeszcze raz' });
    }
    setSelectedDate('');
  };

  const handleDiarySubmit = async (e) => {
    e.preventDefault();
    const formattedDate = new Date(selectedObjDiary.date).toLocaleDateString();
    console.log('jaki format', formattedDate)
    try{
    if (selectedObjDiary.id) {
      const entryRef = doc(db, 'diary', selectedObjDiary.id);
      await updateDoc(entryRef, { date: formattedDate, title: selectedObjDiary.title });
      console.log('id', selectedObjDiary.id, 'date', selectedObjDiary.date, 'title', selectedObjDiary.title)
      setShowInfoPopup({ show: true, isPositive: true, text: 'Wpis został zaktualizowany.' });
    } else {
      await addDoc(collection(db, 'diary'), { date: new Date(selectedObjDiary.date), title: selectedObjDiary.title });
      setShowInfoPopup({ show: true, isPositive: true, text: 'Zmiany zostały wprowadzone.' });
    }
    setSelectedObjDiary({ id: '', date: '', title: '' });
    // const { diaryData } = useDiaryData();
    // setDiaryData(diaryData);
  }catch(e){
    setShowInfoPopup({ show: true, isPositive: false, text: 'Zmiany nie zostały wprowadzone. Spróbuj jeszcze raz' });
    console.log(e)
    // console.error(e)
  }};

  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    if (selectedId) {
      const selectedEntry = diaryData.find(entry => entry.id === selectedId);
      setSelectedObjDiary(selectedEntry || { id: '', date: '', title: '' });
    } else {
      setSelectedObjDiary({ id: '', date: '', title: '' });
    }
  };


  return (
    <>
      <div className="admin-forms__log-info">
        {!auth.currentUser ? '' : <p className="admin-container__log-info">Zalogowany {auth.currentUser.email}</p>}
        <button type="button" onClick={handleLogOut}>Wyloguj</button>
      </div>
      <div className="admin-forms__container">
        <h3>Wybierz numer mieszkania dla którego dane chesz zaktualizować</h3>
        <div>
          <select
            ref={selectFlatRef}
            name="flatsSelect"
            onChange={(e) => setCurrFlatNum(e.target.value)}
          >
            <option value="">-wybierz-</option>
            {flatsData.map((flat, index) => <option key={index} value={flat.numberOfFlat}> {flat.numberOfFlat}</option>)}
          </select>
        </div>
        { !currFlat ? '' : (
          <div className="admin-forms__container__flat-info">
            <div><p>Numer mieszkania:</p><p>{currFlat.numberOfFlat}</p></div>
            <div><p>Piętro: </p><p>{currFlat.level}</p></div>
            <div><p>Liczba pokoi: </p><p>{currFlat.numberOfRooms}</p></div>
            <div><p>Powierzchnia:</p><p> {currFlat.surface}</p></div>
            <div>
              <p>Cena za metr:</p>
              <p>
                <input
                  ref={inputPriceOfMeterRef}
                  type="number"
                  placeholder={currFlat.priceOfMeter}
                  onChange={(e) => { setNewPriceOfMeter(e.target.value); }}
                />
              </p>
            </div>
            <div>
              <p>Cena mieszkania:</p>
              <p>
                <input
                  ref={inputPriceOfFlatRef}
                  type="number"
                  placeholder={currFlat.priceOfFlat}
                  onChange={(e) => { setNewPriceOfFlat(e.target.value); }}
                />
              </p>
            </div>
            <div>
              <p>Status:</p>
              <p>
                <select
                  defaultValue={currFlat.statute}
                  onChange={(e) => { setNewStatute(e.target.value); }}
                >
                  <option value="dostępne">Dostępne</option>
                  <option value="rezerwacja">Rezerwacja</option>
                  <option value="sprzedane">Sprzedane</option>
                </select>
              </p>
            </div>
            <button type="button" onClick={handleUpdateClick}>Zapisz zmiany</button>
            <p />
          </div>
        )}
        {showPopupConfirmation && (
          <AdminConfirmation
            number={currFlat.numberOfFlat}
            currPriceOfMeter={currFlat.priceOfMeter}
            newPriceOfMeter={newPriceOfMeter}
            currPriceOfFlat={currFlat.priceOfFlat}
            newPriceOfFlat={newPriceOfFlat}
            currStatute={currFlat.statute}
            newStatute={newStatute}
            onClose={handlePopupClose}
            onConfirm={recordUpdate}
          />
        )}
        {showInfoPopup.show && (
        <InfoPopup onClose={handleInfoPopupClose} isPositive={showInfoPopup.isPositive} text={showInfoPopup.text} />
        )}

        <form className="admin-forms__container__date-form" onSubmit={handleDataSubmit}>
        <label>
         <p> Wprowadź datę zakończenia inwestycji:</p>
          <input
          type="date"
          value={selectedDate}
          onChange={(e)=> setSelectedDate(e.target.value)}
        />
      </label>
      <button type="submit">Zaktualizuj datę</button>
    </form>

    <div className='admin-forms__container__diary-form'>
      <button onClick={() => isOpenDiary ? setIsOpenDiary(false) : setIsOpenDiary(true)} ><h3>Aktualizuj dziennik budowy</h3></button>
      {!isOpenDiary ? '' : (
      <form onSubmit={handleDiarySubmit}>
        <label>
          Data:
          <input   
            type="date"
            value={selectedObjDiary.date} 
            onChange={(e) => setSelectedObjDiary({ ...selectedObjDiary, date: e.target.value })}
     />
        </label>
        <br />
        <label>
          <p>Opis:</p>
          <textarea rows='5' columns='10' value={selectedObjDiary.title} onChange={(e) => setSelectedObjDiary({ ...selectedObjDiary, title: e.target.value })} />
        </label>
        <label>
          <p>Dodaj nowy wpis lub wybierz wpis który chcesz zaktualizować:</p>
          <select value={selectedObjDiary.id} onChange={handleSelectChange}>
            <option value="">Dodajesz nowy wpis</option>
            {diaryData && diaryData.map(entry => (
              <option key={entry.id} value={entry.id}>{entry.title}</option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">{selectedObjDiary.id ? 'Aktualizuj' : 'Dodaj nowy wpis'}</button>
      </form>
      )}
              </div>
      </div>
      
        

    </>
  );
};

export default AdminForms;
