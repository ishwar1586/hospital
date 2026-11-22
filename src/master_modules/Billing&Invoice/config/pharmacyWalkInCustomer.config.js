import {
  PersonOutlineOutlined,
  PhoneOutlined,
  CalendarTodayOutlined,
  WcOutlined,
  HomeOutlined,
  ArrowBackOutlined,
  ArrowForwardOutlined,
  CloseOutlined,
  BadgeOutlined,
} from "@mui/icons-material";

const pharmacyWalkInCustomerConfig = {
  page: {
    enabled: true,

    title: "Walk-in Customer",
    subtitle:
      "Enter customer details to create a pharmacy bill",

    icons: {
      page: PersonOutlineOutlined,
      customerType: BadgeOutlined,
    },

    showCustomerType: true,
    customerTypeLabel: "Walk-in Customer",
  },

  form: {
    enabled: true,

    title: "Customer Details",
    subtitle:
      "Please enter the customer's basic information",

    fields: [
      {
        id: "customerName",
        field: "customerName",
        label: "Customer Name",
        placeholder: "Enter customer name",
        type: "text",
        required: true,
        enabled: true,
        icon: PersonOutlineOutlined,
        validation: {
          minLength: 2,
          maxLength: 100,
        },
      },

      {
        id: "mobile",
        field: "mobile",
        label: "Mobile Number",
        placeholder: "Enter mobile number",
        type: "tel",
        required: true,
        enabled: true,
        icon: PhoneOutlined,
        validation: {
          minLength: 10,
          maxLength: 10,
          pattern: "^[6-9][0-9]{9}$",
        },
      },

      {
        id: "age",
        field: "age",
        label: "Age",
        placeholder: "Enter age",
        type: "number",
        required: false,
        enabled: true,
        icon: CalendarTodayOutlined,
        validation: {
          min: 0,
          max: 120,
        },
      },

      {
        id: "gender",
        field: "gender",
        label: "Gender",
        placeholder: "Select gender",
        type: "select",
        required: false,
        enabled: true,
        icon: WcOutlined,

        options: [
          {
            id: "male",
            value: "male",
            label: "Male",
          },
          {
            id: "female",
            value: "female",
            label: "Female",
          },
          {
            id: "other",
            value: "other",
            label: "Other",
          },
        ],
      },

      {
        id: "address",
        field: "address",
        label: "Address",
        placeholder: "Enter customer address",
        type: "textarea",
        required: false,
        enabled: true,
        icon: HomeOutlined,
        validation: {
          maxLength: 250,
        },
      },
    ],
  },

  footer: {
    enabled: true,

    actions: {
      cancel: {
        enabled: true,
        label: "Cancel",
        icon: CloseOutlined,
      },

      back: {
        enabled: true,
        label: "Back",
        icon: ArrowBackOutlined,
      },

      continue: {
        enabled: true,
        label: "Continue to Medicines",
        icon: ArrowForwardOutlined,
      },
    },
  },

  customer: {
    type: "walk-in-customer",
    typeLabel: "Walk-in Customer",

    defaults: {
      customerName: "",
      mobile: "",
      age: "",
      gender: "",
      address: "",
    },
  },

  validation: {
    requiredFields: [
      "customerName",
      "mobile",
    ],

    messages: {
      customerName: "Customer name is required.",
      mobile: "Valid 10-digit mobile number is required.",
      age: "Please enter a valid age.",
      gender: "Please select a valid gender.",
      address: "Address cannot exceed the allowed length.",
    },
  },

  responsive: {
    desktop: {
      minWidth: 1200,
    },

    tablet: {
      minWidth: 768,
      maxWidth: 1199,
    },

    mobile: {
      maxWidth: 767,
    },
  },
};

export default pharmacyWalkInCustomerConfig;