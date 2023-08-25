import React, { useEffect, useState } from 'react';
import { formatDate, calculateNights } from '../js/utilities';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/reservations')
      .then(response => response.json())
      .then(data => {
        setReservations(data);
      })
      .catch(error => {
        console.error('Error fetching reservations:', error);
      });
  }, []);

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold mb-4">Reservations</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm font-semibold uppercase tracking-wide">
              <th className="py-3 px-4 text-left">Reserved At</th>
              <th className="py-3 px-4 text-left">Bedroom</th>
              <th className="py-3 px-4 text-left">Checkin</th>
              <th className="py-3 px-4 text-left">Checkout</th>
              <th className="py-3 px-4 text-left">Nights</th>
              <th className="py-3 px-4 text-left">Total</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-medium">
            {reservations.map(reservation => (
              <tr key={reservation.id}>
                <td className="py-3 px-4">{formatDate(reservation.checkin)}</td>
                <td className="py-3 px-4">{reservation.bedroom.name}</td>
                <td className="py-3 px-4">{formatDate(reservation.checkin)}</td>
                <td className="py-3 px-4">{formatDate(reservation.checkout)}</td>
                <td className="py-3 px-4">{calculateNights(reservation.checkin, reservation.checkout)}</td>
                <td className="py-3 px-4">${calculateNights(reservation.checkin, reservation.checkout)*reservation.bedroom.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservations;
