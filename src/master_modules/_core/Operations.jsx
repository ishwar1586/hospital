import TableEngineMax from "@/master_modules/TableEngineMax/TableEngineMax";
import  operationTableConfig  from "@/master_modules/configs/operation.config";
import operationsMock from "@/master_modules/configs/operations.mock";
import "@/master_assets/styles/operations.css";
// import { FiEdit } from "react-icons/fi";
// import { FiTrash2 } from "react-icons/fi";

// const EditAction = () => <FiEdit className="edit-icon" />;
// const DeleteAction = () => <FiTrash2 className="delete-icon" />;


const Operations = () => {
  return (
    <div className="operations-card">
      {/* <div className="operations-header">
        <h3>Operations</h3>
        <span className="view-all">View All</span>
      </div> */}

      <TableEngineMax
        config={operationTableConfig}
        data={operationsMock}
       
      />
    </div>
  );
};

export default Operations;
