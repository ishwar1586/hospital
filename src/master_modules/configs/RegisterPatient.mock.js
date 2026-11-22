
// const STORAGE_KEY = "waiting_patients";

// const getStoredPatients = () => {
//   const data = localStorage.getItem(STORAGE_KEY);
//   return data ? JSON.parse(data) : [];
// };

// const savePatients = (list) => {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
// };

// export const registerPatientMock = {
//   getWaitingList() {
//     return Promise.resolve(getStoredPatients());
//   },

//   registerPatient(data) {
//     const list = getStoredPatients();

//     const newPatient = {
//       id: Date.now(),
//       token: `A${list.length + 1}`,
//       status: "Waiting",
//       ...data,
//     };

//     list.push(newPatient);
//     savePatients(list);

//     return Promise.resolve(newPatient);
//   },
// };

const STORAGE_KEY = "waiting_patients";

const getList = () =>
  JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

const saveList = (list) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));

export const registerPatientMock = {
  getWaitingList() {
    return Promise.resolve(getList());
  },

  registerPatient(data) {
    const list = getList();
    const newPatient = {
      id: Date.now(),
      token: `A${list.length + 1}`,
      status: "Waiting",
      ...data,
    };
    list.push(newPatient);
    saveList(list);
    return Promise.resolve(newPatient);
  },

  updateStatus(id, status) {
    const list = getList().map((p) =>
      p.id === id ? { ...p, status } : p
    );
    saveList(list);
    return Promise.resolve();
  },

  removePatient(id) {
    const list = getList().filter((p) => p.id !== id);
    saveList(list);
    return Promise.resolve();
  },
};

export default registerPatientMock;