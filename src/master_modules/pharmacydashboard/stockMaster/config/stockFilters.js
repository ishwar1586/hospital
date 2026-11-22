export const stockFilters = [

    {
        id: "search",
        name: "search",
        type: "search",
        placeholder: "Search by medicine name, batch, HSN...",
        width: "300px",
    },

    {
        id: "category",
        name: "category",
        type: "select",
        label: "Category",
        options: [
            "All Categories",
            "Analgesic",
            "Antibiotic",
            "Antihistamine",
            "Gastric",
            "Vitamin",
        ],
        width: "170px",
    },

    {
        id: "supplier",
        name: "supplier",
        type: "select",
        label: "Supplier",
        options: [
            "All Suppliers",
            "Medicare Distributors",
            "LifeLine Enterprises",
            "Global Healthcare",
        ],
        width: "170px",
    },

    {
        id: "status",
        name: "status",
        type: "select",
        label: "Status",
        options: [
            "All Status",
            "Active",
            "Inactive",
        ],
        width: "150px",
    },

    {
        id: "stockStatus",
        name: "stockStatus",
        type: "select",
        label: "Stock Status",
        options: [
            "All Stock",
            "In Stock",
            "Low Stock",
            "Out Of Stock",
            "Near Expiry",
        ],
        width: "170px",
    },

    {
        id: "expiryDate",
        name: "expiryDate",
        type: "date",
        label: "Expiry Date",
        width: "180px",
    },

];


export default stockFilters;