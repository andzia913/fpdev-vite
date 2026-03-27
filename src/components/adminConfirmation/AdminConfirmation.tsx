import React from 'react';
import './adminConfirmation.css';

const AdminConfirmation = ({ number, currPriceOfMeter, newPriceOfMeter, currPriceOfFlat, newPriceOfFlat, currStatute, newStatute, onClose, onConfirm }) => (
  <div className="admin-form__popup">
    <h3>Czy napewno chcesz wprowadzić poniższe zmiany?</h3>
    <p>Mieszkanie {number}</p>
    <table>
      <thead>
        <th>Parametr</th>
        <th>Przed zmianą</th>
        <th>Po zmianie</th>
      </thead>
      <tbody>
        <tr>
          <td>Cena za metr</td>
          <td>{currPriceOfMeter}</td>
          <td>{!newPriceOfMeter ? currPriceOfMeter : newPriceOfMeter}</td>
        </tr>
        <tr>
          <td>Cena mieszkania</td>
          <td>{currPriceOfFlat}</td>
          <td>{!newPriceOfFlat ? currPriceOfFlat : newPriceOfFlat}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>{currStatute}</td>
          <td>{!newStatute ? currStatute : newStatute}</td>
        </tr>
      </tbody>
    </table>
    <button type="button" onClick={() => onConfirm()}>Zatwierdź zmiany</button>
    <button type="button" onClick={() => onClose()}>Anuluj wprowadzenie zmian</button>
  </div>
);

export default AdminConfirmation;
