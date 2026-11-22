import {
    useEffect,
    useState,
} from "react";

import Dialog
    from "@mui/material/Dialog";

import DialogContent
    from "@mui/material/DialogContent";

import IconButton
    from "@mui/material/IconButton";

import CloseOutlinedIcon
    from "@mui/icons-material/CloseOutlined";

import EditOutlinedIcon
    from "@mui/icons-material/EditOutlined";

import "./EditProcessingModal.css";


const EditProcessingModal = ({
    open,
    processing,
    onClose,
    onSave,
    loading = false,
}) => {


    // =========================================
    // FORM STATE
    // =========================================

    const [
        formData,
        setFormData,
    ] = useState({

        patientName: "",

        sampleType: "Blood",

        testProfile: "",

        department: "Hematology",

        status: "Received",

        priority: "Normal",

        currentStep: "",

        tatRemaining: "",

    });


    // =========================================
    // LOAD PROCESSING DATA
    // =========================================

    useEffect(() => {

        if (!processing) {
            return;
        }


        setFormData({

            patientName:
                processing.patientName ||
                "",

            sampleType:
                processing.sampleType ||
                "Blood",

            testProfile:
                processing.testProfile ||
                "",

            department:
                processing.department ||
                "Hematology",

            status:
                processing.status ||
                "Received",

            priority:
                processing.priority ||
                "Normal",

            currentStep:
                processing.currentStep ||
                "",

            tatRemaining:
                processing.tatRemaining ||
                "",

        });

    }, [
        processing,
    ]);


    // =========================================
    // HANDLE CHANGE
    // =========================================

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


    // =========================================
    // CLOSE
    // =========================================

    const handleClose = () => {

        if (loading) {
            return;
        }


        if (onClose) {

            onClose();

        }

    };


    // =========================================
    // SAVE
    // =========================================

    const handleSubmit = (
        event
    ) => {

        event.preventDefault();


        if (loading) {
            return;
        }


        if (onSave) {

            onSave({

                ...processing,

                ...formData,

            });

        }

    };


    return (

        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
            className="edit-processing-dialog"
        >

            <DialogContent
                className="edit-processing-modal"
            >


                {/* =================================
                    HEADER
                ================================= */}

                <div className="edit-processing-modal__header">

                    <div className="edit-processing-modal__header-content">


                        <div className="edit-processing-modal__icon">

                            <EditOutlinedIcon />

                        </div>


                        <div>

                            <h2>

                                Edit Sample Processing

                            </h2>


                            <p>

                                Update sample processing information

                            </p>

                        </div>

                    </div>


                    <IconButton
                        type="button"
                        onClick={handleClose}
                        disabled={loading}
                        className="edit-processing-modal__close"
                        aria-label="Close"
                    >

                        <CloseOutlinedIcon />

                    </IconButton>

                </div>


                {/* =================================
                    FORM
                ================================= */}

                <form
                    onSubmit={handleSubmit}
                    className="edit-processing-modal__form"
                >


                    {/* =================================
                        ACCESSION NUMBER
                    ================================= */}

                    <div className="edit-processing-modal__field">

                        <label>
                            Accession No.
                        </label>


                        <input
                            type="text"
                            value={
                                processing?.accessionNo ||
                                ""
                            }
                            disabled
                        />

                    </div>


                    {/* =================================
                        PATIENT NAME
                    ================================= */}

                    <div className="edit-processing-modal__field">

                        <label htmlFor="edit-patient-name">

                            Patient Name

                            <span>
                                *
                            </span>

                        </label>


                        <input
                            id="edit-patient-name"
                            type="text"
                            name="patientName"
                            value={
                                formData.patientName
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="Enter patient name"
                            disabled={loading}
                            required
                        />

                    </div>


                    {/* =================================
                        SAMPLE TYPE
                    ================================= */}

                    <div className="edit-processing-modal__field">

                        <label htmlFor="edit-sample-type">

                            Sample Type

                            <span>
                                *
                            </span>

                        </label>


                        <select
                            id="edit-sample-type"
                            name="sampleType"
                            value={
                                formData.sampleType
                            }
                            onChange={
                                handleChange
                            }
                            disabled={loading}
                            required
                        >

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

                            <option value="Swab">
                                Swab
                            </option>

                            <option value="CSF">
                                CSF
                            </option>

                            <option value="Tissue">
                                Tissue
                            </option>

                        </select>

                    </div>


                    {/* =================================
                        TEST / PROFILE
                    ================================= */}

                    <div className="edit-processing-modal__field">

                        <label htmlFor="edit-test-profile">

                            Test / Profile

                            <span>
                                *
                            </span>

                        </label>


                        <input
                            id="edit-test-profile"
                            type="text"
                            name="testProfile"
                            value={
                                formData.testProfile
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="Enter test or profile"
                            disabled={loading}
                            required
                        />

                    </div>


                    {/* =================================
                        DEPARTMENT
                    ================================= */}

                    <div className="edit-processing-modal__field">

                        <label htmlFor="edit-department">

                            Department

                            <span>
                                *
                            </span>

                        </label>


                        <select
                            id="edit-department"
                            name="department"
                            value={
                                formData.department
                            }
                            onChange={
                                handleChange
                            }
                            disabled={loading}
                            required
                        >

                            <option value="Hematology">
                                Hematology
                            </option>

                            <option value="Biochemistry">
                                Biochemistry
                            </option>

                            <option value="Microbiology">
                                Microbiology
                            </option>

                            <option value="Clinical Pathology">
                                Clinical Pathology
                            </option>

                            <option value="Pathology">
                                Pathology
                            </option>

                        </select>

                    </div>


                    {/* =================================
                        STATUS
                    ================================= */}

                    <div className="edit-processing-modal__field">

                        <label htmlFor="edit-status">

                            Processing Status

                            <span>
                                *
                            </span>

                        </label>


                        <select
                            id="edit-status"
                            name="status"
                            value={
                                formData.status
                            }
                            onChange={
                                handleChange
                            }
                            disabled={loading}
                            required
                        >

                            <option value="Received">
                                Received
                            </option>

                            <option value="In Processing">
                                In Processing
                            </option>

                            <option value="Processed">
                                Processed
                            </option>

                            <option value="On Hold">
                                On Hold
                            </option>

                            <option value="Rejected">
                                Rejected
                            </option>

                        </select>

                    </div>


                    {/* =================================
                        PRIORITY
                    ================================= */}

                    <div className="edit-processing-modal__field">

                        <label htmlFor="edit-priority">

                            Priority

                            <span>
                                *
                            </span>

                        </label>


                        <select
                            id="edit-priority"
                            name="priority"
                            value={
                                formData.priority
                            }
                            onChange={
                                handleChange
                            }
                            disabled={loading}
                            required
                        >

                            <option value="Low">
                                Low
                            </option>

                            <option value="Normal">
                                Normal
                            </option>

                            <option value="Medium">
                                Medium
                            </option>

                            <option value="High">
                                High
                            </option>

                            <option value="Urgent">
                                Urgent
                            </option>

                        </select>

                    </div>


                    {/* =================================
                        CURRENT STEP
                    ================================= */}

                    <div className="edit-processing-modal__field">

                        <label htmlFor="edit-current-step">

                            Current Step

                        </label>


                        <input
                            id="edit-current-step"
                            type="text"
                            name="currentStep"
                            value={
                                formData.currentStep
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="Enter current processing step"
                            disabled={loading}
                        />

                    </div>


                    {/* =================================
                        TAT
                    ================================= */}

                    <div className="edit-processing-modal__field">

                        <label htmlFor="edit-tat">

                            TAT Remaining

                        </label>


                        <input
                            id="edit-tat"
                            type="text"
                            name="tatRemaining"
                            value={
                                formData.tatRemaining
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="Example: 2h 30m"
                            disabled={loading}
                        />

                    </div>


                    {/* =================================
                        FOOTER
                    ================================= */}

                    <div className="edit-processing-modal__footer">

                        <button
                            type="button"
                            className="edit-processing-modal__cancel"
                            onClick={handleClose}
                            disabled={loading}
                        >

                            Cancel

                        </button>


                        <button
                            type="submit"
                            className="edit-processing-modal__save"
                            disabled={loading}
                        >

                            {loading
                                ? "Saving..."
                                : "Save Changes"
                            }

                        </button>

                    </div>

                </form>

            </DialogContent>

        </Dialog>

    );

};


export default EditProcessingModal;