import TableEngine from "@/master_shared/components/TableEngine/TableEngine";

import { medicineColumns } from "@/master_modules/pharmacydashboard/medicineMaster/config/medicineColumn";
// import { medicineMasterMock } from "@/master_modules/pharmacydashboard/medicineMaster/mock/medicineMaster.mock";

const MedicineTable = ({
    data,
    onAction,

}) => {
    return (
        <TableEngine
            columns={medicineColumns}
            data={data}
            rowKey="id"
            onAction={onAction}
        />
    );
};

export default MedicineTable;