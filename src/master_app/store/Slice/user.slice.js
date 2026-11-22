import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  sidebarOpen: true,
  modalOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showLoader(state) {
      state.loading = true;
    },
    hideLoader(state) {
      state.loading = false;
    },
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    openModal(state) {
      state.modalOpen = true;
    },
    closeModal(state) {
      state.modalOpen = false;
    },
  },
});

export const {
  showLoader,
  hideLoader,
  toggleSidebar,
  openModal,
  closeModal,
} = uiSlice.actions;

// 🔴 SABSE IMPORTANT LINE
export default uiSlice.reducer;
