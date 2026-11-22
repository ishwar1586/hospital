import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./../styles/manufacturerMaster.css";

import ManufacturerStatsCards from "../components/ManufacturerStatsCards/ManufacturerStatsCards";
import ManufacturerFilters from "../components/ManufacturerFilters/ManufacturerFilters";
import ManufacturerTable from "../components/ManufacturerTable/ManufacturerTable";

import ManufacturerHeaderActions from "../components/ManufacturerHeaderActions/ManufacturerHeaderActions";

import Pagination from "@/master_shared/components/Pagination/Pagination";
import ManufacturerDrawer from "../components/ManufacturerDrawer/ManufacturerDrawer";
import DeleteManufacturerModal from "../components/DeleteManufacturerModal/DeleteManufacturerModal";

import { manufacturerMock } from "../mock/manufacturer.mock";
import { manufacturerStats } from "../mock/manufacturerStats.mock";

const ManufacturerMaster = () => {

    const navigate = useNavigate();


    // delete
    const [manufacturerData, setManufacturerData] =
        useState(manufacturerMock);

    const [isDeleteModalOpen,
        setIsDeleteModalOpen] =
        useState(false);

    const handleDeleteClick = (
        manufacturer
    ) => {

        setSelectedManufacturer(
            manufacturer
        );

        setIsDeleteModalOpen(true);
    };

    const handleDeleteConfirm = () => {

        setManufacturerData(
            (prev) =>
                prev.filter(
                    (item) =>
                        item.id !==
                        selectedManufacturer.id
                )
        );

        setIsDeleteModalOpen(false);

        setSelectedManufacturer(null);
    };

    // delete



    // view details
    const [selectedManufacturer,
        setSelectedManufacturer] =
        useState(null);

    const [isDrawerOpen,
        setIsDrawerOpen] =
        useState(false);

    const handleViewManufacturer = (
        manufacturer
    ) => {

        setSelectedManufacturer(
            manufacturer
        );

        setIsDrawerOpen(true);
    };

    const handleCloseDrawer = () => {

        setIsDrawerOpen(false);

        setSelectedManufacturer(null);
    };

    //  const data = manufacturerMock;

    // view details



    const [page, setPage] =
        useState(0);

    const [rowsPerPage,
        setRowsPerPage] =
        useState(5);

    const [filters,
        setFilters] = useState({
            search: "",
            city: "",
            status: "",
        });

    const data =
        manufacturerData.slice(
            page * rowsPerPage,
            page * rowsPerPage +
            rowsPerPage
        );

    const handlePageChange = (
        event,
        newPage
    ) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange =
        (event) => {

            setRowsPerPage(
                parseInt(
                    event.target.value,
                    10
                )
            );

            setPage(0);
        };

    return (
        <div className="manufacturer-master">

            <ManufacturerHeaderActions

                onImport={() => {
                    console.log("Import Manufacturer");
                }}

                onExport={() => {
                    console.log("Export Manufacturer");
                }}

                onAdd={() => {
                    navigate(
                        "/module/manufacturermaster/add"
                    );
                }}

            />

            <ManufacturerStatsCards
                statsData={
                    manufacturerStats
                }
            />

            <ManufacturerFilters
                filters={filters}
                setFilters={setFilters}
            />

            {/* <ManufacturerTable
        data={data}
      /> */}

            <ManufacturerTable
                data={data}
                onAction={(action, row) => {

                    switch (action) {

                        case "view":
                            handleViewManufacturer(
                                row
                            );
                            break;

                        case "edit":
                            navigate(
                                `/module/manufacturermaster/edit/${row.id}`
                            );
                            break;

                        case "delete":
                            handleDeleteClick(
                                row
                            );
                            break;

                        default:
                            break;
                    }

                }}
            />

            <Pagination
                page={page}
                rowsPerPage={rowsPerPage}
                // totalRows={
                //     manufacturerMock.length
                // }
                totalRows={
                    manufacturerData.length
                }
                onPageChange={
                    handlePageChange
                }
                onRowsPerPageChange={
                    handleRowsPerPageChange
                }
            />

            <ManufacturerDrawer
                open={isDrawerOpen}
                onClose={handleCloseDrawer}
                manufacturer={
                    selectedManufacturer
                }
            />
            <DeleteManufacturerModal
                open={isDeleteModalOpen}
                onClose={() => {

                    setIsDeleteModalOpen(
                        false
                    );

                    setSelectedManufacturer(
                        null
                    );
                }}
                onConfirm={
                    handleDeleteConfirm
                }
                manufacturer={
                    selectedManufacturer
                }
            />

        </div>
    );
};

export default ManufacturerMaster;