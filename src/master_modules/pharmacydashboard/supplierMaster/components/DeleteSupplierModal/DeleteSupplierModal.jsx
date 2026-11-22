import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

import "./DeleteSupplierModal.css";

const DeleteSupplierModal = ({
    open,
    onClose,
    supplier,
    onConfirm,
}) => {

    if (!supplier)
        return null;

    return (

        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
        >

            <DialogContent>

                <div className="delete-modal">

                    <div className="delete-icon">

                        <WarningAmberOutlinedIcon />

                    </div>

                    <h2>
                        Delete Supplier
                    </h2>

                    <p>

                        Are you sure you want to
                        delete

                        <strong>
                            {" "}
                            {
                                supplier.supplierName
                            }
                        </strong>

                        ?

                    </p>

                    <span>

                        This action cannot be
                        undone.

                    </span>

                    <div className="delete-actions">

                        <button
                            className="cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            className="delete-btn"
                            onClick={() =>
                                onConfirm(
                                    supplier
                                )
                            }
                        >
                            Delete Supplier
                        </button>

                    </div>

                </div>

            </DialogContent>

        </Dialog>

    );
};

export default DeleteSupplierModal;