export const validateTransfer = (formData) => {

    const errors = {};

    /* =========================================
       Destination Warehouse
    ========================================= */

    if (!formData.toWarehouse) {

        errors.toWarehouse =
            "Please select destination warehouse.";

    }

    /* =========================================
       Same Warehouse Check
    ========================================= */

    if (

        formData.fromWarehouse &&

        formData.toWarehouse &&

        formData.fromWarehouse === formData.toWarehouse

    ) {

        errors.toWarehouse =
            "Source and destination warehouse cannot be the same.";

    }

    /* =========================================
       Quantity
    ========================================= */

    if (

        !formData.transferQty ||

        Number(formData.transferQty) <= 0

    ) {

        errors.transferQty =
            "Enter a valid transfer quantity.";

    }

    if (

        Number(formData.transferQty) >

        Number(formData.availableStock)

    ) {

        errors.transferQty =
            "Transfer quantity exceeds available stock.";

    }

    /* =========================================
       Reason
    ========================================= */

    if (!formData.reason) {

        errors.reason =
            "Please select transfer reason.";

    }

    return errors;

};

export default validateTransfer;