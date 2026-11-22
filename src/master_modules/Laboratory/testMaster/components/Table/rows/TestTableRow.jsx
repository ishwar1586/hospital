import CategoryChip from "@/master_modules/Laboratory/testMaster/components/Table/chips/CategoryChip";
import StatusChip from "@/master_modules/Laboratory/testMaster/components/Table/chips/StatusChip";
import ActionMenu from "@/master_modules/Laboratory/testMaster/components/Table/menu/ActionMenu";

const TestTableRow = ({
    test,
    onAction,
}) => {

    return (
        <tr>

            <td>
                <span className="test-code">
                    {test.testCode}
                </span>
            </td>

            <td>
                <div className="test-name-cell">

                    <span className="test-name">
                        {test.testName}
                    </span>

                </div>
            </td>

            <td>
                <CategoryChip
                    category={test.category}
                />
            </td>

            <td>
                {test.sampleType}
            </td>

            <td>
                {test.method}
            </td>

            <td>
                {test.tat}
            </td>

            <td>
                <span className="test-price">
                    ₹{test.price.toLocaleString("en-IN")}
                </span>
            </td>

            <td>
                <StatusChip
                    status={test.status}
                />
            </td>

            <td>
                <span className="profile-count">
                    {test.profiles}
                </span>
            </td>

            <td className="test-table__action-cell">

                <ActionMenu
                    row={test}
                    onAction={onAction}
                />

            </td>

        </tr>
    );
};

export default TestTableRow;