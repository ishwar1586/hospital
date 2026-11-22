export const addRoleFormConfig = {

  title: "Add Role",

  rows: [

    [
      "name",
      "email",
    ],

    [
      "role",
      "status",
    ],
  ],

  fields: [

    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },

    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
    },

    {
      name: "role",
      label: "Role",
      type: "select",

      options: [
        {
          label: "Admin",
          value: "Admin",
        },

        {
          label: "Doctor",
          value: "Doctor",
        },

        {
          label: "Nurse",
          value: "Nurse",
        },

        {
          label: "Receptionist",
          value: "Receptionist",
        },

        {
          label: "Accountant",
          value: "Accountant",
        },
      ],
    },

    {
      name: "status",
      label: "Status",
      type: "select",

      options: [
        {
          label: "Active",
          value: "Active",
        },

        {
          label: "Inactive",
          value: "Inactive",
        },
      ],
    },
  ],

  buttons: [
    {
      label: "Add Role",

      type: "submit",

      className: "submit-btn",
    },

    {
      label: "Cancel",

      type: "button",

      className: "cancel-btn",
    },
  ],
};


export default addRoleFormConfig;