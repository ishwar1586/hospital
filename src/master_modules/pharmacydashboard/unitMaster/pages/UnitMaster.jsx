import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./../styles/unitMaster.css";

import { unitMock } from "../mock/unit.mock";
import { unitStats } from "../mock/unitStats.mock";

import UnitStatsCards from "../components/UnitStatsCards/UnitStatsCards";
import UnitFilters from "../components/UnitFilters/UnitFilters";
import UnitTable from "../components/UnitTable/UnitTable";
import UnitHeaderActions from "../components/UnitHeaderActions/UnitHeaderActions";
import UnitDrawer from "../components/UnitDrawer/UnitDrawer";

import Pagination from "@/master_shared/components/Pagination/Pagination";

const UnitMaster = () => {

    const navigate = useNavigate();

    // view
    const [selectedUnit,
        setSelectedUnit] =
        useState(null);

    const [isDrawerOpen,
        setIsDrawerOpen] =
        useState(false);

    const handleViewUnit = (
        unit
    ) => {

        setSelectedUnit(unit);

        setIsDrawerOpen(true);
    };

    const handleCloseDrawer = () => {

        setIsDrawerOpen(false);

        setSelectedUnit(null);
    };
    // view

    const [page, setPage] =
        useState(0);

    const [rowsPerPage,
        setRowsPerPage] =
        useState(5);

    const [filters,
        setFilters] =
        useState({
            search: "",
            status: "",
        });

    const data =
        unitMock.slice(
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
        <div className="unit-master">

            <UnitHeaderActions

                onImport={() => {
                    console.log(
                        "Import Unit"
                    );
                }}

                onExport={() => {
                    console.log(
                        "Export Unit"
                    );
                }}

                onAdd={() => {
                    navigate(
                        "/module/unitmaster/add"
                    );
                }}

            />

            <UnitStatsCards
                statsData={unitStats}
            />

            <UnitFilters
                filters={filters}
                setFilters={setFilters}
            />

            <UnitTable
                data={data}
                onAction={(action, row) => {

                    switch (action) {

                        case "view":
                            handleViewUnit(row);
                            break;

                        case "edit":
                            navigate(
                                `/module/unitmaster/edit/${row.id}`
                            );
                            break;

                        case "delete":
                            console.log(
                                "Delete Unit",
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
                rowsPerPage={
                    rowsPerPage
                }
                totalRows={
                    unitMock.length
                }
                onPageChange={
                    handlePageChange
                }
                onRowsPerPageChange={
                    handleRowsPerPageChange
                }
            />

            <UnitDrawer
                open={isDrawerOpen}
                onClose={handleCloseDrawer}
                unit={selectedUnit}
            />

        </div>
    );
};

export default UnitMaster;