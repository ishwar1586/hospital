import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import PurchaseHeader from "./components/PurchaseHeader/PurchaseHeader";
import PurchaseSummaryCards from "./components/PurchaseSummaryCards/PurchaseSummaryCards";

import PurchaseItemsTable
    from "./components/PurchaseItemsTable/PurchaseItemsTable";

import {
    purchaseItemsMock
}
    from "./mock/purchaseItems.mock";

import PurchaseAmountSummary
    from "./components/PurchaseAmountSummary/PurchaseAmountSummary";

import PurchaseOtherInfo
    from "./components/PurchaseOtherInfo/PurchaseOtherInfo";

import "./PurchaseDrawer.css";

const PurchaseDrawer = ({
    open,
    onClose,
    purchase,
}) => {

    if (!purchase)
        return null;

    return (

        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
        >

            <div className="purchase-drawer">

                <div className="purchase-drawer-top">

                    <h2>
                        Purchase Order Details
                    </h2>

                    <IconButton
                        onClick={onClose}
                    >
                        <CloseOutlinedIcon />
                    </IconButton>

                </div>

                <PurchaseHeader
                    purchase={purchase}
                />

                <PurchaseSummaryCards
                    purchase={purchase}
                />


                <PurchaseItemsTable
                    items={
                        purchaseItemsMock
                    }
                />

                <div className="purchase-bottom-grid">

                    <PurchaseAmountSummary
                        purchase={purchase}
                    />

                    <PurchaseOtherInfo
                        purchase={purchase}
                    />

                </div>

            </div>

        </Drawer>

    );
};

export default PurchaseDrawer;