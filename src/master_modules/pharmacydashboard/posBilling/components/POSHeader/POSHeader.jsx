import { useEffect, useState } from "react";

import "./POSHeader.css";

import {
    ReceiptLongOutlined,
    CalendarMonthOutlined,
    AccessTimeOutlined,
    PersonOutlineOutlined,
    LocalHospitalOutlined,
    AddOutlined,
    PauseCircleOutlineOutlined,
    HistoryOutlined,
} from "@mui/icons-material";

const POSHeader = ({

    invoiceNo = "PHM-20260706-000001",

    cashier = "Ritesh Singh",

    counter = "Main Pharmacy",

    onNewBill,

    onHoldBill,

    onRecentBills,

}) => {

    const [currentTime, setCurrentTime] =

        useState(new Date());

    useEffect(() => {

        const timer = setInterval(() => {

            setCurrentTime(new Date());

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    const currentDate =

        currentTime.toLocaleDateString(

            "en-GB",

            {

                day: "2-digit",

                month: "short",

                year: "numeric",

            }

        );

    const liveTime =

        currentTime.toLocaleTimeString(

            "en-IN",

            {

                hour: "2-digit",

                minute: "2-digit",

                second: "2-digit",

            }

        );

    return (

        <header className="pos-header">

            {/* ============================== */}
            {/* Left */}
            {/* ============================== */}

            <div className="pos-header-left">

                <div className="header-card">

                    <ReceiptLongOutlined />

                    <div>

                        <span>

                            Invoice No.

                        </span>

                        <strong>

                            {invoiceNo}

                        </strong>

                    </div>

                </div>

                <div className="header-card">

                    <CalendarMonthOutlined />

                    <div>

                        <span>

                            Date

                        </span>

                        <strong>

                            {currentDate}

                        </strong>

                    </div>

                </div>

                <div className="header-card">

                    <AccessTimeOutlined />

                    <div>

                        <span>

                            Time

                        </span>

                        <strong>

                            {liveTime}

                        </strong>

                    </div>

                </div>

                <div className="header-card">

                    <PersonOutlineOutlined />

                    <div>

                        <span>

                            Cashier

                        </span>

                        <strong>

                            {cashier}

                        </strong>

                    </div>

                </div>

                <div className="header-card">

                    <LocalHospitalOutlined />

                    <div>

                        <span>

                            Counter

                        </span>

                        <strong>

                            {counter}

                        </strong>

                    </div>

                </div>

            </div>

            {/* ============================== */}
            {/* Right */}
            {/* ============================== */}

            <div className="pos-header-right">

                <button

                    className="pos-header-btn secondary"

                    onClick={onRecentBills}

                >

                    <HistoryOutlined />

                    Recent Bills

                </button>

                <button

                    className="pos-header-btn warning"

                    onClick={onHoldBill}

                >

                    <PauseCircleOutlineOutlined />

                    Hold Bill

                </button>

                <button

                    className="pos-header-btn primary"

                    onClick={onNewBill}

                >

                    <AddOutlined />

                    New Bill

                </button>

            </div>

        </header>

    );

};

export default POSHeader;