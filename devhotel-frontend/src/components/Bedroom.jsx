import { useState } from "react";
import { Modal } from "./Modal";
import { calculateNights } from "../js/utilities";

export const Bedroom = ({ bedroom }) => {

  const [showModal, setShowModal] = useState(false);
  const { id, name, description, price } = bedroom;
  const [nights, setNights] = useState(0);
  const [total, setTotal] = useState(0);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const updateResume = (e) => {
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    setNights(calculateNights(checkin, checkout))
  }

  return (
    <div
      key={id}
      className="bg-white rounded-lg p-4 shadow-md"
    >
      <img
        src={`src/assets/${id}.jpg`}
        alt={"Image of bedroom"}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-purple-600">{`$ ${price} per nigth`}</p>
      <button
        className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-md"
        onClick={openModal}
      >
        Reserve Now
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Create Reservation</h2>
            <form className="flex flex-col gap-2">
              <h1>{name}</h1>
              <div className="flex justify-between w-96">
                <label htmlFor="checkin">Checkin</label>
                <input
                  type="date"
                  name="checkin"
                  id="checkin"
                  onChange={updateResume}
                />
              </div>
              <div className="flex justify-between w-96">
                <label htmlFor="checkin">Checkout</label>
                <input
                  type="date"
                  name="checkout"
                  id="checkout"
                  onChange={updateResume}
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
              >
                Reserve Now
              </button>
              <button
                className="mt-1 bg-red-600 text-white py-2 px-4 rounded-md"
                onClick={closeModal}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>

  )

}