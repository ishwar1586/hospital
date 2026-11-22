import "./BarcodeSettings.css";

import {
    FormControlLabel,
    Switch,
} from "@mui/material";

import barcodeConfig
from "@/master_modules/pharmacydashboard/stockMaster/components/StockBarcode/config/barcodeConfig";

const BarcodeSettings = ({

    formData,

    onChange,

    errors = {},

}) => {

    return (

        <div className="barcode-settings">

            {/* ================================= */}

            <div className="barcode-settings-header">

                <h3>

                    Barcode Settings

                </h3>

            </div>

            {/* ================================= */}

            <div className="barcode-settings-body">

                {

                    barcodeConfig.map((field) => (

                        <div

                            key={field.name}

                            className="barcode-form-group"

                        >

                            {

                                field.type === "checkbox"

                                ? (

                                    <FormControlLabel

                                        className="barcode-switch"

                                        control={

                                            <Switch

                                                checked={

                                                    formData[field.name]

                                                }

                                                onChange={onChange}

                                                name={field.name}

                                            />

                                        }

                                        label={field.label}

                                    />

                                )

                                : (

                                    <>

                                        <label>

                                            {field.label}

                                            {

                                                field.required && (

                                                    <span>

                                                        *

                                                    </span>

                                                )

                                            }

                                        </label>

                                        {

                                            field.type === "select"

                                            ? (

                                                <select

                                                    name={field.name}

                                                    value={

                                                        formData[field.name]

                                                    }

                                                    onChange={onChange}

                                                >

                                                    {

                                                        field.options.map(

                                                            (

                                                                option

                                                            ) => (

                                                                <option

                                                                    key={option}

                                                                    value={option}

                                                                >

                                                                    {option}

                                                                </option>

                                                            )

                                                        )

                                                    }

                                                </select>

                                            )

                                            : (

                                                <input

                                                    type={field.type}

                                                    name={field.name}

                                                    value={

                                                        formData[field.name]

                                                    }

                                                    onChange={onChange}

                                                    min={field.min}

                                                    max={field.max}

                                                />

                                            )

                                        }

                                    </>

                                )

                            }

                            {

                                errors[field.name] && (

                                    <span className="barcode-error">

                                        {

                                            errors[field.name]

                                        }

                                    </span>

                                )

                            }

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default BarcodeSettings;