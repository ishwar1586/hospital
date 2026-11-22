import calculateDiscount from "./calculateDiscount";
import calculateGST from "./calculateGST";

const calculateLineTotal = (item = {}) => {

    const {

        sellingPrice = 0,

        quantity = 0,

    } = item;

    const grossAmount =

        sellingPrice * quantity;

    const discountAmount =

        calculateDiscount(item);

    const gstAmount =

        calculateGST(item);

    return (

        grossAmount -

        discountAmount +

        gstAmount

    );

};

export default calculateLineTotal;