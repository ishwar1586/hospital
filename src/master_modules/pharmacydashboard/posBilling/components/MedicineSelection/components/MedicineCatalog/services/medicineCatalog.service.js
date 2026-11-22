/* ===========================================================
Mock Data
=========================================================== */

import {

    medicineCatalog,

} from "../mock/medicineCatalog.mock";

/* ===========================================================
Get All Medicines
=========================================================== */

export const getMedicineCatalog = () => {

    return medicineCatalog;

};

/* ===========================================================
Get Medicine By Id
=========================================================== */

export const getMedicineById = (id) => {

    return medicineCatalog.find(

        (medicine) =>

            medicine.id === id

    );

};

/* ===========================================================
Search Medicines
=========================================================== */

export const searchMedicines = (keyword = "") => {

    if (!keyword.trim()) {

        return medicineCatalog;

    }

    const search = keyword

        .toLowerCase()

        .trim();

    return medicineCatalog.filter((medicine) =>

        medicine.medicineName

            .toLowerCase()

            .includes(search)

        ||

        medicine.genericName

            .toLowerCase()

            .includes(search)

        ||

        medicine.manufacturer

            .toLowerCase()

            .includes(search)

        ||

        medicine.medicineCode

            .toLowerCase()

            .includes(search)

        ||

        medicine.batchNo

            .toLowerCase()

            .includes(search)

    );

};

/* ===========================================================
Filter By Category
=========================================================== */

export const filterMedicineCategory = (

    category

) => {

    if (

        !category ||

        category === "all"

    ) {

        return medicineCatalog;

    }

    return medicineCatalog.filter(

        (medicine) =>

            medicine.category

                .toLowerCase()

            ===

            category

                .toLowerCase()

    );

};


export default filterMedicineCategory;