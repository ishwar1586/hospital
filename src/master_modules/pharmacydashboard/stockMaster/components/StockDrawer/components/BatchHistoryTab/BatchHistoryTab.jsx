import { useState } from "react";

import "./BatchHistoryTab.css";

import {
    SearchOutlined,
    FilterAltOutlined,
    RestartAltOutlined,
} from "@mui/icons-material";

import BatchTable from "./BatchTable";

import { batchHistoryMock }
from "../../mock/batchHistory.mock";

const BatchHistoryTab = () => {

    const [search, setSearch] =
        useState("");

    const [status, setStatus] =
        useState("All");

    const [supplier, setSupplier] =
        useState("All");

    /* ================================= */

    const filteredData =

        batchHistoryMock.filter((item) => {

            const matchSearch =

                item.batchNo
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                item.medicineName
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                item.invoiceNo
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchStatus =

                status === "All" ||

                item.status === status;

            const matchSupplier =

                supplier === "All" ||

                item.supplier === supplier;

            return (

                matchSearch &&

                matchStatus &&

                matchSupplier

            );

        });

    /* ================================= */

    const handleReset = () => {

        setSearch("");

        setStatus("All");

        setSupplier("All");

    };

    return (

        <div className="batch-history-tab">

            {/* ================================= */}

            <div className="batch-toolbar">

                {/* Search */}

                <div className="batch-search">

                    <SearchOutlined />

                    <input

                        type="text"

                        placeholder="Search Batch / Medicine / Invoice"

                        value={search}

                        onChange={(e) =>
                            setSearch(e.target.value)
                        }

                    />

                </div>

                {/* Supplier */}

                <div className="batch-filter">

                    <FilterAltOutlined />

                    <select

                        value={supplier}

                        onChange={(e) =>
                            setSupplier(e.target.value)
                        }

                    >

                        <option>All</option>

                        <option>Medicare Distributors</option>

                        <option>LifeLine Enterprises</option>

                        <option>Global Healthcare</option>

                        <option>Shree Medicals</option>

                        <option>Abbott Healthcare</option>

                    </select>

                </div>

                {/* Status */}

                <div className="batch-filter">

                    <FilterAltOutlined />

                    <select

                        value={status}

                        onChange={(e) =>
                            setStatus(e.target.value)
                        }

                    >

                        <option>All</option>

                        <option>Active</option>

                        <option>Near Expiry</option>

                        <option>Expired</option>

                        <option>Consumed</option>

                        <option>Blocked</option>

                    </select>

                </div>

                {/* Reset */}

                <button

                    className="batch-reset-btn"

                    onClick={handleReset}

                >

                    <RestartAltOutlined />

                    Reset

                </button>

            </div>

            {/* ================================= */}

            <BatchTable

                data={filteredData}

            />

        </div>

    );

};

export default BatchHistoryTab;