const filterPatients = (patients = [], filters = {}, activeTab = "all") => {
  const {
    search = "",
    department = "all",
    patientType = "all",
    gender = "all",
    ageGroup = "all",
    status = "all",
    date = "",
  } = filters;


  return patients.filter((patient) => {

    /* =========================================
       Active Tab Filter
    ========================================= */

    if (
      activeTab !== "all" &&
      patient.patientType?.toLowerCase() !== activeTab.toLowerCase()
    ) {
      return false;
    }


    /* =========================================
       Search Filter
    ========================================= */

    if (search.trim()) {
      const searchValue = search.toLowerCase().trim();

      const searchableFields = [
        patient.name,
        patient.id,
        patient.uhid,
        patient.mobile,
        patient.department,
      ];

      const matchesSearch = searchableFields.some((field) =>
        String(field || "")
          .toLowerCase()
          .includes(searchValue)
      );

      if (!matchesSearch) {
        return false;
      }
    }


    /* =========================================
       Department Filter
    ========================================= */

    if (
      department !== "all" &&
      patient.department?.toLowerCase() !== department.toLowerCase()
    ) {
      return false;
    }


    /* =========================================
       Patient Type Filter
    ========================================= */

    if (
      patientType !== "all" &&
      patient.patientType?.toLowerCase() !== patientType.toLowerCase()
    ) {
      return false;
    }


    /* =========================================
       Gender Filter
    ========================================= */

    if (
      gender !== "all" &&
      patient.gender?.toLowerCase() !== gender.toLowerCase()
    ) {
      return false;
    }


    /* =========================================
       Age Group Filter
    ========================================= */

    if (ageGroup !== "all") {
      const age = Number(patient.age);

      if (ageGroup === "child" && age > 17) {
        return false;
      }

      if (ageGroup === "adult" && (age < 18 || age > 59)) {
        return false;
      }

      if (ageGroup === "senior" && age < 60) {
        return false;
      }
    }


    /* =========================================
       Status Filter
    ========================================= */

    if (
      status !== "all" &&
      patient.status?.toLowerCase() !== status.toLowerCase()
    ) {
      return false;
    }


    /* =========================================
       Date Filter
    ========================================= */

    if (date) {
      /*
        Date filtering ko intentionally flexible
        rakha gaya hai because mock/API mein
        date format different ho sakta hai.
      */

      const patientDate =
        patient.lastVisit ||
        patient.registrationDate ||
        patient.createdAt ||
        "";

      if (!String(patientDate).includes(date)) {
        return false;
      }
    }


    return true;
  });
};

export default filterPatients;