import { categoryActions } from "./categoryActions";

export const categoryColumns = [
  {
    key: "categoryCode",
    label: "Category Code",
  },

  {
    key: "categoryName",
    label: "Category Name",
  },

  {
    key: "description",
    label: "Description",
  },

  {
    key: "createdDate",
    label: "Created Date",
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
    actions: categoryActions,
  },
];

export default categoryColumns;