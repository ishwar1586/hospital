import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";

import CloseOutlinedIcon
    from "@mui/icons-material/CloseOutlined";

import DeleteOutlineOutlinedIcon
    from "@mui/icons-material/DeleteOutlineOutlined";

import "./DeleteConfirmModal.css";


const DeleteConfirmModal = ({
    open,
    title = "Delete Item",
    message = "Are you sure you want to delete this item?",
    itemName = "",
    itemLabel = "Item",
    confirmText = "Delete",
    cancelText = "Cancel",
    loading = false,
    onClose,
    onConfirm,
}) => {


    // =========================================
    // CLOSE
    // =========================================

    const handleClose = () => {

        if (loading) {
            return;
        }

        onClose();

    };


    // =========================================
    // CONFIRM
    // =========================================

    const handleConfirm = () => {

        if (loading) {
            return;
        }

        onConfirm();

    };


    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="xs"
            fullWidth
            className="delete-confirm-dialog"
        >

            <DialogContent className="delete-confirm-modal">

                {/* =================================
                    HEADER
                ================================= */}

                <div className="delete-confirm-modal__header">

                    <div className="delete-confirm-modal__icon">

                        <DeleteOutlineOutlinedIcon />

                    </div>


                    <IconButton
                        onClick={handleClose}
                        disabled={loading}
                        className="delete-confirm-modal__close"
                    >

                        <CloseOutlinedIcon />

                    </IconButton>

                </div>


                {/* =================================
                    CONTENT
                ================================= */}

                <div className="delete-confirm-modal__content">

                    <h2>
                        {title}
                    </h2>


                    <p>
                        {message}
                    </p>


                    {itemName && (

                        <div className="delete-confirm-modal__item">

                            <span>
                                {itemLabel}
                            </span>

                            <strong>
                                {itemName}
                            </strong>

                        </div>

                    )}


                    <div className="delete-confirm-modal__warning">

                        <DeleteOutlineOutlinedIcon />

                        <span>
                            This action cannot be undone.
                        </span>

                    </div>

                </div>


                {/* =================================
                    FOOTER
                ================================= */}

                <div className="delete-confirm-modal__footer">

                    <button
                        type="button"
                        className="delete-confirm-modal__cancel"
                        onClick={handleClose}
                        disabled={loading}
                    >
                        {cancelText}
                    </button>


                    <button
                        type="button"
                        className="delete-confirm-modal__confirm"
                        onClick={handleConfirm}
                        disabled={loading}
                    >

                        {loading ? (

                            <span>
                                Deleting...
                            </span>

                        ) : (

                            <>
                                <DeleteOutlineOutlinedIcon />

                                <span>
                                    {confirmText}
                                </span>
                            </>

                        )}

                    </button>

                </div>

            </DialogContent>

        </Dialog>
    );
};


export default DeleteConfirmModal;