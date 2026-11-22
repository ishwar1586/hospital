import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";

import "./CartFooter.css";

const CartFooter = ({
    cartItems = [],
    onClearCart,
    onProceedPayment,
}) => {

    const isCartEmpty = cartItems.length === 0;

    const handleClearCart = () => {

        if (isCartEmpty) return;

        onClearCart?.();

    };

    const handleProceedPayment = () => {

        if (isCartEmpty) return;

        onProceedPayment?.();

    };

    return (

        <footer className="cart-footer">

            <button
                type="button"
                className="cart-footer-btn clear-cart-btn"
                onClick={handleClearCart}
                disabled={isCartEmpty}
            >

                <DeleteOutlineOutlinedIcon fontSize="small" />

                <span>

                    Clear Cart

                </span>

            </button>

            <button
                type="button"
                className="cart-footer-btn proceed-payment-btn"
                onClick={handleProceedPayment}
                disabled={isCartEmpty}
            >

                <PaymentOutlinedIcon fontSize="small" />

                <span>

                    Proceed to Payment

                </span>

            </button>

        </footer>

    );

};

export default CartFooter;