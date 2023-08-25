
export const formatDate = (dateArray) => {
    const [year, month, day] = dateArray;
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
};

export const calculateNights = (checkin, checkout) => {
    console.log(checkin)
    console.log(checkout)
    const checkinDate = new Date(checkin[0], checkin[1] - 1, checkin[2]);
    const checkoutDate = new Date(checkout[0], checkout[1] - 1, checkout[2]);
    console.log(checkinDate)
    console.log(checkoutDate)
    const timeDifference = checkoutDate - checkinDate;
    const nights = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return nights;
};