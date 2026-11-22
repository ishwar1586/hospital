export const roleTableConfig = [
  {
    key: "name",
    label: "Name",
  },

  {
    key: "email",
    label: "Email",
    type: "email",
  },

  {
    key: "role",
    label: "Role",
  },

  {
    key: "status",
    label: "Status",
    type: "status",
  },

 {
      key: "actions",
      label: "Actions",
      type: "actions",

      actions: [
        "view",
        "edit",
        "delete",
        // "checkin",
      ],
    },
];

export default roleTableConfig;