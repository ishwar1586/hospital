export const validateBarcode = (formData) => {

    const errors = {};

    if (!formData.barcodeType) {

        errors.barcodeType =

            "Please select barcode type.";

    }

    if (!formData.labelSize) {

        errors.labelSize =

            "Please select label size.";

    }

    if (

        !formData.copies ||

        Number(formData.copies) <= 0

    ) {

        errors.copies =

            "Copies should be greater than zero.";

    }

    return errors;

};

export default validateBarcode;