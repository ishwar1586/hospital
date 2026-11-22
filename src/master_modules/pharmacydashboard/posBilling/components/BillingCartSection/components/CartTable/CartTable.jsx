import "./CartTable.css";

import { cartColumns } from "../../config/cartColumns";

import CartRow from "../CartRow/CartRow";

import EmptyCart from "../EmptyCart/EmptyCart";

const CartTable = ({

    cartItems = [],

    onIncreaseQty,

    onDecreaseQty,

    onRemoveMedicine,

}) => {

    const isCartEmpty =

        cartItems.length === 0;

    return (

        <div className="cart-table-container">

            <div className="cart-table-scroll">

                <table className="cart-table">

                    <thead>

                        <tr>

                            {

                                cartColumns.map(

                                    (column) => (

                                        <th

                                            key={column.id}

                                            style={{

                                                minWidth:

                                                    column.width,

                                                textAlign:

                                                    column.align ||

                                                    "left",

                                            }}

                                        >

                                            {

                                                column.label

                                            }

                                        </th>

                                    )

                                )

                            }

                        </tr>

                    </thead>

                    <tbody>

                        {

                            isCartEmpty ? (

                                <tr>

                                    <td

                                        colSpan={

                                            cartColumns.length

                                        }

                                    >

                                        <EmptyCart />

                                    </td>

                                </tr>

                            ) : (

                                cartItems.map(

                                    (

                                        item,

                                        index

                                    ) => (

                                        <CartRow

                                            key={

                                                item.id

                                            }

                                            index={

                                                index

                                            }

                                            item={

                                                item

                                            }

                                            onIncreaseQty={

                                                onIncreaseQty

                                            }

                                            onDecreaseQty={

                                                onDecreaseQty

                                            }

                                            onRemoveMedicine={

                                                onRemoveMedicine

                                            }

                                        />

                                    )

                                )

                            )

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default CartTable;