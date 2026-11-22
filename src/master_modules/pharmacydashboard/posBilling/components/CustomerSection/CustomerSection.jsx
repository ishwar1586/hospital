import { useState } from "react";
import "./CustomerSection.css";

/* ===========================================================
Components
=========================================================== */

import CustomerType
from "../CustomerType/CustomerType";

import PatientSearch
from "../PatientSearch/PatientSearch";

import PatientSearchResult
from "../PatientSearchResult/PatientSearchResult";

import SelectedPatientCard
from "../SelectedPatientCard/SelectedPatientCard";

import ManualBillingCard
from "./components/ManualBillingCard/ManualBillingCard";

import WalkInCustomerModal
from "./components/WalkInCustomerModal/WalkInCustomerModal";

/* ===========================================================
Modals
=========================================================== */

import PatientDetailsModal
from "../../modals/PatientDetailsModal/PatientDetailsModal";

/* ===========================================================
Mock
=========================================================== */

import prescriptionMock
from "../../mock/prescription.mock";

/* ===========================================================
Component
=========================================================== */

const CustomerSection = ({

    customerType,
    setCustomerType,

    billingMode,
    setBillingMode,

    searchTerm,
    setSearchTerm,

    selectedPatient,
    setSelectedPatient,

    patientModalOpen,
    setPatientModalOpen,

    walkInCustomer,
    setWalkInCustomer,

    onStartManualBilling,
    onLoadPrescription,

    onWalkInCustomer,
    onCashCustomer,

}) => {

    /* ===========================================================
       States
    =========================================================== */

    const [

        walkInModalOpen,

        setWalkInModalOpen,

    ] = useState(false);

    /* ===========================================================
       Derived State
    =========================================================== */

    const isWalkIn =

        customerType === "walkin";


            /* ===========================================================
       Customer Type Change
    =========================================================== */

    const handleCustomerTypeChange = (

        value

    ) => {

        /* -----------------------------------------
           Update Customer Type
        ----------------------------------------- */

        setCustomerType(value);

        /* -----------------------------------------
           Reset Patient Related State
        ----------------------------------------- */

        setSelectedPatient(null);

        setSearchTerm("");

        setPatientModalOpen(false);

        /* -----------------------------------------
           Reset Walk-in State
        ----------------------------------------- */

        setWalkInModalOpen(false);

        setWalkInCustomer(null);

        /* -----------------------------------------
           Billing Mode
        ----------------------------------------- */

        if (

            value === "walkin"

        ) {

            setBillingMode("manual");

        }

        else {

            setBillingMode("prescription");

        }

    };

    /* ===========================================================
       Patient Selected
    =========================================================== */

    const handlePatientSelect = (

        patient

    ) => {

        setSelectedPatient(

            patient

        );

        setSearchTerm("");

    };

    /* ===========================================================
       Load Prescription
    =========================================================== */

    const handleLoadPrescription = () => {

        if (

            !selectedPatient

        ) return;

        onLoadPrescription?.(

            selectedPatient,

            prescriptionMock

        );

        setPatientModalOpen(false);

    };

    /* ===========================================================
       Open Walk-in Modal
    =========================================================== */

    const handleManualBilling = () => {

        setWalkInModalOpen(true);

    };

    /* ===========================================================
       Walk-in Customer
    =========================================================== */

    const handleWalkInContinue = (

        customer

    ) => {

        setWalkInModalOpen(false);

        onWalkInCustomer?.({

            ...customer,

            customerType: "WALK_IN",

        });

    };

    /* ===========================================================
       Cash Customer
    =========================================================== */

    const handleCashCustomer = (

        customer

    ) => {

        setWalkInModalOpen(false);

        onCashCustomer?.({

            ...customer,

            customerType: "CASH_CUSTOMER",

        });

    };

    /* ===========================================================
       Remove Patient
    =========================================================== */

    const handleRemovePatient = () => {

        setSelectedPatient(null);

        setSearchTerm("");

    };

    /* ===========================================================
       View Patient Details
    =========================================================== */

    const handleViewPatient = () => {

        if (

            !selectedPatient

        ) return;

        setPatientModalOpen(true);

    };


        /* ===========================================================
       Render
    =========================================================== */

    return (

        <section className="customer-section">

            {/* ==========================================
                Customer Type
            ========================================== */}

            <CustomerType
                value={customerType}
                onChange={handleCustomerTypeChange}
            />

            {/* ==========================================
                Walk-in Customer Flow
            ========================================== */}

            {isWalkIn && (

                <>

                    <ManualBillingCard
                        customer={walkInCustomer}
                        onStartBilling={handleManualBilling}
                    />

                    <WalkInCustomerModal

                        open={walkInModalOpen}

                        onClose={() =>

                            setWalkInModalOpen(false)

                        }

                        initialData={walkInCustomer}

                        onContinue={

                            handleWalkInContinue

                        }

                        onCashCustomer={

                            handleCashCustomer

                        }

                    />

                </>

            )}

            {/* ==========================================
                Prescription Flow
            ========================================== */}

            {!isWalkIn && (

                <>

                    {/* ======================================
                        Patient Search
                    ======================================= */}

                    <PatientSearch

                        customerType={customerType}

                        searchValue={searchTerm}

                        onSearch={(event) =>

                            setSearchTerm(

                                event.target.value

                            )

                        }

                    />

                    {/* ======================================
                        Search Result
                    ======================================= */}

                    {

                        !selectedPatient && (

                            <PatientSearchResult

                                customerType={

                                    customerType

                                }

                                searchTerm={

                                    searchTerm

                                }

                                onSelect={

                                    handlePatientSelect

                                }

                            />

                        )

                    }

                    {/* ======================================
                        Selected Patient
                    ======================================= */}

                    {

                        selectedPatient && (

                            <SelectedPatientCard

                                patient={

                                    selectedPatient

                                }

                                onViewDetails={

                                    handleViewPatient

                                }

                                onRemove={

                                    handleRemovePatient

                                }

                            />

                        )

                    }

                </>

            )}

            {/* ==========================================
                Patient Details Modal
            ========================================== */}

            <PatientDetailsModal

                open={patientModalOpen}

                patient={selectedPatient}

                onClose={() =>

                    setPatientModalOpen(false)

                }

                onLoadPrescription={

                    handleLoadPrescription

                }

                onViewHistory={() =>

                    console.log(

                        "View Patient History"

                    )

                }

            />

        </section>

    );

};

export default CustomerSection;