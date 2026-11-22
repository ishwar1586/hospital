// /* ==========================================================
//    Stock Updater Utility
// ========================================================== */

// const LOW_STOCK_LIMIT = 10;

// /* ==========================================================
//    Update Stock
// ========================================================== */

// const updateStock = (cartItems = []) => {

//     return cartItems.map((item) => {

//         const selectedBatch = item.selectedBatch;

//         if (!selectedBatch) {

//             throw new Error(
//                 `${item.medicineName} batch not selected.`
//             );

//         }

//         const availableQuantity =
//             Number(selectedBatch.availableQuantity || 0);

//         const soldQuantity =
//             Number(item.quantity || 0);

//         if (soldQuantity > availableQuantity) {

//             throw new Error(
//                 `Insufficient stock for ${item.medicineName}`
//             );

//         }

//         const remainingQuantity =
//             availableQuantity - soldQuantity;

//         return {

//             medicineId: item.id,

//             medicineCode: item.medicineCode,

//             medicineName: item.medicineName,

//             batchNo: selectedBatch.batchNo,

//             expiryDate:
//                 selectedBatch.expiryDate,

//             previousStock:
//                 availableQuantity,

//             soldQuantity,

//             currentStock:
//                 remainingQuantity,

//             stockStatus:

//                 remainingQuantity === 0
//                     ? "OUT_OF_STOCK"
//                     : remainingQuantity <= LOW_STOCK_LIMIT
//                     ? "LOW_STOCK"
//                     : "AVAILABLE",

//         };

//     });

// };

// export default updateStock;



/* ==========================================================
   Stock Updater Utility
========================================================== */

const LOW_STOCK_LIMIT = 10;

const updateStock = (cartItems = []) => {

    return cartItems.map((item) => {

        const availableQuantity =
            Number(
                item.availableStock || 0
            );

        const soldQuantity =
            Number(
                item.quantity || 0
            );

        if (soldQuantity > availableQuantity) {

            throw new Error(
                `Insufficient stock for ${item.medicineName}`
            );

        }

        const remainingQuantity =
            availableQuantity - soldQuantity;

        return {

            medicineId: item.id,

            medicineCode: item.medicineCode,

            medicineName: item.medicineName,

            batchNo: item.batchNo,

            expiryDate: item.expiryDate,

            previousStock: availableQuantity,

            soldQuantity,

            currentStock: remainingQuantity,

            stockStatus:

                remainingQuantity === 0

                    ? "OUT_OF_STOCK"

                    : remainingQuantity <= LOW_STOCK_LIMIT

                    ? "LOW_STOCK"

                    : "AVAILABLE",

        };

    });

};

export default updateStock;