import "./TestTable.css";

import testColumns from "../../config/testColumns";
import testMasterData from "../../mock/testMaster.mock";

import TestTableRow from "@/master_modules/Laboratory/testMaster/components/Table/rows/TestTableRow.jsx";

const TestTable = ({ data = testMasterData, onAction }) => {

    return (
        <div className="test-table-card">

            <div className="test-table-card__header">

                <div>
                    <h2 className="test-table-card__title">
                        Laboratory Tests
                    </h2>

                    <p className="test-table-card__subtitle">
                        Manage and configure all laboratory tests
                    </p>
                </div>

                <span className="test-table-card__count">
                    {data.length} Tests
                </span>

            </div>

            <div className="test-table-wrapper">

                <table className="test-table">

                    <thead>

                        <tr>

                            {testColumns.map((column) => (
                                <th
                                    key={column.id}
                                >
                                    {column.label}
                                </th>
                            ))}

                        </tr>

                    </thead>

                    <tbody>

                        {data.length > 0 ? (

                            data.map((test) => (
                                <TestTableRow
                                    key={test.id}
                                    test={test}
                                    onAction={onAction}
                                />
                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan={testColumns.length}
                                    className="test-table__empty"
                                >
                                    No tests found.
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default TestTable;