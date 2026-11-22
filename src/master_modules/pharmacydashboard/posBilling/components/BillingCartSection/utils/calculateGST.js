import calculateDiscount from "./calculateDiscount";

const calculateGST = (item = {}) => {

    const {

        sellingPrice = 0,

        quantity = 0,

        gstPercent = 0,

    } = item;

    const grossAmount =

        sellingPrice * quantity;

    const discountAmount =

        calculateDiscount(item);

    const taxableAmount =

        grossAmount - discountAmount;

    const gstAmount =

        (taxableAmount * gstPercent) / 100;

    return gstAmount;

};

export default calculateGST;