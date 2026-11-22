import "./PaymentMethods.css";

import paymentMethods from "@/master_modules/pharmacydashboard/posBilling/components/PaymentSection/config/paymentMethods";

const PaymentMethods = ({

    paymentMethod = "cash",

    onPaymentMethodChange,

}) => {

    return (

        <section className="payment-methods">

            <div className="payment-methods-header">

                <h3>

                    Payment Method

                </h3>

            </div>

            <div className="payment-method-list">

                {

                    paymentMethods.map((method) => (

                        <button

                            key={method.id}

                            type="button"

                            className={

                                paymentMethod === method.id

                                    ? "payment-method-card active"

                                    : "payment-method-card"

                            }

                            onClick={() =>

                                onPaymentMethodChange?.(method.id)

                            }

                        >

                            <div className="payment-method-icon">

                                {method.icon}

                            </div>

                            <div className="payment-method-content">

                                <h4>

                                    {method.label}

                                </h4>

                                <span>

                                    {method.description}

                                </span>

                            </div>

                        </button>

                    ))

                }

            </div>

        </section>

    );

};

export default PaymentMethods;