import { useEffect, useState } from "react";

import Drawer from "@mui/material/Drawer";

import "./StockDrawer.css";

import DrawerHeader from "./components/DrawerHeader/DrawerHeader";
import DrawerTabs from "./components/DrawerTabs/DrawerTabs";

import InformationTab from "./components/InformationTab/InformationTab";
import LedgerTab from "./components/LedgerTab/LedgerTab";
import BatchHistoryTab from "./components/BatchHistoryTab/BatchHistoryTab";
import DocumentsTab from "./components/DocumentsTab/DocumentsTab";
import ActivityTab from "./components/ActivityTab/ActivityTab";

import DrawerFooter from "./components/DrawerFooter/DrawerFooter";

const StockDrawer = ({

    open,

    onClose,

    stock,

    onEdit,

    onPrint,

}) => {

    const [activeTab, setActiveTab] =
        useState("information");

    /* =======================================
       Reset Active Tab
    ======================================= */

    useEffect(() => {

        if (open) {

            setActiveTab("information");

        }

    }, [open, stock]);

    /* =======================================
       Empty
    ======================================= */

    if (!stock) return null;

    /* =======================================
       Render Tabs
    ======================================= */

    const renderActiveTab = () => {

        switch (activeTab) {

            case "information":

                return (

                    <InformationTab

                        stock={stock}

                    />

                );

            case "ledger":

                return (

                    <LedgerTab

                        stock={stock}

                    />

                );

            case "batch":

                return (

                    <BatchHistoryTab

                        stock={stock}

                    />

                );

            case "documents":

                return (

                    <DocumentsTab

                        stock={stock}

                    />

                );

            case "activity":

                return (

                    <ActivityTab

                        stock={stock}

                    />

                );

            default:

                return null;

        }

    };

    return (

        <Drawer

            anchor="right"

            open={open}

            onClose={onClose}

            PaperProps={{

                className:"stock-drawer-paper",

            }}

        >

            <div className="stock-drawer">

                {/* =============================== */}

                <DrawerHeader

                    stock={stock}

                    onClose={onClose}

                />

                {/* =============================== */}

                <DrawerTabs

                    activeTab={activeTab}

                    setActiveTab={setActiveTab}

                />

                {/* =============================== */}

                <div className="drawer-body">

                    {

                        renderActiveTab()

                    }

                </div>

                {/* =============================== */}

                <DrawerFooter

                    stock={stock}

                    onClose={onClose}

                    onEdit={onEdit}

                    onPrint={onPrint}

                />

            </div>

        </Drawer>

    );

};

export default StockDrawer;