import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

import "./AuditVarianceSummary.css";

const AuditVarianceSummary = ({ data }) => {

    const cards = [

        {

            title: "Variance Items",

            value: data.varianceItems,

            icon: <Inventory2OutlinedIcon />,

            color: "orange",

        },

        {

            title: "Variance Value",

            value: `₹ ${data.varianceValue.toLocaleString()}`,

            icon: <CurrencyRupeeOutlinedIcon />,

            color: "red",

        },

        {

            title: "Accuracy",

            value: `${data.accuracy}%`,

            icon: <VerifiedOutlinedIcon />,

            color: "green",

        },

        {

            title: "Difference",

            value: `₹ ${(data.systemValue - data.physicalValue).toLocaleString()}`,

            icon: <TrendingDownOutlinedIcon />,

            color: "blue",

        },

    ];

    return (

        <div className="audit-variance-card">

            <h3>

                Variance Summary

            </h3>

            <div className="audit-variance-grid">

                {

                    cards.map((item,index)=>(

                        <div

                            key={index}

                            className={`variance-box ${item.color}`}

                        >

                            <div className="variance-icon">

                                {item.icon}

                            </div>

                            <div>

                                <span>

                                    {item.title}

                                </span>

                                <h4>

                                    {item.value}

                                </h4>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default AuditVarianceSummary;