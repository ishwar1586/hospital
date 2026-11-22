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

import AddOutlinedIcon
    from "@mui/icons-material/AddOutlined";

import "./AddProcessingModal.css";


const INITIAL_FORM_DATA = {

    patientName: "",

    sampleType: "Blood",

    testProfile: "",

    department: "Hematology",

    status: "Received",

    priority: "Normal",

    currentStep: "Sample Verification",

    tatRemaining: "",

};


const AddProcessingModal = ({
    open,
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
    ] = useState(
        INITIAL_FORM_DATA
    );


    // =========================================
    // RESET FORM
    // =========================================

    useEffect(() => {

        if (open) {

            setFormData(
                INITIAL_FORM_DATA
            );

        }

    }, [
        open,
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
    // SUBMIT
    // =========================================

    const handleSubmit = (
        event
    ) => {

        event.preventDefault();


        if (loading) {
            return;
        }


        if (!formData.patientName.trim()) {
            return;
        }


        if (!formData.testProfile.trim()) {
            return;
        }


        const newProcessing = {

            id:
                `SP-${Date.now()}`,

            accessionNo:
                `ACC-${Date.now()}`,

            patientName:
                formData.patientName.trim(),

            sampleType:
                formData.sampleType,

            testProfile:
                formData.testProfile.trim(),

            department:
                formData.department,

            receivedOn:
                new Date().toLocaleString(
                    "en-IN",
                    {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                    }
                ),

            status:
                formData.status,

            priority:
                formData.priority,

            currentStep:
                formData.currentStep.trim(),

            tatRemaining:
                formData.tatRemaining.trim() ||
                "-",

            tatStatus:
                "normal",

        };


        if (onSave) {

            onSave(
                newProcessing
            );

        }

    };


    return (

        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
            className="add-processing-dialog"
        >

            <DialogContent
                className="add-processing-modal"
            >


                {/* =================================
                    HEADER
                ================================= */}

                <div className="add-processing-modal__header">

                    <div className="add-processing-modal__header-content">


                        <div className="add-processing-modal__icon">

                            <AddOutlinedIcon />

                        </div>


                        <div>

                            <h2>

                                New Sample Processing

                            </h2>


                            <p>

                                Add a new sample for processing

                            </p>

                        </div>

                    </div>


                    <IconButton
                        type="button"
                        onClick={handleClose}
                        disabled={loading}
                        className="add-processing-modal__close"
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
                    className="add-processing-modal__form"
                >


                    {/* =================================
                        PATIENT NAME
                    ================================= */}

                    <div className="add-processing-modal__field">

                        <label htmlFor="add-processing-patient-name">

                            Patient Name

                            <span>
                                *
                            </span>

                        </label>


                        <input
                            id="add-processing-patient-name"
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
                            autoComplete="off"
                            required
                        />

                    </div>


                    {/* =================================
                        SAMPLE TYPE
                    ================================= */}

                    <div className="add-processing-modal__field">

                        <label htmlFor="add-processing-sample-type">

                            Sample Type

                            <span>
                                *
                            </span>

                        </label>


                        <select
                            id="add-processing-sample-type"
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

                    <div className="add-processing-modal__field">

                        <label htmlFor="add-processing-test-profile">

                            Test / Profile

                            <span>
                                *
                            </span>

                        </label>


                        <input
                            id="add-processing-test-profile"
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
                            autoComplete="off"
                            required
                        />

                    </div>


                    {/* =================================
                        DEPARTMENT
                    ================================= */}

                    <div className="add-processing-modal__field">

                        <label htmlFor="add-processing-department">

                            Department

                            <span>
                                *
                            </span>

                        </label>


                        <select
                            id="add-processing-department"
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

                    <div className="add-processing-modal__field">

                        <label htmlFor="add-processing-status">

                            Processing Status

                            <span>
                                *
                            </span>

                        </label>


                        <select
                            id="add-processing-status"
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

                        </select>

                    </div>


                    {/* =================================
                        PRIORITY
                    ================================= */}

                    <div className="add-processing-modal__field">

                        <label htmlFor="add-processing-priority">

                            Priority

                            <span>
                                *
                            </span>

                        </label>


                        <select
                            id="add-processing-priority"
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

                    <div className="add-processing-modal__field">

                        <label htmlFor="add-processing-current-step">

                            Current Step

                        </label>


                        <input
                            id="add-processing-current-step"
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
                            autoComplete="off"
                        />

                    </div>


                    {/* =================================
                        TAT
                    ================================= */}

                    <div className="add-processing-modal__field">

                        <label htmlFor="add-processing-tat">

                            TAT Remaining

                        </label>


                        <input
                            id="add-processing-tat"
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
                            autoComplete="off"
                        />

                    </div>


                    {/* =================================
                        FOOTER
                    ================================= */}

                    <div className="add-processing-modal__footer">

                        <button
                            type="button"
                            className="add-processing-modal__cancel"
                            onClick={handleClose}
                            disabled={loading}
                        >

                            Cancel

                        </button>


                        <button
                            type="submit"
                            className="add-processing-modal__save"
                            disabled={loading}
                        >

                            <AddOutlinedIcon />

                            <span>

                                {loading
                                    ? "Adding..."
                                    : "Add Processing"
                                }

                            </span>

                        </button>

                    </div>

                </form>

            </DialogContent>

        </Dialog>

    );

};


export default AddProcessingModal;