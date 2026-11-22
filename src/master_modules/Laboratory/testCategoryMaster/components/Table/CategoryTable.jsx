import "./CategoryTable.css";

import categoryColumns
    from "../../config/categoryColumns";

import CategoryTableRow
    from "@/master_modules/Laboratory/testCategoryMaster/components/Table/rows/CategoryTableRow";

const CategoryTable = ({
    data = [],
    onAction,
}) => {

    return (
        <section className="category-table-container">

            <div className="category-table-wrapper">

                <table className="category-table">

                    {/* =========================
                        HEADER
                    ========================= */}

                    <thead>

                        <tr>

                            {categoryColumns.map(
                                (column) => (

                                    <th
                                        key={column.id}
                                        style={{
                                            width:
                                                column.width,
                                        }}
                                    >
                                        {column.label}
                                    </th>

                                )
                            )}

                        </tr>

                    </thead>


                    {/* =========================
                        BODY
                    ========================= */}

                    <tbody>

                        {data.length > 0 ? (

                            data.map(
                                (category, index) => (

                                    <CategoryTableRow
                                        key={
                                            category.id ||
                                            category.categoryCode ||
                                            index
                                        }
                                        category={
                                            category
                                        }
                                        index={
                                            index + 1
                                        }
                                        onAction={
                                            onAction
                                        }
                                    />

                                )
                            )

                        ) : (

                            <tr>

                                <td
                                    colSpan={
                                        categoryColumns.length
                                    }
                                    className="category-table__empty"
                                >
                                    No categories found
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </section>
    );
};

export default CategoryTable;