import "./CashPayment.css";

const quickAmounts = [

    500,
    1000,
    2000,

];

const CashPayment = ({

    receivedAmount = "",

    onReceivedAmountChange,

}) => {

    const handleInputChange = (event) => {

        onReceivedAmountChange?.(

            event.target.value

        );

    };

    const handleQuickAmount = (amount) => {

        onReceivedAmountChange?.(

            String(amount)

        );

    };

    return (

        <section className="cash-payment">

            <div className="cash-payment-header">

                <h3>

                    Cash Payment

                </h3>

            </div>

            <div className="cash-payment-body">

                <label
                    htmlFor="receivedAmount"
                    className="cash-label"
                >

                    Amount Received

                </label>

                <input

                    id="receivedAmount"

                    type="number"

                    min="0"

                    placeholder="Enter received amount"

                    className="cash-input"

                    value={receivedAmount}

                    onChange={handleInputChange}

                />

                <div className="quick-amounts">

                    {

                        quickAmounts.map((amount) => (

                            <button

                                key={amount}

                                type="button"

                                className="quick-amount-btn"

                                onClick={() =>
                                    handleQuickAmount(amount)
                                }

                            >

                                ₹{amount}

                            </button>

                        ))

                    }

                </div>

            </div>

        </section>

    );

};

export default CashPayment; 