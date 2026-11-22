import collectionColumns
    from "../../config/collectionColumns";

import CollectionTableRow
    from "./CollectionTableRow";

import "./CollectionTable.css";


const CollectionTable = ({
    data = [],
    onAction,
}) => {

    return (

        <section className="collection-table-card">

            {/* =================================
                TABLE WRAPPER
            ================================= */}

            <div className="collection-table-wrapper">

                <table className="collection-table">

                    <thead>

                        <tr>

                            {collectionColumns.map(
                                (column) => (

                                    <th
                                        key={column.id}
                                        style={{
                                            width:
                                                column.width,

                                            textAlign:
                                                column.align ||
                                                "left",
                                        }}
                                    >

                                        {column.label}

                                    </th>

                                )
                            )}

                        </tr>

                    </thead>


                    <tbody>

                        {data.length > 0 ? (

                            data.map(
                                (collection) => (

                                    <CollectionTableRow
                                        key={
                                            collection.id
                                        }

                                        collection={
                                            collection
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
                                        collectionColumns.length
                                    }

                                    className="collection-table__empty"
                                >

                                    No sample collections found.

                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </section>

    );
};


export default CollectionTable;