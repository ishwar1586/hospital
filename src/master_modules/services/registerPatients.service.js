import { registerPatientMock } from "@/master_modules/configs/RegisterPatient.mock";

// const registerPatientsService = {
//   getWaitingList() {
//     return registerPatientMock.getWaitingList();
//   },

//   registerPatient(data) {
//     return registerPatientMock.registerPatient(data);
//   },
// };

const registerPatientService = {
  getWaitingList() {
    return registerPatientMock.getWaitingList();
  },

  registerPatient(data) {
    return registerPatientMock.registerPatient(data);
  },

  updateStatus(id, status) {
    return registerPatientMock.updateStatus(id, status);
  },

  removePatient(id) {
    return registerPatientMock.removePatient(id);
  },
};

export default registerPatientService;

// export default registerPatientsService;
