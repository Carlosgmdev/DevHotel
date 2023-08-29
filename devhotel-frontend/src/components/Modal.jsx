import { useState, useEffect } from "react";
import { calculateNights } from "../js/utilities";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


export const Modal = ({bedroom, onClose}) => {

  const [ checkin, setCheckin] = useState("");
  const [ checkout, setCheckout] = useState("");
  const {id, name, price} = bedroom;
  const [nights, setNights] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(checkin && checkout) {
      const calculatedNights = calculateNights(checkin, checkout)
      const calculatedTotal = calculatedNights*price;
      setNights(calculatedNights)
      setTotal(calculatedTotal)
    }
  }, [checkin, checkout])

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      checkin: checkin,
      checkout: checkout,
      bedroom: {
        id: id
      },
      user: {
        id: 1
      } 
    }
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  
    fetch('http://localhost:8080/api/reservations', options)
      .then(response => response.json())
      .then(data => {
        if (data.id) {
          Swal.fire({
            title: 'Success',
            text: 'The reservation was registered successfully.',
            icon: 'success',
            confirmButtonText: 'Ok'
          }).then (() => onClose());
        } else {
          Swal.fire({
            title: 'Error',
            text: 'There was an error registering the reservation, please try again later.',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
        Swal.fire({
          title: 'Error',
          text: 'There was an error registering the reservation, please try again later.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });
  }
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Create Reservation</h2>
        <form className="flex flex-col gap-2">
          <div className="flex justify-between w-96">
            <h1>{name}</h1>
            <p className="bg-green-300 p-1 rounded-md text-sm font-medium">Available</p>
          </div>
          <div className="flex justify-between w-96">
            <label htmlFor="checkin">Checkin</label>
            <input
              type="date"
              name="checkin"
              id="checkin"
              onChange={e => setCheckin(e.target.value)}
            />
          </div>
          <div className="flex justify-between w-96">
            <label htmlFor="checkin">Checkout</label>
            <input
              type="date"
              name="checkout"
              id="checkout"
              onChange={e => setCheckout(e.target.value)}
            />
          </div>
          <div className="flex justify-between w-96">
            <label>Nights</label>
            <p>{nights}</p>
          </div>
          <div className="flex justify-between w-96">
            <label>Total</label>
            <p>{`$${total}`}</p>
          </div>
          <button
            className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-md"
            onClick={e => handleSubmit(e)}
          >
            Reserve Now
          </button>
          <button
            className="mt-1 bg-red-600 text-white py-2 px-4 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}