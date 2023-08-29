import { useState } from "react";
import { Modal } from "./Modal";

export const Bedroom = ({ bedroom }) => {

  const [showModal, setShowModal] = useState(false);
  const { id, name, description, price } = bedroom;

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={`src/assets/img/${id}.jpg`}
        alt={"Image of bedroom"}
        className="w-full h-32 object-cover mb-4"
      />
      <div className="p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-purple-600">{`$ ${price} per night`}</p>
      <button
        className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-md"
        onClick={() => setShowModal(true)}
      >
        Reserve Now
      </button>
      </div>
      {showModal && (
        <Modal bedroom={bedroom} onClose={closeModal}/>
      )}
    </div>

  )

}