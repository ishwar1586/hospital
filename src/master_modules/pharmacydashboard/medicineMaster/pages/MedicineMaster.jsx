import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./../styles/medicineMaster.css";

import MedicineStatsCards from "../components/MedicineStatsCards/MedicineStatsCards";
import MedicineFilters from "../components/MedicineFilters/MedicineFilters";
import MedicineTable from "../components/MedicineTable/MedicineTable";

import { medicineMasterMock } from "@/master_modules/pharmacydashboard/medicineMaster/mock/medicineMaster.mock";
import { medicineStats } from "../mock/medicineStats.mock";
import { medicineFilterOptions } from "../mock/medicineFilters.mock";
import Pagination from "@/master_shared/components/Pagination/Pagination";
import MedicineDrawer from "../components/MedicineDrawer/MedicineDrawer";
import MedicineHeaderActions from "@/master_modules/pharmacydashboard/medicineMaster/components/MedicineHeaderAction/MedicineHeaderActions";
import BatchDetailsModal from "@/master_modules/pharmacydashboard/medicineMaster/components/BatchDetailsModal/BatchDetailsModal";
import BarcodeModal from "@/master_modules/pharmacydashboard/medicineMaster/components/BarcodeModal/BarcodeModal";

const MedicineMaster = () => {
    const navigate = useNavigate();

    // barcode
const [
  isBarcodeModalOpen,
  setIsBarcodeModalOpen
] = useState(false);

const [
  selectedBarcodeMedicine,
  setSelectedBarcodeMedicine
] = useState(null);

const handlePrintBarcode = (
  medicine
) => {

  setSelectedBarcodeMedicine(
    medicine
  );

  setIsBarcodeModalOpen(true);
};

    // barcode

    // batch

    const [isBatchModalOpen,
        setIsBatchModalOpen] =
        useState(false);

    const [selectedBatchMedicine,
        setSelectedBatchMedicine] =
        useState(null);

    const handleBatchDetails =
        (medicine) => {

            setSelectedBatchMedicine(
                medicine
            );

            setIsBatchModalOpen(true);
        };

    // batch

    const [medicineData, setMedicineData] =
        useState(medicineMasterMock);

    // view medicine
    const [selectedMedicine, setSelectedMedicine] =
        useState(null);

    const [isDrawerOpen, setIsDrawerOpen] =
        useState(false);

    const handleViewMedicine = (medicine) => {
        setSelectedMedicine(medicine);
        setIsDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
        setSelectedMedicine(null);
    };


    // view medicine

    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] =
        useState(5);

    // const data =
    //     medicineMasterMock.slice(
    //         page * rowsPerPage,

    //         page * rowsPerPage + rowsPerPage
    //     );

    const data =
        medicineData.slice(
            page * rowsPerPage,

            page * rowsPerPage + rowsPerPage
        );

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
            parseInt(event.target.value, 10)
        );

        setPage(0);
    };

    const [filters, setFilters] = useState({
        search: "",
        category: "",
        company: "",
        status: "",
    });

    const handleDeleteMedicine = (
        medicineId
    ) => {

        const confirmed =
            window.confirm(
                "Are you sure you want to delete this medicine?"
            );

        if (!confirmed) return;

        setMedicineData((prev) =>
            prev.filter(
                (item) =>
                    item.id !== medicineId
            )
        );
    };

    return (
        <div className="medicine-master">

            <MedicineHeaderActions

                onImport={() => {
                    console.log("Import Medicine");
                }}

                onExport={() => {
                    console.log("Export Medicine");
                }}

                onAdd={() => {
                    navigate(
                        "/module/medicinemaster/add"
                    );
                }}

            />

            <MedicineStatsCards
                statsData={medicineStats}
            />

            <MedicineFilters
                filters={filters}
                setFilters={setFilters}
                filterOptions={medicineFilterOptions}
            />

            {/* <MedicineTable /> */}

            {/* <MedicineTable
                data={data}
                
            /> */}

            {/* <MedicineTable
                data={data}
                onAction={(action, row) => {

                    if (action === "view") {
                        handleViewMedicine(row);
                    }


                    if (action === "edit") {
                        navigate(
                            `/module/medicinemaster/edit/${row.id}`
                        );
                    }

                }}
            /> */}

            <MedicineTable
                data={data}
                onAction={(action, row) => {

                    switch (action) {

                        case "view":
                            handleViewMedicine(row);
                            break;

                        case "edit":
                            navigate(
                                `/module/medicinemaster/edit/${row.id}`
                            );
                            break;

                        case "delete":
                            handleDeleteMedicine(
                                row.id
                            );
                            break;

                        // case "batch":
                        //     console.log(
                        //         "Batch Details",
                        //         row
                        //     );
                        //     break;

                        case "batch":
                            handleBatchDetails(row);
                            break;

                        // case "print":
                        //     console.log(
                        //         "Print Barcode",
                        //         row
                        //     );
                        //     break;

                        case "print":
  handlePrintBarcode(row);
  break;

                        default:
                            break;
                    }

                }}
            />

            <Pagination
                page={page}
                rowsPerPage={rowsPerPage}
                // totalRows={medicineMasterMock.length}
                totalRows={medicineData.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={
                    handleRowsPerPageChange
                }
            />

            <MedicineDrawer
                open={isDrawerOpen}
                onClose={handleCloseDrawer}
                medicine={selectedMedicine}
            />


            <BatchDetailsModal
                open={isBatchModalOpen}
                onClose={() =>
                    setIsBatchModalOpen(false)
                }
                medicine={
                    selectedBatchMedicine
                }
            />

            <BarcodeModal
  open={isBarcodeModalOpen}
  onClose={() =>
    setIsBarcodeModalOpen(false)
  }
  medicine={
    selectedBarcodeMedicine
  }
/>
        </div>
    );
};

export default MedicineMaster;