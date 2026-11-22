import React, { useMemo, useState } from "react";

import BillingHeader from "../components/BillingHeader/BillingHeader";

import BillingStats from "../components/BillingStats/BillingStats";

import BillingDepartmentTabs from "../components/BillingDepartmentTabs/BillingDepartmentTabs";

import BillingFilters from "../components/BillingFilters/BillingFilters";

import BillingTable from "../components/BillingTable/BillingTable";

import DepartmentSelectionModal from "../components/GenerateBill/DepartmentSelectionModal";

import PharmacyBilling from "../components/PharmacyBilling/CustomerTypeSelection/PharmacyBilling";

import PatientSelection from "../components/PharmacyBilling/RegisteredPatient/PatientSelection/PatientSelection";

import PatientDetails from "../components/PharmacyBilling/RegisteredPatient/PatientDetails/PatientDetails";

import WalkInCustomerDetails from "../components/PharmacyBilling/WalkInCustomer/CustomerDetails/WalkInCustomerDetails";

import WalkInCustomerInformation from "../components/PharmacyBilling/WalkInCustomer/CustomerInformation/WalkInCustomerInformation";

import StaffSelection from "../components/PharmacyBilling/SelfStaffPurchase/StaffSelection/StaffSelection";

import StaffDetails from "../components/PharmacyBilling/SelfStaffPurchase/StaffDetails/StaffDetails";

import StaffInformation from "../components/PharmacyBilling/SelfStaffPurchase/StaffInformation/StaffInformation";

import PharmacyMedicines from "../components/PharmacyBilling/Medicines/PharmacyMedicines";

import PharmacyPayment from "../components/PharmacyBilling/Payment/PharmacyPayment";

import PharmacyReview from "../components/PharmacyBilling/PaymentReview/PharmacyReview";

import PharmacyInvoice from "../components/PharmacyBilling/Invoice/PharmacyInvoice";

import IPDPatientSelection from "../components/IPDBilling/PatientSelection/IPDPatientSelection";

import IPDPatientDetails from "../components/IPDBilling/PatientDetails/IPDPatientDetails";

import IPDCharges from "../components/IPDBilling/IPDCharges/IPDCharges";

import IPDBillingPayment from "../components/IPDBilling/IPDBillingPayment/IPDBillingPayment";
import IPDBillingReview from "../components/IPDBilling/IPDBillingReview/IPDBillingReview";
import IPDInvoice from "@/master_modules/Billing&Invoice/components/IPDBilling/IPDInvoice/IPDInvoice.jsx";

import billingHeaderConfig from "../config/billingHeader.config";

import billingStatsConfig from "../config/billingStats.config";

import billingDepartmentTabsConfig from "../config/billingDepartmentTabs.config";

import billingFiltersConfig from "../config/billingFilters.config";

import billingColumnsConfig from "../config/billingColumns.config";

import billingStatsMock from "../mock/billingStats.mock";

import billingTabsMock from "../mock/billingTabs.mock";

import billingFiltersMock from "../mock/billingFilters.mock";

import billingListMock from "../mock/billingList.mock";

import departmentSelectionMock from "../mock/departmentSelection.mock";

import "../styles/billingManagement.css";

