import { useEffect, useState } from "react";

import CloseOutlinedIcon
    from "@mui/icons-material/CloseOutlined";

import SaveOutlinedIcon
    from "@mui/icons-material/SaveOutlined";

import "./EditCollectionModal.css";


const EditCollectionModal = ({
    open,
    collection,
    onClose,
    onSave,
}) => {

    const [formData, setFormData] = useState({

        sampleType: "",

        collectionCenter: "",

        collectedBy: "",

        collectionDate: "",

        collectionTime: "",

        status: "",

    });


    const [isSaving, setIsSaving] =
        useState(false);


    /* =========================================
       LOAD SELECTED COLLECTION
    ========================================= */

    useEffect(() => {

        if (!collection) {
            return;
        }


        setFormData({

            sampleType:
                collection.sampleType || "",

            collectionCenter:
                collection.collectionCenter || "",

            collectedBy:
                collection.collectedBy || "",

            collectionDate:
                collection.collectionDate || "",

            collectionTime:
                collection.collectionTime || "",

            status:
                collection.status || "",

        });

    }, [collection]);


    /* =========================================
       DON'T RENDER
    ========================================= */

    if (!open || !collection) {
        return null;
    }


    /* =========================================
       HANDLE CHANGE
    ========================================= */

    const handleChange = (
        event
    ) => {

        const {
            name,
            value,
        } = event.target;


        setFormData(
            (previous) => ({

                ...previous,

                [name]: value,

            })
        );

    };


    /* =========================================
       HANDLE SUBMIT
    ========================================= */

    const handleSubmit = async (
        event
    ) => {

        event.preventDefault();


        if (isSaving) {
            return;
        }


        setIsSaving(true);


        try {

            const updatedCollection = {

                ...collection,

                ...formData,

            };


            if (onSave) {

                await onSave(
                    updatedCollection
                );

            }

        } finally {

            setIsSaving(false);

        }

    };


    /* =========================================
       BACKDROP
    ========================================= */

    const handleBackdropClick = (
        event
    ) => {

        if (
            event.target ===
            event.currentTarget
        ) {

            onClose();

        }

    };


    return (

        <div
            className="edit-collection-modal__backdrop"
            onMouseDown={
                handleBackdropClick
            }
        >

            <div
                className="edit-collection-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="edit-collection-title"
            >

                {/* =================================
                    HEADER
                ================================= */}

                <div className="edit-collection-modal__header">

                    <div>

                        <h2
                            id="edit-collection-title"
                        >
                            Edit Sample Collection
                        </h2>

                        <p>
                            {collection.accessionNo}
                        </p>

                    </div>


                    <button
                        type="button"
                        className="edit-collection-modal__close"
                        onClick={onClose}
                        disabled={isSaving}
                    >

                        <CloseOutlinedIcon />

                    </button>

                </div>


                {/* =================================
                    FORM
                ================================= */}

                <form
                    className="edit-collection-modal__form"
                    onSubmit={handleSubmit}
                >

                    {/* =============================
                        READ ONLY PATIENT DETAILS
                    ============================== */}

                    <div className="edit-collection-modal__section">

                        <h3>
                            Patient Information
                        </h3>


                        <div className="edit-collection-modal__grid">

                            <div className="edit-collection-field">

                                <label>
                                    Patient Name
                                </label>

                                <input
                                    type="text"
                                    value={
                                        collection.patient?.name ||
                                        ""
                                    }
                                    disabled
                                />

                            </div>


                            <div className="edit-collection-field">

                                <label>
                                    UHID
                                </label>

                                <input
                                    type="text"
                                    value={
                                        collection.patient?.uhid ||
                                        ""
                                    }
                                    disabled
                                />

                            </div>


                            <div className="edit-collection-field">

                                <label>
                                    Age / Gender
                                </label>

                                <input
                                    type="text"
                                    value={
                                        collection.patient
                                            ? `${collection.patient.age} Years / ${collection.patient.gender}`
                                            : ""
                                    }
                                    disabled
                                />

                            </div>


                            <div className="edit-collection-field">

                                <label>
                                    Accession No.
                                </label>

                                <input
                                    type="text"
                                    value={
                                        collection.accessionNo ||
                                        ""
                                    }
                                    disabled
                                />

                            </div>

                        </div>

                    </div>


                    {/* =============================
                        COLLECTION DETAILS
                    ============================== */}

                    <div className="edit-collection-modal__section">

                        <h3>
                            Collection Details
                        </h3>


                        <div className="edit-collection-modal__grid">


                            {/* SAMPLE TYPE */}

                            <div className="edit-collection-field">

                                <label>
                                    Sample Type
                                </label>

                                <select
                                    name="sampleType"
                                    value={
                                        formData.sampleType
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    required
                                >

                                    <option value="">
                                        Select Sample Type
                                    </option>

                                    <option value="Blood">
                                        Blood
                                    </option>

                                    <option value="Serum">
                                        Serum
                                    </option>

                                    <option value="Plasma">
                                        Plasma
                                    </option>

                                    <option value="Urine">
                                        Urine
                                    </option>

                                    <option value="Stool">
                                        Stool
                                    </option>

                                    <option value="Swab">
                                        Swab
                                    </option>

                                </select>

                            </div>


                            {/* COLLECTION CENTER */}

                            <div className="edit-collection-field">

                                <label>
                                    Collection Center
                                </label>

                                <select
                                    name="collectionCenter"
                                    value={
                                        formData.collectionCenter
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    required
                                >

                                    <option value="">
                                        Select Collection Center
                                    </option>

                                    <option value="Main Laboratory">
                                        Main Laboratory
                                    </option>

                                    <option value="OPD Collection Center">
                                        OPD Collection Center
                                    </option>

                                    <option value="IPD Collection Center">
                                        IPD Collection Center
                                    </option>

                                    <option value="Emergency">
                                        Emergency
                                    </option>

                                </select>

                            </div>


                            {/* COLLECTED BY */}

                            <div className="edit-collection-field">

                                <label>
                                    Collected By
                                </label>

                                <input
                                    type="text"
                                    name="collectedBy"
                                    value={
                                        formData.collectedBy
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    placeholder="Enter collector name"
                                    required
                                />

                            </div>


                            {/* DATE */}

                            <div className="edit-collection-field">

                                <label>
                                    Collection Date
                                </label>

                                <input
                                    type="date"
                                    name="collectionDate"
                                    value={
                                        formData.collectionDate
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    required
                                />

                            </div>


                            {/* TIME */}

                            <div className="edit-collection-field">

                                <label>
                                    Collection Time
                                </label>

                                <input
                                    type="time"
                                    name="collectionTime"
                                    value={
                                        formData.collectionTime
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    required
                                />

                            </div>


                            {/* STATUS */}

                            <div className="edit-collection-field">

                                <label>
                                    Status
                                </label>

                                <select
                                    name="status"
                                    value={
                                        formData.status
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    required
                                >

                                    <option value="">
                                        Select Status
                                    </option>

                                    <option value="Completed">
                                        Completed
                                    </option>

                                    <option value="Pending">
                                        Pending
                                    </option>

                                    <option value="Rejected">
                                        Rejected
                                    </option>

                                    <option value="On Hold">
                                        On Hold
                                    </option>

                                </select>

                            </div>

                        </div>

                    </div>


                    {/* =================================
                        FOOTER
                    ================================= */}

                    <div className="edit-collection-modal__footer">

                        <button
                            type="button"
                            className="edit-collection-modal__cancel"
                            onClick={onClose}
                            disabled={isSaving}
                        >
                            Cancel
                        </button>


                        <button
                            type="submit"
                            className="edit-collection-modal__save"
                            disabled={isSaving}
                        >

                            <SaveOutlinedIcon />

                            <span>
                                {isSaving
                                    ? "Saving..."
                                    : "Save Changes"
                                }
                            </span>

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

};


export default EditCollectionModal;