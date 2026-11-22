import { unitActions } from "./unitActions";

export const unitColumns = [
  {
    key: "unitCode",
    label: "Unit Code",
  },

  {
    key: "unitName",
    label: "Unit Name",
  },

  {
    key: "shortName",
    label: "Short Name",
  },

  {
    key: "description",
    label: "Description",
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
    actions: unitActions,
  },
];

export default unitColumns;