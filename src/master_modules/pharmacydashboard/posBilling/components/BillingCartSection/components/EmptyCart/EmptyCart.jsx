import "./EmptyCart.css";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

const EmptyCart = () => {
    return (
        <div className="empty-cart">

            <div className="empty-cart-icon">

                <ShoppingCartOutlinedIcon />

            </div>

            <h2 className="empty-cart-title">
                Your Billing Cart is Empty
            </h2>

            <p className="empty-cart-description">
                Search medicines from the inventory and add them to the billing
                cart to start generating the invoice.
            </p>

            <div className="empty-cart-info">

                <Inventory2OutlinedIcon />

                <span>
                    No medicines have been added yet.
                </span>

            </div>

        </div>
    );
};

export default EmptyCart;