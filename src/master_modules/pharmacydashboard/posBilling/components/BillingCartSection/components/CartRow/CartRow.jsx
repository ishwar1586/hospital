// import "./CartRow.css";

// import DeleteOutlineOutlinedIcon
//     from "@mui/icons-material/DeleteOutlineOutlined";

// import QuantityStepper
//     from "../QuantityStepper/QuantityStepper";

// import 

//     calculateDiscount from "@/master_modules/pharmacydashboard/posBilling/components/BillingCartSection/utils/calculateDiscount.js";

// import 

//     calculateGST from "../../utils/calculateGST";

// import 

//     calculateLineTotal from "../../utils/calculateLineTotal";

// const CartRow = ({

//     index,

//     item,

//     onIncreaseQty,

//     onDecreaseQty,

//     onRemoveMedicine,

// }) => {

//     const discountAmount =

//         calculateDiscount(item);

//     const gstAmount =

//         calculateGST(item);

//     const lineTotal =

//         calculateLineTotal(item);

//     return (

//         <tr>

//             {/* Serial */}

//             <td>

//                 {index + 1}

//             </td>

//             {/* Medicine */}

//             <td>

//                 <div className="cart-medicine">

//                     <div className="medicine-name">

//                         {item.medicineName}

//                     </div>

//                     <div className="medicine-info">

//                         {item.genericName}

//                     </div>

//                     <div className="medicine-company">

//                         {item.manufacturer}

//                     </div>

//                 </div>

//             </td>

//             {/* Batch */}

//             <td>

//                 <span className="batch-badge">

//                     {item.batchNo}

//                 </span>

//             </td>

//             {/* Expiry */}

//             <td>

//                 <span

//                     className={`

//                         expiry-badge

//                         ${item.isNearExpiry

//                             ? "warning"

//                             : ""

//                         }

//                     `}

//                 >

//                     {item.expiryDate}

//                 </span>

//             </td>

//             {/* MRP */}

//             <td>

//                 ₹{item.mrp}

//             </td>

//             {/* Sale Price */}

//             <td>

//                 ₹{item.sellingPrice}

//             </td>

//             {/* ==========================================
//                 Quantity
//             ========================================== */}

//             <td>

//                 <QuantityStepper

//                     quantity={item.quantity}

//                     stock={item.stock}

//                     onIncrease={() =>
//                         onIncreaseQty(item.id)
//                     }

//                     onDecrease={() =>
//                         onDecreaseQty(item.id)
//                     }

//                 />

//             </td>

//             {/* ==========================================
//                 Discount
//             ========================================== */}

//             <td>

//                 <span className="discount-chip">

//                     {item.discountPercent} %

//                     <small>

//                         ₹{discountAmount.toFixed(2)}

//                     </small>

//                 </span>

//             </td>

//             {/* ==========================================
//                 GST
//             ========================================== */}

//             <td>

//                 <span className="gst-chip">

//                     {item.gstPercent} %

//                     <small>

//                         ₹{gstAmount.toFixed(2)}

//                     </small>

//                 </span>

//             </td>

//             {/* ==========================================
//                 Amount
//             ========================================== */}

//             <td className="cart-row-amount">

//                 <strong>

//                     ₹{lineTotal.toFixed(2)}

//                 </strong>

//             </td>

//             {/* ==========================================
//                 Actions
//             ========================================== */}

//             <td>

//                 {/* <button

//                     className="remove-btn"

//                     onClick={() =>
//                         onRemoveMedicine(item.id)
//                     }

//                 > */}

//                 <button

//                     type="button"

//                     className="remove-btn"

//                     title="Remove Medicine"

//                     onClick={() => onRemoveMedicine(item.id)}

//                 >

//                     <DeleteOutlineOutlinedIcon
//                         fontSize="small"
//                     />

//                 </button>

//             </td>

//         </tr>

//     );

// };

// export default CartRow;



import "./CartRow.css";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import QuantityStepper from "../QuantityStepper/QuantityStepper";

import calculateDiscount from "../../utils/calculateDiscount";
// import calculateGST from "../../utils/calculateGST";
import calculateLineTotal from "../../utils/calculateLineTotal";

const CartRow = ({
    index,
    item,
    onIncreaseQty,
    onDecreaseQty,
    onRemoveMedicine,
}) => {

    const discountAmount = calculateDiscount(item);
    // const gstAmount = calculateGST(item);
    const lineTotal = calculateLineTotal(item);

    return (

        <tr className="cart-row">

            {/* Serial */}

            <td className="cart-center">

                {index + 1}

            </td>

            {/* Medicine */}

            <td>

                <div className="medicine-cell">

                    <div className="medicine-title">

                        {item.medicineName}

                    </div>

                    <div className="medicine-generic">

                        {item.genericName}

                    </div>

                    <div className="medicine-company">

                        {item.manufacturer}

                    </div>

                </div>

            </td>

            {/* Batch */}

            <td className="cart-center">

                <span className="batch-tag">

                    {item.batchNo}

                </span>

            </td>

            {/* Expiry */}

            <td className="cart-center">

                <span
                    className={`expiry-tag ${
                        item.isNearExpiry ? "expiry-warning" : ""
                    }`}
                >
                    {item.expiryDate}
                </span>

            </td>

            {/* MRP */}

            <td className="cart-right">

                ₹{Number(item.mrp).toFixed(2)}

            </td>

            {/* Sale Price */}

            {/* <td className="cart-right">

                ₹{Number(item.sellingPrice).toFixed(2)}

            </td> */}

            {/* Qty */}

            <td className="cart-center">

                <QuantityStepper
                    quantity={item.quantity}
                    stock={item.stock}
                    onIncrease={() => onIncreaseQty(item.id)}
                    onDecrease={() => onDecreaseQty(item.id)}
                />

            </td>

            {/* Discount */}

            <td className="cart-center">

                <div className="discount-box">

                    <span>{item.discountPercent}%</span>

                    <small>

                        ₹{discountAmount.toFixed(2)}

                    </small>

                </div>

            </td>

            {/* GST */}

            {/* <td className="cart-center">

                <div className="gst-box">

                    <span>{item.gstPercent}%</span>

                    <small>

                        ₹{gstAmount.toFixed(2)}

                    </small>

                </div>

            </td> */}

            {/* Amount */}

            <td className="cart-right">

                <div className="amount-box">

                    ₹{lineTotal.toFixed(2)}

                </div>

            </td>

            {/* Action */}

            <td className="cart-center">

                <button
                    type="button"
                    className="delete-btn"
                    onClick={() => onRemoveMedicine(item.id)}
                >

                    <DeleteOutlineOutlinedIcon fontSize="small" />

                </button>

            </td>

        </tr>

    );

};

export default CartRow;