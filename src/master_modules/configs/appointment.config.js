export const AppointmentTableConfig = {
  
  title: "Appointments", 


   columns: [
    {key: "id", label: "ID" },
    { key: "patientname", label: "Patients Name", type: "user" },
    { key: "assigneddoctor", label: "Assigned Doctor", type: "assigneddoctor" },
    { key: "date", label: "Date" },
    { key: "disease", label: "Disease", type: "disease" },
    // { key: "actions", label: "Actions", type: "actions" },

    {
      key: "actions",
      label: "Actions",
      type: "actions",
      actions: [
        {
          key: "view",
          label: "View",
          onClick: (row) => {
            console.log("View clicked for", row);
          },
        },
        // { key: "edit", label: "Edit" },
        // { key: "delete", label: "Delete" },
      ],
    },
  ],

  searchKeys: [ "id", "patientname", "assigneddoctor", "disease"],

  showPagination: true,
  pageSize: 5,
};

export default AppointmentTableConfig;

