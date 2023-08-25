import { useState } from "react";
import { Modal } from "./Modal";

export const Bedroom = ({bedroom}) => {

  const [showModal, setShowModal] = useState(false);
  const {id, name, description, price} = bedroom;

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
};

  return (
    <div
      key={id}
      className="bg-white rounded-lg p-4 shadow-md"
    >
      <img
        src="https://api.api-ninjas.com/v1/randomimage?category=nature"
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
          {/* Your reservation form goes here */}
          <form>
            {/* Form inputs */}
            <button
              className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-md"
              onClick={closeModal}
            >
              Close
            </button>
          </form>
        </div>
      </div>
      )}
    </div>

  )
  
}