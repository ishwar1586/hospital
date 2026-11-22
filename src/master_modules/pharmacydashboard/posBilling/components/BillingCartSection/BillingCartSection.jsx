import "./BillingCartSection.css";

import CartHeader from "./components/CartHeader/CartHeader";
import CartTable from "./components/CartTable/CartTable";
// import EmptyCart from "./components/EmptyCart/EmptyCart";

// import BillTotalsCard from "./components/BillTotalsCard/BillTotalsCard";
import CartFooter from "./components/CartFooter/CartFooter";

const BillingCartSection = ({

    cartItems = [],

    // billingSummary,

    onIncreaseQty,

    onDecreaseQty,

    onRemoveMedicine,

    onClearCart,

    onProceedPayment,

}) => {

    // const hasItems = cartItems.length > 0;

    return (

        <section className="billing-cart-section">

            <CartHeader

                cartItems={cartItems}

                onClearCart={onClearCart}

            />

            <div className="billing-cart-content">

                <div className="billing-cart-table">

                    {

                        // hasItems ? (

                        //     <CartTable

                        //         cartItems={cartItems}

                        //         onIncreaseQty={onIncreaseQty}

                        //         onDecreaseQty={onDecreaseQty}

                        //         onRemoveMedicine={onRemoveMedicine}

                        //     />

                        // ) : (

                        //     <EmptyCart />

                        // )


                        <CartTable

    cartItems={cartItems}

    onIncreaseQty={onIncreaseQty}

    onDecreaseQty={onDecreaseQty}

    onRemoveMedicine={onRemoveMedicine}

/>

                    }

                </div>

                {/*
                <aside className="billing-cart-summary">

                    <BillTotalsCard
                        cartItems={cartItems}
                    />

                </aside>
                */}

                {/* <aside className="billing-cart-summary">

    <BillTotalsCard

        cartItems={cartItems}

        billingSummary={billingSummary}

    />

</aside> */}

            </div>

            
            <CartFooter

                cartItems={cartItems}

                onClearCart={onClearCart}

                onProceedPayment={onProceedPayment}

            />
           

        </section>

    );

};

export default BillingCartSection;