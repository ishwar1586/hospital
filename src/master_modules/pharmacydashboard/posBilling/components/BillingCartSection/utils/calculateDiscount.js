const calculateDiscount = (item = {}) => {

    const {

        sellingPrice = 0,

        quantity = 0,

        discountPercent = 0,

    } = item;

    const grossAmount =

        sellingPrice * quantity;

    const discountAmount =

        (grossAmount * discountPercent) / 100;

    return discountAmount;

};

export default calculateDiscount;