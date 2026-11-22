import DepartmentChip from "@/master_modules/Laboratory/testCategoryMaster/components/Table/chips/DepartmentChip.jsx";
import StatusChip from "@/master_modules/Laboratory/testCategoryMaster/components/Table/chips/StatusChip";
import AuthorizationChip from "@/master_modules/Laboratory/testCategoryMaster/components/Table/chips/AuthorizationChip";
import ActionMenu from "@/master_modules/Laboratory/testCategoryMaster/components/Table/menu/ActionMenu";

const CategoryTableRow = ({
    category,
    index,
    onAction,
}) => {

    return (
        <tr>

            {/* # */}

            <td className="category-table__serial">
                {index}
            </td>


            {/* CATEGORY CODE */}

            <td>
                <span className="category-table__code">
                    {category.categoryCode}
                </span>
            </td>


            {/* CATEGORY NAME */}

            <td>
                <span className="category-table__name">
                    {category.categoryName}
                </span>
            </td>


            {/* DEPARTMENT */}

            <td>
                <DepartmentChip
                    department={
                        category.department
                    }
                />
            </td>


            {/* TOTAL TESTS */}

            <td>
                <span className="category-table__number">
                    {category.totalTests}
                </span>
            </td>


            {/* TOTAL PROFILES */}

            <td>
                <span className="category-table__number">
                    {category.totalProfiles}
                </span>
            </td>


            {/* AUTO AUTHORIZATION */}

            <td>
                <AuthorizationChip
                    value={
                        category.autoAuthorization
                    }
                />
            </td>


            {/* STATUS */}

            <td>
                <StatusChip
                    status={category.status}
                />
            </td>


            {/* ACTION */}

            <td>
                <div className="category-table__actions">

                    <ActionMenu
                        category={category}
                        onAction={onAction}
                    />

                </div>
            </td>

        </tr>
    );
};

export default CategoryTableRow;