const BillingManagement = () => {

  const [page, setPage] = useState(1);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [isDepartmentModalOpen, setIsDepartmentModalOpen] = useState(false);

  const [selectedBillingDepartment, setSelectedBillingDepartment] =

    useState(null);
// IPD workflow
  const [isIPDPatientSelectionOpen, setIsIPDPatientSelectionOpen] =

    useState(false);

  const [isIPDPatientDetailsOpen, setIsIPDPatientDetailsOpen] =

    useState(false);

  const [isIPDChargesOpen, setIsIPDChargesOpen] = useState(false);

  const [isIPDBillingPaymentOpen, setIsIPDBillingPaymentOpen] = useState(false);
  const [isIPDBillingReviewOpen, setIsIPDBillingReviewOpen] = useState(false);

  const [selectedIPDPatient, setSelectedIPDPatient] = useState(null);

  const [ipdChargesData, setIpdChargesData] = useState([]);

  const [ipdBillingSummary, setIpdBillingSummary] = useState(null);

  const [isIPDInvoiceOpen, setIsIPDInvoiceOpen] = useState(false);
const [ipdInvoiceData, setIpdInvoiceData] = useState(null);
const [ipdPaymentData, setIpdPaymentData] = useState(null);
// Pharmacy workflow
  const [isPharmacyBillingOpen, setIsPharmacyBillingOpen] = useState(false);

  const [selectedPharmacyCustomerType, setSelectedPharmacyCustomerType] =

    useState(null);

  const [isPatientSelectionOpen, setIsPatientSelectionOpen] = useState(false);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const [isPatientDetailsOpen, setIsPatientDetailsOpen] = useState(false);

  const [isWalkInCustomerDetailsOpen, setIsWalkInCustomerDetailsOpen] =

    useState(false);

  const [walkInCustomerData, setWalkInCustomerData] = useState(null);

  const [isWalkInCustomerInformationOpen, setIsWalkInCustomerInformationOpen] =

    useState(false);

  const [isStaffSelectionOpen, setIsStaffSelectionOpen] = useState(false);

  const [selectedStaff, setSelectedStaff] = useState(null);

  const [isStaffDetailsOpen, setIsStaffDetailsOpen] = useState(false);

  const [isStaffInformationOpen, setIsStaffInformationOpen] = useState(false);

  const [isPharmacyMedicinesOpen, setIsPharmacyMedicinesOpen] = useState(false);

  const [pharmacyBillingData, setPharmacyBillingData] = useState(null);

  const [isPharmacyPaymentOpen, setIsPharmacyPaymentOpen] = useState(false);

  const [pharmacyPaymentData, setPharmacyPaymentData] = useState(null);

  const [isPharmacyReviewOpen, setIsPharmacyReviewOpen] = useState(false);

  const [pharmacyReviewData, setPharmacyReviewData] = useState(null);

  const [isPharmacyInvoiceOpen, setIsPharmacyInvoiceOpen] = useState(false);

  const [pharmacyInvoiceData, setPharmacyInvoiceData] = useState(null);

  const getCustomerType = () =>

    selectedPharmacyCustomerType?.value ||

    selectedPharmacyCustomerType?.id ||

    pharmacyBillingData?.customerType ||

    "registered-patient";
// Reset both workflows without leaving stale state behind.
  const resetPharmacyWorkflow = () => {

    setSelectedBillingDepartment(null);

    setSelectedPharmacyCustomerType(null);

    setSelectedPatient(null);

    setWalkInCustomerData(null);

    setSelectedStaff(null);

    setPharmacyBillingData(null);

    setPharmacyPaymentData(null);

    setPharmacyReviewData(null);

    setPharmacyInvoiceData(null);

    setIsDepartmentModalOpen(false);

    setIsIPDPatientSelectionOpen(false);

    setIsIPDPatientDetailsOpen(false);

    setIsIPDChargesOpen(false);

    setIsIPDBillingPaymentOpen(false);
    setIsIPDBillingReviewOpen(false);

    setIpdChargesData([]);

    setIpdBillingSummary(null);

    setSelectedIPDPatient(null);

    setIsPharmacyBillingOpen(false);

    setIsPatientSelectionOpen(false);

    setIsPatientDetailsOpen(false);

    setIsWalkInCustomerDetailsOpen(false);

    setIsWalkInCustomerInformationOpen(false);

    setIsStaffSelectionOpen(false);

    setIsStaffDetailsOpen(false);

    setIsStaffInformationOpen(false);

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setPage(1);

  };

  const handleHeaderAction = (action) => {

    const actionName =

      typeof action === "string" ? action : action?.action;

    if (actionName === "generate-bill") {

      resetPharmacyWorkflow();

      setIsDepartmentModalOpen(true);

    }

  };

  const handleDepartmentModalClose = () => {

    setIsDepartmentModalOpen(false);

    setSelectedBillingDepartment(null);

  };

  const handleBillingDepartmentSelect = (department) => {

    if (!department) return;

    setSelectedBillingDepartment(department);

    const departmentValue = department?.value || department?.id;

    const normalizedDepartmentValue = String(

      departmentValue || ""

    ).toLowerCase();
// IPD: open patient selection first.
    if (normalizedDepartmentValue === "ipd") {

      setIsDepartmentModalOpen(false);

      setSelectedIPDPatient(null);

      setIsIPDPatientDetailsOpen(false);

      setIsIPDChargesOpen(false);

      setIsIPDBillingPaymentOpen(false);
    setIsIPDBillingReviewOpen(false);

      setIpdChargesData([]);

      setIpdBillingSummary(null);
// Keep Pharmacy screens closed.
      setIsPharmacyBillingOpen(false);

      setIsPatientSelectionOpen(false);

      setIsPatientDetailsOpen(false);

      setIsWalkInCustomerDetailsOpen(false);

      setIsWalkInCustomerInformationOpen(false);

      setIsStaffSelectionOpen(false);

      setIsStaffDetailsOpen(false);

      setIsStaffInformationOpen(false);

      setIsPharmacyMedicinesOpen(false);

      setIsPharmacyPaymentOpen(false);

      setIsPharmacyReviewOpen(false);

      setIsPharmacyInvoiceOpen(false);

      setIsIPDPatientSelectionOpen(true);

      return;

    }
// Pharmacy: preserve the existing workflow.
    if (normalizedDepartmentValue === "pharmacy") {

      setIsDepartmentModalOpen(false);

      setSelectedPharmacyCustomerType(null);

      setSelectedPatient(null);

      setWalkInCustomerData(null);

      setSelectedStaff(null);

      setPharmacyBillingData(null);

      setPharmacyPaymentData(null);

      setPharmacyReviewData(null);

      setPharmacyInvoiceData(null);

      setIsIPDPatientSelectionOpen(false);

      setIsIPDPatientDetailsOpen(false);

      setSelectedIPDPatient(null);

      setIsPharmacyBillingOpen(true);

      setIsPatientSelectionOpen(false);

      setIsPatientDetailsOpen(false);

      setIsWalkInCustomerDetailsOpen(false);

      setIsWalkInCustomerInformationOpen(false);

      setIsStaffSelectionOpen(false);

      setIsStaffDetailsOpen(false);

      setIsStaffInformationOpen(false);

      setIsPharmacyMedicinesOpen(false);

      setIsPharmacyPaymentOpen(false);

      setIsPharmacyReviewOpen(false);

      setIsPharmacyInvoiceOpen(false);

      return;

    }

    console.log(

      `Billing workflow for "${departmentValue}" is not integrated yet.`

    );

  };
// IPD patient selection handlers.
  const handleIPDPatientSelectionClose = () => {

    setIsIPDPatientSelectionOpen(false);

    setIsIPDPatientDetailsOpen(false);

    setIsIPDChargesOpen(false);

    setIsIPDBillingPaymentOpen(false);
    setIsIPDBillingReviewOpen(false);

    setIpdChargesData([]);

    setIpdBillingSummary(null);

    setSelectedIPDPatient(null);

    setSelectedBillingDepartment(null);

  };

  const handleIPDPatientSelect = (patient) => {

    if (!patient) return;

    setSelectedIPDPatient(patient);

    setIsIPDPatientSelectionOpen(false);

    setIsIPDPatientDetailsOpen(true);

  };

  const handleIPDPatientDetailsBack = () => {

    setIsIPDPatientDetailsOpen(false);

    setIsIPDPatientSelectionOpen(true);

  };

  const handleIPDPatientDetailsCancel = () => {

    setIsIPDPatientDetailsOpen(false);

    setIsIPDChargesOpen(false);

    setIsIPDBillingPaymentOpen(false);
    setIsIPDBillingReviewOpen(false);

    setIpdChargesData([]);

    setIpdBillingSummary(null);

    setIsIPDPatientSelectionOpen(false);

    setSelectedIPDPatient(null);

    setSelectedBillingDepartment(null);

  };

  const handleIPDPatientDetailsContinue = (patientDetails) => {

    setSelectedIPDPatient((previousPatient) => ({

      ...(previousPatient || {}),

      ...(patientDetails || {}),

    }));

    setIsIPDPatientDetailsOpen(false);

    setIsIPDPatientSelectionOpen(false);

    setIsIPDChargesOpen(true);

  };

  const handleIPDChargesBack = () => {

    setIsIPDChargesOpen(false);

    setIsIPDBillingPaymentOpen(false);
    setIsIPDBillingReviewOpen(false);

    setIsIPDPatientDetailsOpen(true);

  };

  const handleIPDChargesCancel = () => {

    setIsIPDChargesOpen(false);

    setIsIPDBillingPaymentOpen(false);
    setIsIPDBillingReviewOpen(false);

    setIsIPDPatientDetailsOpen(false);

    setIsIPDPatientSelectionOpen(false);

    setSelectedIPDPatient(null);

    setIpdChargesData([]);

    setIpdBillingSummary(null);

    setSelectedBillingDepartment(null);

  };

const handleIPDChargesContinue = ({
  patient,
  charges,
  summary,
}) => {
  const finalPatient = {
    ...(selectedIPDPatient || {}),
    ...(patient || {}),
  };

  const finalCharges = Array.isArray(charges) ? charges : [];

  setSelectedIPDPatient(finalPatient);
  setIpdChargesData(finalCharges);
  setIpdBillingSummary(summary || {});

  // Charges ke baad Payment page khulega — Invoice nahi.
  setIsIPDInvoiceOpen(false);
  setIsIPDBillingReviewOpen(false);
  setIsIPDChargesOpen(false);
  setIsIPDBillingPaymentOpen(true);
};

  const handleIPDBillingPaymentBack = () => {

    setIsIPDBillingPaymentOpen(false);
    setIsIPDBillingReviewOpen(false);

    setIsIPDChargesOpen(true);

  };

  const handleIPDBillingPaymentCancel = () => {

    setIsIPDBillingPaymentOpen(false);
    setIsIPDBillingReviewOpen(false);

    setIsIPDChargesOpen(false);

    setIsIPDPatientDetailsOpen(false);

    setIsIPDPatientSelectionOpen(false);

    setSelectedIPDPatient(null);

    setIpdChargesData([]);

    setIpdBillingSummary(null);

    setSelectedBillingDepartment(null);

    setIsIPDInvoiceOpen(false);
setIpdInvoiceData(null);
setIpdPaymentData(null);

  };

  // const handleIPDPaymentSuccess = (paymentResult) => {
  //   // This callback should be invoked by the payment screen only after verification succeeds.
  //   setIpdBillingSummary((previous) => ({
  //     ...(previous || {}),
  //     paymentResult: paymentResult || null,
  //     payment: paymentResult || null,
  //   }));
  //   setIsIPDBillingPaymentOpen(false);
  //   setIsIPDBillingReviewOpen(true);
  // };


  const handleIPDPaymentSuccess = (paymentResult) => {
  setIpdPaymentData(paymentResult || null);

  setIpdBillingSummary((previous) => ({
    ...(previous || {}),
    paymentResult: paymentResult || null,
    payment: paymentResult || null,
  }));

  setIsIPDBillingPaymentOpen(false);
  setIsIPDBillingReviewOpen(true);
};

  const handleIPDBillingReviewBack = () => {
    setIsIPDBillingReviewOpen(false);
    setIsIPDBillingPaymentOpen(true);
  };

  const handleIPDBillingReviewCancel = () => {
    setIsIPDBillingReviewOpen(false);
    setIsIPDBillingPaymentOpen(false);
    setIsIPDChargesOpen(false);
    setIsIPDPatientDetailsOpen(false);
    setIsIPDPatientSelectionOpen(false);
    setSelectedIPDPatient(null);
    setIpdChargesData([]);
    setIpdBillingSummary(null);
    setSelectedBillingDepartment(null);
  };


  
const handleIPDInvoiceGenerated = (invoiceResult) => {
  const generatedInvoice =
    invoiceResult?.invoice ||
    invoiceResult?.data?.invoice ||
    invoiceResult?.data ||
    invoiceResult;

  const finalInvoiceData = {
    ...(generatedInvoice || {}),
    patient:
      generatedInvoice?.patient ||
      selectedIPDPatient ||
      {},
    admission:
      generatedInvoice?.admission ||
      selectedIPDPatient?.admission ||
      selectedIPDPatient ||
      {},
    charges:
      generatedInvoice?.charges ||
      ipdChargesData ||
      [],
    summary:
      generatedInvoice?.summary ||
      ipdBillingSummary ||
      {},
    payments:
      generatedInvoice?.payments ||
      (ipdPaymentData ? [ipdPaymentData] : []),
    invoice: generatedInvoice,
  };

  setIpdInvoiceData(finalInvoiceData);

  setIsIPDPatientSelectionOpen(false);
  setIsIPDPatientDetailsOpen(false);
  setIsIPDChargesOpen(false);
  setIsIPDBillingPaymentOpen(false);
  setIsIPDBillingReviewOpen(false);

  setIsIPDInvoiceOpen(true);
};



  const handleIPDInvoiceClose = () => {
  setIsIPDInvoiceOpen(false);
  setIpdInvoiceData(null);
  setIpdPaymentData(null);
  setIsIPDChargesOpen(true);
};

const handleIPDInvoicePrint = (invoiceData) => {
  console.log("IPD INVOICE PRINT:", invoiceData);
};

const handleIPDInvoiceDownload = (invoiceData) => {
  console.log("IPD INVOICE DOWNLOAD:", invoiceData);
};

const handleIPDInvoiceNewBill = () => {
  setIsIPDInvoiceOpen(false);
  setIpdInvoiceData(null);
  setIpdPaymentData(null);
  setIpdChargesData([]);
  setIpdBillingSummary(null);
  setSelectedIPDPatient(null);
  setIsDepartmentModalOpen(true);
};
// Pharmacy workflow handlers.
  const handlePharmacyBillingClose = () => {

    resetPharmacyWorkflow();

  };

  const handlePharmacyCustomerTypeNext = (customerType) => {

    if (!customerType) return;

    const customerTypeValue = customerType?.value || customerType?.id;

    setSelectedPharmacyCustomerType(customerType);

    if (customerTypeValue === "registered-patient") {

      setIsPharmacyBillingOpen(false);

      setSelectedPatient(null);

      setWalkInCustomerData(null);

      setSelectedStaff(null);

      setPharmacyBillingData(null);

      setPharmacyPaymentData(null);

      setPharmacyReviewData(null);

      setPharmacyInvoiceData(null);

      setIsPatientSelectionOpen(true);

      setIsPatientDetailsOpen(false);

      setIsWalkInCustomerDetailsOpen(false);

      setIsWalkInCustomerInformationOpen(false);

      setIsStaffSelectionOpen(false);

      setIsStaffDetailsOpen(false);

      setIsStaffInformationOpen(false);

      setIsPharmacyMedicinesOpen(false);

      setIsPharmacyPaymentOpen(false);

      setIsPharmacyReviewOpen(false);

      setIsPharmacyInvoiceOpen(false);

      return;

    }

    if (customerTypeValue === "walk-in-customer") {

      setIsPharmacyBillingOpen(false);

      setSelectedPatient(null);

      setWalkInCustomerData(null);

      setSelectedStaff(null);

      setPharmacyBillingData(null);

      setPharmacyPaymentData(null);

      setPharmacyReviewData(null);

      setPharmacyInvoiceData(null);

      setIsPatientSelectionOpen(false);

      setIsPatientDetailsOpen(false);

      setIsWalkInCustomerDetailsOpen(true);

      setIsWalkInCustomerInformationOpen(false);

      setIsStaffSelectionOpen(false);

      setIsStaffDetailsOpen(false);

      setIsStaffInformationOpen(false);

      setIsPharmacyMedicinesOpen(false);

      setIsPharmacyPaymentOpen(false);

      setIsPharmacyReviewOpen(false);

      setIsPharmacyInvoiceOpen(false);

      return;

    }

    if (customerTypeValue === "self-staff-purchase") {

      setIsPharmacyBillingOpen(false);

      setSelectedPatient(null);

      setWalkInCustomerData(null);

      setSelectedStaff(null);

      setPharmacyBillingData(null);

      setPharmacyPaymentData(null);

      setPharmacyReviewData(null);

      setPharmacyInvoiceData(null);

      setIsPatientSelectionOpen(false);

      setIsPatientDetailsOpen(false);

      setIsWalkInCustomerDetailsOpen(false);

      setIsWalkInCustomerInformationOpen(false);

      setIsStaffSelectionOpen(true);

      setIsStaffDetailsOpen(false);

      setIsStaffInformationOpen(false);

      setIsPharmacyMedicinesOpen(false);

      setIsPharmacyPaymentOpen(false);

      setIsPharmacyReviewOpen(false);

      setIsPharmacyInvoiceOpen(false);

    }

  };

  const handlePatientSelectionClose = () => {

    setIsPatientSelectionOpen(false);

    setSelectedPatient(null);

    setIsPatientDetailsOpen(false);

    setIsWalkInCustomerDetailsOpen(false);

    setIsWalkInCustomerInformationOpen(false);

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setPharmacyBillingData(null);

    setPharmacyPaymentData(null);

    setPharmacyReviewData(null);

    setPharmacyInvoiceData(null);

    setIsPharmacyBillingOpen(true);

  };

  const handlePatientSelect = (patient) => {

    if (!patient) return;

    setSelectedPatient(patient);

    setIsPatientSelectionOpen(false);

    setIsPatientDetailsOpen(true);

  };

  const handlePatientDetailsBack = () => {

    setIsPatientDetailsOpen(false);

    setIsWalkInCustomerDetailsOpen(false);

    setIsWalkInCustomerInformationOpen(false);

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setIsPatientSelectionOpen(true);

  };

  const handlePatientDetailsClose = () => {

    setIsPatientDetailsOpen(false);

    setIsWalkInCustomerDetailsOpen(false);

    setIsWalkInCustomerInformationOpen(false);

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setIsPatientSelectionOpen(false);

    setSelectedPatient(null);

    setWalkInCustomerData(null);

    setPharmacyBillingData(null);

    setPharmacyPaymentData(null);

    setPharmacyReviewData(null);

    setPharmacyInvoiceData(null);

    setIsPharmacyBillingOpen(true);

  };

  const handlePatientDetailsContinue = (data) => {

    const finalBillingData = {

      ...(pharmacyBillingData || {}),

      customerType: selectedPharmacyCustomerType?.value || "registered-patient",

      patient: selectedPatient,

      patientDetails: data || null,

      customer: null,

      walkInCustomer: null,

      staff: null,

    };

    setPharmacyBillingData(finalBillingData);

    setIsPatientDetailsOpen(false);

    setIsPatientSelectionOpen(false);

    setIsWalkInCustomerDetailsOpen(false);

    setIsWalkInCustomerInformationOpen(false);

    setIsStaffSelectionOpen(false);

    setIsStaffDetailsOpen(false);

    setIsStaffInformationOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setPharmacyPaymentData(null);

    setPharmacyReviewData(null);

    setPharmacyInvoiceData(null);

    setIsPharmacyMedicinesOpen(true);

  };

  const handleWalkInCustomerDetailsBack = () => {

    setIsWalkInCustomerDetailsOpen(false);

    setWalkInCustomerData(null);

    setIsWalkInCustomerInformationOpen(false);

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setIsPatientSelectionOpen(false);

    setIsPatientDetailsOpen(false);

    setIsPharmacyBillingOpen(true);

  };

  const handleWalkInCustomerDetailsClose = () => {

    setIsWalkInCustomerDetailsOpen(false);

    setWalkInCustomerData(null);

    setIsWalkInCustomerInformationOpen(false);

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setIsPatientSelectionOpen(false);

    setIsPatientDetailsOpen(false);

    setIsPharmacyBillingOpen(true);

  };

  const handleWalkInCustomerDetailsChange = (data) => {

    setWalkInCustomerData(data || null);

  };

  const handleWalkInCustomerDetailsContinue = (data) => {

    if (!data) return;

    const finalCustomerData = {

      ...data,

      customerType: selectedPharmacyCustomerType?.value || "walk-in-customer",

      customerTypeLabel:

        selectedPharmacyCustomerType?.title || "Walk-in Customer",

    };

    const finalBillingData = {

      ...(pharmacyBillingData || {}),

      customerType: selectedPharmacyCustomerType?.value || "walk-in-customer",

      customer: finalCustomerData,

      walkInCustomer: finalCustomerData,

      patient: null,

      staff: null,

    };

    setWalkInCustomerData(finalCustomerData);

    setPharmacyBillingData(finalBillingData);

    setSelectedPatient(null);

    setSelectedStaff(null);

    setIsWalkInCustomerDetailsOpen(false);

    setIsWalkInCustomerInformationOpen(true);

    setIsPatientSelectionOpen(false);

    setIsPatientDetailsOpen(false);

    setIsStaffSelectionOpen(false);

    setIsStaffDetailsOpen(false);

    setIsStaffInformationOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setPharmacyPaymentData(null);

    setPharmacyReviewData(null);

    setPharmacyInvoiceData(null);

    setIsPharmacyMedicinesOpen(false);

  };

  const handleWalkInCustomerInformationBack = () => {

    setIsWalkInCustomerInformationOpen(false);

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setIsWalkInCustomerDetailsOpen(true);

  };

  const handleWalkInCustomerInformationClose = () => {

    setIsWalkInCustomerInformationOpen(false);

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setIsWalkInCustomerDetailsOpen(true);

  };

  const handleWalkInCustomerInformationContinue = (data) => {

    const finalCustomerData = {

      ...(walkInCustomerData || {}),

      ...(data || {}),

    };

    const finalBillingData = {

      ...(pharmacyBillingData || {}),

      customerType: selectedPharmacyCustomerType?.value || "walk-in-customer",

      customer: finalCustomerData,

      walkInCustomer: finalCustomerData,

      patient: null,

      staff: null,

    };

    setWalkInCustomerData(finalCustomerData);

    setPharmacyBillingData(finalBillingData);

    setIsWalkInCustomerInformationOpen(false);

    setIsWalkInCustomerDetailsOpen(false);

    setIsPatientSelectionOpen(false);

    setIsPatientDetailsOpen(false);

    setIsStaffSelectionOpen(false);

    setIsStaffDetailsOpen(false);

    setIsStaffInformationOpen(false);

    setIsPharmacyMedicinesOpen(true);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

  };

  const handleStaffSelectionClose = () => {

    setIsStaffSelectionOpen(false);

    setSelectedStaff(null);

    setIsStaffDetailsOpen(false);

    setIsStaffInformationOpen(false);

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setPharmacyBillingData(null);

    setPharmacyPaymentData(null);

    setPharmacyReviewData(null);

    setPharmacyInvoiceData(null);

    setIsPharmacyBillingOpen(true);

  };

  const handleStaffSelectionBack = () => {

    setIsStaffSelectionOpen(false);

    setSelectedStaff(null);

    setIsStaffDetailsOpen(false);

    setIsStaffInformationOpen(false);

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setIsPharmacyBillingOpen(true);

  };

  const handleStaffSelect = (staff) => {

    if (!staff) return;

    setSelectedStaff(staff);

    setIsStaffSelectionOpen(false);

    setIsStaffDetailsOpen(true);

  };

  const handleStaffDetailsBack = () => {

    setIsStaffDetailsOpen(false);

    setIsStaffInformationOpen(false);

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setIsStaffSelectionOpen(true);

  };

  const handleStaffDetailsClose = () => {

    setIsStaffDetailsOpen(false);

    setIsStaffInformationOpen(false);

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setIsStaffSelectionOpen(false);

    setSelectedStaff(null);

    setPharmacyBillingData(null);

    setPharmacyPaymentData(null);

    setPharmacyReviewData(null);

    setPharmacyInvoiceData(null);

    setIsPharmacyBillingOpen(true);

  };

  const handleStaffDetailsContinue = (staff) => {

    if (!staff) return;

    setSelectedStaff(staff);

    setIsStaffDetailsOpen(false);

    setIsStaffSelectionOpen(false);

    setIsStaffInformationOpen(true);

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

  };

  const handleStaffInformationBack = () => {

    setIsStaffInformationOpen(false);

    setIsStaffDetailsOpen(true);

    setIsStaffSelectionOpen(false);

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

  };

  const handleStaffInformationClose = () => {

    setIsStaffInformationOpen(false);

    setIsStaffDetailsOpen(false);

    setIsStaffSelectionOpen(false);

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setSelectedStaff(null);

    setPharmacyBillingData(null);

    setPharmacyPaymentData(null);

    setPharmacyReviewData(null);

    setPharmacyInvoiceData(null);

    setIsPharmacyBillingOpen(true);

  };

  const handleStaffInformationContinue = (staff) => {

    const finalStaff = staff || selectedStaff;

    if (!finalStaff) return;

    const finalBillingData = {

      ...(pharmacyBillingData || {}),

      customerType: selectedPharmacyCustomerType?.value || "self-staff-purchase",

      customerTypeLabel:

        selectedPharmacyCustomerType?.title || "Self / Staff Purchase",

      staff: finalStaff,

      patient: finalStaff,

      customer: null,

      walkInCustomer: null,

    };

    setSelectedStaff(finalStaff);

    setPharmacyBillingData(finalBillingData);

    setSelectedPatient(null);

    setWalkInCustomerData(null);

    setIsStaffInformationOpen(false);

    setIsStaffDetailsOpen(false);

    setIsStaffSelectionOpen(false);

    setIsPatientSelectionOpen(false);

    setIsPatientDetailsOpen(false);

    setIsWalkInCustomerDetailsOpen(false);

    setIsWalkInCustomerInformationOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setPharmacyPaymentData(null);

    setPharmacyReviewData(null);

    setPharmacyInvoiceData(null);

    setIsPharmacyMedicinesOpen(true);

  };

  const handlePharmacyMedicinesBack = () => {

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    const customerType = getCustomerType();

    if (customerType === "walk-in-customer") {

      setIsWalkInCustomerInformationOpen(true);

      setIsWalkInCustomerDetailsOpen(false);

      setIsPatientDetailsOpen(false);

      setIsPatientSelectionOpen(false);

      setIsStaffSelectionOpen(false);

      setIsStaffDetailsOpen(false);

      setIsStaffInformationOpen(false);

      return;

    }

    if (customerType === "self-staff-purchase") {

      setIsWalkInCustomerInformationOpen(false);

      setIsWalkInCustomerDetailsOpen(false);

      setIsPatientDetailsOpen(false);

      setIsPatientSelectionOpen(false);

      setIsStaffSelectionOpen(false);

      setIsStaffDetailsOpen(false);

      setIsStaffInformationOpen(true);

      return;

    }

    setIsWalkInCustomerInformationOpen(false);

    setIsWalkInCustomerDetailsOpen(false);

    setIsPatientDetailsOpen(true);

    setIsPatientSelectionOpen(false);

    setIsStaffSelectionOpen(false);

    setIsStaffDetailsOpen(false);

    setIsStaffInformationOpen(false);

  };

  const handlePharmacyMedicinesClose = () => {

    setIsPharmacyMedicinesOpen(false);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    const customerType = getCustomerType();

    if (customerType === "walk-in-customer") {

      setIsWalkInCustomerInformationOpen(true);

      setIsWalkInCustomerDetailsOpen(false);

      setIsPatientDetailsOpen(false);

      setIsPatientSelectionOpen(false);

      setIsStaffSelectionOpen(false);

      setIsStaffDetailsOpen(false);

      setIsStaffInformationOpen(false);

      return;

    }

    if (customerType === "self-staff-purchase") {

      setIsWalkInCustomerInformationOpen(false);

      setIsWalkInCustomerDetailsOpen(false);

      setIsPatientDetailsOpen(false);

      setIsPatientSelectionOpen(false);

      setIsStaffSelectionOpen(false);

      setIsStaffDetailsOpen(false);

      setIsStaffInformationOpen(true);

      return;

    }

    setIsWalkInCustomerInformationOpen(false);

    setIsWalkInCustomerDetailsOpen(false);

    setIsStaffSelectionOpen(false);

    setIsStaffDetailsOpen(false);

    setIsStaffInformationOpen(false);

    setIsPatientDetailsOpen(true);

  };

  const handlePharmacyMedicinesContinue = (billingData) => {

    const customerType = getCustomerType();

    const finalBillingData = {

      ...(pharmacyBillingData || {}),

      ...(billingData || {}),

      customerType,

      patient:

        customerType === "registered-patient"

          ? selectedPatient

          : customerType === "self-staff-purchase"

          ? selectedStaff

          : null,

      staff: customerType === "self-staff-purchase" ? selectedStaff : null,

      customer: customerType === "walk-in-customer" ? walkInCustomerData : null,

      walkInCustomer:

        customerType === "walk-in-customer" ? walkInCustomerData : null,

    };

    setPharmacyBillingData(finalBillingData);

    setIsPharmacyMedicinesOpen(false);

    setIsPatientDetailsOpen(false);

    setIsPatientSelectionOpen(false);

    setIsWalkInCustomerDetailsOpen(false);

    setIsWalkInCustomerInformationOpen(false);

    setIsStaffSelectionOpen(false);

    setIsStaffDetailsOpen(false);

    setIsStaffInformationOpen(false);

    setIsPharmacyPaymentOpen(true);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setPharmacyReviewData(null);

    setPharmacyInvoiceData(null);

  };

  const handlePharmacyPaymentBack = () => {

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setIsPharmacyMedicinesOpen(true);

  };

  const handlePharmacyPaymentClose = () => {

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setIsPharmacyMedicinesOpen(true);

  };

  const handlePharmacyPaymentContinue = (paymentData) => {

    const finalBillingData = {

      ...(pharmacyBillingData || {}),

      payment: paymentData || null,

    };

    setPharmacyBillingData(finalBillingData);

    setPharmacyPaymentData(paymentData || null);

    setPharmacyReviewData(finalBillingData);

    setIsPharmacyPaymentOpen(false);

    setIsPharmacyReviewOpen(true);

    setIsPharmacyInvoiceOpen(false);

  };

  const handlePharmacyReviewBack = () => {

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setIsPharmacyPaymentOpen(true);

  };

  const handlePharmacyReviewClose = () => {

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(false);

    setIsPharmacyPaymentOpen(true);

  };

  const handlePharmacyReviewConfirm = (finalReviewData) => {

    const customerType =

      selectedPharmacyCustomerType?.value ||

      selectedPharmacyCustomerType?.id ||

      pharmacyBillingData?.customerType ||

      "registered-patient";

    const finalPayment =

      finalReviewData?.payment ||

      pharmacyPaymentData ||

      pharmacyBillingData?.payment ||

      null;

    const finalCustomer =

      customerType === "walk-in-customer"

        ? walkInCustomerData ||

          finalReviewData?.customer ||

          pharmacyBillingData?.customer ||

          null

        : null;

    const finalWalkInCustomer =

      customerType === "walk-in-customer"

        ? walkInCustomerData ||

          finalReviewData?.walkInCustomer ||

          pharmacyBillingData?.walkInCustomer ||

          null

        : null;

    const finalPatient =

      customerType === "registered-patient"

        ? selectedPatient ||

          finalReviewData?.patient ||

          pharmacyBillingData?.patient ||

          null

        : customerType === "self-staff-purchase"

        ? selectedStaff ||

          finalReviewData?.staff ||

          finalReviewData?.patient ||

          pharmacyBillingData?.staff ||

          pharmacyBillingData?.patient ||

          null

        : null;

    const finalStaff =

      customerType === "self-staff-purchase"

        ? selectedStaff ||

          finalReviewData?.staff ||

          pharmacyBillingData?.staff ||

          null

        : null;

    const finalBillingData = {

      ...(pharmacyBillingData || {}),

      ...(finalReviewData || {}),

      customerType,

      patient: finalPatient,

      staff: finalStaff,

      customer: finalCustomer,

      walkInCustomer: finalWalkInCustomer,

      payment: finalPayment,

    };

    setPharmacyBillingData(finalBillingData);

    setPharmacyReviewData(finalBillingData);

    setPharmacyInvoiceData(finalBillingData);

    setIsPharmacyReviewOpen(false);

    setIsPharmacyInvoiceOpen(true);

  };

  const handlePharmacyInvoiceClose = () => {

    setIsPharmacyInvoiceOpen(false);

    setIsPharmacyReviewOpen(true);

  };

  const handlePharmacyInvoicePrint = (invoiceData) => {

    console.log("PHARMACY INVOICE PRINT:", invoiceData);

  };

  const handlePharmacyInvoiceDownload = (invoiceData) => {

    console.log("PHARMACY INVOICE DOWNLOAD:", invoiceData);

  };

  const handlePharmacyInvoiceNewBill = () => {

    resetPharmacyWorkflow();

    setIsDepartmentModalOpen(true);

  };

  const handleDepartmentChange = (tab) => {

    console.log("Selected Billing Department:", tab);

    setPage(1);

  };

  const handleFiltersChange = (filters) => {

    console.log("Billing Filters:", filters);

    setPage(1);

  };

  const billingRows = Array.isArray(billingListMock) ? billingListMock : [];

  const paginatedBillingData = useMemo(() => {

    const startIndex = (page - 1) * rowsPerPage;

    return billingRows.slice(startIndex, startIndex + rowsPerPage);

  }, [page, rowsPerPage, billingRows]);

  const handlePageChange = (event, newPage) => {

    setPage(newPage);

  };

  const handleRowsPerPageChange = (event) => {

    const newRowsPerPage = Number(event?.target?.value);

    if (!newRowsPerPage) return;

    setRowsPerPage(newRowsPerPage);

    setPage(1);

  };

  if (isIPDBillingReviewOpen) {
    const stableInvoiceId =
      selectedIPDPatient?.invoiceId ||
      selectedIPDPatient?.ipdNo ||
      selectedIPDPatient?.uhid ||
      selectedIPDPatient?.id ||
      selectedIPDPatient?.patientId;

    const reviewPayment =
      ipdBillingSummary?.paymentResult ||
      ipdBillingSummary?.payment ||
      {};

    const reviewBill = {
      ...(ipdBillingSummary || {}),
      invoiceId: stableInvoiceId,
      patient: selectedIPDPatient,
      charges: ipdChargesData,
      payment: reviewPayment,
      advancePaid:
        selectedIPDPatient?.advancePaid ??
        ipdBillingSummary?.advancePaid ??
        0,
    };

  

    return (
      <main className="billing-management billing-management--ipd-review">
        <IPDBillingReview
          patient={selectedIPDPatient}
          invoiceId={stableInvoiceId}
          bill={reviewBill}
          charges={ipdChargesData}
          summary={ipdBillingSummary || {}}
          payment={reviewPayment}
          onBack={handleIPDBillingReviewBack}
          onCancel={handleIPDBillingReviewCancel}
          onEditPayment={handleIPDBillingReviewBack}
          // onInvoiceGenerated={handleIPDInvoiceGenerated}

          onGenerateInvoice={handleIPDInvoiceGenerated}
        />
      </main>
    );
  }

    // IPD Invoice
if (isIPDInvoiceOpen) {
  return (
    <main className="billing-management billing-management--ipd-invoice">
      <IPDInvoice
        billingData={ipdInvoiceData}
        patient={selectedIPDPatient}
        paymentData={ipdPaymentData}
        onClose={handleIPDInvoiceClose}
        onPrint={handleIPDInvoicePrint}
        onDownload={handleIPDInvoiceDownload}
        onNewBill={handleIPDInvoiceNewBill}
      />
    </main>
  );
}

  if (isIPDBillingPaymentOpen) {

    const stableInvoiceId =

      selectedIPDPatient?.invoiceId ||

      selectedIPDPatient?.ipdNo ||

      selectedIPDPatient?.uhid ||

      selectedIPDPatient?.id ||

      selectedIPDPatient?.patientId;

    const paymentBill = {

      ...(ipdBillingSummary || {}),

      invoiceId: stableInvoiceId,

      patient: selectedIPDPatient,

      charges: ipdChargesData,

      advancePaid: selectedIPDPatient?.advancePaid ?? ipdBillingSummary?.advancePaid ?? 0,

    };

    return (

      <main className="billing-management billing-management--ipd-payment">

        <IPDBillingPayment

          patient={selectedIPDPatient}

          invoiceId={stableInvoiceId}

          bill={paymentBill}

          onBack={handleIPDBillingPaymentBack}

          onCancel={handleIPDBillingPaymentCancel}

          onPaymentSuccess={handleIPDPaymentSuccess}

        />

      </main>

    );

  }




  if (isIPDChargesOpen) {

    return (

      <main className="billing-management billing-management--ipd-charges">

        <IPDCharges

          patient={selectedIPDPatient}

          initialCharges={ipdChargesData.length ? ipdChargesData : undefined}

          advancePaid={selectedIPDPatient?.advancePaid}

          onBack={handleIPDChargesBack}

          onCancel={handleIPDChargesCancel}

          onContinue={handleIPDChargesContinue}

        />

      </main>

    );

  }

  if (isIPDPatientDetailsOpen) {

    return (

      <main className="billing-management billing-management--ipd-patient-details">

        <IPDPatientDetails

          patient={selectedIPDPatient}

          onBack={handleIPDPatientDetailsBack}

          onCancel={handleIPDPatientDetailsCancel}

          onContinue={handleIPDPatientDetailsContinue}

        />

      </main>

    );

  }

  if (isIPDPatientSelectionOpen) {

    return (

      <main className="billing-management billing-management--ipd-patient-selection">

        <IPDPatientSelection

          onClose={handleIPDPatientSelectionClose}

          onPatientSelect={handleIPDPatientSelect}

        />

      </main>

    );

  }

  if (isPharmacyInvoiceOpen) {

    return (

      <main className="billing-management billing-management--pharmacy-invoice">

        <PharmacyInvoice

          billingData={pharmacyInvoiceData || pharmacyBillingData || {}}

          patient={

            getCustomerType() === "self-staff-purchase"

              ? selectedStaff

              : selectedPatient

          }

          customer={walkInCustomerData}

          customerType={

            selectedPharmacyCustomerType?.value ||

            selectedPharmacyCustomerType?.id ||

            "registered-patient"

          }

          paymentData={

            pharmacyPaymentData ||

            pharmacyInvoiceData?.payment ||

            pharmacyBillingData?.payment ||

            null

          }

          onClose={handlePharmacyInvoiceClose}

          onPrint={handlePharmacyInvoicePrint}

          onDownload={handlePharmacyInvoiceDownload}

          onNewBill={handlePharmacyInvoiceNewBill}

        />

      </main>

    );

  }

  if (isPharmacyReviewOpen) {

    return (

      <main className="billing-management billing-management--pharmacy-review">

        <PharmacyReview

          patient={

            getCustomerType() === "self-staff-purchase"

              ? selectedStaff

              : selectedPatient

          }

          customer={walkInCustomerData}

          customerType={

            selectedPharmacyCustomerType?.value ||

            selectedPharmacyCustomerType?.id ||

            "registered-patient"

          }

          billingData={pharmacyReviewData || pharmacyBillingData || {}}

          paymentData={pharmacyPaymentData}

          onBack={handlePharmacyReviewBack}

          onClose={handlePharmacyReviewClose}

          onConfirm={handlePharmacyReviewConfirm}

        />

      </main>

    );

  }

  if (isPharmacyPaymentOpen) {

    return (

      <main className="billing-management billing-management--pharmacy-payment">

        <PharmacyPayment

          patient={

            getCustomerType() === "self-staff-purchase"

              ? selectedStaff

              : selectedPatient

          }

          customer={walkInCustomerData}

          customerType={

            selectedPharmacyCustomerType?.value ||

            selectedPharmacyCustomerType?.id ||

            "registered-patient"

          }

          billingData={pharmacyBillingData}

          paymentData={pharmacyPaymentData}

          onBack={handlePharmacyPaymentBack}

          onClose={handlePharmacyPaymentClose}

          onContinue={handlePharmacyPaymentContinue}

        />

      </main>

    );

  }

  if (isPharmacyMedicinesOpen) {

    return (

      <main className="billing-management billing-management--pharmacy-medicines">

        <PharmacyMedicines

          patient={

            getCustomerType() === "self-staff-purchase"

              ? selectedStaff

              : selectedPatient

          }

          customer={walkInCustomerData}

          billingData={pharmacyBillingData}

          customerType={

            selectedPharmacyCustomerType?.value ||

            selectedPharmacyCustomerType?.id ||

            "registered-patient"

          }

          onBack={handlePharmacyMedicinesBack}

          onClose={handlePharmacyMedicinesClose}

          onContinue={handlePharmacyMedicinesContinue}

        />

      </main>

    );

  }

  if (isStaffInformationOpen) {

    return (

      <main className="billing-management billing-management--staff-information">

        <StaffInformation

          staff={selectedStaff}

          onBack={handleStaffInformationBack}

          onClose={handleStaffInformationClose}

          onContinue={handleStaffInformationContinue}

        />

      </main>

    );

  }

  if (isStaffDetailsOpen) {

    return (

      <main className="billing-management billing-management--staff-details">

        <StaffDetails

          staff={selectedStaff}

          onBack={handleStaffDetailsBack}

          onClose={handleStaffDetailsClose}

          onContinue={handleStaffDetailsContinue}

        />

      </main>

    );

  }

  if (isStaffSelectionOpen) {

    return (

      <main className="billing-management billing-management--staff-selection">

        <StaffSelection

          selectedStaff={selectedStaff}

          onBack={handleStaffSelectionBack}

          onClose={handleStaffSelectionClose}

          onContinue={handleStaffSelect}

        />

      </main>

    );

  }

  if (isWalkInCustomerInformationOpen) {

    return (

      <main className="billing-management billing-management--walk-in-customer-information">

        <WalkInCustomerInformation

          customer={walkInCustomerData}

          value={walkInCustomerData}

          billingData={pharmacyBillingData}

          onBack={handleWalkInCustomerInformationBack}

          onClose={handleWalkInCustomerInformationClose}

          onCancel={handleWalkInCustomerInformationClose}

          onContinue={handleWalkInCustomerInformationContinue}

        />

      </main>

    );

  }

  if (isWalkInCustomerDetailsOpen) {

    return (

      <main className="billing-management billing-management--walk-in-customer-details">

        <WalkInCustomerDetails

          value={walkInCustomerData}

          onChange={handleWalkInCustomerDetailsChange}

          onBack={handleWalkInCustomerDetailsBack}

          onCancel={handleWalkInCustomerDetailsClose}

          onContinue={handleWalkInCustomerDetailsContinue}

        />

      </main>

    );

  }

  if (isPatientDetailsOpen) {

    return (

      <main className="billing-management billing-management--patient-details">

        <PatientDetails

          patient={selectedPatient}

          onBack={handlePatientDetailsBack}

          onClose={handlePatientDetailsClose}

          onContinue={handlePatientDetailsContinue}

        />

      </main>

    );

  }

  if (isPatientSelectionOpen) {

    return (

      <main className="billing-management billing-management--patient-selection">

        <PatientSelection

          onClose={handlePatientSelectionClose}

          onPatientSelect={handlePatientSelect}

        />

      </main>

    );

  }

  if (isPharmacyBillingOpen) {

    return (

      <main className="billing-management billing-management--pharmacy">

        <PharmacyBilling

          onClose={handlePharmacyBillingClose}

          onCancel={handlePharmacyBillingClose}

          onNext={handlePharmacyCustomerTypeNext}

        />

      </main>

    );

  }

  return (

    <main className="billing-management">

      <div className="billing-management__container">

        <BillingHeader

          config={billingHeaderConfig}

          onAction={handleHeaderAction}

        />

        <BillingStats

          data={billingStatsMock}

          config={billingStatsConfig}

        />

        <BillingDepartmentTabs

          tabs={billingTabsMock}

          config={billingDepartmentTabsConfig}

          onTabChange={handleDepartmentChange}

        />

        <BillingFilters

          config={billingFiltersConfig}

          options={billingFiltersMock}

          onChange={handleFiltersChange}

        />

        <BillingTable

          data={paginatedBillingData}

          columns={billingColumnsConfig}

          page={page}

          rowsPerPage={rowsPerPage}

          totalRows={billingRows.length}

          onPageChange={handlePageChange}

          onRowsPerPageChange={handleRowsPerPageChange}

        />

      </div>

      <DepartmentSelectionModal

        open={isDepartmentModalOpen}

        departments={departmentSelectionMock}

        initialDepartment={selectedBillingDepartment}

        onClose={handleDepartmentModalClose}

        onDepartmentSelect={handleBillingDepartmentSelect}

      />

    </main>

  );

};

export default BillingManagement;
