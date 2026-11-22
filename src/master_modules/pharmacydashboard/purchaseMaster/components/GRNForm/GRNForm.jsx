import { useState } from "react";

import "./GRNForm.css";

import { grnMock } from "@/master_modules/pharmacydashboard/purchaseMaster/components/GRNForm/mock/grn.mock.js";
import { grnItemsMock } from "@/master_modules/pharmacydashboard/purchaseMaster/components/GRNForm/mock/grnItems.mock";
import { grnFormConfig } from "@/master_modules/pharmacydashboard/purchaseMaster/components/GRNForm/config/grnFormConfig";

import GRNInformationSection from "./components/GRNInformationSection/GRNInformationSection";
import GRNItemsTable from "./components/GRNItemsTable/GRNItemsTable";
import GRNOtherCharges from "./components/GRNOtherCharges/GRNOtherCharges";
import GRNNotes from "./components/GRNNotes/GRNNotes";
import GRNAmountSummary from "./components/GRNAmountSummary/GRNAmountSummary";
import GRNFooterActions from "./components/GRNFooterActions/GRNFooterActions";

const GRNForm = () => {

    const [formData, setFormData] =
        useState(grnMock);

    const [items, setItems] =
        useState(grnItemsMock);

    const handleChange = (e) => {

        const {
            name,
            value,
        } = e.target;

        setFormData(prev => ({

            ...prev,

            [name]: value,

        }));

    };

    const handleSave = () => {

        console.log({

            formData,

            items,

        });

    };

    const handlePrint = () => {

        console.log("Print GRN");

    };

    const handleCancel = () => {

        console.log("Cancel");

    };

    return (

        <div className="grn-form">

            <GRNInformationSection

                formData={formData}

                handleChange={handleChange}

                config={grnFormConfig}

            />

            <GRNItemsTable

                items={items}

                setItems={setItems}

            />

            <div className="grn-bottom-grid">

                <div className="grn-left-panel">

                    <GRNOtherCharges

                        formData={formData}

                        handleChange={handleChange}

                    />

                    <GRNNotes

                        formData={formData}

                        handleChange={handleChange}

                    />

                </div>

                <div className="grn-right-panel">

                    <GRNAmountSummary

                        formData={formData}

                    />

                </div>

            </div>

            <GRNFooterActions

                onCancel={handleCancel}

                onPrint={handlePrint}

                onSave={handleSave}

            />

        </div>

    );

};

export default GRNForm;