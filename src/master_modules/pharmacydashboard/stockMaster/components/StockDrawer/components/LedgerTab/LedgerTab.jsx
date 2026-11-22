import { useState } from "react";

import "./LedgerTab.css";

import {
    SearchOutlined,
    FilterAltOutlined,
    RestartAltOutlined,
} from "@mui/icons-material";

import LedgerTable from "./LedgerTable";

import { ledgerMock } from "../../mock/ledger.mock";

const LedgerTab = () => {

    const [search, setSearch] = useState("");

    const [transactionType, setTransactionType] =
        useState("All");

    /* ================================= */

    const filteredData = ledgerMock.filter((item) => {

        const matchSearch =

            item.referenceNo
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            item.remarks
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            item.user
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchType =

            transactionType === "All" ||

            item.transactionType === transactionType;

        return matchSearch && matchType;

    });

    /* ================================= */

    const handleReset = () => {

        setSearch("");

        setTransactionType("All");

    };

    return (

        <div className="ledger-tab">

            {/* ================================= */}

            <div className="ledger-toolbar">

                {/* Search */}

                <div className="ledger-search">

                    <SearchOutlined />

                    <input

                        type="text"

                        placeholder="Search Reference / User / Remarks"

                        value={search}

                        onChange={(e) =>
                            setSearch(e.target.value)
                        }

                    />

                </div>

                {/* Transaction Filter */}

                <div className="ledger-filter">

                    <FilterAltOutlined />

                    <select

                        value={transactionType}

                        onChange={(e) =>
                            setTransactionType(
                                e.target.value
                            )
                        }

                    >

                        <option>All</option>

                        <option>Purchase</option>

                        <option>Sale</option>

                        <option>Sale Return</option>

                        <option>Purchase Return</option>

                        <option>Transfer In</option>

                        <option>Transfer Out</option>

                        <option>Adjustment</option>

                        <option>Expired</option>

                        <option>Damage</option>

                    </select>

                </div>

                {/* Reset */}

                <button

                    className="ledger-reset-btn"

                    onClick={handleReset}

                >

                    <RestartAltOutlined />

                    Reset

                </button>

            </div>

            {/* ================================= */}

            <LedgerTable

                data={filteredData}

            />

        </div>

    );

};

export default LedgerTab;