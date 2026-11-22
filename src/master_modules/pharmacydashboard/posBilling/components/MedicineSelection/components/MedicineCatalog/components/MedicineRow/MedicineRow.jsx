import "./MedicineRow.css";

/* ===========================================================
Components
=========================================================== */

import MedicineImage from "../MedicineImage/MedicineImage";

import StockBadge from "../StockBadge/StockBadge";

import AddMedicineButton from "../AddMedicineButton/AddMedicineButton";

/* ===========================================================
Component
=========================================================== */

const MedicineRow = ({

    medicine,

    cartItems = [],

    onAddMedicine,

}) => {

    /* ===========================================================
       Helpers
    =========================================================== */

    const isAdded =

        cartItems.some(

            (item) =>

                item.id ===

                medicine.id

        );

    const outOfStock =

        medicine.status ===

        "Out Of Stock";

    return (

        <article

            className={`

                medicine-row

                ${

                    isAdded

                        ? "added"

                        : ""

                }

            `}

        >

            {/* ==========================================
                Left
            ========================================== */}

            <div className="medicine-row-left">

                <MedicineImage

                    medicine={medicine}

                />

                <div className="medicine-info">

                    <h3>

                        {

                            medicine.medicineName

                        }

                    </h3>

                    <p className="medicine-subtitle">

                        {

                            medicine.genericName

                        }

                    </p>


                                        <div className="medicine-meta">

                        <span>

                            Manufacturer :

                            <strong>

                                {

                                    medicine.manufacturer

                                }

                            </strong>

                        </span>

                        <span className="dot">

                            •

                        </span>

                        <span>

                            Batch :

                            <strong>

                                {

                                    medicine.batchNo

                                }

                            </strong>

                        </span>

                        <span className="dot">

                            •

                        </span>

                        <span>

                            Exp :

                            <strong>

                                {

                                    medicine.expiryDate

                                }

                            </strong>

                        </span>

                    </div>

                    <div className="medicine-footer-info">

                        <StockBadge

                            status={

                                medicine.status

                            }

                        />

                    </div>

                </div>

            </div>

            {/* ==========================================
                Right
            ========================================== */}

            <div className="medicine-row-right">

                <div className="medicine-price">

                    <h3>

                        ₹

                        {

                            medicine.sellingPrice

                        }

                    </h3>

                    <small>

                        MRP ₹

                        {

                            medicine.mrp

                        }

                    </small>

                </div>

                <AddMedicineButton

                    medicine={medicine}

                    disabled={

                        outOfStock ||

                        isAdded

                    }

                    buttonText={

                        isAdded

                            ? "Added"

                            : "Add"

                    }

                    onClick={() =>

                        onAddMedicine?.(

                            medicine

                        )

                    }

                />

            </div>

                    </article>

    );

};

export default MedicineRow;