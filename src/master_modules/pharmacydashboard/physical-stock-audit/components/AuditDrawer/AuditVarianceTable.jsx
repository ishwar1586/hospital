import auditVarianceMock from "../../mock/auditVariance.mock";

import "./AuditVarianceTable.css";

const AuditVarianceTable = () => {

    return (

        <div className="audit-variance-table-card">

            <div className="audit-section-header">

                <h3>

                    Variance Items

                </h3>

                <span>

                    {auditVarianceMock.length} Items

                </span>

            </div>

            <div className="audit-variance-wrapper">

                <table className="audit-variance-table">

                    <thead>

                        <tr>

                            <th>Medicine</th>

                            <th>Batch</th>

                            <th>Expiry</th>

                            <th>System Qty</th>

                            <th>Physical Qty</th>

                            <th>Difference</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            auditVarianceMock.map((item)=>(

                                <tr key={item.id}>

                                    <td>

                                        {item.medicine}

                                    </td>

                                    <td>

                                        {item.batch}

                                    </td>

                                    <td>

                                        {item.expiry}

                                    </td>

                                    <td>

                                        {item.systemQty}

                                    </td>

                                    <td>

                                        {item.physicalQty}

                                    </td>

                                    <td

                                        className={

                                            item.difference > 0

                                            ? "positive"

                                            : item.difference < 0

                                            ? "negative"

                                            : ""

                                        }

                                    >

                                        {item.difference > 0 ? "+" : ""}

                                        {item.difference}

                                    </td>

                                    <td>

                                        <span

                                            className={`variance-status ${item.status.toLowerCase()}`}

                                        >

                                            {item.status}

                                        </span>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default AuditVarianceTable;