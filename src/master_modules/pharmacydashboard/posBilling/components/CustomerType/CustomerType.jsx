// import { useState } from "react";

import "./CustomerType.css";

import CheckCircleRoundedIcon
from "@mui/icons-material/CheckCircleRounded";

import customerTypes
from "../../config/customerTypes";

// const CustomerType = () => {

//     const [

//         selected,

//         setSelected,

//     ] = useState("walkin");

const CustomerType = ({

    value,

    onChange,

}) => {

    return (

        <section className="customer-type">

            {/* ================================= */}

            <div className="customer-type-header">

                <h3>

                    Customer Type

                </h3>

                <p>

                    Select the billing customer category.

                </p>

            </div>

            {/* ================================= */}

            <div className="customer-type-grid">

                {

                    customerTypes.map((item) => {

                        const Icon = item.icon;

                       const active =

    value === item.id;

                        return (

                            <div

                                key={item.id}

                                className={

                                    `customer-card ${

                                        active

                                        ? "active"

                                        : ""

                                    }`

                                }

                                onClick={() =>

    onChange(item.id)

}

                            >

                                {

                                    active && (

                                        <CheckCircleRoundedIcon

                                            className="selected-icon"

                                        />

                                    )

                                }

                                <div className="customer-icon">

                                    <Icon />

                                </div>

                                <h4>

                                    {item.label}

                                </h4>

                                <span>

                                    {item.description}

                                </span>

                            </div>

                        );

                    })

                }

            </div>

        </section>

    );

};

export default CustomerType;