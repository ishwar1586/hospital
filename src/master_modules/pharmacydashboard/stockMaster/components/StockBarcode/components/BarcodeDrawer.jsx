import { useEffect, useState } from "react";

import Drawer from "@mui/material/Drawer";

import "./BarcodeDrawer.css";

import DrawerHeader from "./DrawerHeader";
import BarcodePreview from "./BarcodePreview";
import BarcodeSettings from "./BarcodeSettings";
import DrawerFooter from "./DrawerFooter";

import { barcodeMock }
    from "@/master_modules/pharmacydashboard/stockMaster/components/StockBarcode/mock/barcode.mock.js";

import validateBarcode
    from "@/master_modules/pharmacydashboard/stockMaster/components/StockBarcode/validation/barcodeValidation";

const BarcodeDrawer = ({

    open,

    onClose,

    stock,

    onPrint,

}) => {

    const [formData, setFormData] =

        useState(barcodeMock);

    const [errors, setErrors] =

        useState({});

    /* ===========================================
       Load Stock
    =========================================== */

    useEffect(() => {

        if (!stock) return;

        setFormData({

            ...barcodeMock,

            medicineId: stock.id,

            medicineCode: stock.medicineCode,

            medicineName: stock.medicineName,

            batchNo: stock.batchNo,

            expiryDate: stock.expiryDate,

            mrp: stock.mrp,

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

            checked,

            type,

        } = e.target;

        setFormData((prev) => ({

            ...prev,

            [name]:

                type === "checkbox"

                    ? checked

                    : value,

        }));

    };

    /* ===========================================
       Print
    =========================================== */

    const handlePrint = () => {

        const validationErrors =

            validateBarcode(formData);

        setErrors(validationErrors);

        if (

            Object.keys(validationErrors).length

        ) {

            return;

        }

        console.log(

            "Barcode Print",

            formData

        );

        onPrint?.(formData);

    };

    if (!stock) return null;

    return (

        <Drawer

            anchor="right"

            open={open}

            onClose={onClose}

            PaperProps={{

                className:

                    "barcode-drawer-paper",

            }}

        >

            <div className="barcode-drawer">

                {/* =============================== */}

                <DrawerHeader

                    barcodeNo={

                        formData.barcodeNo

                    }

                    generatedDate={

                        formData.generatedDate

                    }

                    onClose={onClose}

                />

                {/* =============================== */}

                <div className="barcode-body">

                    <BarcodeSettings

                        formData={formData}

                        onChange={handleChange}

                        errors={errors}

                    />

                    <BarcodePreview

                        data={formData}

                    />

                </div>

                {/* =============================== */}

                <DrawerFooter

                    onCancel={onClose}

                    onPrint={handlePrint}

                    disabled={

                        !formData.barcodeType ||

                        !formData.labelSize ||

                        Number(formData.copies) <= 0

                    }

                />
            </div>

        </Drawer>

    );

};

export default BarcodeDrawer;