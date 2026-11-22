import "./CardPayment.css";

const cardTypes = [
    "Visa",
    "MasterCard",
    "RuPay",
    "American Express",
];

const banks = [
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "SBI",
    "Kotak Mahindra",
    "Punjab National Bank",
    "Other",
];

const CardPayment = ({

    cardType = "",

    bankName = "",

    lastFourDigits = "",

    approvalCode = "",

    remarks = "",

    onCardTypeChange,

    onBankChange,

    onLastFourDigitsChange,

    onApprovalCodeChange,

    onRemarksChange,

}) => {

    return (

        <section className="card-payment">

            <header className="card-payment-header">

                <h3>

                    Card Payment

                </h3>

            </header>

            <div className="card-payment-body">

                <div className="form-group">

                    <label>

                        Card Type

                    </label>

                    <select

                        value={cardType}

                        onChange={(event) =>
                            onCardTypeChange?.(
                                event.target.value
                            )
                        }

                    >

                        <option value="">

                            Select Card Type

                        </option>

                        {

                            cardTypes.map((card) => (

                                <option

                                    key={card}

                                    value={card}

                                >

                                    {card}

                                </option>

                            ))

                        }

                    </select>

                </div>

                <div className="form-group">

                    <label>

                        Bank Name

                    </label>

                    <select

                        value={bankName}

                        onChange={(event) =>
                            onBankChange?.(
                                event.target.value
                            )
                        }

                    >

                        <option value="">

                            Select Bank

                        </option>

                        {

                            banks.map((bank) => (

                                <option

                                    key={bank}

                                    value={bank}

                                >

                                    {bank}

                                </option>

                            ))

                        }

                    </select>

                </div>

                <div className="form-group">

                    <label>

                        Card Last 4 Digits

                    </label>

                    <input

                        type="text"

                        maxLength={4}

                        value={lastFourDigits}

                        placeholder="1234"

                        onChange={(event) =>
                            onLastFourDigitsChange?.(

                                event.target.value

                            )
                        }

                    />

                </div>

                <div className="form-group">

                    <label>

                        Approval Code

                    </label>

                    <input

                        type="text"

                        value={approvalCode}

                        placeholder="Enter Approval Code"

                        onChange={(event) =>
                            onApprovalCodeChange?.(

                                event.target.value

                            )
                        }

                    />

                </div>

                <div className="form-group">

                    <label>

                        Remarks

                    </label>

                    <textarea

                        rows={3}

                        value={remarks}

                        placeholder="Optional"

                        onChange={(event) =>
                            onRemarksChange?.(

                                event.target.value

                            )
                        }

                    />

                </div>

            </div>

        </section>

    );

};

export default CardPayment;