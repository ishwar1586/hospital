import { useState } from "react";

import "./DocumentsTab.css";

import {
    SearchOutlined,
    FilterAltOutlined,
    RestartAltOutlined,
} from "@mui/icons-material";

import DocumentCard from "./DocumentCard";
import Pagination from "@/master_shared/components/Pagination/Pagination";

import {
    documentsMock,
} from "../../mock/documents.mock";

const DocumentsTab = () => {

    const [search, setSearch] =

        useState("");

    const [status, setStatus] =

        useState("All");

    const [type, setType] =

        useState("All");

    /* ================================= */

const [page, setPage] = useState(0);

const [rowsPerPage, setRowsPerPage] = useState(12);


const handlePageChange = (

    event,

    newPage

) => {

    setPage(newPage);

};

const handleRowsPerPageChange = (

    event

) => {

    setRowsPerPage(

        parseInt(

            event.target.value,

            10

        )

    );

    setPage(0);

};

    const filteredDocuments =

        documentsMock.filter((doc) => {

            const matchSearch =

                doc.documentName
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                doc.fileName
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                doc.invoiceNo
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchStatus =

                status === "All" ||

                doc.status === status;

            const matchType =

                type === "All" ||

                doc.type === type;

            return (

                matchSearch &&

                matchStatus &&

                matchType

            );

        });

    /* ================================= */

const paginatedDocuments =

    filteredDocuments.slice(

        page * rowsPerPage,

        page * rowsPerPage +

        rowsPerPage

    );

    const handleReset = () => {

        setSearch("");

        setStatus("All");

        setType("All");

    };

    return (

        <div className="documents-tab">

            {/* ================================= */}
            {/* Toolbar */}
            {/* ================================= */}

            <div className="documents-toolbar">

                {/* Search */}

                <div className="documents-search">

                    <SearchOutlined />

                    <input

                        type="text"

                        placeholder="Search document..."

                        value={search}

                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }

                    />

                </div>

                {/* Type */}

                <div className="documents-filter">

                    <FilterAltOutlined />

                    <select

                        value={type}

                        onChange={(e) =>
                            setType(
                                e.target.value
                            )
                        }

                    >

                        <option>All</option>

                        <option>PDF</option>

                        <option>Image</option>

                        <option>Excel</option>

                    </select>

                </div>

                {/* Status */}

                <div className="documents-filter">

                    <FilterAltOutlined />

                    <select

                        value={status}

                        onChange={(e) =>
                            setStatus(
                                e.target.value
                            )
                        }

                    >

                        <option>All</option>

                        <option>Verified</option>

                        <option>Uploaded</option>

                        <option>Pending</option>

                        <option>Missing</option>

                    </select>

                </div>

                {/* Reset */}

                <button

                    className="documents-reset-btn"

                    onClick={handleReset}

                >

                    <RestartAltOutlined />

                    Reset

                </button>

            </div>


            <div className="documents-info">

    Showing

    <strong>

        {" "}

        {

            filteredDocuments.length === 0

                ? 0

                : page * rowsPerPage + 1

        }

    </strong>

    -

    <strong>

        {

            Math.min(

                (page + 1) * rowsPerPage,

                filteredDocuments.length

            )

        }

    </strong>

    of

    <strong>

        {" "}

        {

            filteredDocuments.length

        }

    </strong>

    Documents

</div>

            {/* ================================= */}
            {/* Documents */}
            {/* ================================= */}

            <div className="documents-grid">

                {

                    filteredDocuments.length > 0 ? (

                        // filteredDocuments.map(

                        paginatedDocuments.map(

                            (document) => (

                                <DocumentCard

                                    key={document.id}

                                    document={document}

                                />

                            )

                        )

                    ) : (

                        <div className="documents-empty">

                            No documents found.

                        </div>

                    )

                }

            </div>

            <Pagination

    page={page}

    rowsPerPage={rowsPerPage}

    totalRows={filteredDocuments.length}

    onPageChange={handlePageChange}

    onRowsPerPageChange={

        handleRowsPerPageChange

    }

/>

        </div>

    );

};

export default DocumentsTab;