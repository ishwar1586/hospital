import { useEffect, useState } from "react";

import Drawer from "@mui/material/Drawer";

import "./AdjustmentDrawer.css";

import DrawerHeader from "./DrawerHeader";
import AdjustmentSummary from "./AdjustmentSummary";
import AdjustmentForm from "./AdjustmentForm";
import AdjustmentPreview from "./AdjustmentPreview";
import DrawerFooter from "./DrawerFooter";

import { adjustmentMock } from "../../mock/adjustment.mock";

const AdjustmentDrawer = ({

    open,

    onClose,

    stock,

    onSave,

}) => {

    const [formData, setFormData] =

        useState(adjustmentMock);

    /* ===========================================
       Load Selected Stock
    =========================================== */

    useEffect(() => {

        if (!stock) return;

        setFormData({

            ...adjustmentMock,

            medicineId: stock.id,

            medicineCode: stock.medicineCode,

            medicineName: stock.medicineName,

            category: stock.category,

            batchNo: stock.batchNo,

            expiryDate: stock.expiryDate,

            warehouse: stock.location,

            location: stock.location,

            currentStock: stock.currentStock,

            reservedStock: stock.reservedQty,

            availableStock: stock.availableQty,

        });

    }, [

        stock,

    ]);

    /* ===========================================
       Handle Change
    =========================================== */

    const handleChange = (e) => {

        const {

            name,

            value,

        } = e.target;

        setFormData((prev) => ({

            ...prev,

            [name]: value,

        }));

    };

    /* ===========================================
       Preview Calculation
    =========================================== */

    const physicalStock =

        Number(formData.physicalStock || 0);

    const currentStock =

        Number(formData.currentStock || 0);

    const difference =

        physicalStock - currentStock;

    const adjustmentType =

        difference > 0

            ? "Stock In"

            : difference < 0

                ? "Stock Out"

                : "No Change";

    /* ===========================================
       Save
    =========================================== */

    const handleSave = () => {

        const payload = {

            ...formData,

            difference,

            adjustmentType,

        };

        console.log(payload);

        if (onSave) {

            onSave(payload);

        }

    };

    if (!stock) return null;

    return (

        <Drawer

            anchor="right"

            open={open}

            onClose={onClose}

            PaperProps={{

                className:

                    "adjustment-drawer-paper",

            }}

        >

            <div className="adjustment-drawer">

                {/* =============================== */}

                <DrawerHeader

                    adjustmentNo={

                        formData.adjustmentNo

                    }

                    adjustmentDate={

                        formData.adjustmentDate

                    }

                    onClose={onClose}

                />

                {/* =============================== */}

                <div className="adjustment-body">

                    <AdjustmentSummary

                        data={formData}

                    />

                    <AdjustmentForm

                        formData={formData}

                        onChange={handleChange}

                    />

                    <AdjustmentPreview

                        currentStock={currentStock}

                        physicalStock={physicalStock}

                        difference={difference}

                        adjustmentType={adjustmentType}

                    />

                </div>

                {/* =============================== */}

                <DrawerFooter

                    onCancel={onClose}

                    onSave={handleSave}

                />

            </div>

        </Drawer>

    );

};

export default AdjustmentDrawer;