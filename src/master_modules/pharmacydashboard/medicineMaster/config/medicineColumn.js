import { medicineActions } from "./medicineActions";

export const medicineColumns = [
    {
        key: "medicineCode",
        label: "Medicine Code",
    },
    {
        key: "medicineName",
        label: "Medicine Name",
    },
    {
        key: "saltComposition",
        label: "Salt Composition",
    },
    {
        key: "category",
        label: "Category",
    },
    {
        key: "company",
        label: "Company",
    },
    {
        key: "unit",
        label: "Unit",
    },
    //   {
    //     key: "mrp",
    //     label: "MRP",
    //   },
    //   {
    //     key: "salePrice",
    //     label: "Sale Price",
    //   },
    //   {
    //     key: "stock",
    //     label: "Stock",
    //   },
    //   {
    //     key: "status",
    //     label: "Status",
    //   },

    {
        key: "mrp",
        label: "MRP",
        type: "currency",
    },
    {
        key: "salePrice",
        label: "Sale Price",
    },
    {
        key: "stock",
        label: "Stock",
        type: "badge",
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
    actions: medicineActions,
  },
];

export default medicineColumns;