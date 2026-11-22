import "./MedicineList.css";

/* ===========================================================
Components
=========================================================== */

import MedicineRow from "../MedicineRow/MedicineRow";

/* ===========================================================
Component
=========================================================== */

const MedicineList = ({

    medicines = [],

    cartItems = [],

    onAddMedicine,

}) => {

    /* ===========================================================
       Empty State
    =========================================================== */

    if (medicines.length === 0) {

        return (

            <section className="medicine-list-empty">

                <h3>

                    No Medicines Found

                </h3>

                <p>

                    No medicines are available for the selected
                    search or category.

                </p>

            </section>

        );

    }

    /* ===========================================================
       Render
    =========================================================== */

    return (

        <section className="medicine-list">

            {

                medicines.map((medicine) => (

                    <MedicineRow

                        key={medicine.id}

                        medicine={medicine}

                        cartItems={cartItems}

                        onAddMedicine={onAddMedicine}

                    />

                ))

            }

        </section>

    );

};

export default MedicineList;