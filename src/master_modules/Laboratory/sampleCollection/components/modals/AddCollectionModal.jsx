import { useState } from "react";

import CloseOutlinedIcon
    from "@mui/icons-material/CloseOutlined";

import AddOutlinedIcon
    from "@mui/icons-material/AddOutlined";

import PersonOutlineOutlinedIcon
    from "@mui/icons-material/PersonOutlineOutlined";

import ScienceOutlinedIcon
    from "@mui/icons-material/ScienceOutlined";

import "./AddCollectionModal.css";


const initialFormData = {
    accessionNo: "",
    patientUHID: "",
    patientName: "",
    patientAge: "",
    patientGender: "",
    sampleType: "",
    collectionCenter: "",
    collectedBy: "",
    collectionDate: "",
    collectionTime: "",
    status: "Pending",
};


const AddCollectionModal = ({
    open,
    onClose,
    onSave,
}) => {

    const [formData, setFormData] =
        useState(initialFormData);


    const [isSaving, setIsSaving] =
        useState(false);


    /* =========================================
       DON'T RENDER
    ========================================= */

    if (!open) {
        return null;
    }


    /* =========================================
       HANDLE INPUT CHANGE
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
       RESET FORM
    ========================================= */

    const resetForm = () => {

        setFormData(
            initialFormData
        );

    };


    /* =========================================
       CLOSE MODAL
    ========================================= */

    const handleClose = () => {

        if (isSaving) {
            return;
        }


        resetForm();

        onClose();

    };


    /* =========================================
       SUBMIT
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

            const newCollection = {

                id:
                    `SC-${Date.now()}`,

                accessionNo:
                    formData.accessionNo,

                patient: {

                    uhid:
                        formData.patientUHID,

                    name:
                        formData.patientName,

                    age:
                        Number(
                            formData.patientAge
                        ),

                    gender:
                        formData.patientGender,

                },

                sampleType:
                    formData.sampleType,

                collectionCenter:
                    formData.collectionCenter,

                collectedBy:
                    formData.collectedBy,

                collectionDate:
                    formData.collectionDate,

                collectionTime:
                    formData.collectionTime,

                status:
                    formData.status,

            };


            if (onSave) {

                await onSave(
                    newCollection
                );

            }


            resetForm();

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

            handleClose();

        }

    };


    return (

        <div
            className="add-collection-modal__backdrop"
            onMouseDown={
                handleBackdropClick
            }
        >

            <div
                className="add-collection-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="add-collection-title"
            >


                {/* =================================
                    HEADER
                ================================= */}

                <div className="add-collection-modal__header">

                    <div className="add-collection-modal__title-wrapper">

                        <div className="add-collection-modal__title-icon">

                            <ScienceOutlinedIcon />

                        </div>


                        <div>

                            <h2
                                id="add-collection-title"
                            >
                                New Sample Collection
                            </h2>

                            <p>
                                Register a new patient sample
                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        className="add-collection-modal__close"
                        onClick={handleClose}
                        disabled={isSaving}
                    >

                        <CloseOutlinedIcon />

                    </button>

                </div>


                {/* =================================
                    FORM
                ================================= */}

                <form
                    className="add-collection-modal__form"
                    onSubmit={handleSubmit}
                >

                    {/* =================================
                        PATIENT INFORMATION
                    ================================= */}

                    <section className="add-collection-modal__section">

                        <div className="add-collection-modal__section-title">

                            <PersonOutlineOutlinedIcon />

                            <span>
                                Patient Information
                            </span>

                        </div>


                        <div className="add-collection-modal__grid">


                            {/* UHID */}

                            <div className="add-collection-field">

                                <label htmlFor="patientUHID">
                                    Patient UHID
                                </label>

                                <input
                                    id="patientUHID"
                                    name="patientUHID"
                                    type="text"
                                    value={
                                        formData.patientUHID
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    placeholder="Enter UHID"
                                    required
                                />

                            </div>


                            {/* PATIENT NAME */}

                            <div className="add-collection-field">

                                <label htmlFor="patientName">
                                    Patient Name
                                </label>

                                <input
                                    id="patientName"
                                    name="patientName"
                                    type="text"
                                    value={
                                        formData.patientName
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    placeholder="Enter patient name"
                                    required
                                />

                            </div>


                            {/* AGE */}

                            <div className="add-collection-field">

                                <label htmlFor="patientAge">
                                    Age
                                </label>

                                <input
                                    id="patientAge"
                                    name="patientAge"
                                    type="number"
                                    min="0"
                                    max="150"
                                    value={
                                        formData.patientAge
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    placeholder="Enter age"
                                    required
                                />

                            </div>


                            {/* GENDER */}

                            <div className="add-collection-field">

                                <label htmlFor="patientGender">
                                    Gender
                                </label>

                                <select
                                    id="patientGender"
                                    name="patientGender"
                                    value={
                                        formData.patientGender
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    required
                                >

                                    <option value="">
                                        Select Gender
                                    </option>

                                    <option value="Male">
                                        Male
                                    </option>

                                    <option value="Female">
                                        Female
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>

                                </select>

                            </div>

                        </div>

                    </section>


                    {/* =================================
                        SAMPLE INFORMATION
                    ================================= */}

                    <section className="add-collection-modal__section">

                        <div className="add-collection-modal__section-title">

                            <ScienceOutlinedIcon />

                            <span>
                                Sample Information
                            </span>

                        </div>


                        <div className="add-collection-modal__grid">


                            {/* ACCESSION NUMBER */}

                            <div className="add-collection-field">

                                <label htmlFor="accessionNo">
                                    Accession No.
                                </label>

                                <input
                                    id="accessionNo"
                                    name="accessionNo"
                                    type="text"
                                    value={
                                        formData.accessionNo
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    placeholder="Enter accession number"
                                    required
                                />

                            </div>


                            {/* SAMPLE TYPE */}

                            <div className="add-collection-field">

                                <label htmlFor="sampleType">
                                    Sample Type
                                </label>

                                <select
                                    id="sampleType"
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

                            <div className="add-collection-field">

                                <label htmlFor="collectionCenter">
                                    Collection Center
                                </label>

                                <select
                                    id="collectionCenter"
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

                            <div className="add-collection-field">

                                <label htmlFor="collectedBy">
                                    Collected By
                                </label>

                                <input
                                    id="collectedBy"
                                    name="collectedBy"
                                    type="text"
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

                            <div className="add-collection-field">

                                <label htmlFor="collectionDate">
                                    Collection Date
                                </label>

                                <input
                                    id="collectionDate"
                                    name="collectionDate"
                                    type="date"
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

                            <div className="add-collection-field">

                                <label htmlFor="collectionTime">
                                    Collection Time
                                </label>

                                <input
                                    id="collectionTime"
                                    name="collectionTime"
                                    type="time"
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

                            <div className="add-collection-field">

                                <label htmlFor="status">
                                    Status
                                </label>

                                <select
                                    id="status"
                                    name="status"
                                    value={
                                        formData.status
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    required
                                >

                                    <option value="Pending">
                                        Pending
                                    </option>

                                    <option value="Completed">
                                        Completed
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

                    </section>


                    {/* =================================
                        FOOTER
                    ================================= */}

                    <div className="add-collection-modal__footer">

                        <button
                            type="button"
                            className="add-collection-modal__cancel"
                            onClick={handleClose}
                            disabled={isSaving}
                        >
                            Cancel
                        </button>


                        <button
                            type="submit"
                            className="add-collection-modal__save"
                            disabled={isSaving}
                        >

                            <AddOutlinedIcon />

                            <span>

                                {isSaving
                                    ? "Saving..."
                                    : "Add Collection"
                                }

                            </span>

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );
};


export default AddCollectionModal;