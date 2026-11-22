import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import PaymentSummary from "./components/PaymentSummary/PaymentSummary";
import PaymentMethods from "./components/PaymentMethods/PaymentMethods";
import CashPayment from "./components/CashPayment/CashPayment";
import CardPayment from "./components/CardPayment/CardPayment";
import UpiPayment from "./components/UpiPayment/UpiPayment";
import ChangeSummary from "./components/ChangeSummary/ChangeSummary";
import PaymentFooter from "./components/PaymentFooter/PaymentFooter";

import "./PaymentSection.css";

const PaymentSection = ({

    /* Drawer */

    open = false,

    onClose = () => { },

    /* Billing */

    billingSummary = {},

    /* Payment */

    paymentMethod = "cash",

    onPaymentMethodChange = () => { },

    paymentProcessing = false,

    /* Cash */

    receivedAmount = "",

    onReceivedAmountChange = () => { },

    /* Card */

    cardType = "",

    bankName = "",

    lastFourDigits = "",

    approvalCode = "",

    cardRemarks = "",

    onCardTypeChange = () => { },

    onBankChange = () => { },

    onLastFourDigitsChange = () => { },

    onApprovalCodeChange = () => { },

    onCardRemarksChange = () => { },

    /* UPI */

    upiApp = "",

    transactionId = "",

    referenceNumber = "",

    upiRemarks = "",

    onUpiAppChange = () => { },

    onTransactionIdChange = () => { },

    onReferenceNumberChange = () => { },

    onUpiRemarksChange = () => { },

    /* Common */

    balance = 0,

    isPaymentValid = false,

    onCompletePayment = () => { },

}) => {

    const renderPaymentForm = () => {

        switch (paymentMethod) {

            case "cash":

                return (

                    <CashPayment

                        receivedAmount={receivedAmount}

                        onReceivedAmountChange={
                            onReceivedAmountChange
                        }

                    />

                );

            case "card":

                return (

                    <CardPayment

                        cardType={cardType}

                        bankName={bankName}

                        lastFourDigits={lastFourDigits}

                        approvalCode={approvalCode}

                        remarks={cardRemarks}

                        onCardTypeChange={onCardTypeChange}

                        onBankChange={onBankChange}

                        onLastFourDigitsChange={
                            onLastFourDigitsChange
                        }

                        onApprovalCodeChange={
                            onApprovalCodeChange
                        }

                        onRemarksChange={
                            onCardRemarksChange
                        }

                    />

                );

            case "upi":

                return (

                    <UpiPayment

                        upiApp={upiApp}

                        transactionId={transactionId}

                        referenceNumber={referenceNumber}

                        remarks={upiRemarks}

                        onUpiAppChange={
                            onUpiAppChange
                        }

                        onTransactionIdChange={
                            onTransactionIdChange
                        }

                        onReferenceNumberChange={
                            onReferenceNumberChange
                        }

                        onRemarksChange={
                            onUpiRemarksChange
                        }

                    />

                );

            default:

                return null;

        }

    };

    return (

        <Drawer

            anchor="right"

            open={open}

            keepMounted

            onClose={() => {

                if (paymentProcessing) {

                    return;

                }

                onClose();

            }}

        >

            <section className="payment-section">

                {/* =====================================
                    Header
                ===================================== */}

                <header className="payment-header">

                    <h2>

                        Payment

                    </h2>

                    <IconButton

                        disabled={paymentProcessing}

                        onClick={onClose}

                    >

                        <CloseOutlinedIcon />

                    </IconButton>

                </header>

                {/* =====================================
                    Body
                ===================================== */}

                <main className="payment-body">

                    <PaymentSummary

                        billingSummary={billingSummary}

                    />

                    <PaymentMethods

                        paymentMethod={paymentMethod}

                        onPaymentMethodChange={
                            onPaymentMethodChange
                        }

                    />

                    {renderPaymentForm()}

                    <ChangeSummary

                        billingSummary={billingSummary}

                        receivedAmount={receivedAmount}

                        balance={balance}

                    />

                </main>

                {/* =====================================
                    Footer
                ===================================== */}

                <PaymentFooter

                    paymentProcessing={paymentProcessing}

                    isPaymentValid={isPaymentValid}

                    onCancel={onClose}

                    onCompletePayment={
                        onCompletePayment
                    }

                />

            </section>

        </Drawer>

    );

};

export default PaymentSection;