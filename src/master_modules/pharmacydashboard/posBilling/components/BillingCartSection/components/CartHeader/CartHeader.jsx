import "./CartHeader.css";

import {

    ShoppingCartRounded,

    DeleteSweepRounded,

    Inventory2Rounded,

    CurrencyRupeeRounded,

} from "@mui/icons-material";

const CartHeader = ({

    cartItems = [],

    onClearCart,

}) => {

    /* ===========================================================
       Summary
    =========================================================== */

    const totalMedicines = cartItems.length;

    const totalQuantity = cartItems.reduce(

        (total, item) =>

            total + (item.quantity || 0),

        0

    );

    const estimatedAmount = cartItems.reduce(

        (total, item) =>

            total +

            ((item.selectedBatch?.sellingPrice ||

                item.sellingPrice ||

                item.mrp ||

                0) *

                (item.quantity || 0)),

        0

    );

    return (

        <header className="cart-header">

            {/* ======================================
                Left
            ====================================== */}

            <div className="cart-header-left">

                <div className="cart-header-icon">

                    <ShoppingCartRounded />

                </div>

                <div className="cart-header-title">

                    <h2>

                        Billing Cart

                    </h2>

                    <p>

                        Review medicines before payment

                    </p>

                </div>

            </div>


                        {/* ======================================
                Right Summary
            ====================================== */}

            <div className="cart-header-right">

                {/* Total Medicines */}

                <div className="cart-summary-card">

                    <div className="cart-summary-icon medicine">

                        <Inventory2Rounded />

                    </div>

                    <div className="cart-summary-content">

                        <span>

                            Total Medicines

                        </span>

                        <strong>

                            {totalMedicines}

                        </strong>

                    </div>

                </div>

                {/* Total Quantity */}

                <div className="cart-summary-card">

                    <div className="cart-summary-icon quantity">

                        <ShoppingCartRounded />

                    </div>

                    <div className="cart-summary-content">

                        <span>

                            Total Quantity

                        </span>

                        <strong>

                            {totalQuantity}

                        </strong>

                    </div>

                </div>

                {/* Estimated Amount */}

                <div className="cart-summary-card">

                    <div className="cart-summary-icon amount">

                        <CurrencyRupeeRounded />

                    </div>

                    <div className="cart-summary-content">

                        <span>

                            Estimated Amount

                        </span>

                        <strong>

                            ₹ {estimatedAmount.toFixed(2)}

                        </strong>

                    </div>

                </div>

                {/* Clear Cart */}

                <button

                    type="button"

                    className="clear-cart-btn"

                    disabled={cartItems.length === 0}

                    onClick={onClearCart}

                >

                    <DeleteSweepRounded />

                    Clear Cart

                </button>

            </div>

        </header>

    );

};

export default CartHeader;