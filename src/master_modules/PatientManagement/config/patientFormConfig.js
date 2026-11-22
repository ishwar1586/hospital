// patientFormConfig.js

export const patientBasicInformationFields = [
    {
        name: "title",
        label: "Title",
        type: "select",
        defaultValue: "Mr.",
        options: [
            { value: "Mr.", label: "Mr." },
            { value: "Mrs.", label: "Mrs." },
            { value: "Ms.", label: "Ms." },
            { value: "Dr.", label: "Dr." },
        ],
    },

    {
        name: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "Enter first name",
        required: true,
    },

    {
        name: "middleName",
        label: "Middle Name",
        type: "text",
        placeholder: "Enter middle name",
        required: false,
    },

    {
        name: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Enter last name",
        required: true,
    },

    {
        name: "dateOfBirth",
        label: "Date of Birth",
        type: "date",
        required: true,
    },

    {
        name: "age",
        label: "Age",
        type: "number",
        placeholder: "Age",
        suffix: "Yrs",
        required: false,
    },

    {
        name: "gender",
        label: "Gender",
        type: "select",
        placeholder: "Select Gender",
        required: true,
        options: [
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "Other", label: "Other" },
        ],
    },

    {
        name: "bloodGroup",
        label: "Blood Group",
        type: "select",
        placeholder: "Select",
        required: false,
        options: [
            { value: "A+", label: "A+" },
            { value: "A-", label: "A-" },
            { value: "B+", label: "B+" },
            { value: "B-", label: "B-" },
            { value: "AB+", label: "AB+" },
            { value: "AB-", label: "AB-" },
            { value: "O+", label: "O+" },
            { value: "O-", label: "O-" },
        ],
    },

    {
        name: "maritalStatus",
        label: "Marital Status",
        type: "select",
        placeholder: "Select",
        required: false,
        options: [
            { value: "Single", label: "Single" },
            { value: "Married", label: "Married" },
            { value: "Divorced", label: "Divorced" },
            { value: "Widowed", label: "Widowed" },
        ],
    },
];



export const patientContactInformationFields = [
    {
        name: "mobileNo",
        label: "Mobile Number",
        type: "tel",
        placeholder: "Enter mobile number",
        required: true,
    },

    {
        name: "alternateMobileNo",
        label: "Alternate Mobile",
        type: "tel",
        placeholder: "Enter alternate mobile",
        required: false,
    },

    {
        name: "emailId",
        label: "Email ID",
        type: "email",
        placeholder: "Enter email address",
        required: false,
    },

    {
        name: "landlineNo",
        label: "Landline Number",
        type: "tel",
        placeholder: "Enter landline number",
        required: false,
    },

    {
        name: "whatsappNo",
        label: "WhatsApp Number",
        type: "tel",
        placeholder: "Enter WhatsApp number",
        required: false,
    },
];



export const patientAddressInformationFields = [
    {
        name: "addressLine1",
        label: "Address Line 1",
        type: "text",
        placeholder: "Enter address",
        required: true,
    },

    {
        name: "addressLine2",
        label: "Address Line 2",
        type: "text",
        placeholder: "Enter address",
        required: false,
    },

    {
        name: "landmark",
        label: "Landmark",
        type: "text",
        placeholder: "Enter landmark",
        required: false,
    },

    {
        name: "country",
        label: "Country",
        type: "select",
        required: true,
        options: [
            {
                value: "India",
                label: "India",
            },
            {
                value: "Other",
                label: "Other",
            },
        ],
    },

    {
        name: "state",
        label: "State",
        type: "text",
        placeholder: "Enter state",
        required: true,
    },

    {
        name: "city",
        label: "City",
        type: "text",
        placeholder: "Enter city",
        required: true,
    },

    {
        name: "pincode",
        label: "Pincode",
        type: "text",
        placeholder: "Enter pincode",
        required: true,
    },
];



export const patientEmergencyContactFields = [
    {
        name: "emergencyName",
        label: "Contact Name",
        type: "text",
        placeholder: "Enter contact name",
        required: true,
    },

    {
        name: "emergencyRelationship",
        label: "Relationship",
        type: "select",
        placeholder: "Select relationship",
        required: true,
        options: [
            { value: "Father", label: "Father" },
            { value: "Mother", label: "Mother" },
            { value: "Spouse", label: "Spouse" },
            { value: "Brother", label: "Brother" },
            { value: "Sister", label: "Sister" },
            { value: "Son", label: "Son" },
            { value: "Daughter", label: "Daughter" },
            { value: "Guardian", label: "Guardian" },
            { value: "Other", label: "Other" },
        ],
    },

    {
        name: "emergencyMobile",
        label: "Mobile Number",
        type: "tel",
        placeholder: "Enter mobile number",
        required: true,
    },

    {
        name: "emergencyAlternateNo",
        label: "Alternate Number",
        type: "tel",
        placeholder: "Enter alternate number",
        required: false,
    },
];



export const patientIdentificationDetailsFields = [
    {
        name: "idProofType",
        label: "ID Proof Type",
        type: "select",
        placeholder: "Select",
        required: true,
        options: [
            {
                value: "Aadhaar Card",
                label: "Aadhaar Card",
            },
            {
                value: "PAN Card",
                label: "PAN Card",
            },
            {
                value: "Passport",
                label: "Passport",
            },
            {
                value: "Driving License",
                label: "Driving License",
            },
            {
                value: "Voter ID",
                label: "Voter ID",
            },
        ],
    },

    {
        name: "idProofNumber",
        label: "ID Proof Number",
        type: "text",
        placeholder: "Enter ID proof number",
        required: true,
    },

    {
        name: "idProofFile",
        label: "Upload ID Proof",
        type: "file",
        required: true,
        accept: ".pdf,.jpg,.jpeg,.png",
    },
];



export const patientAdditionalInformationFields = [
    {
        name: "preferredLanguage",
        label: "Preferred Language",
        type: "select",
        placeholder: "Select",
        required: false,
        options: [
            {
                value: "Hindi",
                label: "Hindi",
            },
            {
                value: "English",
                label: "English",
            },
            {
                value: "Bengali",
                label: "Bengali",
            },
            {
                value: "Marathi",
                label: "Marathi",
            },
            {
                value: "Tamil",
                label: "Tamil",
            },
            {
                value: "Telugu",
                label: "Telugu",
            },
            {
                value: "Other",
                label: "Other",
            },
        ],
    },

    {
        name: "occupation",
        label: "Occupation",
        type: "text",
        placeholder: "Enter occupation",
        required: false,
    },

    {
        name: "referredBy",
        label: "Referred By",
        type: "text",
        placeholder: "Enter referral",
        required: false,
    },

    {
        name: "notes",
        label: "Notes",
        type: "textarea",
        placeholder: "Enter notes",
        required: false,
        maxLength: 250,
    },
];


export const patientFormInitialValues = {
    title: "Mr.",
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    bloodGroup: "",
    maritalStatus: "",

    mobileNo: "",
    alternateMobileNo: "",
    emailId: "",
    landlineNo: "",
    whatsappNo: "",
    whatsappNotification: false,

    addAnotherPatient: false,

    addressLine1: "",
    addressLine2: "",
    landmark: "",
    country: "India",
    state: "",
    city: "",
    pincode: "",


    emergencyName: "",
    emergencyRelationship: "",
    emergencyMobile: "",
    emergencyAlternateNo: "",


    idProofType: "",
    idProofNumber: "",
    idProofFile: null,


    preferredLanguage: "",
    occupation: "",
    referredBy: "",
    notes: "",
};
