import { useEffect, useState } from "react";

import Drawer from "@mui/material/Drawer";

import "./TransferDrawer.css";

import DrawerHeader from "./DrawerHeader";
import TransferSummary from "./TransferSummary";
import TransferForm from "./TransferForm";
import TransferPreview from "./TransferPreview";
import DrawerFooter from "./DrawerFooter";

import { transferMock } from "@/master_modules/pharmacydashboard/stockMaster/components/StockTransfer/mock/transfer.mock.js";

import validateTransfer
    from "@/master_modules/pharmacydashboard/stockMaster/components/StockTransfer/validation/transferValidation";

const TransferDrawer = ({

    open,

    onClose,

    stock,

    onSave,

}) => {

    const [formData, setFormData] =

        useState(transferMock);


    const [errors, setErrors] = useState({});

    /* ===========================================
       Load Selected Stock
    =========================================== */

    useEffect(() => {

        if (!stock) return;

        setFormData({

            ...transferMock,

            medicineId: stock.id,

            medicineCode: stock.medicineCode,

            medicineName: stock.medicineName,

            batchNo: stock.batchNo,

            expiryDate: stock.expiryDate,

            fromWarehouse: stock.location,

            currentStock: stock.currentStock,

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

    const transferQty =

        Number(formData.transferQty || 0);

    const availableStock =

        Number(formData.availableStock || 0);

    const remainingStock =

        availableStock - transferQty;

    /* ===========================================
       Save
    =========================================== */

    // const handleSave = () => {

    //     const payload = {

    //         ...formData,

    //         remainingStock,

    //     };

    //     console.log(payload);

    //     if (onSave) {

    //         onSave(payload);

    //     }

    // };

    const handleSave = () => {

        const validationErrors =

            validateTransfer(formData);

        setErrors(validationErrors);

        if (

            Object.keys(validationErrors).length

        ) {

            return;

        }

        const payload = {

            ...formData,

            remainingStock,

        };

        console.log(payload);

        onSave?.(payload);

    };

    if (!stock) return null;

    return (

        <Drawer

            anchor="right"

            open={open}

            onClose={onClose}

            PaperProps={{

                className:

                    "transfer-drawer-paper",

            }}

        >

            <div className="transfer-drawer">

                {/* ================================= */}

                <DrawerHeader

                    transferNo={

                        formData.transferNo

                    }

                    transferDate={

                        formData.transferDate

                    }

                    onClose={onClose}

                />

                {/* ================================= */}

                <div className="transfer-body">

                    <TransferSummary

                        data={formData}

                    />

                    <TransferForm

                        formData={formData}

                        onChange={handleChange}

                        errors={errors}

                    />

                    <TransferPreview

                        currentStock={

                            formData.currentStock

                        }

                        availableStock={

                            availableStock

                        }

                        transferQty={

                            transferQty

                        }

                        remainingStock={

                            remainingStock

                        }

                        destination={

                            formData.toWarehouse

                        }

                    />

                </div>

                {/* ================================= */}

                <DrawerFooter

                    onCancel={onClose}

                    onSave={handleSave}

                />

            </div>

        </Drawer>

    );

};

export default TransferDrawer;