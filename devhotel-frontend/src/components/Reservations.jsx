import React, { useEffect, useState } from 'react';
import { formatDate } from '../js/utilities';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

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

  const handleCancelReservation = (reservationId) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    };
  
    fetch(`http://localhost:8080/api/reservations/${reservationId}`, options)
      .then(response => {
        if (response.ok) {
          setReservations(reservations.filter(r => r.id !== reservationId));
          Swal.fire({
            title: 'Reservation Canceled',
            text: 'The reservation has been canceled successfully.',
            icon: 'success',
          });
        } else {
          throw new Error('An error occurred while canceling the reservation.');
        }
      })
      .catch(error => {
        console.error(error);
        Swal.fire({
          title: 'Error',
          text: 'An error occurred while canceling the reservation.',
          icon: 'error',
        });
      });
  };
  

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
              <th className="py-3 px-4 text-left">Cancel</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-medium">
            {reservations.map(reservation => (
              <tr key={reservation.id}>
                <td className="py-3 px-4">{formatDate(reservation.reservedat)}</td>
                <td className="py-3 px-4">{reservation.bedroom.name}</td>
                <td className="py-3 px-4">{formatDate(reservation.checkin)}</td>
                <td className="py-3 px-4">{formatDate(reservation.checkout)}</td>
                <td className="py-3 px-4">{reservation.nights}</td>
                <td className="py-3 px-4">${reservation.total}</td>
                <td className="py-3 px-4">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => {
                      Swal.fire({
                        title: 'Cancel Reservation',
                        text: 'Are you sure you want to cancel this reservation?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#d33',
                        cancelButtonColor: '#3085d6',
                        confirmButtonText: 'Yes, cancel it!',
                      }).then(result => {
                        if (result.isConfirmed) {
                          handleCancelReservation(reservation.id);
                        }
                      });
                    }}
                  >
                    Cancel Reservation
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservations;
