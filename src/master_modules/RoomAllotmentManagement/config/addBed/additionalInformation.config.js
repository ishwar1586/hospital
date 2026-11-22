
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

export const additionalInformationConfig = {
  section: {
    title: "Additional Information",
    icon: TuneOutlinedIcon,
  },

  fields: [
    {
      name: "occupancyType",
      label: "Occupancy Type",
      type: "select",
      optionKey: "occupancyTypes",
      placeholder: "Select Occupancy Type",
    },
    
    {
      name: "genderPreference",
      label: "Gender Preference",
      type: "select",
      optionKey: "genderPreferences",
      placeholder: "Select Gender Preference",
    },
  ],

  oxygenPoint: {
    name: "oxygenPoint",
    label: "Oxygen Point",
    indicator: "O₂",
    type: "toggle",
  },

  facilities: {
    fieldName: "additionalFacilities",
    optionSource: "bedAdditionalInformationMock",
  },
};
