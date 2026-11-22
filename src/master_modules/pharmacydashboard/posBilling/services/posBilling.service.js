import buildSalePayload from "../utils/salePayloadBuilder";
import updateStock from "../utils/stockUpdater";

/* ==========================================================
   Complete Sale
========================================================== */

export const completeSale = async ({

    customer,

    cartItems,

    billingSummary,

    paymentMethod,

    paymentDetails,

    user,

    branch,

    hospital,

}) => {

    try {

        /* ==============================================
           Build Payload
        ============================================== */

        const salePayload = buildSalePayload({

            customer,

            cartItems,

            billingSummary,

            paymentMethod,

            paymentDetails,

            user,

            branch,

            hospital,

        });

        /* ==============================================
           Update Local Stock
        ============================================== */

        const updatedStock = updateStock(cartItems);

        /* ==============================================
           Future API Call
        ============================================== */

        // await axios.post(
        //     "/api/pharmacy/sales",
        //     salePayload
        // );

        return {

            success: true,

            message: "Sale Completed Successfully",

            salePayload,

            updatedStock,

        };

    }

    catch (error) {

        console.error(error);

        return {

            success: false,

            message: "Unable to Complete Sale",

            error,

        };

    }

};


export default completeSale;