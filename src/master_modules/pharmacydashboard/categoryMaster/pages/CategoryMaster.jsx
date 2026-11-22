import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./../styles/categoryMaster.css";

import { categoryMock } from "../mock/category.mock";
import { categoryStats } from "../mock/categoryStats.mock";

import CategoryStatsCards from "../components/CategoryStatsCards/CategoryStatsCards";
import CategoryFilters from "../components/CategoryFilters/CategoryFilters";
import CategoryTable from "../components/CategoryTable/CategoryTable";
import CategoryHeaderActions from "../components/CategoryHeaderActions/CategoryHeaderActions";
import CategoryDrawer from "../components/CategoryDrawer/CategoryDrawer";

import Pagination from "@/master_shared/components/Pagination/Pagination";

const CategoryMaster = () => {

    const navigate = useNavigate();

    // view

    const [selectedCategory,
        setSelectedCategory] =
        useState(null);

    const [isDrawerOpen,
        setIsDrawerOpen] =
        useState(false);

    const handleViewCategory = (
        category
    ) => {

        setSelectedCategory(
            category
        );

        setIsDrawerOpen(true);
    };

    const handleCloseDrawer = () => {

        setIsDrawerOpen(false);

        setSelectedCategory(null);
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
        categoryMock.slice(
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
        <div className="category-master">

            <CategoryHeaderActions

                onImport={() => {
                    console.log(
                        "Import Category"
                    );
                }}

                onExport={() => {
                    console.log(
                        "Export Category"
                    );
                }}

                onAdd={() => {
                    navigate(
                        "/module/categorymaster/add"
                    );
                }}

            />

            <CategoryStatsCards
                statsData={
                    categoryStats
                }
            />

            <CategoryFilters
                filters={filters}
                setFilters={setFilters}
            />

            <CategoryTable
                data={data}
                onAction={(action, row) => {

                    switch (action) {

                        case "view":
                            handleViewCategory(row);
                            break;

                        case "edit":
                            navigate(
                                `/module/categorymaster/edit/${row.id}`
                            );
                            break;

                        case "delete":
                            console.log(
                                "Delete Category",
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
                totalRows={
                    categoryMock.length
                }
                onPageChange={
                    handlePageChange
                }
                onRowsPerPageChange={
                    handleRowsPerPageChange
                }
            />

            <CategoryDrawer
                open={isDrawerOpen}
                onClose={handleCloseDrawer}
                category={selectedCategory}
            />

        </div>
    );
};

export default CategoryMaster;