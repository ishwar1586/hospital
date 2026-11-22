const adminConfig = {
  key: "admin",
  title: "Admin",
  api: {
    list: "/admin",
    create: "/admin",
    update: "/admin/:id",
    delete: "/admin/:id",
  },
  table: {
    columns: [],
  },
  form: {
    fields: [],
  },
};

export default adminConfig;
