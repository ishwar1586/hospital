// import "./MedicineSelection.css";

// /* ===========================================================
// Components
// =========================================================== */

// import PrescriptionMode
// from "./components/PrescriptionMode/PrescriptionMode";

// import ManualMode
// from "./components/ManualMode/ManualMode";

// /* ===========================================================
// Component
// =========================================================== */

// const MedicineSelection = ({

//     billingMode,

//     customerType,

//     selectedPatient,

//     prescriptionData,

//     cartItems = [],

//     prescriptionCompleted,

//     onAddMedicine,

//     onGoToBilling,

// }) => {

//     /* ===========================================================
//        Manual Billing
//     =========================================================== */

//     if (

//         billingMode === "manual"

//     ) {

//         return (

//             <ManualMode

//                 customerType={

//                     customerType

//                 }

//                 cartItems={

//                     cartItems

//                 }

//                 onAddMedicine={

//                     onAddMedicine

//                 }

//             />

//         );

//     }

//         /* ===========================================================
//        Prescription Billing
//     =========================================================== */

//     return (

//         <PrescriptionMode

//             customerType={

//                 customerType

//             }

//             selectedPatient={

//                 selectedPatient

//             }

//             prescriptionData={

//                 prescriptionData

//             }

//             cartItems={

//                 cartItems

//             }

//             prescriptionCompleted={

//                 prescriptionCompleted

//             }

//             onAddMedicine={

//                 onAddMedicine

//             }

//             onGoToBilling={

//                 onGoToBilling

//             }

//         />

//     );

// };

// export default MedicineSelection;



import "./MedicineSelection.css";

/* ===========================================================
Components
=========================================================== */

import PrescriptionMode
from "./components/PrescriptionMode/PrescriptionMode";

import ManualMode
from "./components/ManualMode/ManualMode";

/* ===========================================================
Component
=========================================================== */

const MedicineSelection = ({

    billingMode = "manual",

    customerType,

    selectedPatient,

    walkInCustomer,

    prescriptionData,

    cartItems = [],

    prescriptionCompleted = false,

    onAddMedicine,

    onGoToBilling,

}) => {

    /* ===========================================================
       Manual Billing
    =========================================================== */

    if (

        billingMode === "manual"

    ) {

        return (

            <ManualMode

                customerType={

                    customerType

                }

                walkInCustomer={

                    walkInCustomer

                }

                cartItems={

                    cartItems

                }

                onAddMedicine={

                    onAddMedicine

                }

            />

        );

    }

    /* ===========================================================
       Prescription Billing
    =========================================================== */

    return (

        <PrescriptionMode

            customerType={

                customerType

            }

            selectedPatient={

                selectedPatient

            }

            prescriptionData={

                prescriptionData

            }

            cartItems={

                cartItems

            }

            prescriptionCompleted={

                prescriptionCompleted

            }

            onAddMedicine={

                onAddMedicine

            }

            onGoToBilling={

                onGoToBilling

            }

        />

    );

};

export default MedicineSelection;