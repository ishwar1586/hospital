import { useState } from "react";

import "@/master_modules/IPD/billingManagement/pages/billingManagement.css";

import BillingStats from "@/master_modules/IPD/billingManagement/components/billingStats/BillingStats";
import BillingFilters from "@/master_modules/IPD/billingManagement/components/billingFilters/BillingFilters";
import BillingTable from "@/master_modules/IPD/billingManagement/components/billingTable/BillingTable";
import BillDetailsDrawer from "@/master_modules/IPD/billingManagement/components/billDetailsDrawer/BillDetailsDrawer";
import GenerateBillModal from "@/master_modules/IPD/billingManagement/components/generateBillModal/GenerateBillModal";
import PaymentModal from "@/master_modules/IPD/billingManagement/components/paymentModal/PaymentModal";
import PrintInvoiceModal from "@/master_modules/IPD/billingManagement/components/printInvoiceModal/PrintInvoiceModal";
import BillSettlementModal from "@/master_modules/IPD/billingManagement/components/billSettlementModal/BillSettlementModal";

import billingPatients from "@/master_modules/IPD/billingManagement/mock/billingPatients.mock";

function BillingManagement() {

    const [filters, setFilters] =
        useState({
            date: "",
            billStatus: "",
            paymentStatus: "",
            department: "",
            doctor: "",
            search: "",
        });

    const handleFilterChange =
        (e) => {

            setFilters({
                ...filters,
                [e.target.name]:
                    e.target.value,
            });

        };


    const filteredPatients =
        billingPatients.filter(
            (patient) => {

                const dateMatch =
                    !filters.date ||
                    patient.billDate ===
                    filters.date;

                const billStatusMatch =
                    !filters.billStatus ||
                    patient.billStatus ===
                    filters.billStatus;

                const paymentStatusMatch =
                    !filters.paymentStatus ||
                    patient.paymentStatus ===
                    filters.paymentStatus;

                const departmentMatch =
                    !filters.department ||
                    patient.department ===
                    filters.department;

                const doctorMatch =
                    !filters.doctor ||
                    patient.doctor ===
                    filters.doctor;

                const searchMatch =
                    !filters.search ||

                    patient.patientName
                        .toLowerCase()
                        .includes(
                            filters.search.toLowerCase()
                        ) ||

                    patient.ipdNo
                        .toLowerCase()
                        .includes(
                            filters.search.toLowerCase()
                        ) ||

                    patient.billNo
                        .toLowerCase()
                        .includes(
                            filters.search.toLowerCase()
                        );

                return (
                    dateMatch &&
                    billStatusMatch &&
                    paymentStatusMatch &&
                    departmentMatch &&
                    doctorMatch &&
                    searchMatch
                );

            }
        );

const handleResetFilters =
  () => {

    const defaultFilters = {
      date: "",
      billStatus: "",
      paymentStatus: "",
      department: "",
      doctor: "",
      search: "",
    };

    setFilters(
      defaultFilters
    );

    // setAppliedFilters(
    //   defaultFilters
    // );

  };



    const [openBillDrawer,
        setOpenBillDrawer] =
        useState(false);

    const [selectedPatient,
        setSelectedPatient] =
        useState(null);

    const [openGenerateBillModal,
        setOpenGenerateBillModal] =
        useState(false);

    const [openPaymentModal,
        setOpenPaymentModal] =
        useState(false);

    const [openPrintInvoiceModal,
        setOpenPrintInvoiceModal] =
        useState(false);

    const [openSettlementModal,
        setOpenSettlementModal] =
        useState(false);


    const handleSettlement =
        (patient) => {

            setSelectedPatient(
                patient
            );

            setOpenSettlementModal(
                true
            );

        };

    const handlePrintInvoice =
        (patient) => {

            setSelectedPatient(
                patient
            );

            setOpenPrintInvoiceModal(
                true
            );

        };

    const handlePayment =
        (patient) => {

            setSelectedPatient(
                patient
            );

            setOpenPaymentModal(
                true
            );

        };

    const handleGenerateBill =
        (patient) => {

            setSelectedPatient(
                patient
            );

            setOpenGenerateBillModal(
                true
            );

        };


    const handleViewBill =
        (patient) => {

            setSelectedPatient(
                patient
            );

            setOpenBillDrawer(
                true
            );

        };

    const handleCloseBillDrawer =
        () => {

            setOpenBillDrawer(
                false
            );

            setSelectedPatient(
                null
            );

        };

    return (

        <div className="billing-management-page">

            <div className="billing-header">

                <div>

                    <h1>
                        Billing Management
                    </h1>

                    <p>
                        Manage patient billing,
                        invoices and collections.
                    </p>

                </div>

                <button className="generate-bill-btn">

                    + Generate Bill

                </button>

            </div>

            <BillingStats />

            <BillingFilters
            onReset={handleResetFilters}
                filters={filters}
                onChange={handleFilterChange}
            />

            <BillingTable

                patients={filteredPatients}


                onViewBill={
                    handleViewBill
                }

                onGenerateBill={
                    handleGenerateBill
                }


                onPayment={
                    handlePayment
                }

                onPrintInvoice={
                    handlePrintInvoice
                }

                onSettlement={
                    handleSettlement
                }

            />

            <BillDetailsDrawer
                open={openBillDrawer}
                patient={selectedPatient}
                onClose={
                    handleCloseBillDrawer
                }
            />

            <GenerateBillModal
                open={
                    openGenerateBillModal
                }
                patient={
                    selectedPatient
                }
                onClose={() =>
                    setOpenGenerateBillModal(
                        false
                    )
                }
            />

            <PaymentModal
                open={
                    openPaymentModal
                }
                patient={
                    selectedPatient
                }
                onClose={() =>
                    setOpenPaymentModal(
                        false
                    )
                }
            />

            <PrintInvoiceModal
                open={
                    openPrintInvoiceModal
                }
                patient={
                    selectedPatient
                }
                onClose={() =>
                    setOpenPrintInvoiceModal(
                        false
                    )
                }
            />

            <BillSettlementModal
                open={
                    openSettlementModal
                }
                patient={
                    selectedPatient
                }
                onClose={() =>
                    setOpenSettlementModal(
                        false
                    )
                }
            />

        </div>



    );

}

export default BillingManagement;