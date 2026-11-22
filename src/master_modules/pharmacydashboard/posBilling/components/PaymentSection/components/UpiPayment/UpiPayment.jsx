import "./UpiPayment.css";

const upiApps = [

    "Google Pay",

    "PhonePe",

    "Paytm",

    "BHIM",

    "Amazon Pay",

    "Other",

];

const UpiPayment = ({

    upiApp = "",

    transactionId = "",

    referenceNumber = "",

    remarks = "",

    onUpiAppChange,

    onTransactionIdChange,

    onReferenceNumberChange,

    onRemarksChange,

}) => {

    return (

        <section className="upi-payment">

            <header className="upi-payment-header">

                <h3>

                    UPI Payment

                </h3>

            </header>

            <div className="upi-payment-body">

                <div className="form-group">

                    <label>

                        UPI Application

                    </label>

                    <select

                        value={upiApp}

                        onChange={(event) =>

                            onUpiAppChange?.(

                                event.target.value

                            )

                        }

                    >

                        <option value="">

                            Select UPI App

                        </option>

                        {

                            upiApps.map((app) => (

                                <option

                                    key={app}

                                    value={app}

                                >

                                    {app}

                                </option>

                            ))

                        }

                    </select>

                </div>

                <div className="form-group">

                    <label>

                        Transaction ID

                    </label>

                    <input

                        type="text"

                        value={transactionId}

                        placeholder="Enter Transaction ID"

                        onChange={(event) =>

                            onTransactionIdChange?.(

                                event.target.value

                            )

                        }

                    />

                </div>

                <div className="form-group">

                    <label>

                        Reference Number

                    </label>

                    <input

                        type="text"

                        value={referenceNumber}

                        placeholder="Enter Reference Number"

                        onChange={(event) =>

                            onReferenceNumberChange?.(

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

export default UpiPayment;