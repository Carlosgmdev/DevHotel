export const Modal = () => {

    return (
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
    )
}