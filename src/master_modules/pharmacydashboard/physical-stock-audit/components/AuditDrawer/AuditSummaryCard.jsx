import "./AuditSummaryCard.css";

const AuditSummaryCard = ({ data }) => {

    const cards = [

        {
            label: "Total Items",
            value: data.totalItems,
        },

        {
            label: "Items Scanned",
            value: `${data.itemsScanned} (100%)`,
        },

        {
            label: "Variance Items",
            value: data.varianceItems,
        },

        {
            label: "Accuracy Rate",
            value: `${data.accuracy}%`,
        },

        {
            label: "System Stock Value",
            value: `₹ ${data.systemValue.toLocaleString()}`,
        },

        {
            label: "Physical Stock Value",
            value: `₹ ${data.physicalValue.toLocaleString()}`,
        },

        {
            label: "Variance Value",
            value: `₹ ${data.varianceValue.toLocaleString()}`,
            danger: true,
        },

        {
            label: "Audit Status",
            value: data.status,
            success: data.status === "Completed",
        },

    ];

    return (

        <div className="audit-summary-card">

            <h3>

                Audit Summary

            </h3>

            <div className="audit-summary-grid">

                {

                    cards.map((item,index)=>(

                        <div

                            key={index}

                            className="audit-summary-box"

                        >

                            <span>

                                {item.label}

                            </span>

                            <strong

                                className={`

                                    ${item.danger ? "danger" : ""}

                                    ${item.success ? "success" : ""}

                                `}

                            >

                                {item.value}

                            </strong>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default AuditSummaryCard;