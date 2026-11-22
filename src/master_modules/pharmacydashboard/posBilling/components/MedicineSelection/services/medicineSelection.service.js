import medicineSelectionMock from "../mock/medicineSelection.mock";

export const loadPatientPrescription = (patient) => {

    return {

        patient,

        prescription:

            medicineSelectionMock.prescription,

        medicines:

            medicineSelectionMock.medicines,

        addedCount:0,

    };

};


export default loadPatientPrescription;