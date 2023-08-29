
export const formatDate = (dateArray) => {
    const [year, month, day] = dateArray;
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
};

export const calculateNights = (checkin, checkout) => {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const timeDifference = checkoutDate - checkinDate;
    const nights = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return nights;
  };
  