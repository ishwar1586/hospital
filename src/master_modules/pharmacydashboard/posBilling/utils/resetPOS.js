/* ==========================================================
   Reset POS Utility
========================================================== */

const resetPOS = ({

    setCustomer,

    setSelectedPatient,

    setSearchPatient,

    setSelectedDoctor,

    setCartItems,

    setSelectedMedicine,

    setSearchMedicine,

    setPaymentMethod,

    setReceivedAmount,

    setCardType,

    setBankName,

    setLastFourDigits,

    setApprovalCode,

    setCardRemarks,

    setUpiApp,

    setTransactionId,

    setReferenceNumber,

    setUpiRemarks,

    setDiscount,

    setRoundOff,

    closePaymentDrawer,

}) => {

    /* ==========================================
       Customer
    ========================================== */

    setCustomer(null);

    setSelectedPatient(null);

    setSearchPatient("");

    setSelectedDoctor(null);

    /* ==========================================
       Medicine
    ========================================== */

    setCartItems([]);

    setSelectedMedicine(null);

    setSearchMedicine("");

    /* ==========================================
       Billing
    ========================================== */

    setDiscount(0);

    setRoundOff(0);

    /* ==========================================
       Payment
    ========================================== */

    setPaymentMethod("cash");

    setReceivedAmount("");

    setCardType("");

    setBankName("");

    setLastFourDigits("");

    setApprovalCode("");

    setCardRemarks("");

    setUpiApp("");

    setTransactionId("");

    setReferenceNumber("");

    setUpiRemarks("");

    /* ==========================================
       Drawer
    ========================================== */

    closePaymentDrawer();

};

export default resetPOS;