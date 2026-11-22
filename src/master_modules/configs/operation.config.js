
export const operationTableConfig = {

 title: "Operation List", 

  columns: [
    {key: "id",label:"ID",type:"text"},
    {key: "Name", label: "Generic Name"},
    { key: "category", label: "Category" },
    {key: "Weight", label: "Weight"},
    { key: "price", label: "Price", type: "currency" },
    { key: "stock", label: "Stock" },
    { key: "status", label: "Status", type: "status" },
    { key: "actions", label: "Actions", type: "actions" },
  ],

  searchKeys: ["name", "category"],

};


export default operationTableConfig;